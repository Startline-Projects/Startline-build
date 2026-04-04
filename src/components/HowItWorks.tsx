const steps = [
  {
    num: 1,
    title: 'Submit the intake form',
    desc: 'Tell us what you need built. Five minutes, no commitment. We review it before the call so Ahmed and Sam walk in prepared.',
    tag: '5 minutes',
  },
  {
    num: 2,
    title: 'Meet Ahmed and Sam',
    desc: (
      <>A 45-minute video call. <strong className="text-text font-medium">Ahmed covers business fit and pricing. Sam covers technical scope.</strong> You leave knowing exactly what it costs.</>
    ),
    tag: '45 min call',
  },
  {
    num: 3,
    title: 'Receive the Blueprint',
    desc: (
      <>A <strong className="text-text font-medium">complete screen-by-screen visual of your product</strong> — every page, every flow. Free. No contract. You approve it or walk away.</>
    ),
    tag: 'Free',
  },
  {
    num: 4,
    title: 'Sign and kick off',
    desc: (
      <>You approve the Blueprint and sign the agreement. <strong className="text-text font-medium">Your team assembles from the bench in 7 days.</strong> Sam runs the build.</>
    ),
    tag: '7 days',
  },
  {
    num: 5,
    title: 'Launch — you own everything',
    desc: (
      <>Full handover. All source code, all accounts, all credentials. <strong className="text-text font-medium">You own 100% of what we built.</strong> Not happy in 30 days? Full refund.</>
    ),
    tag: '30-day guarantee',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24" id="how-it-works" aria-label="How it works — five steps">
      <div className="max-w-[1160px] mx-auto px-10">
        <div className="reveal">
          <div className="text-[11px] font-semibold tracking-widest uppercase text-amber mb-3.5">The Process</div>
          <h2 className="font-[family-name:var(--font-syne-var)] text-4xl md2:text-[46px] font-extrabold tracking-tight leading-[1.08] mb-4">
            Idea to shipped product.
          </h2>
          <p className="text-lg text-text-muted leading-relaxed max-w-[42ch]">
            Five steps. No ambiguity. No retainers.
          </p>
        </div>

        <ol className="flex flex-col mt-14 max-w-[720px]" role="list">
          {steps.map((step, i) => (
            <li
              key={i}
              className="grid grid-cols-[56px_1fr] gap-6 py-8 relative reveal"
              style={{ borderBottom: i < steps.length - 1 ? '1px solid rgba(28,26,20,0.06)' : undefined }}
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border border-border-2 flex items-center justify-center font-[family-name:var(--font-syne-var)] text-sm font-bold text-text shrink-0 bg-bg-2">
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 mt-2" style={{ background: 'rgba(28,26,20,0.06)' }} aria-hidden="true" />
                )}
              </div>
              <div className="pt-2">
                <h3 className="font-[family-name:var(--font-syne-var)] text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-base text-text-muted leading-relaxed max-w-[52ch]">{step.desc}</p>
                <span className="inline-block text-[11px] py-1 px-2.5 rounded-full font-semibold mt-3 text-amber" style={{ border: '1px solid rgba(200,104,26,0.5)' }}>
                  {step.tag}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
