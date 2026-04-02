export default function Footer() {
  return (
    <footer className="bg-dark py-10 px-10" style={{ borderTop: '1px solid #1C1B1A' }}>
      <div className="max-w-[1160px] mx-auto flex items-center justify-between gap-6 flex-wrap">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-amber rounded-[7px] flex items-center justify-center shrink-0">
            <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.5L10 6.5L1 11.5V1.5Z" fill="white" />
            </svg>
          </div>
          <div>
            <div className="font-[family-name:var(--font-syne-var)] font-bold text-base text-white">
              start<em className="not-italic text-amber">line</em>
            </div>
            <div className="text-[11px] mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>
              This is where tech founders start · by Global Staffing
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-[13px]" style={{ color: 'rgba(255,255,255,0.4)' }}>
          <a href="#blueprint" className="transition-colors duration-150 hover:text-white/80">The Blueprint</a>
          <a href="#how-it-works" className="transition-colors duration-150 hover:text-white/80">How It Works</a>
          <a href="#work" className="transition-colors duration-150 hover:text-white/80">Our Work</a>
          <a href="#team" className="transition-colors duration-150 hover:text-white/80">Meet the Team</a>
          <a href="#start" className="transition-colors duration-150 hover:text-white/80">Start Your Project</a>
        </div>

        {/* Address */}
        <div className="text-xs text-right leading-[1.7]" style={{ color: 'rgba(255,255,255,0.3)' }}>
          3 Parklane Blvd, Suite 1210W<br />
          Dearborn, MI 48126<br />
          sam@glostaffing.com
        </div>
      </div>

      {/* Bottom closing line */}
      <div className="mt-8 pt-7 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div
          className="font-[family-name:var(--font-syne-var)] text-4xl font-extrabold tracking-[-0.5px]"
          style={{ color: 'rgba(255,255,255,0.06)' }}
        >
          Where Tech Founders Start.
        </div>
      </div>
    </footer>
  )
}
