const stats = [
  { num: '7', label: 'Days from approval to kickoff' },
  { num: '100+', label: 'Vetted developers on the bench' },
  { num: '$0', label: 'Upfront — bi-weekly billing only' },
  { num: '30', label: 'Day money-back guarantee' },
]

export default function Stats() {
  return (
    <section className="bg-bg-3 py-20" aria-label="Key numbers">
      <div className="grid grid-cols-2 md2:grid-cols-4 max-w-[1160px] mx-auto px-10">
        {stats.map((stat, i) => (
          <div key={i} className={`py-8 px-6 text-center reveal ${i > 0 ? `reveal-delay-${i}` : ''}`}>
            <div className="font-[family-name:var(--font-syne-var)] text-6xl md2:text-7xl font-extrabold text-text leading-none mb-3">
              {stat.num}
            </div>
            <div className="text-base text-text-muted leading-snug max-w-[160px] mx-auto">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
