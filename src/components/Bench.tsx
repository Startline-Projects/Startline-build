const cards = [
  {
    num: '01',
    title: 'English Assessment',
    desc: 'Written and spoken English tested and scored. Every developer can communicate clearly with US clients in writing and on calls.',
  },
  {
    num: '02',
    title: 'Technical Screening',
    desc: 'Live technical assessment reviewed by Sam. Real problems, real code, no shortcuts. We reject candidates who can\u2019t demonstrate actual depth.',
  },
  {
    num: '03',
    title: 'Background Check',
    desc: 'Full background verification on every developer before they join the bench. You don\u2019t have time to vet 100 people. We already did.',
  },
  {
    num: '04',
    title: 'References Called',
    desc: 'Previous employers and clients contacted directly. We verify the work history they claim before we put them in front of your project.',
  },
]

export default function Bench() {
  return (
    <section className="py-24">
      <div className="max-w-[1160px] mx-auto px-10">
        <div className="reveal">
          <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-amber mb-3.5">The Bench</div>
          <h2 className="font-[family-name:var(--font-syne-var)] text-[46px] font-extrabold tracking-[-1.2px] leading-[1.08] mb-4">
            We don&rsquo;t post a job listing<br />when you sign.
          </h2>
          <p className="text-base text-text-muted leading-[1.65] max-w-[62ch] font-medium">
            We already have your team. Over <strong className="text-text font-semibold">100 developers</strong> cleared and ready. Every one of them passed four layers of vetting before joining the bench.
          </p>
        </div>

        {/* 4 cards — emoji icons removed, numbers carry hierarchy */}
        <div className="grid grid-cols-2 md2:grid-cols-4 gap-4 mt-12">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`bg-bg-3 border border-border rounded-xl py-7 px-6 relative overflow-hidden reveal ${i > 0 ? `reveal-delay-${i}` : ''}`}
            >
              {/* Decorative number */}
              <div
                className="absolute pointer-events-none font-[family-name:var(--font-syne-var)] text-[72px] font-extrabold leading-none text-border"
                style={{ top: '-10px', right: '12px' }}
              >
                {card.num}
              </div>
              <h3 className="font-[family-name:var(--font-syne-var)] text-base font-bold text-text mb-2">{card.title}</h3>
              <p className="text-base text-text-muted leading-[1.65] font-medium">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 bg-bg-3 border border-border-2 rounded-xl py-7 px-8 flex items-center justify-between gap-6 flex-wrap reveal">
          <div>
            <h3 className="font-[family-name:var(--font-syne-var)] text-[22px] font-bold mb-1.5">Your team. Assembled in 7 days.</h3>
            <p className="text-base text-text-muted font-medium">We match the right developers from the bench to your specific stack and project. You meet them before they start. No surprises.</p>
          </div>
          <div className="flex gap-8 shrink-0">
            <div className="text-center">
              <div className="font-[family-name:var(--font-syne-var)] text-5xl font-extrabold text-[#1A1A14] leading-none">100+</div>
              <div className="text-xs text-text-muted mt-1">Cleared developers</div>
            </div>
            <div className="text-center">
              <div className="font-[family-name:var(--font-syne-var)] text-5xl font-extrabold text-[#1A1A14] leading-none">7</div>
              <div className="text-xs text-text-muted mt-1">Days to kickoff</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
