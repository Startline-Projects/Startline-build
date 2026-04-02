'use client'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[200] transition-all duration-300"
      style={scrolled ? {
        background: 'rgba(248,245,240,0.97)',
        borderBottom: '1px solid var(--color-border)',
        backdropFilter: 'blur(16px)',
      } : undefined}
    >
      <div className="flex items-center justify-between px-10 py-[18px] max-w-[1160px] mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-amber rounded-[7px] flex items-center justify-center shrink-0">
            <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.5L10 6.5L1 11.5V1.5Z" fill="white" />
            </svg>
          </div>
          <div>
            <div className="font-[family-name:var(--font-syne-var)] font-bold text-lg text-text tracking-[-0.3px]">
              start<em className="not-italic text-amber">line</em>
            </div>
            <div className="text-[10px] text-text-dim tracking-[0.04em] font-normal">
              This is where tech founders start
            </div>
          </div>
        </div>

        {/* Nav links — hidden on mobile */}
        <div className="hidden md2:flex items-center gap-8 text-[13px] text-text-muted">
          <a href="#blueprint" className="transition-colors duration-150 hover:text-text">The Blueprint</a>
          <a href="#how-it-works" className="transition-colors duration-150 hover:text-text">How It Works</a>
          <a href="#work" className="transition-colors duration-150 hover:text-text">Our Work</a>
          <a href="#team" className="transition-colors duration-150 hover:text-text">Meet the Team</a>
        </div>

        {/* CTA */}
        <a
          href="#start"
          className="bg-dark text-white px-[22px] py-[9px] rounded-lg text-[13px] font-semibold transition-opacity duration-150 hover:opacity-85 font-[family-name:var(--font-epilogue-var)]"
        >
          Start Your Project →
        </a>
      </div>
    </nav>
  )
}
