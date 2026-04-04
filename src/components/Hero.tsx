'use client'
import { useNDA } from '@/context/NDAContext'
import BlueprintScreens from './BlueprintScreens'

export default function Hero() {
  const { openNDA } = useNDA()

  return (
    <section className="relative overflow-hidden" style={{ paddingTop: '100px', paddingBottom: '80px' }} aria-label="Hero">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(200,104,26,0.06) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none"
        style={{ top: '-200px', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(200,104,26,0.03) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="w-full max-w-[1160px] mx-auto px-10">
        <div className="grid grid-cols-1 md2:grid-cols-[1fr_520px] gap-12 md2:gap-20 items-center relative z-[1]">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 border border-border-2 rounded-full px-3.5 py-1.5 text-xs text-text-muted mb-7 font-medium">
              <div className="w-1.5 h-1.5 rounded-full bg-green pulse-dot" aria-hidden="true" />
              Accepting new projects
            </div>

            <h1 className="font-[family-name:var(--font-syne-var)] text-[44px] md2:text-[60px] font-extrabold leading-[1.05] tracking-tighter mb-6">
              See every screen<br />before you sign<br /><em className="not-italic text-amber">anything.</em>
            </h1>

            <p className="text-lg text-text-muted leading-relaxed max-w-[52ch] mb-4 font-normal">
              We design your <strong className="text-text font-medium">complete product visually</strong> — then build it with a dedicated team, daily standups, and a 30-day money-back guarantee.
            </p>

            <div className="text-sm text-text-dim mb-8 flex items-center gap-2 flex-wrap" aria-label="Trust signals">
              <span className="text-text">✓</span> No contract until you approve
              <span className="text-text-faint mx-1">·</span>
              <span className="text-text">✓</span> No retainer
              <span className="text-text-faint mx-1">·</span>
              <span className="text-text">✓</span> 30-day guarantee
            </div>

            <div className="flex gap-3 items-center flex-wrap">
              <button
                onClick={() => document.getElementById('start')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-amber text-white px-7 py-3.5 rounded-lg text-base font-semibold transition-all duration-150 hover:opacity-90 hover:-translate-y-px cursor-pointer border-none"
              >
                Start Your Project
              </button>
              <button
                onClick={openNDA}
                className="bg-transparent text-text-muted px-6 py-3.5 rounded-lg text-base border border-border-2 transition-all duration-150 hover:border-text-dim hover:text-text cursor-pointer"
              >
                View Our Work
              </button>
            </div>
          </div>

          {/* Right — Blueprint Card */}
          <div className="max-md2:order-[-1]" role="img" aria-label="Preview of the Blueprint — a complete visual of your product delivered before you sign">
            <div className="text-[11px] font-semibold tracking-widest uppercase text-amber mb-4 flex items-center gap-2">
              The Blueprint
              <span className="flex-1 h-px bg-border" aria-hidden="true" />
            </div>

            <div className="bg-bg-3 border border-border-2 rounded-xl p-6 relative overflow-hidden" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.07)' }}>
              <div className="absolute top-0 left-0 right-0 h-px bg-amber opacity-30" aria-hidden="true" />

              <div className="flex items-center justify-between mb-5">
                <div className="font-[family-name:var(--font-syne-var)] text-sm font-bold text-text">Your product. Every screen.</div>
                <div className="flex items-center gap-1.5 text-[11px] text-green font-medium">
                  <div className="w-1 h-1 rounded-full bg-green shrink-0" aria-hidden="true" />
                  Free · No commitment
                </div>
              </div>

              <BlueprintScreens />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
