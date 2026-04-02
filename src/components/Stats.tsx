const stats = [
  { num: '7', label: 'Days to project kickoff from Blueprint approval' },
  { num: '100+', label: 'Vetted developers on the bench, ready to go' },
  { num: '$0', label: 'Upfront. Bi-weekly payments only as we build' },
  { num: '30', label: 'Day full money-back guarantee from contract signing' },
]

export default function Stats() {
  return (
    <div className="bg-bg-3 border-t border-b border-border">
      <div className="grid grid-cols-2 md2:grid-cols-4 max-w-[1160px] mx-auto">
        {stats.map((stat, i) => {
          // Border logic: right border on all except last in row
          // Desktop (4-col): right border on 0,1,2
          // Mobile (2-col): right border on 0,2; top border on 2,3
          const classes = [
            'py-8 px-10 text-center border-border reveal',
            i > 0 ? `reveal-delay-${i}` : '',
            // Desktop: right border except last
            i < 3 ? 'md2:border-r' : '',
            // Mobile: right border on odd-column items (0, 2)
            i % 2 === 0 && i < 3 ? 'max-md2:border-r' : '',
            // Mobile: top border on second row
            i >= 2 ? 'max-md2:border-t' : '',
          ].filter(Boolean).join(' ')

          return (
            <div key={i} className={classes}>
              <div className="font-[family-name:var(--font-syne-var)] text-4xl font-extrabold text-amber leading-none mb-1.5">
                {stat.num}
              </div>
              <div className="text-xs text-text-muted leading-[1.5] max-w-[140px] mx-auto">
                {stat.label}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
