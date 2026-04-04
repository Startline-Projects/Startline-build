'use client'
import { useNDA } from '@/context/NDAContext'

interface Project {
  redactedTitle: string
  realTitle: string
  titleBlur: boolean
  industry: string
  desc: string
  status: string
  statusLive?: boolean
  gradient: string
  previewImage?: string
  link?: { url: string; text: string; external: boolean }
}

const projects: Project[] = [
  {
    redactedTitle: 'StaffVA', realTitle: 'StaffVA', titleBlur: false,
    industry: 'Talent Marketplace', desc: 'Professional offshore talent marketplace.',
    status: 'Live', statusLive: true,
    gradient: 'linear-gradient(135deg, #1C1B1A 0%, #2E2C2A 40%, #FE6E3E 100%)',
    link: { url: 'https://staffva.com', text: 'View Platform ↗', external: true },
  },
  {
    redactedTitle: 'StaffVA AI Interview', realTitle: 'StaffVA AI Interview', titleBlur: false,
    industry: 'AI SaaS', desc: 'AI-powered voice interview platform. White-label.',
    status: 'Live', statusLive: true,
    gradient: 'linear-gradient(135deg, #0A1520 0%, #112240 50%, #2563EB 100%)',
    link: { url: 'https://interview.staffva.com', text: 'View Platform ↗', external: true },
  },
  {
    redactedTitle: '████████', realTitle: 'Estate Vault', titleBlur: true,
    industry: 'Estate Planning', desc: 'White-label estate planning platform.',
    status: 'Delivered',
    gradient: 'linear-gradient(135deg, #1C3557 0%, #2563EB 60%, #60A5FA 100%)',
    link: { url: 'https://estatevault.us', text: 'View Live Site ↗', external: true },
  },
  {
    redactedTitle: '████████', realTitle: 'The People\u2019s Firm', titleBlur: true,
    industry: 'Legal Services', desc: 'Law firm website and client portal.',
    status: 'Delivered',
    gradient: 'linear-gradient(135deg, #0D1F0F 0%, #1A3A1C 50%, #4ADE80 100%)',
    link: { url: 'https://thepeoplesfirmpllc.com', text: 'View Live Site ↗', external: true },
  },
  {
    redactedTitle: '████████', realTitle: 'Meta Medical Scribe', titleBlur: true,
    industry: 'Healthcare', desc: 'HIPAA-compliant clinical platform.',
    status: 'Live', statusLive: true,
    gradient: 'linear-gradient(135deg, #0A0F1A 0%, #1E3A5F 50%, #2563EB 100%)',
    previewImage: '/metahealth-preview.svg',
    link: { url: '/meta-health', text: 'View Details →', external: false },
  },
  {
    redactedTitle: '████████', realTitle: 'Al-Hikma School Platform', titleBlur: true,
    industry: 'Education', desc: 'Full school operating system. 9 modules.',
    status: 'In Progress',
    gradient: 'linear-gradient(135deg, #0B2545 0%, #1A3A6A 50%, #B8921A 100%)',
    link: { url: '/alhikma', text: 'View Details →', external: false },
  },
  {
    redactedTitle: '████████', realTitle: 'Chairly', titleBlur: true,
    industry: 'Consumer', desc: 'Two-sided barber marketplace.',
    status: 'In Progress',
    gradient: 'linear-gradient(135deg, #0E0E0D 0%, #1A1816 50%, #C8A84B 100%)',
    link: { url: '/chairly', text: 'View Details →', external: false },
  },
  {
    redactedTitle: '████████', realTitle: 'Muslim Guider Pro', titleBlur: true,
    industry: 'Religious Tech', desc: 'Live audio broadcasting. Smart TV.',
    status: 'In Progress',
    gradient: 'linear-gradient(135deg, #0D1117 0%, #0F2720 50%, #1D9E75 100%)',
    link: { url: '/muslim-guider', text: 'View Details →', external: false },
  },
]

export default function Portfolio() {
  const { openNDA, hasAccess } = useNDA()

  return (
    <section className="py-36 bg-bg" id="work" aria-label="Our work">
      <div className="max-w-[1160px] mx-auto px-10">
        <div className="text-center reveal mb-16">
          <div className="text-[11px] font-semibold tracking-widest uppercase text-amber mb-4">Our Work</div>
          <h2 className="font-[family-name:var(--font-syne-var)] text-4xl md2:text-[46px] font-extrabold tracking-tight leading-[1.08] mb-5">
            Eight products.<br />Six industries.
          </h2>
          <p className="text-lg text-text-muted leading-relaxed max-w-[42ch] mx-auto">
            From healthcare to education to legal — one team model, adapted to each.
          </p>
        </div>

        {/* NDA gate */}
        {!hasAccess && (
          <div className="text-center mb-12 reveal">
            <p className="text-base text-text-muted mb-4">Portfolio access requires a signed NDA.</p>
            <button
              onClick={openNDA}
              className="bg-amber text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-all duration-150 hover:opacity-90 hover:-translate-y-px cursor-pointer border-none"
            >
              Request Access
            </button>
          </div>
        )}

        {/* Unlocked */}
        {hasAccess && (
          <div className="flex items-center justify-center gap-2 mb-12 reveal">
            <div className="w-5 h-5 rounded-full bg-green flex items-center justify-center text-white text-[10px] font-bold shrink-0">✓</div>
            <p className="text-base text-text-muted">Portfolio access granted.</p>
          </div>
        )}

        {/* Project grid — 2 columns */}
        <div className="grid grid-cols-1 md2:grid-cols-2 gap-10 reveal">
          {projects.map((p, i) => (
            <div key={i} className="group">
              {/* Thumbnail */}
              <div
                className="h-48 md2:h-56 rounded-2xl mb-5 transition-transform duration-300 group-hover:-translate-y-1 relative overflow-hidden"
                style={{
                  background: hasAccess && p.previewImage ? undefined : p.gradient,
                  filter: !hasAccess && p.titleBlur ? 'saturate(0.3) brightness(0.7)' : undefined,
                  transition: 'filter 0.4s ease, transform 0.3s ease',
                }}
              >
                {hasAccess && p.previewImage && (
                  <img
                    src={p.previewImage}
                    alt={`${p.realTitle} preview`}
                    className="w-full h-full object-cover"
                  />
                )}
                {p.statusLive && hasAccess && (
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 text-[10px] font-semibold text-white/80 bg-white/10 backdrop-blur-sm rounded-full py-1 px-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green" aria-hidden="true" />
                    Live
                  </div>
                )}
                {!hasAccess && p.titleBlur && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-white/60 text-lg">🔒</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Text */}
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold tracking-widest uppercase text-amber mb-1">{p.industry}</div>
                  <h3
                    className={`font-[family-name:var(--font-syne-var)] text-xl font-bold mb-1 transition-all duration-300 ${p.titleBlur && !hasAccess ? 'blur-sm select-none' : ''}`}
                  >
                    {hasAccess ? p.realTitle : p.redactedTitle}
                  </h3>
                  <p className="text-base text-text-muted leading-relaxed">{p.desc}</p>
                </div>
                <div className="shrink-0 pt-6">
                  {!hasAccess && (
                    <button onClick={openNDA} className="text-sm text-text-muted cursor-pointer bg-transparent border-none hover:text-amber p-0">
                      Request Access
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
            </div>
          ))}
        </div>

        {!hasAccess && (
          <p className="text-center pt-12 text-sm text-text-muted reveal">
            60 seconds to sign. Access granted immediately.
          </p>
        )}
      </div>
    </section>
  )
}
