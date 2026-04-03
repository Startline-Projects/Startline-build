'use client'
import { useRef, useEffect, useCallback, forwardRef, useImperativeHandle, useState } from 'react'

export interface SignaturePadRef {
  clear: () => void
  hasSig: () => boolean
  toDataURL: () => string
}

const SignaturePad = forwardRef<SignaturePadRef>(function SignaturePad(_, ref) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const isDrawingRef = useRef(false)
  const lastPosRef = useRef({ x: 0, y: 0 })
  const hasSignatureRef = useRef(false)
  const [showPlaceholder, setShowPlaceholder] = useState(true)

  const getPos = useCallback((canvas: HTMLCanvasElement, e: MouseEvent | Touch) => {
    const r = canvas.getBoundingClientRect()
    return {
      x: e.clientX - r.left,
      y: e.clientY - r.top,
    }
  }, [])

  useEffect(() => {
    const c = canvasRef.current
    if (!c) return
    const ctx = c.getContext('2d')
    if (!ctx) return

    ctx.strokeStyle = '#C8681A'
    ctx.lineWidth = 2.5
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'

    const startDraw = (x: number, y: number) => {
      isDrawingRef.current = true
      lastPosRef.current = { x, y }
      setShowPlaceholder(false)
    }

    const draw = (x: number, y: number) => {
      if (!isDrawingRef.current) return
      ctx.beginPath()
      ctx.moveTo(lastPosRef.current.x, lastPosRef.current.y)
      ctx.lineTo(x, y)
      ctx.stroke()
      lastPosRef.current = { x, y }
      hasSignatureRef.current = true
    }

    const stopDraw = () => {
      isDrawingRef.current = false
    }

    const onMouseDown = (e: MouseEvent) => {
      const p = getPos(c, e)
      startDraw(p.x, p.y)
    }
    const onMouseMove = (e: MouseEvent) => {
      const p = getPos(c, e)
      draw(p.x, p.y)
    }
    const onTouchStart = (e: TouchEvent) => {
      e.preventDefault()
      const p = getPos(c, e.touches[0])
      startDraw(p.x, p.y)
    }
    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      const p = getPos(c, e.touches[0])
      draw(p.x, p.y)
    }

    c.addEventListener('mousedown', onMouseDown)
    c.addEventListener('mousemove', onMouseMove)
    c.addEventListener('mouseup', stopDraw)
    c.addEventListener('mouseleave', stopDraw)
    c.addEventListener('touchstart', onTouchStart, { passive: false })
    c.addEventListener('touchmove', onTouchMove, { passive: false })
    c.addEventListener('touchend', stopDraw)

    return () => {
      c.removeEventListener('mousedown', onMouseDown)
      c.removeEventListener('mousemove', onMouseMove)
      c.removeEventListener('mouseup', stopDraw)
      c.removeEventListener('mouseleave', stopDraw)
      c.removeEventListener('touchstart', onTouchStart)
      c.removeEventListener('touchmove', onTouchMove)
      c.removeEventListener('touchend', stopDraw)
    }
  }, [getPos])

  useImperativeHandle(ref, () => ({
    clear: () => {
      const c = canvasRef.current
      if (!c) return
      c.getContext('2d')?.clearRect(0, 0, c.width, c.height)
      hasSignatureRef.current = false
      setShowPlaceholder(true)
    },
    hasSig: () => hasSignatureRef.current,
    toDataURL: () => canvasRef.current?.toDataURL() || '',
  }))

  return (
    <div className="relative mb-2">
      <canvas
        ref={canvasRef}
        width={468}
        height={140}
        className="w-full h-[140px] rounded-lg cursor-crosshair"
        style={{
          background: '#F9F7F2',
          border: '2px dashed rgba(184,134,11,0.4)',
        }}
      />
      {showPlaceholder && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-[13px]" style={{ color: '#9A9080' }}>
          Draw your signature here
        </div>
      )}
      {/* Pen icon top-right */}
      <div className="absolute top-2 right-2 pointer-events-none" style={{ color: '#9A9080' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
          <path d="m15 5 4 4" />
        </svg>
      </div>
    </div>
  )
})

export default SignaturePad
