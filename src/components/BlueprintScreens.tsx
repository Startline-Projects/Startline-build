'use client'
import { useEffect, useRef, useState } from 'react'

const TOTAL_SCREENS = 7
const STAGGER_MS = 120
const APPROVED_DELAY_MS = 200

function Line({ w, color, h = 4 }: { w: string; color: string; h?: number }) {
  return <div style={{ height: h, borderRadius: 2, background: color, width: w }} />
}

const amber = 'rgba(200,104,26,0.35)'
const amberLight = 'rgba(200,104,26,0.2)'
const gray = '#D4D0C8'
const grayLight = '#DDD9D0'

function ScreenContent({ index }: { index: number }) {
  if (index === 0) return (
    <>
      <Line w="70%" color={amber} h={6} />
      <Line w="50%" color={gray} />
      <div style={{ height: 10, borderRadius: 5, background: 'rgba(200,104,26,0.5)', width: '35%' }} />
      <Line w="80%" color={grayLight} />
      <Line w="60%" color={grayLight} />
    </>
  )

  if (index === 1) return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5px', marginBottom: '4px' }}>
        {[0, 1].map(i => (
          <div key={i} style={{ background: '#E8E4DC', borderRadius: '5px', padding: '5px' }}>
            <Line w="60%" color={amber} h={5} />
            <div style={{ marginTop: 3 }}><Line w="80%" color={gray} h={3} /></div>
          </div>
        ))}
      </div>
      {[0, 1, 2].map(i => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: i === 0 ? amber : gray, flexShrink: 0 }} />
          <Line w="60%" color={gray} />
          <Line w="25%" color={grayLight} />
        </div>
      ))}
    </>
  )

  if (index === 2) return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '3px' }}>
        <div style={{ width: 22, height: 22, borderRadius: '50%', background: amberLight, flexShrink: 0 }} />
        <Line w="45%" color={amber} h={5} />
      </div>
      <Line w="90%" color={gray} />
      <Line w="75%" color={grayLight} />
      <Line w="55%" color={grayLight} />
      <div style={{ height: 8, borderRadius: 4, border: '1px solid rgba(200,104,26,0.3)', width: '40%', marginTop: '2px' }} />
    </>
  )

  if (index === 3) return (
    <>
      <Line w="100%" color={gray} h={8} />
      <Line w="100%" color={gray} h={8} />
      <div style={{ height: 8, borderRadius: 4, background: 'rgba(200,104,26,0.45)', width: '100%' }} />
    </>
  )

  if (index === 4) return (
    <div style={{ display: 'flex', gap: '5px', height: '100%' }}>
      <div style={{ width: '22%', background: '#E4E0D8', borderRadius: '4px' }} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Line w="70%" color={gray} />
          </div>
        ))}
      </div>
    </div>
  )

  if (index === 5) return (
    <>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', height: '50px' }}>
        {[60, 40, 75, 30, 55].map((h, i) => (
          <div key={i} style={{
            flex: 1,
            height: `${h}%`,
            borderRadius: '3px 3px 0 0',
            background: i % 2 === 0 ? 'rgba(200,104,26,0.5)' : 'rgba(200,104,26,0.25)',
          }} />
        ))}
      </div>
      <Line w="80%" color={gray} />
    </>
  )

  if (index === 6) return (
    <>
      <Line w="40%" color={amber} />
      {[0, 1].map(i => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Line w="55%" color={gray} />
          <div style={{ width: 18, height: 9, borderRadius: 5, background: i === 0 ? 'rgba(200,104,26,0.5)' : '#D4D0C8', flexShrink: 0 }} />
        </div>
      ))}
      <div style={{ height: 7, borderRadius: 4, background: 'rgba(200,104,26,0.4)', width: '50%' }} />
    </>
  )

  return null
}

function ScreenCard({ index, revealed, size }: { index: number; revealed: boolean; size: 'large' | 'small' }) {
  const height = size === 'large' ? 120 : 80

  return (
    <div style={{
      background: '#F0EDE8',
      borderRadius: size === 'large' ? '10px' : '8px',
      overflow: 'hidden',
      height,
      opacity: revealed ? 1 : 0,
      transform: revealed ? 'translateY(0)' : 'translateY(8px)',
      transition: 'opacity 0.35s ease, transform 0.35s ease',
    }}>
      <div style={{
        height: size === 'large' ? 20 : 16,
        background: '#E4E0D8',
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        gap: '4px',
        flexShrink: 0,
      }}>
        <div style={{ width: size === 'large' ? 6 : 5, height: size === 'large' ? 6 : 5, borderRadius: '50%', background: '#ff5f57' }} />
        <div style={{ width: size === 'large' ? 6 : 5, height: size === 'large' ? 6 : 5, borderRadius: '50%', background: '#febc2e' }} />
        <div style={{ width: size === 'large' ? 6 : 5, height: size === 'large' ? 6 : 5, borderRadius: '50%', background: '#28c840' }} />
      </div>
      <div style={{ padding: size === 'large' ? '10px' : '7px', display: 'flex', flexDirection: 'column', gap: '5px', flex: 1 }}>
        <ScreenContent index={index} />
      </div>
    </div>
  )
}

export default function BlueprintScreens() {
  const [revealedCount, setRevealedCount] = useState(0)
  const [approvedVisible, setApprovedVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const animatedRef = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          animatedRef.current = true
          for (let i = 0; i < TOTAL_SCREENS; i++) {
            setTimeout(() => {
              setRevealedCount(i + 1)
            }, i * STAGGER_MS)
          }
          setTimeout(() => {
            setApprovedVisible(true)
          }, (TOTAL_SCREENS - 1) * STAGGER_MS + APPROVED_DELAY_MS + 300)
        }
      },
      { threshold: 0.3 }
    )
    if (containerRef.current) observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef}>
      {/* Top row — 3 screens */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '10px' }}>
        {[0, 1, 2].map((i) => (
          <ScreenCard key={i} index={i} revealed={revealedCount > i} size="large" />
        ))}
      </div>
      {/* Bottom row — 4 screens */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '8px', marginBottom: '14px' }}>
        {[3, 4, 5, 6].map((i) => (
          <ScreenCard key={i} index={i} revealed={revealedCount > i} size="small" />
        ))}
      </div>

      {/* Blueprint approved row */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '12px 14px',
        background: 'rgba(200,104,26,0.07)',
        borderRadius: '9px',
        border: '1px solid rgba(200,104,26,0.2)',
        opacity: approvedVisible ? 1 : 0,
        transform: approvedVisible ? 'translateY(0)' : 'translateY(6px)',
        transition: 'opacity 0.4s ease, transform 0.4s ease',
      }}>
        <div style={{
          width: '24px', height: '24px', borderRadius: '50%',
          background: '#C8681A',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, fontSize: '12px', color: '#fff', fontWeight: 700,
        }}>✓</div>
        <div>
          <div style={{ fontSize: '13px', fontWeight: 600, color: '#1C1B1A' }}>Blueprint approved — build starts</div>
          <div style={{ fontSize: '11px', color: '#9A9590', marginTop: '1px' }}>You sign the agreement. Team kicks off in 7 days.</div>
        </div>
      </div>
    </div>
  )
}
