export default function Guarantee() {
  return (
    <section className="py-8 px-10" style={{ background: '#1C1A14' }} aria-label="Money-back guarantee">
      <div className="max-w-[1160px] mx-auto flex items-center justify-between gap-6 flex-wrap max-md2:flex-col max-md2:text-center">
        <div>
          <h3 className="font-[family-name:var(--font-syne-var)] text-xl font-extrabold text-white mb-1">
            <span className="text-amber">30-Day</span> Money-Back Guarantee
          </h3>
          <p className="text-base text-white/60 leading-relaxed max-w-[52ch]">
            Not satisfied in the first 30 days? Full refund. No questions asked.
          </p>
        </div>
        <div className="py-2.5 px-6 rounded-lg text-sm font-bold whitespace-nowrap font-[family-name:var(--font-syne-var)] border border-white/20 text-white">
          Zero Risk
        </div>
      </div>
    </section>
  )
}
