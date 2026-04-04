const screens = [
  {
    bg: '#1A1816', border: '#2E2C29', headerBg: '#242220',
    accent: '#C8A84B', accentBg: 'rgba(200,168,75,.2)', accentTag: 'rgba(200,168,75,.15)',
    accentBorder: 'rgba(200,168,75,.3)', lineBg: '#333', tag: 'Chairly · Barber',
    lineW: '60%', miniW1: '80%', miniW2: '50%',
  },
  {
    bg: '#0B2545', border: '#1A3A6A', headerBg: '#112D57',
    accent: '#B8921A', accentBg: 'rgba(184,146,26,.2)', accentTag: 'rgba(184,146,26,.15)',
    accentBorder: 'rgba(184,146,26,.3)', lineBg: '#1A3A6A', tag: 'Al-Hikma · School',
    lineW: '60%', miniW1: '75%', miniW2: '45%',
  },
  {
    bg: '#0D1117', border: '#1E3A5F', headerBg: '#1E293B',
    accent: '#2563EB', accentBg: 'rgba(37,99,235,.2)', accentTag: 'rgba(37,99,235,.15)',
    accentBorder: 'rgba(37,99,235,.3)', lineBg: '#1E3A5F', tag: 'Meta-Health · Clinical',
    tagColor: '#60A5FA', lineW: '70%', miniW1: '85%', miniW2: '55%',
  },
  {
    bg: '#0D1117', border: '#0F2720', headerBg: '#0F2720', headerBorder: '#1D9E75',
    accent: '#1D9E75', accentBg: 'rgba(29,158,117,.2)', accentTag: 'rgba(29,158,117,.15)',
    accentBorder: 'rgba(29,158,117,.3)', lineBg: '#1D4035', tag: 'Muslim Guider · App',
    lineW: '65%', miniW1: '80%', miniW2: '50%',
  },
  {
    bg: '#1C1B1A', border: '#2E2C2A', headerBg: '#242220',
    accent: '#FE6E3E', accentBg: 'rgba(254,110,62,.2)', accentTag: 'rgba(254,110,62,.15)',
    accentBorder: 'rgba(254,110,62,.3)', lineBg: '#2E2C2A', tag: 'StaffVA · Platform',
    lineW: '55%', miniW1: '70%', miniW2: '40%',
  },
  {
    bg: '#F8F9FA', border: '#E2E8F0', headerBg: '#F1F5F9',
    accent: '#2563EB', accentBg: 'rgba(37,99,235,.1)', accentTag: 'rgba(37,99,235,.08)',
    accentBorder: 'rgba(37,99,235,.2)', lineBg: '#E2E8F0', tag: 'Estate Vault · Web',
    lineW: '50%', lineOpacity: 0.6, miniW1: '75%', miniW2: '45%',
  },
]

const features = [
  {
    title: 'Every screen, every flow',
    desc: 'A complete visual walkthrough of your product, exactly as it will be built. No surprises after the contract is signed.',
  },
  {
    title: 'You approve before anything starts',
    desc: 'The Blueprint is your protection. You sign off on the visuals, and the build reflects what you approved.',
  },
  {
    title: 'Free. No commitment required.',
    desc: 'Delivered before the contract and before payment. You can walk away after seeing it.',
  },
]

export default function Blueprint() {
  return (
    <section className="py-24 bg-bg-2" id="blueprint" aria-label="The Blueprint">
      <div className="max-w-[1160px] mx-auto px-10">
        <div className="grid grid-cols-1 md2:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div className="reveal">
            <div className="text-[11px] font-semibold tracking-widest uppercase text-amber mb-3.5">The Blueprint</div>
            <h2 className="font-[family-name:var(--font-syne-var)] text-4xl md2:text-[46px] font-extrabold tracking-tight leading-[1.08] mb-4">
              See it before<br />we build it.
            </h2>
            <p className="text-lg text-text-muted leading-relaxed max-w-[52ch]">
              Before you pay a dollar, you receive a <strong className="text-text font-medium">complete screen-by-screen visual</strong> of your product. You approve it. Then the build starts.
            </p>

            <div className="flex flex-col gap-3 mt-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3.5 p-4 bg-bg-3 rounded-xl border border-border">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-bg-2 text-text-muted text-sm font-bold font-[family-name:var(--font-syne-var)]">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-text mb-0.5">{f.title}</h4>
                    <p className="text-base text-text-muted leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — project screen grid */}
          <div className="grid grid-cols-3 gap-3 reveal reveal-delay-2 max-md2:order-[-1]" role="img" aria-label="Sample Blueprint screens from six different projects">
            {screens.map((s, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: s.bg, border: `1px solid ${s.border}` }}
              >
                <div
                  className="h-9 flex items-center px-3 gap-1.5"
                  style={{ background: s.headerBg, borderBottom: `1px solid ${s.headerBorder || s.border}` }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#ff5f57' }} />
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#febc2e' }} />
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#28c840' }} />
                </div>
                <div className="p-3 flex flex-col gap-1.5">
                  <div className="h-1 rounded-sm" style={{ background: s.accent, width: s.lineW, opacity: s.lineOpacity || 0.7 }} />
                  <div className="h-1 rounded-sm w-full" style={{ background: s.lineBg }} />
                  <div className="rounded-lg p-2 mt-1 flex gap-1.5 items-center" style={{ background: s.headerBg }}>
                    <div className="w-4 h-4 rounded-full shrink-0" style={{ background: s.accentBg }} />
                    <div className="flex-1 flex flex-col gap-1">
                      <div className="h-0.5 rounded-sm" style={{ width: s.miniW1, background: s.lineBg }} />
                      <div className="h-0.5 rounded-sm" style={{ width: s.miniW2, background: s.lineBg }} />
                    </div>
                  </div>
                  <div
                    className="text-[9px] py-0.5 px-1.5 rounded-full font-semibold self-start mt-1"
                    style={{ background: s.accentTag, color: s.tagColor || s.accent, border: `1px solid ${s.accentBorder}` }}
                  >
                    {s.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
