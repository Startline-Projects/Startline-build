'use client'
import { useState } from 'react'

export default function IntakeForm() {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [email, setEmail] = useState('')
  const [whatToBuild, setWhatToBuild] = useState('')
  const [budgetRange, setBudgetRange] = useState('')
  const [targetLaunch, setTargetLaunch] = useState('')
  const [wireframes, setWireframes] = useState('Yes — I have wireframes or mockups')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !whatToBuild.trim()) {
      alert('Please fill in your name, email, and what you need to build.')
      return
    }

    setSubmitting(true)
    try {
      await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          company: company.trim(),
          email: email.trim(),
          whatToBuild: whatToBuild.trim(),
          budgetRange,
          targetLaunch: targetLaunch.trim(),
          wireframes,
        }),
      })
    } catch {
      // Still show success — email delivery is best-effort
    }
    setSubmitting(false)
    setSubmitted(true)
  }

  const inputClass = "w-full border border-border-2 rounded-[9px] py-[13px] px-4 text-sm text-text outline-none transition-colors duration-150 focus:border-amber font-[family-name:var(--font-epilogue-var)] placeholder:text-text-dim"
  const inputBg = { background: 'var(--color-bg-4)' }

  return (
    <section className="py-24 bg-bg-2 border-t border-border" id="start">
      <div className="max-w-[1160px] mx-auto px-10">
        <div className="grid grid-cols-1 md2:grid-cols-2 gap-20 items-start">
          {/* Left — Copy */}
          <div className="reveal">
            <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-amber mb-3.5">Start Here</div>
            <h2 className="font-[family-name:var(--font-syne-var)] text-[42px] font-extrabold tracking-[-1px] leading-[1.1] mb-4">
              Tell us what<br />you need to build.
            </h2>
            <p className="text-base text-text-muted leading-[1.65] mb-8 font-medium max-w-[62ch]">
              Fill out the form. Our team reviews it and calls you to schedule a 45-minute discovery call with Ahmed and Sam. No commitment. No pitch. Just a real conversation about your project.
            </p>
            <div className="flex flex-col gap-3">
              {[
                'Blueprint delivered free before you sign anything',
                'No contract until you approve the visuals',
                'No retainer — bi-weekly payments only',
                '30-day full money-back guarantee',
                'You own everything when it\u2019s done',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm text-text-muted">
                  <span className="text-amber text-base shrink-0">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="reveal reveal-delay-1">
            {!submitted ? (
              <div className="bg-bg-3 border border-border-2 rounded-[16px] p-8">
                <div className="grid grid-cols-2 gap-3.5">
                  <div className="mb-[18px]">
                    <label className="block text-xs font-semibold text-text-muted mb-[7px] tracking-[0.04em] uppercase">Your name</label>
                    <input type="text" placeholder="Ahmed Kassem" value={name} onChange={(e) => setName(e.target.value)} className={inputClass} style={inputBg} />
                  </div>
                  <div className="mb-[18px]">
                    <label className="block text-xs font-semibold text-text-muted mb-[7px] tracking-[0.04em] uppercase">Company</label>
                    <input type="text" placeholder="Acme Inc." value={company} onChange={(e) => setCompany(e.target.value)} className={inputClass} style={inputBg} />
                  </div>
                </div>
                <div className="mb-[18px]">
                  <label className="block text-xs font-semibold text-text-muted mb-[7px] tracking-[0.04em] uppercase">Email</label>
                  <input type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} style={inputBg} />
                </div>
                <div className="mb-[18px]">
                  <label className="block text-xs font-semibold text-text-muted mb-[7px] tracking-[0.04em] uppercase">What do you need to build?</label>
                  <textarea
                    placeholder="Describe your idea — what it does, who it's for, what problem it solves. The more detail the better."
                    value={whatToBuild}
                    onChange={(e) => setWhatToBuild(e.target.value)}
                    className={`${inputClass} resize-y min-h-[100px]`}
                    style={inputBg}
                  />
                </div>
                <div className="grid grid-cols-2 gap-3.5">
                  <div className="mb-[18px]">
                    <label className="block text-xs font-semibold text-text-muted mb-[7px] tracking-[0.04em] uppercase">Budget range</label>
                    <select value={budgetRange} onChange={(e) => setBudgetRange(e.target.value)} className={`${inputClass} cursor-pointer appearance-none`} style={inputBg}>
                      <option value="">Select range</option>
                      <option>Under $20,000</option>
                      <option>$20,000 – $50,000</option>
                      <option>$50,000 – $100,000</option>
                      <option>$100,000+</option>
                    </select>
                  </div>
                  <div className="mb-[18px]">
                    <label className="block text-xs font-semibold text-text-muted mb-[7px] tracking-[0.04em] uppercase">Target launch</label>
                    <input type="text" placeholder="e.g. Q3 2026" value={targetLaunch} onChange={(e) => setTargetLaunch(e.target.value)} className={inputClass} style={inputBg} />
                  </div>
                </div>
                <div className="mb-[18px]">
                  <label className="block text-xs font-semibold text-text-muted mb-[7px] tracking-[0.04em] uppercase">Do you have wireframes or designs?</label>
                  <select value={wireframes} onChange={(e) => setWireframes(e.target.value)} className={`${inputClass} cursor-pointer appearance-none`} style={inputBg}>
                    <option>Yes — I have wireframes or mockups</option>
                    <option>No — I need The Blueprint from scratch</option>
                    <option>Partial — I have some ideas sketched out</option>
                  </select>
                </div>
                <button
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="w-full bg-amber text-white border-none rounded-[9px] py-[15px] text-[15px] font-bold cursor-pointer font-[family-name:var(--font-epilogue-var)] transition-all duration-150 hover:opacity-92 hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Submitting...' : 'Submit — We\u2019ll Call You to Schedule →'}
                </button>
                <div className="text-xs text-text-dim text-center mt-3 leading-[1.5]">
                  We review every submission before scheduling. Expect a call from Ahmed within 1 business day.
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3.5 text-2xl" style={{ background: 'rgba(22,163,74,0.08)', color: 'var(--color-green)' }}>
                  ✓
                </div>
                <div className="font-[family-name:var(--font-syne-var)] text-xl font-bold mb-2">We&rsquo;ve got it. Ahmed will call you soon.</div>
                <p className="text-sm text-text-muted leading-[1.6]">
                  We review every intake before scheduling so the call with Ahmed and Sam is focused and useful. Expect a call within 1 business day to set the time.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
