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
        title: 'Section I · Positioning',
        keys: [
          ['q1_pitch', 'Q1 · Firm pitch'],
          ['q2_not', 'Q2 · What ATLAW is not'],
          ['q3_ideal', 'Q3 · Ideal client'],
          ['q4_competitors', 'Q4 · Competitive landscape'],
          ['q5_signature', 'Q5 · Signature matter'],
          ['q6_unique', 'Q6 · Unique advantages'],
          ['q7_horizon', 'Q7 · Three-year horizon'],
          ['q8_sensitivities', 'Q8 · Sensitivities'],
          ['q9_voice', 'Q9 · Voice and tone'],
          ['q10_advertising', 'Q10 · Advertising posture'],
        ],
      },
      {
        title: 'Section II · Practice Triage',
        keys: [
          ['q11_practice_triage', 'Q11 · Practice triage'],
          ['q11_custom_practices', 'Q11 · Custom practices'],
          ['q12_adding', 'Q12 · Practices being added'],
          ['q13_stopped', 'Q13 · Practices being stopped'],
        ],
      },
      {
        title: 'Section III · Practice Leads',
        keys: [
          ['q14_practice_leads', 'Q14 · Practice leads'],
          ['q15_bilingual_practices', 'Q15 · Bilingual practices'],
        ],
      },
      {
        title: 'Section IV · Proof',
        keys: [
          ['q16_recent_matters', 'Q16 · Recent matters'],
          ['q17_recognitions', 'Q17 · Recognitions'],
          ['q18_published', 'Q18 · Published work'],
          ['q19_community', 'Q19 · Community involvement'],
        ],
      },
      {
        title: 'Section V · Conversion',
        keys: [
          ['q20_threshold', 'Q20 · Lead threshold'],
          ['q21_qualifying', 'Q21 · Qualifying questions'],
          ['q22_response', 'Q22 · Response handler'],
          ['q23_fees', 'Q23 · Fee structure'],
        ],
      },
      {
        title: 'Section VI · Project',
        keys: [
          ['q24_poc_name', 'Q24 · Point of contact name'],
          ['q24_poc_role', 'Q24 · Point of contact role'],
          ['q24_poc_email', 'Q24 · Point of contact email'],
          ['q24_poc_phone', 'Q24 · Point of contact phone'],
          ['q25_cadence', 'Q25 · Review cadence'],
          ['q26_launch_date', 'Q26 · Launch target date'],
          ['q26_launch_reason', 'Q26 · Launch reason'],
          ['q27_dream', 'Q27 · Dream outcome'],
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
        <h2 style="margin-bottom:4px">ATLAW × Startline · Founding Brief Submitted</h2>
        <p style="color:#555;margin-top:0">Submitted by <strong>${escapeHtml(submittedBy)}</strong>${pocEmail ? ` · ${escapeHtml(pocEmail)}` : ''}</p>
        ${sectionsHtml}
        ${extrasHtml}
      </div>
    `

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: 'sam@glostaffing.com',
      subject: 'ATLAW × Startline · Founding Brief Submitted',
      html,
      replyTo: pocEmail || undefined,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('atlaw-intake submission failed:', err)
    return NextResponse.json({ error: 'Submission failed' }, { status: 500 })
  }
}
