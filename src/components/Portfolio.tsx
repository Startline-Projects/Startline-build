'use client'
import { useNDA } from '@/context/NDAContext'

interface Project {
  color: string
  tag: string
  redactedTitle: string
  realTitle: string
  titleBlur: boolean
  desc: string
  value: string
  hasLiveBadge?: boolean
  link?: { url: string; text: string; external: boolean }
}

const projects: Project[] = [
  {
    color: '#1C1B1A',
    tag: 'Our Platform · Talent Marketplace',
    redactedTitle: 'StaffVA', realTitle: 'StaffVA', titleBlur: false,
    desc: 'Professional offshore talent marketplace.',
    value: 'Live',
    link: { url: 'https://staffva.com', text: 'View Platform ↗', external: true },
  },
  {
    color: '#0F1A2E',
    tag: 'Our Platform · AI SaaS',
    redactedTitle: 'StaffVA AI Interview', realTitle: 'StaffVA AI Interview', titleBlur: false,
    desc: 'AI-powered voice interview platform. White-label.',
    value: 'Live',
    link: { url: 'https://interview.staffva.com', text: 'View Platform ↗', external: true },
  },
  {
    color: '#0D1E35',
    tag: 'Estate Planning · SaaS',
    redactedTitle: '████████████', realTitle: 'Estate Vault', titleBlur: true,
    desc: 'White-label estate planning platform.',
    value: 'Delivered',
    link: { url: 'https://estatevault.us', text: 'View Live Site ↗', external: true },
  },
  {
    color: '#0D1F0F',
    tag: 'Legal Services · Web',
    redactedTitle: '████████████', realTitle: 'The People\u2019s Firm', titleBlur: true,
    desc: 'Law firm website and client portal.',
    value: 'Delivered',
    link: { url: 'https://thepeoplesfirmpllc.com', text: 'View Live Site ↗', external: true },
  },
  {
    color: '#0A0F1A',
    tag: 'Healthcare · Mobile',
    redactedTitle: '████████████', realTitle: 'Meta Medical Scribe', titleBlur: true,
    desc: 'HIPAA-compliant clinical platform.',
    value: 'Live · Client identity protected',
    hasLiveBadge: true,
    link: { url: '/meta-health', text: 'View Project Details →', external: false },
  },
  {
    color: '#0B2545',
    tag: 'Education · SaaS',
    redactedTitle: '████████████', realTitle: 'Al-Hikma School Platform', titleBlur: true,
    desc: 'Full school operating system. 9 modules.',
    value: 'In Progress',
    link: { url: '/alhikma', text: 'View Project Details →', external: false },
  },
  {
    color: '#0E0E0D',
    tag: 'Consumer · Mobile App',
    redactedTitle: '████████████', realTitle: 'Chairly', titleBlur: true,
    desc: 'Two-sided barber marketplace.',
    value: 'In Progress',
    link: { url: '/chairly', text: 'View Project Details →', external: false },
  },
  {
    color: '#0D1117',
    tag: 'Religious Tech · Mobile',
    redactedTitle: '████████████', realTitle: 'Muslim Guider Pro', titleBlur: true,
    desc: 'Live audio broadcasting. Smart TV.',
    value: 'In Progress',
    link: { url: '/muslim-guider', text: 'View Project Details →', external: false },
  },
]

export default function Portfolio() {
  const { openNDA, hasAccess } = useNDA()

  return (
    <section className="py-36 bg-bg" id="work" aria-label="Our work">
      <div className="max-w-[1160px] mx-auto px-10">
        <div className="reveal">
          <div className="text-[11px] font-semibold tracking-widest uppercase text-amber mb-4">Our Work</div>
          <h2 className="font-[family-name:var(--font-syne-var)] text-4xl md2:text-[46px] font-extrabold tracking-tight leading-[1.08] mb-5">
            Six industries.<br />One team model.
          </h2>
          <p className="text-lg text-text-muted leading-relaxed max-w-[42ch]">
            Request access to see the full portfolio.
          </p>
        </div>

        {/* NDA gate banner */}
        {!hasAccess && (
          <div className="bg-bg-3 rounded-xl py-6 px-7 mt-12 mb-8 flex items-center justify-between flex-wrap gap-4 reveal" style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
            <div>
              <div className="text-base font-semibold text-text mb-0.5">Portfolio requires a signed agreement.</div>
              <div className="text-sm text-text-muted">NDA and non-compete. Takes 60 seconds.</div>
            </div>
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
          <div className="flex items-center gap-3 rounded-xl p-4 mt-12 mb-8 bg-green-light reveal">
            <div className="w-7 h-7 rounded-full bg-green flex items-center justify-center text-white text-sm font-bold shrink-0">✓</div>
            <div>
              <div className="text-sm font-semibold text-text">Portfolio access granted</div>
              <div className="text-sm text-text-muted mt-0.5">You&rsquo;re viewing all Startline projects.</div>
            </div>
          </div>
        )}

        {/* Project grid */}
        <div className="grid grid-cols-2 md2:grid-cols-4 gap-5 reveal">
          {projects.map((p, i) => (
            <div key={i} className="flex flex-col group">
              {/* Color swatch */}
              <div
                className="h-28 rounded-xl mb-4 transition-transform duration-200 group-hover:-translate-y-0.5"
                style={{ background: p.color }}
              >
                {p.hasLiveBadge && (
                  <div className="flex justify-end p-2.5">
                    <div className="flex items-center gap-1 text-[9px] font-bold py-0.5 px-2 rounded-full" style={{ color: '#16a34a', background: 'rgba(34,197,94,0.15)' }}>
                      <div className="w-1 h-1 rounded-full bg-green" aria-hidden="true" />
                      Live
                    </div>
                  </div>
                )}
              </div>

              {/* Text */}
              <div className="text-[10px] font-semibold tracking-widest uppercase text-amber mb-1.5">{p.tag}</div>
              <div className={`font-[family-name:var(--font-syne-var)] text-base font-bold mb-1 transition-all duration-300 ${p.titleBlur && !hasAccess ? 'blur-sm select-none' : ''}`}>
                {hasAccess ? p.realTitle : p.redactedTitle}
              </div>
              <p className="text-sm text-text-muted leading-relaxed mb-3 flex-1">{p.desc}</p>

              {/* Action */}
              <div className="mt-auto">
                {!hasAccess && (
                  <button
                    onClick={openNDA}
                    className="text-sm text-text-muted font-medium cursor-pointer bg-transparent border-none transition-colors hover:text-amber p-0"
                  >
                    🔒 Request Access
                  </button>
                )}

                {hasAccess && p.link && (
                  <a
                    href={p.link.url}
                    target="_blank"
                    rel={p.link.external ? 'noopener noreferrer' : undefined}
                    className="text-sm font-medium text-text-muted transition-colors hover:text-text"
                  >
                    {p.link.text}
                  </a>
                )}

                <div className="text-xs text-text-muted mt-1.5">{p.value}</div>
              </div>
            </div>
          ))}
        </div>

        {!hasAccess && (
          <p className="text-center pt-8 text-sm text-text-muted reveal">
            Access requires a signed NDA and non-compete. Takes 60 seconds.
          </p>
        )}
      </div>
    </section>
  )
}
