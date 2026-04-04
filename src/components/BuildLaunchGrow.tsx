export default function BuildLaunchGrow() {
  return (
    <section className="py-24 bg-bg-2" aria-label="How we work — Build, Launch, Grow">
      <div className="max-w-[1160px] mx-auto px-10">
        <div className="reveal">
          <div className="text-[11px] font-semibold tracking-widest uppercase text-amber mb-3.5">How We Work</div>
          <h2 className="font-[family-name:var(--font-syne-var)] text-4xl md2:text-[46px] font-extrabold tracking-tight leading-[1.08] mb-4">
            Build. Launch. Grow.
          </h2>
          <p className="text-lg text-text-muted leading-relaxed max-w-[48ch]">
            Three phases. One team. You decide how far to take it.
          </p>
        </div>

        <div className="grid grid-cols-1 md2:grid-cols-3 gap-5 mt-12 items-stretch">
          {/* Build */}
          <div className="rounded-xl p-6 bg-bg-3 border border-border reveal" style={{ borderLeft: '3px solid var(--color-amber)' }}>
            <div className="text-[11px] font-semibold tracking-widest uppercase text-amber mb-4">Phase 01</div>
            <div className="font-[family-name:var(--font-syne-var)] text-2xl font-extrabold tracking-tight mb-3">Build</div>
            <p className="text-base text-text-muted leading-relaxed mb-5 max-w-[48ch]">
              Sam runs your dev team from day one. <strong className="text-text font-medium">Daily standups, weekly calls with Ahmed, fixed-price delivery.</strong>
            </p>
            <ul className="flex flex-col gap-2" role="list">
              {['Team assembled in 7 days', 'Daily morning standups', 'Weekly progress calls', 'Fixed-price — no surprises', 'Bi-weekly billing only'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-base text-text-muted">
                  <div className="w-1 h-1 rounded-full bg-text-dim shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Launch */}
          <div className="rounded-xl p-6 bg-bg-3 border border-border reveal reveal-delay-1">
            <div className="text-[11px] font-semibold tracking-widest uppercase text-amber mb-4">Phase 02</div>
            <div className="font-[family-name:var(--font-syne-var)] text-2xl font-extrabold tracking-tight mb-3">Launch</div>
            <p className="text-base text-text-muted leading-relaxed mb-5 max-w-[48ch]">
              Full handover. <strong className="text-text font-medium">You own everything</strong> — code, accounts, documentation, credentials.
            </p>
            <ul className="flex flex-col gap-2" role="list">
              {['Complete source code ownership', 'All accounts transferred', 'Full technical documentation', '30-day money-back guarantee', 'No lock-in after delivery'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-base text-text-muted">
                  <div className="w-1 h-1 rounded-full bg-text-dim shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Grow */}
          <div className="rounded-xl p-6 bg-bg-3 border border-border opacity-70 reveal reveal-delay-2">
            <div className="text-[11px] font-semibold tracking-widest uppercase text-amber mb-4">Phase 03 — Optional</div>
            <div className="font-[family-name:var(--font-syne-var)] text-2xl font-extrabold tracking-tight mb-3">Grow</div>
            <p className="text-base text-text-muted leading-relaxed mb-5 max-w-[48ch]">
              Shelly&rsquo;s marketing team takes over. Paid acquisition, content strategy, SEO — for founders who want to keep moving after launch.
            </p>
            <ul className="flex flex-col gap-2" role="list">
              {['Paid acquisition strategy', 'Content and SEO', 'Growth analytics and reporting'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-base text-text-muted">
                  <div className="w-1 h-1 rounded-full bg-text-dim shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="inline-block text-[11px] py-1 px-2.5 rounded-full border border-border-2 text-text-dim mt-4">
              Optional — ask on the call
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
