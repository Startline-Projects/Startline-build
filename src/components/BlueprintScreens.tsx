'use client'
import { useEffect, useRef, useState } from 'react'

const milestones = [
  { label: 'Discovery Call', sub: '45 min · free', done: true },
  { label: 'Blueprint Delivered', sub: 'Every screen designed', active: true },
  { label: 'Build Starts', sub: 'Team kicks off in 7 days', done: false },
]

export default function BlueprintScreens() {
  const [visible, setVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const fired = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !fired.current) {
          fired.current = true
          setVisible(true)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      {/* Milestone steps */}
      <div className="flex flex-col gap-0">
        {milestones.map((m, i) => (
          <div
            key={i}
            className="flex items-start gap-3.5 relative"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(8px)',
              transition: `opacity 0.35s ease ${i * 120}ms, transform 0.35s ease ${i * 120}ms`,
            }}
          >
            {/* Step indicator */}
            <div className="flex flex-col items-center shrink-0">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                style={{
                  background: m.done ? 'var(--color-text)' : m.active ? 'var(--color-amber)' : 'var(--color-bg-4)',
                  color: m.done || m.active ? '#fff' : 'var(--color-text-muted)',
                }}
              >
                {m.done ? '✓' : i + 1}
              </div>
              {i < milestones.length - 1 && (
                <div className="w-px h-6" style={{ background: 'var(--color-border)' }} aria-hidden="true" />
              )}
            </div>

            {/* Content */}
            <div className="pt-1 pb-4">
              <div className="text-sm font-semibold text-text">{m.label}</div>
              <div className="text-xs text-text-muted mt-0.5">{m.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Approval row */}
      <div
        className="flex items-center gap-3 p-3 rounded-lg mt-2"
        style={{
          background: 'rgba(200,104,26,0.06)',
          border: '1px solid rgba(200,104,26,0.15)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(6px)',
          transition: 'opacity 0.4s ease 400ms, transform 0.4s ease 400ms',
        }}
      >
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold text-white bg-amber"
        >
          ✓
        </div>
        <div>
          <div className="text-sm font-semibold text-text">You approve. Then we build.</div>
          <div className="text-xs text-text-muted mt-px">No payment until you sign off on the visuals.</div>
        </div>
      </div>
    </div>
  )
}
