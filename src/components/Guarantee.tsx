export default function Guarantee() {
  return (
    <div className="py-7 px-10" style={{ background: '#1C1A14' }}>
      <div className="max-w-[1160px] mx-auto flex items-center justify-between gap-6 flex-wrap max-md2:flex-col max-md2:text-center">
        <div>
          <h3 className="font-[family-name:var(--font-syne-var)] text-[22px] font-extrabold text-white mb-1">
            <span className="text-amber">30-Day</span> Money-Back Guarantee
          </h3>
          <p className="text-base font-medium leading-[1.65]" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '62ch' }}>
            Not satisfied with the team or the build in the first 30 days from contract signing? Full refund of everything you&rsquo;ve paid. No questions asked. No fine print.
          </p>
        </div>
        <div className="py-2.5 px-6 rounded-lg text-sm font-bold whitespace-nowrap font-[family-name:var(--font-syne-var)] border border-white/20 text-white">
          Zero Risk to You
        </div>
      </div>
    </div>
  )
}
