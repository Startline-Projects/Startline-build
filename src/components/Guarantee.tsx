export default function Guarantee() {
  return (
    <div className="bg-amber py-7 px-10">
      <div className="max-w-[1160px] mx-auto flex items-center justify-between gap-6 flex-wrap max-md2:flex-col max-md2:text-center">
        <div>
          <h3 className="font-[family-name:var(--font-syne-var)] text-[22px] font-extrabold text-[#0E0E0D] mb-1">
            30-Day Money-Back Guarantee
          </h3>
          <p className="text-sm" style={{ color: 'rgba(14,14,13,0.65)' }}>
            Not satisfied with the team or the build in the first 30 days from contract signing? Full refund of everything you&rsquo;ve paid. No questions asked. No fine print.
          </p>
        </div>
        <div className="bg-[#0E0E0D] text-amber py-2.5 px-6 rounded-lg text-sm font-bold whitespace-nowrap font-[family-name:var(--font-syne-var)]">
          Zero Risk to You
        </div>
      </div>
    </div>
  )
}
