'use client'
import { useState, useEffect } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[200] transition-all duration-300"
      style={scrolled ? {
        background: 'rgba(245,240,232,0.88)',
        borderBottom: '1px solid var(--color-border)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      } : undefined}
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between px-10 py-4 max-w-[1160px] mx-auto">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5" aria-label="Startline — home">
          <div className="w-7 h-7 bg-amber rounded-[7px] flex items-center justify-center shrink-0">
            <svg width="11" height="13" viewBox="0 0 11 13" fill="none" aria-hidden="true">
              <path d="M1 1.5L10 6.5L1 11.5V1.5Z" fill="white" />
            </svg>
          </div>
          <div>
            <div className="font-[family-name:var(--font-syne-var)] font-bold text-lg text-text tracking-tight">
              start<em className="not-italic text-amber">line</em>
            </div>
            <div className="text-[10px] text-text-dim tracking-wide font-normal">
              Where tech founders start
            </div>
          </div>
        </a>

        {/* Nav links */}
        <div className="hidden md2:flex items-center gap-8 text-sm text-text-muted">
          <a href="#blueprint" className="transition-colors duration-150 hover:text-text">Blueprint</a>
          <a href="#how-it-works" className="transition-colors duration-150 hover:text-text">Process</a>
          <a href="#work" className="transition-colors duration-150 hover:text-text">Work</a>
          <a href="#team" className="transition-colors duration-150 hover:text-text">Team</a>
        </div>

        {/* CTA */}
        <a
          href="#start"
          className="bg-amber text-white px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-150 hover:opacity-90 hover:-translate-y-px"
        >
          Start Your Project
        </a>
      </div>
    </nav>
  )
}
