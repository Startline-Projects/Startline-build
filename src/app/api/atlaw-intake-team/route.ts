import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')

const fmt = (v: unknown) => {
  if (v === null || v === undefined || v === '') return '<em style="color:#999">— blank —</em>'
  const s = typeof v === 'string' ? v : JSON.stringify(v, null, 2)
  if (typeof v === 'string' && (s.startsWith('{') || s.startsWith('['))) {
    try {
      return `<pre style="background:#f6f6f6;padding:8px;border-radius:4px;white-space:pre-wrap;font-size:12px">${escapeHtml(JSON.stringify(JSON.parse(s), null, 2))}</pre>`
    } catch {}
  }
  return `<div style="white-space:pre-wrap">${escapeHtml(s)}</div>`
}

const row = (label: string, value: unknown) =>
  `<div style="margin:10px 0"><div style="font-weight:600;color:#333">${escapeHtml(label)}</div>${fmt(value)}</div>`

type Payload = Record<string, unknown>

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const body = (await req.json()) as Payload

    const submittedBy = (body.submitted_by as string) || 'ATLAW'
    const pocEmail = (body.poc_email as string) || ''

    const sections: Array<{ title: string; keys: Array<[string, string]> }> = [
      {
        title: 'Section I · Firm Essentials',
        keys: [
          ['q1_legal_name', 'Q1 · Legal entity name'],
          ['q1_dbas', 'Q1 · DBAs / trade names'],
          ['q1_state_org', 'Q1 · State of organization'],
          ['q1_year_founded', 'Q1 · Year founded'],
          ['q2_attorney_count', 'Q2 · Total attorneys'],
          ['q2_staff_count', 'Q2 · Total staff (non-attorney)'],
          ['q2_breakdown', 'Q2 · Roster breakdown'],
          ['q3_bar_admissions', 'Q3 · Bar admissions'],
          ['q4_intl', 'Q4 · International matters posture'],
          ['q4_intl_detail', 'Q4 · International detail'],
          ['q5_languages', 'Q5 · Languages'],
        ],
      },
      {
        title: 'Section II · Roster',
        keys: [
          ['q6_leadership_attorneys', 'Q6 · Leadership attorneys'],
          ['q7_roster_status', 'Q7 · Full roster status'],
          ['q7_roster_notes', 'Q7 · Roster notes'],
          ['q8_headshots', 'Q8 · Headshot status'],
        ],
      },
      {
        title: 'Section III · Offices',
        keys: [
          ['q9_offices', 'Q9 · Offices'],
          ['q10_service_area', 'Q10 · Service area'],
        ],
      },
      {
        title: 'Section IV · Visual Assets',
        keys: [
          ['q11_logo_link', 'Q11 · Logo files link'],
          ['q11_logo_formats', 'Q11 · Logo formats available'],
          ['q11_logo_origin', 'Q11 · Logo origin'],
          ['q12_primary_hex', 'Q12 · Primary brand color'],
          ['q12_accent_hex', 'Q12 · Accent color'],
          ['q12_other_colors', 'Q12 · Other colors'],
          ['q14_photo_link', 'Q13 · Photography link'],
        ],
      },
      {
        title: 'Section V · Digital Infrastructure',
        keys: [
          ['q15_domains', 'Q14 · Domains'],
          ['q16_email', 'Q15 · Email infrastructure'],
          ['q16_it_contact', 'Q15 · IT contact'],
          ['q17_analytics', 'Q16 · Analytics'],
          ['q18_ad_accounts', 'Q17 · Ad accounts'],
          ['q19_crm', 'Q18 · Lead delivery email'],
          ['q19_crm_notes', 'Q18 · Routing notes'],
          ['q20_linkedin', 'Q19 · LinkedIn'],
          ['q20_instagram', 'Q19 · Instagram'],
          ['q20_facebook', 'Q19 · Facebook'],
          ['q20_youtube', 'Q19 · YouTube'],
          ['q20_twitter', 'Q19 · Twitter / X'],
          ['q20_tiktok', 'Q19 · TikTok'],
          ['q20_other_social', 'Q19 · Other social'],
        ],
      },
      {
        title: 'Section VI · Legal & Compliance',
        keys: [
          ['q21_legal_link', 'Q20 · Privacy/TOS link'],
          ['q22_disclaimer_text', 'Q21 · Disclaimer language'],
          ['q25_anything_else', 'Q22 · Anything else'],
          ['q26_your_name', 'Q23 · POC name'],
          ['q26_your_role', 'Q23 · POC role'],
          ['q26_your_email', 'Q23 · POC email'],
          ['q26_your_phone', 'Q23 · POC phone'],
        ],
      },
    ]

    const renderedKeys = new Set<string>(['submitted_by', 'poc_email', 'poc_phone', '_subject'])
    sections.forEach(s => s.keys.forEach(([k]) => renderedKeys.add(k)))
    const extraKeys = Object.keys(body).filter(k => !renderedKeys.has(k))

    const sectionsHtml = sections
      .map(
        s => `
          <h3 style="margin-top:24px;border-bottom:2px solid #111;padding-bottom:4px">${escapeHtml(s.title)}</h3>
          ${s.keys.map(([k, label]) => row(label, body[k])).join('')}
        `,
      )
      .join('')

    const extrasHtml = extraKeys.length
      ? `<h3 style="margin-top:24px;border-bottom:2px solid #aaa;padding-bottom:4px">Other fields</h3>${extraKeys.map(k => row(k, body[k])).join('')}`
      : ''

    const html = `
      <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#111;max-width:720px">
        <h2 style="margin-bottom:4px">ATLAW × Startline · Operations Brief Submitted</h2>
        <p style="color:#555;margin-top:0">Submitted by <strong>${escapeHtml(submittedBy)}</strong>${pocEmail ? ` · ${escapeHtml(pocEmail)}` : ''}</p>
        ${sectionsHtml}
        ${extrasHtml}
      </div>
    `

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: 'sam@glostaffing.com',
      subject: 'ATLAW × Startline · Operations Brief Submitted',
      html,
      replyTo: pocEmail || undefined,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('atlaw-intake-team submission failed:', err)
    return NextResponse.json({ error: 'Submission failed' }, { status: 500 })
  }
}
