import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

type Brief = Record<string, unknown>

type Payload = {
  brief?: Brief
  submittedAt?: string
  project?: string
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')

const humanize = (raw: string): string => {
  if (raw === 'undecided') return 'Still deciding'
  if (/^[a-z0-9_]+$/.test(raw)) {
    const spaced = raw.replace(/_/g, ' ')
    return spaced.charAt(0).toUpperCase() + spaced.slice(1)
  }
  return raw
}

const formatValueText = (v: unknown): string => {
  if (v === undefined || v === null || v === '') return '(blank)'
  if (Array.isArray(v)) {
    if (v.length === 0) return '(blank)'
    return '\n' + v.map(item => `  - ${humanize(String(item))}`).join('\n')
  }
  if (typeof v === 'string') return humanize(v)
  return String(v)
}

const formatValueHtml = (v: unknown): string => {
  if (v === undefined || v === null || v === '') return '<em style="color:#999">(blank)</em>'
  if (Array.isArray(v)) {
    if (v.length === 0) return '<em style="color:#999">(blank)</em>'
    return `<ul style="margin:4px 0 0 0;padding-left:20px">${v
      .map(item => `<li>${escapeHtml(humanize(String(item)))}</li>`)
      .join('')}</ul>`
  }
  if (typeof v === 'string') {
    return `<div style="white-space:pre-wrap">${escapeHtml(humanize(v))}</div>`
  }
  return `<div>${escapeHtml(String(v))}</div>`
}

const SECTIONS: Array<{ title: string; fields: Array<[string, string]> }> = [
  {
    title: 'Your Users',
    fields: [
      ['min_age', 'How young can a registered athlete be?'],
      ['parent_multi_kids', 'A parent with multiple athletes'],
      ['athlete_multi_guardians', 'Multiple parents or guardians per athlete'],
      ['family_structure_notes', 'Anything else about family setup'],
      ['other_user_roles', 'Anyone else on the platform at launch?'],
      ['other_roles_notes', 'If yes to any, what do they need to do in the app?'],
    ],
  },
  {
    title: 'The Agents',
    fields: [
      ['pt_mri_scope', 'MRIs and medical imagery upload (Physical Therapist agent)'],
      ['nutri_photo_scope', 'Photo upload to the Nutritionist (food photos)'],
      ['agent_tbd_notes', 'Anything to add about either decision'],
      ['psych_athlete_escalation', 'When the Sports Psych spots something serious: what the athlete sees'],
      ['psych_parent_alert', 'Is the parent alerted automatically?'],
      ['psych_escalation_notes', 'Anything else about the Sports Psych escalation flow'],
      ['omi_handoff_visibility', 'When OMI passes the conversation to a specialist'],
      ['omi_history_transfer', 'When the user moves between agents'],
      ['qotd_source', 'Where the daily questions come from'],
      ['checkin_cadence', 'Check-in cadence (weight, mood, sleep, etc.)'],
      ['checkin_parent_visibility', 'Are check-in answers shared with the parent?'],
      ['recruiter_send_model', 'When the Recruiter drafts an outreach message to a coach'],
      ['recruiter_capabilities', 'Beyond outreach drafts, what should the Recruiter help with at launch?'],
      ['recruiter_notes', 'Anything else about the Recruiter agent'],
    ],
  },
  {
    title: 'Safety & User Data',
    fields: [
      ['overseer_severity_tiers', 'Does the Overseer have one threshold or multiple severity tiers?'],
      ['overseer_user_facing', 'What the user experiences when something is flagged'],
      ['overseer_notes', 'Anything to add about Overseer behavior'],
      ['flag_review_owner', 'Who reviews flagged conversations?'],
      ['flag_retention', 'How long are flagged conversations kept?'],
      ['flag_policy_notes', 'Anything to add about flag review'],
      ['parent_default_visibility', "By default, what can a parent see about their athlete's activity?"],
      ['visibility_by_age', 'Does parent visibility change by athlete age?'],
      ['user_can_delete', 'Can the athlete delete specific conversations on their own?'],
      ['default_retention', 'How long are regular conversations kept by default?'],
      ['data_controls_notes', 'Anything to add about parent visibility or data controls'],
    ],
  },
  {
    title: 'Monetization & Parents',
    fields: [
      ['revenue_model', 'Primary revenue model'],
      ['primary_payer', "Who's the primary payer?"],
      ['feature_tiers', 'Feature tiering'],
      ['monetization_notes', 'Anything to add about pricing or business model'],
      ['parent_can_message', 'Can parents message their athlete through the platform?'],
      ['parent_agent_access', 'Can parents talk to the agents themselves?'],
      ['parent_actions_notes', 'Anything else about the parental experience'],
    ],
  },
]

export async function POST(req: NextRequest) {
  let payload: Payload
  try {
    payload = (await req.json()) as Payload
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON body' }, { status: 400 })
  }

  const brief: Brief = payload.brief ?? {}
  const submittedAt = payload.submittedAt ?? new Date().toISOString()

  const knownKeys = new Set<string>()
  SECTIONS.forEach(s => s.fields.forEach(([k]) => knownKeys.add(k)))
  const extraKeys = Object.keys(brief).filter(k => !knownKeys.has(k))

  const textBody =
    'XEY.AI Brief\n' +
    '============\n\n' +
    SECTIONS.map(section => {
      const rows = section.fields
        .map(([key, label]) => `Q: ${label}\nA: ${formatValueText(brief[key])}`)
        .join('\n\n')
      return `--- ${section.title} ---\n\n${rows}`
    }).join('\n\n') +
    (extraKeys.length
      ? '\n\n--- Other fields ---\n\n' +
        extraKeys.map(k => `Q: ${k}\nA: ${formatValueText(brief[k])}`).join('\n\n')
      : '') +
    `\n\n---\nSubmitted: ${submittedAt}\n`

  const htmlBody = `
    <div style="font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#111;max-width:720px;line-height:1.5">
      <h2 style="margin-bottom:16px">XEY.AI Brief</h2>
      ${SECTIONS.map(
        section => `
        <h3 style="margin-top:28px;border-bottom:2px solid #111;padding-bottom:4px">${escapeHtml(section.title)}</h3>
        ${section.fields
          .map(
            ([key, label]) => `
          <div style="margin:14px 0">
            <div style="font-weight:600;color:#333">${escapeHtml(label)}</div>
            ${formatValueHtml(brief[key])}
          </div>`,
          )
          .join('')}
      `,
      ).join('')}
      ${
        extraKeys.length
          ? `<h3 style="margin-top:28px;border-bottom:2px solid #aaa;padding-bottom:4px">Other fields</h3>${extraKeys
              .map(
                k => `
        <div style="margin:14px 0">
          <div style="font-weight:600;color:#333">${escapeHtml(k)}</div>
          ${formatValueHtml(brief[k])}
        </div>`,
              )
              .join('')}`
          : ''
      }
      <hr style="margin-top:28px;border:none;border-top:1px solid #ddd">
      <p style="color:#666;font-size:13px">Submitted: ${escapeHtml(submittedAt)}</p>
    </div>
  `

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'XEY.AI Brief <briefs@startline.build>',
      to: 'sam@glostaffing.com',
      subject: 'XEY.AI Brief Submitted',
      text: textBody,
      html: htmlBody,
    })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('xeyai submission failed:', err)
    const message = err instanceof Error ? err.message : 'Email send failed'
    return NextResponse.json({ ok: false, error: message }, { status: 500 })
  }
}
