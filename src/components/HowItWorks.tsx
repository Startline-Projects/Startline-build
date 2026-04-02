const steps = [
  {
    num: 1,
    title: 'Fill the intake form',
    desc: (
      <>Tell us what you need to build. Takes 5 minutes. No commitment. Our team reviews it before we schedule the call so Ahmed and Sam walk in prepared — not cold.</>
    ),
    tag: '5 minutes',
  },
  {
    num: 2,
    title: 'Meet Ahmed and Sam',
    desc: (
      <>45-minute video call. <strong className="text-text font-medium">Ahmed covers business fit and commercial structure.</strong> <strong className="text-text font-medium">Sam covers the technical scope.</strong> You walk out knowing exactly what the product requires and what it will cost to build it.</>
    ),
    tag: '45-minute call',
  },
  {
    num: 3,
    title: 'Receive The Blueprint',
    desc: (
      <>We deliver a <strong className="text-text font-medium">complete screen-by-screen visual of your product.</strong> Every page. Every flow. Every interaction. Free. No contract. No payment. You approve it or you walk away — your choice.</>
    ),
    tag: 'Free · No commitment',
  },
  {
    num: 4,
    title: 'Sign and kick off',
    desc: (
      <>You approve the Blueprint. You sign the agreement. <strong className="text-text font-medium">Team is assembled from the bench in 7 days.</strong> Bi-weekly payments begin. Daily morning huddles start. Sam runs the build.</>
    ),
    tag: '7 days to kickoff',
  },
  {
    num: 5,
    title: 'Launch — you own everything',
    desc: (
      <>Full handover on delivery. All source code, all accounts, all credentials. <strong className="text-text font-medium">You own 100% of what we built.</strong> Nothing held back. Not happy in the first 30 days? Full refund of everything you&rsquo;ve paid.</>
    ),
    tag: 'Full ownership · 30-day guarantee',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24" id="how-it-works">
      <div className="max-w-[1160px] mx-auto px-10">
        <div className="reveal">
          <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-amber mb-3.5">The Process</div>
          <h2 className="font-[family-name:var(--font-syne-var)] text-[46px] font-extrabold tracking-[-1.2px] leading-[1.08] mb-4">
            From idea to<br />shipped product.
          </h2>
          <p className="text-[17px] text-text-muted leading-[1.75] max-w-[580px] font-light">
            Five steps. No ambiguity. No retainers. No surprises.
          </p>
        </div>

        <div className="flex flex-col mt-14 max-w-[760px]">
          {steps.map((step, i) => (
            <div
              key={i}
              className="grid grid-cols-[60px_1fr] gap-7 py-8 relative reveal"
              style={i < steps.length - 1 ? { borderBottom: '1px solid var(--color-border)' } : undefined}
            >
              {/* Left — number + connector */}
              <div className="flex flex-col items-center">
                <div className="w-11 h-11 rounded-full border border-border-2 flex items-center justify-center font-[family-name:var(--font-syne-var)] text-base font-bold text-amber shrink-0 bg-bg-2">
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-2" />
                )}
              </div>

              {/* Right — content */}
              <div className="pt-2.5">
                <div className="font-[family-name:var(--font-syne-var)] text-xl font-bold mb-2">{step.title}</div>
                <p className="text-[15px] text-text-muted leading-[1.7] max-w-[560px]">{step.desc}</p>
                <div className="inline-block text-[11px] py-[3px] px-2.5 rounded-[20px] font-semibold mt-2.5" style={{ background: 'rgba(200,104,26,0.08)', color: 'var(--color-amber)' }}>
                  {step.tag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
