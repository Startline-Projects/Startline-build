'use client'
import { ReactNode } from 'react'
import { useNDA } from '@/context/NDAContext'
import {
  StaffVAPreview, InterviewPreview, EstateVaultPreview, PeoplesFirmPreview,
  MetaHealthPreview, AlHikmaPreview, ChairlyPreview, MuslimGuiderPreview,
} from './CardPreviews'

interface Project {
  preview: ReactNode
  imgBlur: string
  tag: string
  redactedTitle: string
  realTitle: string
  titleBlur: boolean
  desc: string
  descColor: string
  value: string
  hasLiveBadge?: boolean
  hasBorderBottom?: boolean
  link?: { url: string; text: string; external: boolean }
}

const projects: Project[] = [
  {
    preview: <StaffVAPreview />,
    imgBlur: '1px',
    tag: 'Our Platform · Talent Marketplace',
    redactedTitle: 'StaffVA',
    realTitle: 'StaffVA',
    titleBlur: false,
    desc: 'Professional offshore talent marketplace. Launching to candidates April 6 · Launching to clients April 20.',
    descColor: 'var(--color-text-muted)',
    value: 'Live · Our Platform',
    link: { url: 'https://staffva.com', text: 'View Platform ↗', external: true },
  },
  {
    preview: <InterviewPreview />,
    imgBlur: '1px',
    tag: 'Our Platform · AI SaaS',
    redactedTitle: 'StaffVA AI Interview',
    realTitle: 'StaffVA AI Interview',
    titleBlur: false,
    desc: 'AI-powered voice interview platform for candidate screening. White-label. Launching to clients April 20.',
    descColor: 'var(--color-text-muted)',
    value: 'Live · White-label available',
    link: { url: 'https://interview.staffva.com', text: 'View Platform ↗', external: true },
  },
  {
    preview: <EstateVaultPreview />,
    imgBlur: '1px',
    tag: 'Estate Planning · SaaS',
    redactedTitle: '████████████',
    realTitle: 'Estate Vault',
    titleBlur: true,
    desc: 'White-label estate planning platform.',
    descColor: 'var(--color-text-dim)',
    value: 'Delivered',
    link: { url: 'https://estatevault.us', text: 'View Live Site ↗', external: true },
  },
  {
    preview: <PeoplesFirmPreview />,
    imgBlur: '1px',
    tag: 'Legal Services · Web',
    redactedTitle: '████████████',
    realTitle: 'The People\u2019s Firm',
    titleBlur: true,
    desc: 'Law firm website and client portal.',
    descColor: 'var(--color-text-dim)',
    value: 'Delivered',
    link: { url: 'https://thepeoplesfirmpllc.com', text: 'View Live Site ↗', external: true },
  },
  {
    preview: <MetaHealthPreview />,
    imgBlur: '2px',
    tag: 'Healthcare · Mobile',
    redactedTitle: '████████████',
    realTitle: 'Meta Medical Scribe',
    titleBlur: true,
    desc: 'HIPAA-compliant clinical platform. Client identity protected under their NDA — not disclosed upon access.',
    descColor: 'var(--color-text-dim)',
    value: 'Live · Client identity protected',
    hasLiveBadge: true,
    link: { url: '/meta-health', text: 'View Project Details →', external: false },
  },
  {
    preview: <AlHikmaPreview />,
    imgBlur: '2px',
    tag: 'Education · SaaS',
    redactedTitle: '████████████',
    realTitle: 'Al-Hikma School Platform',
    titleBlur: true,
    desc: 'Full school operating system. 9 modules.',
    descColor: 'var(--color-text-dim)',
    value: 'In Progress · May 2026',
    link: { url: '/alhikma', text: 'View Project Details →', external: false },
  },
  {
    preview: <ChairlyPreview />,
    imgBlur: '2px',
    tag: 'Consumer · Mobile App',
    redactedTitle: '████████████',
    realTitle: 'Chairly',
    titleBlur: true,
    desc: 'Two-sided barber marketplace.',
    descColor: 'var(--color-text-dim)',
    value: 'In Progress · June 2026',
    hasBorderBottom: true,
    link: { url: '/chairly', text: 'View Project Details →', external: false },
  },
  {
    preview: <MuslimGuiderPreview />,
    imgBlur: '2px',
    tag: 'Religious Tech · Mobile',
    redactedTitle: '████████████',
    realTitle: 'Muslim Guider Pro',
    titleBlur: true,
    desc: 'Live audio broadcasting. Smart TV.',
    descColor: 'var(--color-text-dim)',
    value: 'In Progress · July 2026',
    link: { url: '/muslim-guider', text: 'View Project Details →', external: false },
  },
]

export default function Portfolio() {
  const { openNDA, hasAccess } = useNDA()

  return (
    <section className="py-24 bg-bg-2" id="work">
      <div className="max-w-[1160px] mx-auto px-10">
        <div className="reveal">
          <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-amber mb-3.5">Our Work</div>
          <h2 className="font-[family-name:var(--font-syne-var)] text-[46px] font-extrabold tracking-[-1.2px] leading-[1.08] mb-4">
            Six industries.<br />One team model.
          </h2>
          <p className="text-[17px] text-text-muted leading-[1.75] max-w-[580px] font-light">
            Request access to see the full portfolio.
          </p>
        </div>

        {/* NDA gate banner — hidden when unlocked */}
        {!hasAccess && (
          <div className="bg-bg-3 border border-border rounded-[16px] py-6 px-7 mt-10 mb-5 flex items-center justify-between flex-wrap gap-4 reveal">
            <div>
              <div className="text-[15px] font-bold text-text mb-1">All projects require a signed agreement to view.</div>
              <div className="text-[13px] text-text-muted">NDA and non-compete. Takes 60 seconds. Access granted immediately.</div>
            </div>
            <button
              onClick={openNDA}
              className="bg-amber text-white px-7 py-3.5 rounded-[9px] text-[15px] font-semibold transition-all duration-150 hover:opacity-90 hover:-translate-y-px cursor-pointer border-none font-[family-name:var(--font-epilogue-var)]"
            >
              Request Portfolio Access →
            </button>
          </div>
        )}

        {/* Unlocked banner — shown when access granted */}
        {hasAccess && (
          <div className="flex items-center gap-3 rounded-[16px] p-4 mt-10 mb-5" style={{ background: 'rgba(22,163,74,0.06)', border: '1px solid rgba(22,163,74,0.2)' }}>
            <div className="w-7 h-7 rounded-full bg-green flex items-center justify-center text-white text-sm font-bold shrink-0">
              ✓
            </div>
            <div>
              <div className="text-sm font-semibold" style={{ color: '#15803d' }}>Portfolio access granted</div>
              <div className="text-xs mt-0.5" style={{ color: '#16a34a' }}>
                You&rsquo;re viewing all Startline projects. A signed copy of your NDA has been recorded.
              </div>
            </div>
          </div>
        )}

        {/* All 8 projects — 4-column grid */}
        <div className="grid grid-cols-2 md2:grid-cols-4 gap-4 reveal">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-bg-3 border border-border rounded-[16px] overflow-hidden transition-colors duration-200 hover:border-border-2 flex flex-col"
            >
              {/* Image area — CSS mini preview */}
              <div
                className="h-[140px] relative overflow-hidden transition-[filter] duration-400 ease-in-out"
                style={{
                  filter: hasAccess ? 'none' : `blur(${p.imgBlur})`,
                  borderBottom: p.hasBorderBottom ? '1px solid var(--color-border)' : undefined,
                }}
              >
                {p.hasLiveBadge && (
                  <div
                    className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1 text-[9px] font-bold py-[3px] px-2 rounded-[20px]"
                    style={{
                      color: 'var(--color-green)',
                      background: 'rgba(34,197,94,0.1)',
                      border: '1px solid rgba(34,197,94,0.2)',
                    }}
                  >
                    <div className="w-[5px] h-[5px] rounded-full bg-green" />
                    Live
                  </div>
                )}
                {p.preview}
              </div>

              {/* Body */}
              <div className="p-[18px] flex flex-col flex-1">
                <div className="text-[10px] font-bold tracking-[0.08em] uppercase text-amber mb-1.5">{p.tag}</div>
                <div
                  className={`font-[family-name:var(--font-syne-var)] text-base font-bold mb-[5px] transition-all duration-300 ${p.titleBlur && !hasAccess ? 'blur-sm select-none' : ''}`}
                >
                  {hasAccess ? p.realTitle : p.redactedTitle}
                </div>
                <p className="text-xs leading-[1.6] mb-3 flex-1" style={{ color: p.descColor }}>{p.desc}</p>

                {/* Button + status — always at bottom */}
                <div className="mt-auto">
                  {/* Lock button — shown when locked */}
                  {!hasAccess && (
                    <button
                      onClick={openNDA}
                      className="inline-flex items-center gap-[5px] text-xs text-text-muted font-medium cursor-pointer py-[5px] px-3 rounded-[20px] border border-border transition-all duration-150 hover:border-amber hover:text-amber"
                      style={{ background: 'var(--color-bg-4)' }}
                    >
                      🔒 Request Access
                    </button>
                  )}

                  {/* Links — shown when unlocked */}
                  {hasAccess && p.link && (
                    p.link.external ? (
                      <a
                        href={p.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors"
                        style={{
                          color: '#92400e',
                          background: 'rgba(200,104,26,0.06)',
                          borderColor: 'rgba(200,104,26,0.3)',
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(200,104,26,0.12)' }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(200,104,26,0.06)' }}
                      >
                        {p.link.text}
                      </a>
                    ) : (
                      <a
                        href={p.link.url}
                        target="_blank"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-text px-3 py-1.5 rounded-full border border-border-2 transition-colors hover:border-amber hover:text-amber"
                        style={{ background: 'var(--color-bg)' }}
                      >
                        {p.link.text}
                      </a>
                    )
                  )}

                  <div className="text-[11px] text-text-dim mt-1.5">{p.value}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!hasAccess && (
          <div className="text-center py-5 text-[13px] text-text-dim">
            Access requires a signed NDA and non-compete. Takes 60 seconds.
          </div>
        )}
      </div>
    </section>
  )
}
