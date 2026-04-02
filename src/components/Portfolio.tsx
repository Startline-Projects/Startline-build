'use client'
import { useNDA } from '@/context/NDAContext'

const projects = [
  {
    emoji: '🏪',
    imgBg: '#1C1B1A',
    imgBlur: '1px',
    tag: 'Our Platform · Talent Marketplace',
    title: 'StaffVA',
    titleBlur: false,
    desc: 'Professional offshore talent marketplace. Launching to candidates April 6 · Launching to clients April 20.',
    descColor: 'var(--color-text-muted)',
    value: 'Live · Our Platform',
  },
  {
    emoji: '🤖',
    imgBg: '#0a1520',
    imgBlur: '1px',
    tag: 'Our Platform · AI SaaS',
    title: 'StaffVA AI Interview',
    titleBlur: false,
    desc: 'AI-powered voice interview platform for candidate screening. White-label. Launching to clients April 20.',
    descColor: 'var(--color-text-muted)',
    value: 'Live · White-label available',
  },
  {
    emoji: '🏦',
    imgBg: '#0d1e35',
    imgBlur: '1px',
    tag: 'Estate Planning · SaaS',
    title: '████████████',
    titleBlur: true,
    desc: 'White-label estate planning platform.',
    descColor: 'var(--color-text-dim)',
    value: 'Delivered',
  },
  {
    emoji: '⚖️',
    imgBg: '#061c14',
    imgBlur: '1px',
    tag: 'Legal Services · Web',
    title: '████████████',
    titleBlur: true,
    desc: 'Law firm website and client portal.',
    descColor: 'var(--color-text-dim)',
    value: 'Delivered',
  },
  {
    emoji: '🏥',
    imgBg: '#0a1520',
    imgBlur: '2px',
    tag: 'Healthcare · Mobile',
    title: '████████████',
    titleBlur: true,
    desc: 'HIPAA-compliant clinical platform. Client identity protected under their NDA — not disclosed upon access.',
    descColor: 'var(--color-text-dim)',
    value: 'Live · Client identity protected',
    hasLiveBadge: true,
  },
  {
    emoji: '🎓',
    imgBg: '#0d1a2e',
    imgBlur: '2px',
    tag: 'Education · SaaS',
    title: '████████████',
    titleBlur: true,
    desc: 'Full school operating system. 9 modules.',
    descColor: 'var(--color-text-dim)',
    value: 'In Progress · May 2026',
  },
  {
    emoji: '💈',
    imgBg: '#0E0E0D',
    imgBlur: '2px',
    tag: 'Consumer · Mobile App',
    title: '████████████',
    titleBlur: true,
    desc: 'Two-sided barber marketplace.',
    descColor: 'var(--color-text-dim)',
    value: 'In Progress · June 2026',
    hasBorderBottom: true,
  },
  {
    emoji: '🕌',
    imgBg: '#041510',
    imgBlur: '2px',
    tag: 'Religious Tech · Mobile',
    title: '████████████',
    titleBlur: true,
    desc: 'Live audio broadcasting. Smart TV.',
    descColor: 'var(--color-text-dim)',
    value: 'In Progress · July 2026',
  },
]

export default function Portfolio() {
  const { openNDA } = useNDA()

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

        {/* NDA gate banner */}
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

        {/* All 8 projects — 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 reveal">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-bg-3 border border-border rounded-[16px] overflow-hidden transition-colors duration-200 hover:border-border-2"
            >
              {/* Image area */}
              <div
                className="h-[140px] flex items-center justify-center text-4xl relative"
                style={{
                  background: p.imgBg,
                  filter: `blur(${p.imgBlur})`,
                  borderBottom: p.hasBorderBottom ? '1px solid var(--color-border)' : undefined,
                }}
              >
                {p.hasLiveBadge && (
                  <div
                    className="absolute top-2.5 right-2.5 flex items-center gap-1 text-[9px] font-bold py-[3px] px-2 rounded-[20px]"
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
                {p.emoji}
              </div>

              {/* Body */}
              <div className="p-[18px]">
                <div className="text-[10px] font-bold tracking-[0.08em] uppercase text-amber mb-1.5">{p.tag}</div>
                <div
                  className="font-[family-name:var(--font-syne-var)] text-base font-bold mb-[5px]"
                  style={p.titleBlur ? { filter: 'blur(3px)', userSelect: 'none' } : undefined}
                >
                  {p.title}
                </div>
                <p className="text-xs leading-[1.6] mb-3" style={{ color: p.descColor }}>{p.desc}</p>
                <button
                  onClick={openNDA}
                  className="inline-flex items-center gap-[5px] text-xs text-text-muted font-medium cursor-pointer py-[5px] px-3 rounded-[20px] border border-border transition-all duration-150 hover:border-amber hover:text-amber"
                  style={{ background: 'var(--color-bg-4)' }}
                >
                  🔒 Request Access
                </button>
                <div className="text-[11px] text-text-dim mt-1.5">{p.value}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center py-5 text-[13px] text-text-dim">
          Access requires a signed NDA and non-compete. Takes 60 seconds.
        </div>
      </div>
    </section>
  )
}
