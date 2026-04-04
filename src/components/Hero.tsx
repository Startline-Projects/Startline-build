'use client'
import { useNDA } from '@/context/NDAContext'

export default function Hero() {
  const { openNDA } = useNDA()

  return (
    <section className="min-h-[100dvh] flex items-center justify-center text-center" aria-label="Hero">
      <div className="w-full max-w-[800px] mx-auto px-10">
        <div className="inline-flex items-center gap-2 bg-bg-3 rounded-full px-4 py-1.5 text-xs text-text-muted mb-8 font-medium">
          <div className="w-1.5 h-1.5 rounded-full bg-green pulse-dot" aria-hidden="true" />
          Accepting new projects
        </div>

        <h1 className="font-[family-name:var(--font-syne-var)] text-[48px] md2:text-[80px] font-extrabold leading-[1.02] tracking-tighter mb-6">
          See every screen<br />before you sign<br /><em className="not-italic text-amber">anything.</em>
        </h1>

        <p className="text-lg md2:text-xl text-text-muted leading-relaxed max-w-[48ch] mx-auto mb-10">
          We design your <strong className="text-text font-medium">complete product visually</strong> — then build it with a dedicated team and a 30-day money-back guarantee.
        </p>

        <div className="flex gap-3 items-center justify-center flex-wrap">
          <button
            onClick={() => document.getElementById('start')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-amber text-white px-8 py-4 rounded-lg text-base font-semibold transition-all duration-150 hover:opacity-90 hover:-translate-y-px cursor-pointer border-none"
          >
            Start Your Project
          </button>
          <button
            onClick={openNDA}
            className="bg-transparent text-text-muted px-7 py-4 rounded-lg text-base border border-border transition-all duration-150 hover:text-text cursor-pointer"
          >
            View Our Work
          </button>
        </div>
      </div>
    </section>
  )
}
