'use client'
import { useNDA } from '@/context/NDAContext'

export default function Hero() {
  const { openNDA } = useNDA()

  return (
    <section className="min-h-screen flex items-center py-[120px_0_80px] relative overflow-hidden" style={{ padding: '120px 0 80px' }}>
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

            <p className="text-lg text-text-muted leading-[1.75] max-w-[480px] mb-3 font-light">
              We show you the <strong className="text-text font-medium">full product — screen by screen</strong> — before you sign anything or pay a dollar. Then we build it.
            </p>

            <p className="text-[13px] text-text-dim mb-9 flex items-center gap-[7px] flex-wrap">
              <span className="text-amber text-sm">✓</span> No contract until you&apos;ve approved the visuals
              <span className="mx-1">·</span>
              <span className="text-amber text-sm">✓</span> No retainer
              <span className="mx-1">·</span>
              <span className="text-amber text-sm">✓</span> 30-day money-back guarantee
            </p>

            <div className="flex gap-3 items-center flex-wrap">
              <button
                onClick={() => document.getElementById('start')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-amber text-white px-7 py-3.5 rounded-[9px] text-[15px] font-semibold transition-all duration-150 hover:opacity-90 hover:-translate-y-px cursor-pointer border-none font-[family-name:var(--font-epilogue-var)]"
              >
                Start Your Project →
              </button>
              <button
                onClick={openNDA}
                className="bg-transparent text-text-muted px-6 py-3.5 rounded-[9px] text-[15px] border border-border-2 transition-all duration-150 hover:border-amber hover:text-amber cursor-pointer font-[family-name:var(--font-epilogue-var)]"
              >
                Request Portfolio Access
              </button>
            </div>
          </div>

          {/* Right — Blueprint Preview Card */}
          <div className="blueprint-preview max-md2:order-[-1]">
            <div className="text-[10px] font-bold tracking-[0.12em] uppercase text-amber mb-4 flex items-center gap-2">
              The Blueprint — delivered before you commit
              <span className="flex-1 h-px bg-border" />
            </div>

            <div className="bg-bg-3 border border-border-2 rounded-[16px] p-6 relative overflow-hidden">
              {/* Top amber line */}
              <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: 'linear-gradient(90deg, transparent, var(--color-amber), transparent)' }} />

              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="font-[family-name:var(--font-syne-var)] text-[15px] font-bold text-text">Your product. Every screen.</div>
                <div className="flex items-center gap-[5px] text-[11px] text-green font-medium">
                  <div className="w-[5px] h-[5px] rounded-full bg-green" />
                  Free · No commitment
                </div>
              </div>

              {/* Three screen previews */}
              <div className="flex gap-2.5 mb-5">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="flex-1 rounded-[10px] overflow-hidden border border-border bg-bg-4">
                    <div className="h-7 flex items-center px-2.5 gap-[5px]" style={{ background: 'var(--color-bg-5)' }}>
                      <div className="w-[5px] h-[5px] rounded-full" style={{ background: '#ff5f57' }} />
                      <div className="w-[5px] h-[5px] rounded-full" style={{ background: '#febc2e' }} />
                      <div className="w-[5px] h-[5px] rounded-full" style={{ background: '#28c840' }} />
                    </div>
                    <div className="p-2.5 flex flex-col gap-[5px]">
                      {i === 0 && (
                        <>
                          <div className="h-1 rounded-sm w-[60%]" style={{ background: 'rgba(245,166,35,.3)' }} />
                          <div className="h-1 rounded-sm w-full bg-border-2" />
                          <div className="h-1 rounded-sm w-[70%] bg-border-2" />
                          <div className="rounded-md p-1.5" style={{ background: 'var(--color-bg-5)' }}>
                            <div className="h-1 rounded-sm w-[60%] mb-1" style={{ background: 'rgba(245,166,35,.4)' }} />
                            <div className="h-1 rounded-sm w-[80%] bg-border" />
                          </div>
                        </>
                      )}
                      {i === 1 && (
                        <>
                          <div className="h-1 rounded-sm w-full bg-border-2" />
                          <div className="h-1 rounded-sm w-[60%]" style={{ background: 'rgba(245,166,35,.3)' }} />
                          <div className="rounded-md p-1.5" style={{ background: 'var(--color-bg-5)' }}>
                            <div className="h-1 rounded-sm w-full mb-1" style={{ background: 'rgba(245,166,35,.3)' }} />
                            <div className="h-1 rounded-sm w-[40%] bg-border" />
                          </div>
                          <div className="h-1 rounded-sm w-[70%] bg-border-2" />
                        </>
                      )}
                      {i === 2 && (
                        <>
                          <div className="h-1 rounded-sm w-[60%]" style={{ background: 'rgba(245,166,35,.3)' }} />
                          <div className="h-1 rounded-sm w-[40%] bg-border-2" />
                          <div className="rounded-md p-1.5" style={{ background: 'var(--color-bg-5)' }}>
                            <div className="h-1 rounded-sm w-[80%] mb-1" style={{ background: 'rgba(245,166,35,.25)' }} />
                            <div className="h-1 rounded-sm w-full bg-border" />
                          </div>
                          <div className="h-1 rounded-sm w-[70%] bg-border-2" />
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* More screens row */}
              <div className="flex gap-2 mb-4">
                {[
                  { a: true, w2: '100%', w3: '70%' },
                  { a: false, w1: '100%', aIdx: 2, w3: '80%' },
                  { a: true, w2: '60%', w3: '100%' },
                  { a: false, w1: '80%', aIdx: 2, w3: '50%' },
                ].map((screen, idx) => (
                  <div key={idx} className="flex-1 rounded-lg overflow-hidden border border-border bg-bg-4">
                    <div className="h-5 flex items-center px-[7px] gap-[3px]" style={{ background: 'var(--color-bg-5)' }}>
                      <div className="w-1 h-1 rounded-full" style={{ background: '#ff5f57' }} />
                      <div className="w-1 h-1 rounded-full" style={{ background: '#febc2e' }} />
                    </div>
                    <div className="p-[7px] flex flex-col gap-1">
                      {idx === 0 && (
                        <>
                          <div className="h-[3px] rounded-sm w-[55%]" style={{ background: 'rgba(245,166,35,.25)' }} />
                          <div className="h-[3px] rounded-sm w-full bg-border-2" />
                          <div className="h-[3px] rounded-sm w-[70%] bg-border-2" />
                        </>
                      )}
                      {idx === 1 && (
                        <>
                          <div className="h-[3px] rounded-sm w-full bg-border-2" />
                          <div className="h-[3px] rounded-sm w-[55%]" style={{ background: 'rgba(245,166,35,.25)' }} />
                          <div className="h-[3px] rounded-sm w-[80%] bg-border-2" />
                        </>
                      )}
                      {idx === 2 && (
                        <>
                          <div className="h-[3px] rounded-sm w-[55%]" style={{ background: 'rgba(245,166,35,.25)' }} />
                          <div className="h-[3px] rounded-sm w-[60%] bg-border-2" />
                          <div className="h-[3px] rounded-sm w-full bg-border-2" />
                        </>
                      )}
                      {idx === 3 && (
                        <>
                          <div className="h-[3px] rounded-sm w-[80%] bg-border-2" />
                          <div className="h-[3px] rounded-sm w-[55%]" style={{ background: 'rgba(245,166,35,.25)' }} />
                          <div className="h-[3px] rounded-sm w-[50%] bg-border-2" />
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Approval state */}
              <div className="flex items-center gap-2.5 p-3 rounded-[9px] border" style={{ background: 'rgba(200,104,26,0.08)', borderColor: 'rgba(245,166,35,0.2)' }}>
                <div className="w-6 h-6 rounded-full bg-amber flex items-center justify-center shrink-0 text-xs text-[#0E0E0D] font-bold">
                  ✓
                </div>
                <div>
                  <div className="text-xs text-text font-medium">Blueprint approved — build starts</div>
                  <div className="text-[11px] text-text-muted mt-px">You sign the agreement. Team kicks off in 7 days.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
