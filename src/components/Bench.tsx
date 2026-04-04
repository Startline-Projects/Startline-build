const cards = [
  { num: '01', title: 'English Assessment', desc: 'Written and spoken English tested and scored. Every developer communicates clearly with US clients.' },
  { num: '02', title: 'Technical Screening', desc: 'Live assessment reviewed by Sam. Real problems, real code. We reject anyone who can\u2019t demonstrate depth.' },
  { num: '03', title: 'Background Check', desc: 'Full verification on every developer before they join the bench. You don\u2019t vet 100 people. We already did.' },
  { num: '04', title: 'References Called', desc: 'Previous employers contacted directly. We verify work history before putting anyone on your project.' },
]

export default function Bench() {
  return (
    <section className="py-24" aria-label="The Bench — our vetting process">
      <div className="max-w-[1160px] mx-auto px-10">
        <div className="reveal">
          <div className="text-[11px] font-semibold tracking-widest uppercase text-amber mb-3.5">The Bench</div>
          <h2 className="font-[family-name:var(--font-syne-var)] text-4xl md2:text-[46px] font-extrabold tracking-tight leading-[1.08] mb-4">
            Your team is already<br />vetted and waiting.
          </h2>
          <p className="text-lg text-text-muted leading-relaxed max-w-[52ch]">
            Over <strong className="text-text font-medium">100 developers</strong> cleared through four layers of screening. When you sign, we assemble — not recruit.
          </p>
        </div>

        <div className="grid grid-cols-2 md2:grid-cols-4 gap-4 mt-12">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`bg-bg-3 border border-border rounded-xl py-7 px-6 relative overflow-hidden reveal ${i > 0 ? `reveal-delay-${i}` : ''}`}
            >
              <div
                className="absolute pointer-events-none font-[family-name:var(--font-syne-var)] text-[72px] font-extrabold leading-none text-border"
                style={{ top: '-10px', right: '12px' }}
                aria-hidden="true"
              >
                {card.num}
              </div>
              <h3 className="font-[family-name:var(--font-syne-var)] text-base font-bold text-text mb-2">{card.title}</h3>
              <p className="text-base text-text-muted leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-bg-3 border border-border-2 rounded-xl py-7 px-8 flex items-center justify-between gap-6 flex-wrap reveal">
          <div>
            <h3 className="font-[family-name:var(--font-syne-var)] text-xl font-bold mb-1">Assembled in 7 days.</h3>
            <p className="text-base text-text-muted leading-relaxed max-w-[48ch]">Matched to your stack and project. You meet them before they start.</p>
          </div>
          <div className="flex gap-8 shrink-0" aria-label="Bench statistics">
            <div className="text-center">
              <div className="font-[family-name:var(--font-syne-var)] text-5xl font-extrabold text-text leading-none">100+</div>
              <div className="text-sm text-text-muted mt-1">Cleared developers</div>
            </div>
            <div className="text-center">
              <div className="font-[family-name:var(--font-syne-var)] text-5xl font-extrabold text-text leading-none">7</div>
              <div className="text-sm text-text-muted mt-1">Days to kickoff</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
