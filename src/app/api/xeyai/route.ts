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

// Maps each enum value to the full human label shown on the form.
// Keyed by `${fieldName}.${value}` to disambiguate values like 'yes', 'no', 'both'
// that mean different things in different fields. 'undecided' is intentionally
// omitted — it's handled centrally in humanize() as "Still deciding".
const LABELS: Record<string, string> = {
  // Section 1 — Your Users
  'min_age.k_2': 'Kindergarten through 2nd grade',
  'min_age.grade_3_5': '3rd through 5th grade',
  'min_age.grade_6_plus': '6th grade and up',
  'parent_multi_kids.yes': 'One parent account can manage multiple kids',
  'parent_multi_kids.no': 'One parent, one athlete',
  'athlete_multi_guardians.yes': 'Yes, more than one adult can be linked',
  'athlete_multi_guardians.no': 'One guardian per athlete',
  'other_user_roles.coaches': 'Coaches',
  'other_user_roles.trainers': 'Real-world trainers and PTs',
  'other_user_roles.school_staff': 'School or academy staff',
  'other_user_roles.scouts': 'Scouts and recruiters',
  'other_user_roles.none': 'No one else at launch',

  // Section 2 — The Agents
  'pt_mri_scope.in_v1': 'In scope for v1',
  'pt_mri_scope.photos_only': 'Photos and reports only, not MRIs',
  'pt_mri_scope.out_v1': 'Out for v1, maybe later',
  'pt_mri_scope.out_permanent': 'Out permanently',
  'nutri_photo_scope.in_v1': 'In scope for v1',
  'nutri_photo_scope.out_v1': 'Out for v1, maybe later',
  'nutri_photo_scope.out_permanent': 'Out permanently',
  'psych_athlete_escalation.resource_list': 'A list of resources',
  'psych_athlete_escalation.one_tap': 'One-tap to a hotline',
  'psych_athlete_escalation.human_handoff': 'Handoff to a real counselor',
  'psych_athlete_escalation.all': 'All of the above, tiered by severity',
  'psych_parent_alert.immediate': 'Yes, immediately, every time',
  'psych_parent_alert.with_notice': 'Yes, but the athlete sees a notice first',
  'psych_parent_alert.severe_only': 'Only for high-severity signals',
  'psych_parent_alert.never': 'No automatic parent alert',
  'omi_handoff_visibility.visible': 'Visible and narrated',
  'omi_handoff_visibility.invisible': 'Invisible',
  'omi_handoff_visibility.first_time': 'Visible only the first time',
  'omi_history_transfer.full_history': 'Full conversation carries over',
  'omi_history_transfer.memory_only': 'The new agent starts fresh',
  'omi_history_transfer.summary': 'A summary carries over',
  'qotd_source.curated': 'A library you and your team author',
  'qotd_source.ai_generated': 'OMI generates them per user',
  'qotd_source.mix': 'A mix of both',
  'checkin_cadence.on_login': 'On every login',
  'checkin_cadence.daily_push': 'Daily, with a push notification',
  'checkin_cadence.weekly': 'Weekly',
  'checkin_cadence.configurable': 'The user configures it',
  'checkin_parent_visibility.all': 'All answers visible to the parent',
  'checkin_parent_visibility.summary': 'Summary only',
  'checkin_parent_visibility.flagged_only': 'Only flagged answers',
  'checkin_parent_visibility.private': 'Private to the athlete',
  'recruiter_send_model.athlete_sends': 'The athlete copies and sends it themselves',
  'recruiter_send_model.platform_sends': "The platform sends it on the athlete's behalf",
  'recruiter_send_model.both': 'Both options available',
  'recruiter_capabilities.profile_builder': "Build the athlete's recruiting profile",
  'recruiter_capabilities.tournament_finder': 'Suggest showcases and tournaments',
  'recruiter_capabilities.eligibility_tracker': 'Track academic eligibility',
  'recruiter_capabilities.scholarship_paths': 'Suggest scholarship paths',
  'recruiter_capabilities.outreach_only': 'Just outreach for now',

  // Section 3 — Safety & User Data
  'overseer_severity_tiers.single': 'One threshold',
  'overseer_severity_tiers.two_tier': 'Two tiers',
  'overseer_severity_tiers.three_plus': 'Three or more tiers',
  'overseer_user_facing.silent': 'Silent',
  'overseer_user_facing.soft_redirect': 'A soft redirect',
  'overseer_user_facing.clear_notice': 'A clear notice',
  'overseer_user_facing.suspend': 'Immediate session suspension',
  'overseer_user_facing.tiered': 'Tiered by severity',
  'flag_review_owner.internal': 'Your internal team',
  'flag_review_owner.third_party': 'A third-party moderation partner',
  'flag_review_owner.mixed': 'A mix',
  'flag_review_owner.no_human': 'No human review',
  'flag_retention.permanent': 'Permanently',
  'flag_retention.twelve_months': '12 months',
  'flag_retention.resolved_plus_90': 'Until resolved, plus 90 days',
  'flag_retention.resolved_immediate': 'Until resolved, then immediate',
  'parent_default_visibility.full_transcripts': 'Full conversation transcripts',
  'parent_default_visibility.summaries': 'Summaries only',
  'parent_default_visibility.flags_and_usage': 'Flags and usage stats only',
  'visibility_by_age.yes': 'Yes',
  'visibility_by_age.no': 'No',
  'user_can_delete.yes_anytime': 'Yes, anytime',
  'user_can_delete.yes_with_approval': 'Yes, but parents must approve if minor',
  'user_can_delete.no': 'No',
  'default_retention.forever': 'Forever',
  'default_retention.24_months': '24 months',
  'default_retention.12_months': '12 months',
  'default_retention.6_months': '6 months',

  // Section 4 — Monetization & Parents
  'revenue_model.subscription': 'Subscription required',
  'revenue_model.freemium': 'Free with paid upgrade',
  'revenue_model.b2b': 'Schools, clubs, or academies pay',
  'revenue_model.free': 'Free for everyone',
  'primary_payer.parents': 'Parents',
  'primary_payer.athletes': 'Athletes themselves',
  'primary_payer.organizations': 'Schools, clubs, or academies',
  'primary_payer.mix': 'A mix',
  'feature_tiers.all_or_nothing': 'All or nothing',
  'feature_tiers.tiered_agents': 'Some agents free, some premium',
  'feature_tiers.usage_caps': 'Free with usage caps',
  'feature_tiers.trial': 'Free trial, then paid',
  'parent_can_message.yes': 'Yes',
  'parent_can_message.no': 'No',
  'parent_agent_access.about_child': 'Yes, to ask about their child',
  'parent_agent_access.for_themselves': 'Yes, for themselves',
  'parent_agent_access.both': 'Both',
  'parent_agent_access.no': 'No',
}

const humanize = (fieldName: string, raw: string): string => {
  if (raw === 'undecided') return 'Still deciding'
  const labeled = LABELS[`${fieldName}.${raw}`]
  if (labeled) return labeled
  if (/^[a-z0-9_]+$/.test(raw)) {
    const spaced = raw.replace(/_/g, ' ')
    return spaced.charAt(0).toUpperCase() + spaced.slice(1)
  }
  return raw
}

const formatValueText = (fieldName: string, v: unknown): string => {
  if (v === undefined || v === null || v === '') return '(blank)'
  if (Array.isArray(v)) {
    if (v.length === 0) return '(blank)'
    return '\n' + v.map(item => `  - ${humanize(fieldName, String(item))}`).join('\n')
  }
  if (typeof v === 'string') return humanize(fieldName, v)
  return String(v)
}

const formatValueHtml = (fieldName: string, v: unknown): string => {
  if (v === undefined || v === null || v === '') return '<em style="color:#999">(blank)</em>'
  if (Array.isArray(v)) {
    if (v.length === 0) return '<em style="color:#999">(blank)</em>'
    return `<ul style="margin:4px 0 0 0;padding-left:20px">${v
      .map(item => `<li>${escapeHtml(humanize(fieldName, String(item)))}</li>`)
      .join('')}</ul>`
  }
  if (typeof v === 'string') {
    return `<div style="white-space:pre-wrap">${escapeHtml(humanize(fieldName, v))}</div>`
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
        .map(([key, label]) => `Q: ${label}\nA: ${formatValueText(key, brief[key])}`)
        .join('\n\n')
      return `--- ${section.title} ---\n\n${rows}`
    }).join('\n\n') +
    (extraKeys.length
      ? '\n\n--- Other fields ---\n\n' +
        extraKeys.map(k => `Q: ${k}\nA: ${formatValueText(k, brief[k])}`).join('\n\n')
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
            ${formatValueHtml(key, brief[key])}
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
          ${formatValueHtml(k, brief[k])}
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
