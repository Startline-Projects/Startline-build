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

export default function Blueprint() {
  return (
    <section className="py-24 bg-bg-2" id="blueprint">
      <div className="max-w-[1160px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left — Copy */}
          <div className="reveal">
            <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-amber mb-3.5">The Blueprint</div>
            <h2 className="font-[family-name:var(--font-syne-var)] text-[46px] font-extrabold tracking-[-1.2px] leading-[1.08] mb-4">
              See it before<br />we build it.
            </h2>
            <p className="text-[17px] text-text-muted leading-[1.75] max-w-[580px] font-light">
              Before you sign a contract or pay a dollar, you receive a <strong className="text-text font-medium">complete screen-by-screen visual</strong> of your product. Every page. Every flow. Every interaction. You approve it. Then the build starts.
            </p>

            <div className="flex flex-col gap-3.5 mt-8">
              <div className="flex items-start gap-3.5 p-[18px] bg-bg-3 rounded-xl border border-border">
                <div className="w-9 h-9 rounded-[9px] flex items-center justify-center shrink-0 text-base" style={{ background: 'rgba(200,104,26,0.08)' }}>🖥</div>
                <div>
                  <h4 className="text-sm font-semibold text-text mb-[3px]">Every screen, every flow</h4>
                  <p className="text-[13px] text-text-muted leading-[1.6]">Full visual walkthrough of your product exactly as it will be built. No surprises. No &ldquo;that&rsquo;s not what I meant.&rdquo;</p>
                </div>
              </div>
              <div className="flex items-start gap-3.5 p-[18px] bg-bg-3 rounded-xl border border-border">
                <div className="w-9 h-9 rounded-[9px] flex items-center justify-center shrink-0 text-base" style={{ background: 'rgba(200,104,26,0.08)' }}>✍️</div>
                <div>
                  <h4 className="text-sm font-semibold text-text mb-[3px]">You approve before anything starts</h4>
                  <p className="text-[13px] text-text-muted leading-[1.6]">The Blueprint is your protection. You sign off on the visuals. The build reflects what you approved. Changes after approval are quoted separately.</p>
                </div>
              </div>
              <div className="flex items-start gap-3.5 p-[18px] bg-bg-3 rounded-xl border border-border">
                <div className="w-9 h-9 rounded-[9px] flex items-center justify-center shrink-0 text-base" style={{ background: 'rgba(200,104,26,0.08)' }}>🆓</div>
                <div>
                  <h4 className="text-sm font-semibold text-text mb-[3px]">Free. No commitment required.</h4>
                  <p className="text-[13px] text-text-muted leading-[1.6]">The Blueprint is delivered before the contract. Before payment. You can walk away after seeing it. Most clients don&rsquo;t.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — 3x2 Screen Grid */}
          <div className="grid grid-cols-3 gap-3 reveal reveal-delay-2 max-lg:order-[-1]">
            {screens.map((s, i) => (
              <div
                key={i}
                className="rounded-[16px] overflow-hidden transition-all duration-200 hover:border-amber hover:-translate-y-[3px]"
                style={{ background: s.bg, border: `1px solid ${s.border}` }}
              >
                {/* Header bar */}
                <div
                  className="h-9 flex items-center px-3 gap-[5px]"
                  style={{
                    background: s.headerBg,
                    borderBottom: `1px solid ${s.headerBorder || s.border}`,
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#ff5f57' }} />
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#febc2e' }} />
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#28c840' }} />
                </div>
                {/* Body */}
                <div className="p-3 flex flex-col gap-1.5">
                  <div
                    className="h-1 rounded-sm"
                    style={{
                      background: s.accent,
                      width: s.lineW,
                      opacity: s.lineOpacity || 0.7,
                    }}
                  />
                  <div className="h-1 rounded-sm w-full" style={{ background: s.lineBg }} />
                  {/* Mini card */}
                  <div className="rounded-[7px] p-2 mt-1 flex gap-1.5 items-center" style={{ background: s.headerBg }}>
                    <div className="w-[18px] h-[18px] rounded-full shrink-0" style={{ background: s.accentBg }} />
                    <div className="flex-1 flex flex-col gap-[3px]">
                      <div className="h-[3px] rounded-sm" style={{ width: s.miniW1, background: s.lineBg }} />
                      <div className="h-[3px] rounded-sm" style={{ width: s.miniW2, background: s.lineBg }} />
                    </div>
                  </div>
                  {/* Tag */}
                  <div
                    className="text-[9px] py-[2px] px-[7px] rounded-[20px] font-semibold self-start mt-1"
                    style={{
                      background: s.accentTag,
                      color: s.tagColor || s.accent,
                      border: `1px solid ${s.accentBorder}`,
                    }}
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
