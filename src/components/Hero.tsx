'use client'
import { useNDA } from '@/context/NDAContext'
import BlueprintScreens from './BlueprintScreens'

export default function Hero() {
  const { openNDA } = useNDA()

  return (
    <section className="relative overflow-hidden" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(200,104,26,0.07) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
      {/* Amber glow top-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-200px',
          right: '-100px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,104,26,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="w-full max-w-[1160px] mx-auto px-10">
        <div className="grid grid-cols-1 md2:grid-cols-[1fr_520px] gap-12 md2:gap-[80px] items-center relative z-[1]">
          {/* Left — Copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-border-2 rounded-[20px] px-3.5 py-1.5 text-xs text-text-muted mb-7 font-medium">
              <div className="w-1.5 h-1.5 rounded-full bg-green pulse-dot" />
              Now accepting new projects
            </div>

            <h1 className="font-[family-name:var(--font-syne-var)] text-[44px] md2:text-[62px] font-extrabold leading-[1.05] tracking-[-2px] mb-6">
              Where Tech<br />Founders<br /><em className="not-italic text-amber">Start.</em>
            </h1>

            <p className="text-base text-text-muted leading-[1.65] max-w-[62ch] mb-3 font-medium">
              We show you the <strong className="text-text font-semibold">full product — screen by screen</strong> — before you sign anything or pay a dollar. Then we build it.
            </p>

            <p className="text-[13px] text-text-dim mb-9 flex items-center gap-[7px] flex-wrap">
              <span className="text-[#1A1A14] text-sm">✓</span> No contract until you&apos;ve approved the visuals
              <span className="mx-1">·</span>
              <span className="text-[#1A1A14] text-sm">✓</span> No retainer
              <span className="mx-1">·</span>
              <span className="text-[#1A1A14] text-sm">✓</span> 30-day money-back guarantee
            </p>

            <div className="flex gap-3 items-center flex-wrap">
              <button
                onClick={() => document.getElementById('start')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-amber text-white px-7 py-3.5 rounded-lg text-[15px] font-semibold transition-all duration-150 hover:opacity-88 hover:-translate-y-0.5 cursor-pointer border-none font-[family-name:var(--font-epilogue-var)]"
              >
                Start Your Project →
              </button>
              <button
                onClick={openNDA}
                className="bg-transparent text-text-muted px-6 py-3.5 rounded-lg text-[15px] border border-border-2 transition-all duration-150 hover:border-amber hover:text-amber cursor-pointer font-[family-name:var(--font-epilogue-var)]"
              >
                Request Portfolio Access
              </button>
            </div>
          </div>

          {/* Right — Blueprint Preview Card */}
          <div className="blueprint-preview max-md2:order-[-1]">
            <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-amber mb-4 flex items-center gap-2">
              The Blueprint — delivered before you commit
              <span className="flex-1 h-px bg-border" />
            </div>

            <div className="bg-bg-3 border border-border-2 rounded-xl p-6 relative overflow-hidden" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.08)' }}>
              {/* Top amber line */}
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, var(--color-amber), transparent)' }} />

              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="font-[family-name:var(--font-syne-var)] text-[15px] font-bold text-text">Your product. Every screen.</div>
                <div className="flex items-center gap-[5px] text-[11px] text-green font-medium">
                  <div className="w-[5px] h-[5px] rounded-full bg-green shrink-0" />
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
