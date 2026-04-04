import BlueprintScreens from './BlueprintScreens'

const features = [
  { title: 'Every screen, every flow', desc: 'A complete visual walkthrough of your product, exactly as it will be built.' },
  { title: 'You approve first', desc: 'You sign off on the visuals. The build reflects what you approved.' },
  { title: 'Free. No commitment.', desc: 'Delivered before the contract and before payment. Walk away if you want.' },
]

export default function Blueprint() {
  return (
    <section className="py-36 bg-bg" id="blueprint" aria-label="The Blueprint">
      <div className="max-w-[1160px] mx-auto px-10">
        <div className="grid grid-cols-1 md2:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div className="reveal">
            <div className="text-[11px] font-semibold tracking-widest uppercase text-amber mb-4">The Blueprint</div>
            <h2 className="font-[family-name:var(--font-syne-var)] text-4xl md2:text-[46px] font-extrabold tracking-tight leading-[1.08] mb-5">
              See it before<br />we build it.
            </h2>
            <p className="text-lg text-text-muted leading-relaxed max-w-[48ch] mb-10">
              Before you pay a dollar, you receive a <strong className="text-text font-medium">complete screen-by-screen visual</strong> of your product. You approve it. Then the build starts.
            </p>

            <div className="flex flex-col gap-6">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-bg-3 text-text-muted text-sm font-bold font-[family-name:var(--font-syne-var)]">
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

          {/* Right — Blueprint milestone card */}
          <div className="reveal reveal-delay-2 max-md2:order-[-1]">
            <div className="bg-bg-3 rounded-xl p-8" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.06)' }}>
              <div className="flex items-center justify-between mb-6">
                <div className="font-[family-name:var(--font-syne-var)] text-sm font-bold text-text">Your product. Every screen.</div>
                <div className="flex items-center gap-1.5 text-[11px] text-green font-medium">
                  <div className="w-1 h-1 rounded-full bg-green shrink-0" aria-hidden="true" />
                  Free
                </div>
              </div>
              <BlueprintScreens />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
