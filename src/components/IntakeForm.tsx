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
      alert('Please fill in your name, email, and what you want to build.')
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
      // best-effort
    }
    setSubmitting(false)
    setSubmitted(true)
  }

  const inputClass = "w-full border border-border rounded-lg py-3 px-4 text-base text-text outline-none transition-colors duration-150 focus:border-amber placeholder:text-text-muted bg-bg-input"

  return (
    <section className="py-36 bg-bg" id="start" aria-label="Project intake form">
      <div className="max-w-[1160px] mx-auto px-10">
        <div className="grid grid-cols-1 md2:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div className="reveal">
            <div className="text-[11px] font-semibold tracking-widest uppercase text-amber mb-3.5">Start Here</div>
            <h2 className="font-[family-name:var(--font-syne-var)] text-4xl md2:text-[42px] font-extrabold tracking-tight leading-[1.1] mb-4">
              Tell us what you<br />want to build.
            </h2>
            <p className="text-lg text-text-muted leading-relaxed mb-8 max-w-[48ch]">
              Fill out the form. We&rsquo;ll call you to schedule a 45-minute discovery call with Ahmed and Sam. No commitment, no pitch.
            </p>
            <ul className="flex flex-col gap-3" role="list">
              {[
                'Blueprint delivered free before you sign',
                'No contract until you approve the visuals',
                'Bi-weekly billing — no retainer',
                '30-day money-back guarantee',
                'You own everything we build',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2.5 text-base text-text-muted">
                  <span className="text-text shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="reveal reveal-delay-1">
            {!submitted ? (
              <form
                className="bg-bg-3 rounded-xl p-8"
                style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.04)' }}
                onSubmit={(e) => { e.preventDefault(); handleSubmit() }}
                aria-label="Project intake"
              >
                <div className="grid grid-cols-2 gap-3.5 mb-4">
                  <div>
                    <label htmlFor="intake-name" className="block text-xs font-semibold text-text-muted mb-1.5 tracking-wide uppercase">Your name</label>
                    <input id="intake-name" type="text" placeholder="Jane Smith" value={name} onChange={(e) => setName(e.target.value)} className={inputClass} required />
                  </div>
                  <div>
                    <label htmlFor="intake-company" className="block text-xs font-semibold text-text-muted mb-1.5 tracking-wide uppercase">Company</label>
                    <input id="intake-company" type="text" placeholder="Acme Inc." value={company} onChange={(e) => setCompany(e.target.value)} className={inputClass} />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="intake-email" className="block text-xs font-semibold text-text-muted mb-1.5 tracking-wide uppercase">Email</label>
                  <input id="intake-email" type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} required />
                </div>
                <div className="mb-4">
                  <label htmlFor="intake-build" className="block text-xs font-semibold text-text-muted mb-1.5 tracking-wide uppercase">What do you want to build?</label>
                  <textarea
                    id="intake-build"
                    placeholder="What does it do, who is it for, what problem does it solve?"
                    value={whatToBuild}
                    onChange={(e) => setWhatToBuild(e.target.value)}
                    className={`${inputClass} resize-y min-h-24`}
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-3.5 mb-4">
                  <div>
                    <label htmlFor="intake-budget" className="block text-xs font-semibold text-text-muted mb-1.5 tracking-wide uppercase">Budget range</label>
                    <select id="intake-budget" value={budgetRange} onChange={(e) => setBudgetRange(e.target.value)} className={`${inputClass} cursor-pointer appearance-none`}>
                      <option value="">Select range</option>
                      <option>Under $20,000</option>
                      <option>$20,000 – $50,000</option>
                      <option>$50,000 – $100,000</option>
                      <option>$100,000+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="intake-launch" className="block text-xs font-semibold text-text-muted mb-1.5 tracking-wide uppercase">Target launch</label>
                    <input id="intake-launch" type="text" placeholder="e.g. Q3 2026" value={targetLaunch} onChange={(e) => setTargetLaunch(e.target.value)} className={inputClass} />
                  </div>
                </div>
                <div className="mb-5">
                  <label htmlFor="intake-wireframes" className="block text-xs font-semibold text-text-muted mb-1.5 tracking-wide uppercase">Do you have wireframes?</label>
                  <select id="intake-wireframes" value={wireframes} onChange={(e) => setWireframes(e.target.value)} className={`${inputClass} cursor-pointer appearance-none`}>
                    <option>Yes — I have wireframes or mockups</option>
                    <option>No — I need the Blueprint from scratch</option>
                    <option>Partial — I have some ideas sketched out</option>
                  </select>
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-amber text-white border-none rounded-lg py-3.5 text-base font-semibold cursor-pointer transition-all duration-150 hover:opacity-90 hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Sending...' : 'Submit Project Inquiry'}
                </button>
                <p className="text-sm text-text-muted text-center mt-3">
                  We review every submission. Expect a call within 1 business day.
                </p>
              </form>
            ) : (
              <div className="text-center py-12" role="status">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl bg-green-light text-green">
                  ✓
                </div>
                <h3 className="font-[family-name:var(--font-syne-var)] text-xl font-bold mb-2">Received. Ahmed will call you soon.</h3>
                <p className="text-base text-text-muted leading-relaxed max-w-[40ch] mx-auto">
                  We review every intake before scheduling so the discovery call is focused and useful.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
