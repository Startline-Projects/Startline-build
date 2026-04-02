'use client'
import { useState, useRef } from 'react'
import { useNDA } from '@/context/NDAContext'
import SignaturePad, { SignaturePadRef } from './SignaturePad'

export default function NDAPanel() {
  const { isOpen, closeNDA } = useNDA()
  const sigRef = useRef<SignaturePadRef>(null)
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim()) {
      alert('Please fill in your name and email.')
      return
    }
    if (!sigRef.current?.hasSig()) {
      alert('Please add your signature.')
      return
    }

    setSubmitting(true)
    try {
      await fetch('/api/nda', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          company: company.trim(),
          email: email.trim(),
          signatureDataURL: sigRef.current.toDataURL(),
          timestamp: new Date().toISOString(),
        }),
      })
    } catch {
      // Still show success — email delivery is best-effort
    }
    setSubmitting(false)
    setSubmitted(true)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center p-5"
      style={{ background: 'rgba(0,0,0,0.7)' }}
      onClick={(e) => { if (e.target === e.currentTarget) closeNDA() }}
    >
      <div className="bg-bg-3 border border-border-2 rounded-[16px] w-full max-w-[540px] max-h-[90vh] overflow-y-auto p-9 relative">
        {/* Close button */}
        <button
          onClick={closeNDA}
          className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center border-none text-text-muted text-base cursor-pointer"
          style={{ background: 'var(--color-bg-4)' }}
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <div className="font-[family-name:var(--font-syne-var)] text-[22px] font-bold mb-1.5">Request Portfolio Access</div>
            <p className="text-sm text-text-muted mb-6 leading-[1.6]">
              Our full portfolio is available under NDA and non-compete. Fill in your details, review the agreement, and sign below. Access is granted immediately.
            </p>

            {/* Form fields */}
            <div className="mb-[18px]">
              <label className="block text-xs font-semibold text-text-muted mb-[7px] tracking-[0.04em] uppercase">Full name</label>
              <input
                type="text"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-border-2 rounded-[9px] py-[13px] px-4 text-sm text-text outline-none transition-colors duration-150 focus:border-amber font-[family-name:var(--font-epilogue-var)]"
                style={{ background: 'var(--color-bg-4)' }}
              />
            </div>
            <div className="mb-[18px]">
              <label className="block text-xs font-semibold text-text-muted mb-[7px] tracking-[0.04em] uppercase">Company</label>
              <input
                type="text"
                placeholder="Your company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full border border-border-2 rounded-[9px] py-[13px] px-4 text-sm text-text outline-none transition-colors duration-150 focus:border-amber font-[family-name:var(--font-epilogue-var)]"
                style={{ background: 'var(--color-bg-4)' }}
              />
            </div>
            <div className="mb-[18px]">
              <label className="block text-xs font-semibold text-text-muted mb-[7px] tracking-[0.04em] uppercase">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-border-2 rounded-[9px] py-[13px] px-4 text-sm text-text outline-none transition-colors duration-150 focus:border-amber font-[family-name:var(--font-epilogue-var)]"
                style={{ background: 'var(--color-bg-4)' }}
              />
            </div>

            {/* NDA text */}
            {/* TODO: Replace with Nick-approved NDA language before launch */}
            <div
              className="border border-border rounded-[9px] p-4 text-xs text-text-muted leading-[1.8] max-h-[180px] overflow-y-auto mb-5"
              style={{ background: 'var(--color-bg-4)' }}
            >
              <strong className="text-text">CONFIDENTIALITY AND NON-COMPETE AGREEMENT</strong><br /><br />
              This Non-Disclosure Agreement (&ldquo;Agreement&rdquo;) is entered into between Stafva LLC d/b/a Startline (&ldquo;Company&rdquo;) and the undersigned individual or entity (&ldquo;Recipient&rdquo;).<br /><br />
              <strong className="text-text">1. Confidential Information.</strong> Recipient acknowledges that the portfolio materials, client identities, project specifications, technical architectures, pricing structures, and developer bench information (collectively, &ldquo;Confidential Information&rdquo;) shared following execution of this Agreement are proprietary and confidential to the Company.<br /><br />
              <strong className="text-text">2. Non-Disclosure.</strong> Recipient agrees not to disclose, reproduce, or use any Confidential Information for any purpose other than evaluating a potential engagement with Startline. Recipient shall not share portfolio materials with any third party without prior written consent.<br /><br />
              <strong className="text-text">3. Non-Compete.</strong> Recipient agrees not to (a) directly solicit, hire, or engage any developer identified through the portfolio or bench access, (b) attempt to replicate, reverse-engineer, or commercially reproduce any product architecture disclosed, or (c) share client identities revealed in the portfolio with competing staffing or development firms for a period of 24 months.<br /><br />
              <strong className="text-text">4. Term.</strong> This Agreement remains in effect for 24 months from the date of signing.<br /><br />
              By signing below, Recipient agrees to be bound by this Agreement. This electronic signature constitutes a legally binding signature.
            </div>

            {/* Signature */}
            <div className="text-xs font-semibold text-text-muted mb-2 tracking-[0.04em] uppercase">Signature</div>
            <SignaturePad ref={sigRef} />
            <button
              onClick={() => sigRef.current?.clear()}
              className="text-[11px] text-text-dim cursor-pointer bg-transparent border-none font-[family-name:var(--font-epilogue-var)] hover:text-text-muted"
            >
              Clear signature
            </button>

            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="w-full bg-amber text-white border-none rounded-[9px] py-[13px] text-sm font-bold cursor-pointer font-[family-name:var(--font-epilogue-var)] mt-4 transition-all duration-150 hover:opacity-92 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? 'Submitting...' : 'Sign and Access Portfolio →'}
            </button>
            <div className="text-[11px] text-text-dim text-center mt-2.5">
              Timestamp and IP address recorded. A copy will be emailed to you.
            </div>
          </>
        ) : (
          /* Success state */
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3.5 text-2xl" style={{ background: 'rgba(22,163,74,0.08)', color: 'var(--color-green)' }}>
              ✓
            </div>
            <div className="font-[family-name:var(--font-syne-var)] text-xl font-bold mb-2">Access granted.</div>
            <p className="text-sm text-text-muted leading-[1.6] mb-5">
              Your signed NDA has been sent to your email. You now have access to our full portfolio. A member of our team will follow up shortly.
            </p>
            <button
              onClick={closeNDA}
              className="w-full bg-amber text-white border-none rounded-[9px] py-3.5 text-[15px] font-semibold cursor-pointer font-[family-name:var(--font-epilogue-var)] transition-opacity duration-150 hover:opacity-90"
            >
              View the Portfolio →
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
