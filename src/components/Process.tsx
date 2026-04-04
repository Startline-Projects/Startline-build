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
      <>A 45-minute video call. <strong className="text-text font-medium">Ahmed covers business fit and pricing.</strong> Sam covers technical scope. You leave knowing exactly what it costs.</>
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

const vetting = [
  { num: '01', title: 'English Assessment', desc: 'Written and spoken English tested and scored. Every developer communicates clearly with US clients.' },
  { num: '02', title: 'Technical Screening', desc: 'Live assessment reviewed by Sam. Real problems, real code. We reject anyone who can\u2019t demonstrate depth.' },
  { num: '03', title: 'Background Check', desc: 'Full verification on every developer before they join the bench.' },
  { num: '04', title: 'References Called', desc: 'Previous employers contacted directly. We verify work history before putting anyone on your project.' },
]

export default function Process() {
  return (
    <section className="py-36 bg-bg-3" id="how-it-works" aria-label="The process — five steps">
      <div className="max-w-[1160px] mx-auto px-10">
        {/* Process header */}
        <div className="reveal">
          <div className="text-[11px] font-semibold tracking-widest uppercase text-amber mb-4">The Process</div>
          <h2 className="font-[family-name:var(--font-syne-var)] text-4xl md2:text-[46px] font-extrabold tracking-tight leading-[1.08] mb-5">
            Idea to shipped product.
          </h2>
          <p className="text-lg text-text-muted leading-relaxed max-w-[42ch]">
            Five steps. No ambiguity. No retainers.
          </p>
        </div>

        {/* 5 steps */}
        <ol className="flex flex-col mt-16 max-w-[680px]" role="list">
          {steps.map((step, i) => (
            <li
              key={i}
              className="grid grid-cols-[48px_1fr] gap-5 py-8 relative reveal"
              style={{ borderBottom: i < steps.length - 1 ? '1px solid rgba(28,26,20,0.06)' : undefined }}
            >
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-[family-name:var(--font-syne-var)] text-sm font-bold text-text shrink-0 bg-bg">
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 mt-2" style={{ background: 'rgba(28,26,20,0.06)' }} aria-hidden="true" />
                )}
              </div>
              <div className="pt-2">
                <h3 className="font-[family-name:var(--font-syne-var)] text-lg font-bold mb-2">{step.title}</h3>
                <p className="text-base text-text-muted leading-relaxed max-w-[48ch]">{step.desc}</p>
                <span className="inline-block text-[11px] py-1 px-2.5 rounded-full font-semibold mt-3 text-amber bg-amber-light">
                  {step.tag}
                </span>
              </div>
            </li>
          ))}
        </ol>

        {/* Bench — vetting sub-section */}
        <div className="mt-24 reveal">
          <div className="text-[11px] font-semibold tracking-widest uppercase text-amber mb-4">The Bench</div>
          <h3 className="font-[family-name:var(--font-syne-var)] text-3xl md2:text-4xl font-extrabold tracking-tight leading-[1.08] mb-5">
            Your team is already<br />vetted and waiting.
          </h3>
          <p className="text-lg text-text-muted leading-relaxed max-w-[48ch] mb-12">
            Over <strong className="text-text font-medium">100 developers</strong> cleared through four layers of screening.
          </p>

          <div className="grid grid-cols-2 md2:grid-cols-4 gap-8">
            {vetting.map((card, i) => (
              <div key={i} className={`relative reveal ${i > 0 ? `reveal-delay-${i}` : ''}`}>
                <div
                  className="absolute pointer-events-none font-[family-name:var(--font-syne-var)] text-[64px] font-extrabold leading-none text-text/[0.04]"
                  style={{ top: '-8px', right: '0' }}
                  aria-hidden="true"
                >
                  {card.num}
                </div>
                <h4 className="font-[family-name:var(--font-syne-var)] text-base font-bold text-text mb-2">{card.title}</h4>
                <p className="text-base text-text-muted leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-12 mt-14 reveal">
            <div>
              <div className="font-[family-name:var(--font-syne-var)] text-5xl font-extrabold text-text leading-none">100+</div>
              <div className="text-base text-text-muted mt-1">Cleared developers</div>
            </div>
            <div>
              <div className="font-[family-name:var(--font-syne-var)] text-5xl font-extrabold text-text leading-none">7</div>
              <div className="text-base text-text-muted mt-1">Days to kickoff</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
