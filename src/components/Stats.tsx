const stats = [
  { num: '7', label: 'Days to project kickoff from Blueprint approval' },
  { num: '100+', label: 'Vetted developers on the bench, ready to go' },
  { num: '$0', label: 'Upfront. Bi-weekly payments only as we build' },
  { num: '30', label: 'Day full money-back guarantee from contract signing' },
]

export default function Stats() {
  return (
    <div className="bg-bg-3 border-t border-b border-border">
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-[1160px] mx-auto">
        {stats.map((stat, i) => (
          <div
            key={i}
            className={`py-8 px-10 text-center border-border reveal ${
              i < 3 ? 'border-r max-md:[&:nth-child(2)]:border-r-0 max-md:[&:nth-child(3)]:border-t max-md:[&:nth-child(4)]:border-t' : ''
            } ${i > 0 ? `reveal-delay-${i}` : ''}`}
            style={{
              borderRightWidth: i < 3 ? '1px' : '0',
              borderRightColor: 'var(--color-border)',
            }}
          >
            <div className="font-[family-name:var(--font-syne-var)] text-4xl font-extrabold text-amber leading-none mb-1.5">
              {stat.num}
            </div>
            <div className="text-xs text-text-muted leading-[1.5] max-w-[140px] mx-auto">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
