export default function Footer() {
  return (
    <footer className="bg-dark py-16 px-10" role="contentinfo">
      <div className="max-w-[1160px] mx-auto flex items-center justify-between gap-6 flex-wrap">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5" aria-label="Startline — home">
          <div className="w-7 h-7 bg-amber rounded-[7px] flex items-center justify-center shrink-0">
            <svg width="11" height="13" viewBox="0 0 11 13" fill="none" aria-hidden="true">
              <path d="M1 1.5L10 6.5L1 11.5V1.5Z" fill="white" />
            </svg>
          </div>
          <div>
            <div className="font-[family-name:var(--font-syne-var)] font-bold text-base text-white">
              start<em className="not-italic text-amber">line</em>
            </div>
            <div className="text-[11px] mt-0.5 text-white/30">
              by Global Staffing
            </div>
          </div>
        </a>

        {/* Links */}
        <nav className="flex gap-6 text-sm text-white/40" aria-label="Footer navigation">
          <a href="#blueprint" className="transition-colors duration-150 hover:text-white/80">Blueprint</a>
          <a href="#how-it-works" className="transition-colors duration-150 hover:text-white/80">Process</a>
          <a href="#work" className="transition-colors duration-150 hover:text-white/80">Work</a>
          <a href="#team" className="transition-colors duration-150 hover:text-white/80">Team</a>
          <a href="#start" className="transition-colors duration-150 hover:text-white/80">Start</a>
        </nav>

        {/* Address */}
        <address className="text-sm text-right leading-relaxed text-white/30 not-italic">
          3 Parklane Blvd, Suite 1210W<br />
          Dearborn, MI 48126<br />
          sam@glostaffing.com
        </address>
      </div>

      <div className="mt-8 pt-7 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} aria-hidden="true">
        <div className="font-[family-name:var(--font-syne-var)] text-4xl font-extrabold tracking-tight text-white/[0.04]">
          Where Tech Founders Start.
        </div>
      </div>
    </footer>
  )
}
