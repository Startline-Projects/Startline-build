export default function BuildLaunchGrow() {
  return (
    <section className="py-24 bg-bg-2">
      <div className="max-w-[1160px] mx-auto px-10">
        <div className="reveal">
          <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-amber mb-3.5">How We Work</div>
          <h2 className="font-[family-name:var(--font-syne-var)] text-[46px] font-extrabold tracking-[-1.2px] leading-[1.08] mb-4">
            Build. Launch. Grow.
          </h2>
          <p className="text-[17px] text-text-muted leading-[1.75] max-w-[580px] font-light">
            Three phases. One team. You decide how far you want to take it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12">
          {/* Build — Primary (amber) */}
          <div className="rounded-[16px] p-8 relative overflow-hidden bg-amber border border-amber reveal">
            <div className="text-[11px] font-bold tracking-[0.1em] uppercase mb-4" style={{ color: 'rgba(14,14,13,0.6)' }}>
              Phase 01
            </div>
            <div className="font-[family-name:var(--font-syne-var)] text-[28px] font-extrabold tracking-[-0.5px] mb-3 text-dark">
              Build
            </div>
            <p className="text-sm leading-[1.75] mb-5" style={{ color: 'rgba(14,14,13,0.75)' }}>
              Sam runs your dev team from day one. Daily morning huddles. Weekly calls with Ahmed. Fixed-price delivery. Bi-weekly payments.
            </p>
            <div className="flex flex-col gap-2">
              {[
                'Team assembled from vetted bench in 7 days',
                'Daily morning huddles with your developers',
                'Weekly progress calls with Ahmed',
                'Fixed-price — no scope creep surprises',
                'Bi-weekly payments only',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[13px]" style={{ color: 'rgba(14,14,13,0.8)' }}>
                  <div className="w-1 h-1 rounded-full shrink-0" style={{ background: 'rgba(14,14,13,0.5)' }} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Launch — Secondary (white) */}
          <div className="rounded-[16px] p-8 relative overflow-hidden bg-bg-3 border border-border reveal reveal-delay-1">
            <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-amber mb-4">
              Phase 02
            </div>
            <div className="font-[family-name:var(--font-syne-var)] text-[28px] font-extrabold tracking-[-0.5px] mb-3">
              Launch
            </div>
            <p className="text-sm leading-[1.75] text-text-muted mb-5">
              Full handover. You own everything. Code, accounts, documentation, credentials. Nothing held back. Nothing retained.
            </p>
            <div className="flex flex-col gap-2">
              {[
                'Complete source code ownership',
                'All accounts and credentials transferred',
                'Full technical documentation',
                '30-day money-back guarantee',
                'No lock-in. No retainer after delivery.',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[13px] text-text-muted">
                  <div className="w-1 h-1 rounded-full bg-amber shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Grow — Tertiary (white, dimmed) */}
          <div className="rounded-[16px] p-8 relative overflow-hidden bg-bg-3 border border-border opacity-70 reveal reveal-delay-2">
            <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-amber mb-4">
              Phase 03 — Optional
            </div>
            <div className="font-[family-name:var(--font-syne-var)] text-[28px] font-extrabold tracking-[-0.5px] mb-3">
              Grow
            </div>
            <p className="text-sm leading-[1.75] text-text-muted mb-5">
              Shelly&rsquo;s marketing team takes over. Paid acquisition, content strategy, SEO. For founders who want to keep the momentum going after launch.
            </p>
            <div className="flex flex-col gap-2">
              {[
                'Paid acquisition strategy',
                'Content and SEO',
                'Growth analytics and reporting',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[13px] text-text-muted">
                  <div className="w-1 h-1 rounded-full bg-amber shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <div className="inline-block text-[11px] py-[3px] px-2.5 rounded-[20px] border border-border-2 text-text-dim mt-4">
              Optional — ask about it on the call
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
