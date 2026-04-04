'use client'
import { useNDA } from '@/context/NDAContext'

interface Project {
  redactedTitle: string
  realTitle: string
  titleBlur: boolean
  industry: string
  status: string
  statusLive?: boolean
  link?: { url: string; text: string; external: boolean }
}

const projects: Project[] = [
  { redactedTitle: 'StaffVA', realTitle: 'StaffVA', titleBlur: false, industry: 'Talent Marketplace', status: 'Live', statusLive: true, link: { url: 'https://staffva.com', text: 'View ↗', external: true } },
  { redactedTitle: 'StaffVA AI Interview', realTitle: 'StaffVA AI Interview', titleBlur: false, industry: 'AI SaaS', status: 'Live', statusLive: true, link: { url: 'https://interview.staffva.com', text: 'View ↗', external: true } },
  { redactedTitle: '████████', realTitle: 'Estate Vault', titleBlur: true, industry: 'Estate Planning', status: 'Delivered', link: { url: 'https://estatevault.us', text: 'View ↗', external: true } },
  { redactedTitle: '████████', realTitle: 'The People\u2019s Firm', titleBlur: true, industry: 'Legal Services', status: 'Delivered', link: { url: 'https://thepeoplesfirmpllc.com', text: 'View ↗', external: true } },
  { redactedTitle: '████████', realTitle: 'Meta Medical Scribe', titleBlur: true, industry: 'Healthcare', status: 'Live', statusLive: true, link: { url: '/meta-health', text: 'Details →', external: false } },
  { redactedTitle: '████████', realTitle: 'Al-Hikma School Platform', titleBlur: true, industry: 'Education', status: 'In Progress', link: { url: '/alhikma', text: 'Details →', external: false } },
  { redactedTitle: '████████', realTitle: 'Chairly', titleBlur: true, industry: 'Consumer', status: 'In Progress', link: { url: '/chairly', text: 'Details →', external: false } },
  { redactedTitle: '████████', realTitle: 'Muslim Guider Pro', titleBlur: true, industry: 'Religious Tech', status: 'In Progress', link: { url: '/muslim-guider', text: 'Details →', external: false } },
]

export default function Portfolio() {
  const { openNDA, hasAccess } = useNDA()

  return (
    <section className="py-36 bg-bg" id="work" aria-label="Our work">
      <div className="max-w-[900px] mx-auto px-10">
        <div className="reveal">
          <div className="text-[11px] font-semibold tracking-widest uppercase text-amber mb-4">Our Work</div>
          <h2 className="font-[family-name:var(--font-syne-var)] text-4xl md2:text-[46px] font-extrabold tracking-tight leading-[1.08] mb-5">
            Eight products.<br />Six industries.
          </h2>
          <p className="text-lg text-text-muted leading-relaxed max-w-[42ch] mb-12">
            From healthcare to education to legal — one team model, adapted to each.
          </p>
        </div>

        {/* NDA gate */}
        {!hasAccess && (
          <div className="flex items-center justify-between flex-wrap gap-4 mb-10 reveal">
            <p className="text-base text-text-muted">Portfolio access requires a signed NDA.</p>
            <button
              onClick={openNDA}
              className="bg-amber text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-150 hover:opacity-90 hover:-translate-y-px cursor-pointer border-none"
            >
              Request Access
            </button>
          </div>
        )}

        {/* Unlocked banner */}
        {hasAccess && (
          <div className="flex items-center gap-3 mb-10 reveal">
            <div className="w-6 h-6 rounded-full bg-green flex items-center justify-center text-white text-xs font-bold shrink-0">✓</div>
            <p className="text-base text-text-muted">Portfolio access granted. Viewing all projects.</p>
          </div>
        )}

        {/* Project list */}
        <div className="reveal">
          {projects.map((p, i) => (
            <div
              key={i}
              className="flex items-baseline justify-between gap-4 py-5"
              style={{ borderBottom: i < projects.length - 1 ? '1px solid rgba(28,26,20,0.06)' : undefined }}
            >
              {/* Left: title + industry */}
              <div className="flex items-baseline gap-3 min-w-0">
                <h3
                  className={`font-[family-name:var(--font-syne-var)] text-lg md2:text-xl font-bold shrink-0 transition-all duration-300 ${p.titleBlur && !hasAccess ? 'blur-sm select-none' : ''}`}
                >
                  {hasAccess ? p.realTitle : p.redactedTitle}
                </h3>
                <span className="text-sm text-text-muted hidden md2:inline">{p.industry}</span>
              </div>

              {/* Right: status + link */}
              <div className="flex items-center gap-4 shrink-0">
                <span className="text-sm text-text-muted flex items-center gap-1.5">
                  {p.statusLive && <span className="w-1.5 h-1.5 rounded-full bg-green shrink-0" aria-hidden="true" />}
                  {p.status}
                </span>

                {!hasAccess && (
                  <button
                    onClick={openNDA}
                    className="text-sm text-text-muted cursor-pointer bg-transparent border-none transition-colors hover:text-amber p-0"
                  >
                    🔒
                  </button>
                )}

                {hasAccess && p.link && (
                  <a
                    href={p.link.url}
                    target="_blank"
                    rel={p.link.external ? 'noopener noreferrer' : undefined}
                    className="text-sm font-medium text-amber transition-opacity hover:opacity-70"
                  >
                    {p.link.text}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {!hasAccess && (
          <p className="text-center pt-10 text-sm text-text-muted reveal">
            60 seconds to sign. Access granted immediately.
          </p>
        )}
      </div>
    </section>
  )
}
