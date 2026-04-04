const stats = [
  { num: '7', label: 'Days from approval to project kickoff' },
  { num: '100+', label: 'Vetted developers ready on the bench' },
  { num: '$0', label: 'Upfront — bi-weekly billing only' },
  { num: '30', label: 'Day money-back guarantee, no questions' },
]

export default function Stats() {
  return (
    <section className="bg-bg-3 border-t border-b border-border" aria-label="Key numbers">
      <div className="grid grid-cols-2 md2:grid-cols-4 max-w-[1160px] mx-auto">
        {stats.map((stat, i) => {
          const classes = [
            'py-10 px-8 text-center border-border reveal',
            i > 0 ? `reveal-delay-${i}` : '',
            i < 3 ? 'md2:border-r' : '',
            i % 2 === 0 && i < 3 ? 'max-md2:border-r' : '',
            i >= 2 ? 'max-md2:border-t' : '',
          ].filter(Boolean).join(' ')

          return (
            <div key={i} className={classes}>
              <div className="font-[family-name:var(--font-syne-var)] text-5xl font-extrabold text-text leading-none mb-2">
                {stat.num}
              </div>
              <div className="text-sm text-text-muted leading-snug max-w-[160px] mx-auto">
                {stat.label}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
