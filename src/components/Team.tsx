const members = [
  {
    initials: 'AK',
    name: 'Ahmed Kassem',
    role: 'Founder · Business & Recruiting',
    bio: 'Ahmed owns every client relationship and the commercial side of every build. He\u2019s on your weekly call, he signs your contract, and he\u2019s accountable for the outcome.',
    creds: [
      'Founder of Global Staffing, StaffVA, and Startline',
      'Manages a bench of 100+ vetted developers',
      'Based in Dearborn, Michigan',
    ],
  },
  {
    initials: 'SN',
    name: 'Sam Nagi',
    role: 'CTO · Engineering',
    bio: 'Sam runs every build personally. He scopes the Blueprint, assembles the team, leads daily standups, and reviews every deliverable before it reaches you.',
    creds: [
      'BS Computer & Information Science \u2014 University of Michigan Dearborn',
      'Node.js, React Native, Spring Boot, PostgreSQL, Docker, AWS',
      '3+ years shipping production systems',
      'Upsilon Pi Epsilon International Honor Society',
    ],
  },
  {
    initials: 'SG',
    name: 'Shelly Galicia',
    role: 'Marketing',
    bio: 'Shelly leads post-launch growth for clients who want to keep the momentum going. Paid acquisition, content, and SEO \u2014 available after delivery.',
    creds: [
      'Paid acquisition and growth strategy',
      'Content strategy and SEO',
      'Post-launch only \u2014 optional engagement',
    ],
  },
]

export default function Team() {
  return (
    <section className="py-24" id="team" aria-label="Meet the team">
      <div className="max-w-[1160px] mx-auto px-10">
        <div className="reveal">
          <div className="text-[11px] font-semibold tracking-widest uppercase text-amber mb-3.5">Meet the Team</div>
          <h2 className="font-[family-name:var(--font-syne-var)] text-4xl md2:text-[46px] font-extrabold tracking-tight leading-[1.08] mb-4">
            No middlemen.<br />No handoffs.
          </h2>
          <p className="text-lg text-text-muted leading-relaxed max-w-[42ch]">
            You work with Ahmed and Sam from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md2:grid-cols-3 gap-5 mt-12">
          {members.map((m, i) => (
            <article
              key={i}
              className={`bg-bg-3 border border-border rounded-xl p-8 text-center reveal ${i > 0 ? `reveal-delay-${i}` : ''}`}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center font-[family-name:var(--font-syne-var)] text-xl font-semibold mx-auto mb-4"
                style={{ background: '#EDE8DC', border: '2px solid rgba(184,134,11,0.3)', color: '#1C1B1A' }}
                aria-hidden="true"
              >
                {m.initials}
              </div>
              <h3 className="font-[family-name:var(--font-syne-var)] text-lg font-bold mb-0.5">{m.name}</h3>
              <div className="text-[11px] font-semibold tracking-widest uppercase text-amber mb-3">{m.role}</div>
              <p className="text-base text-text-muted leading-relaxed mb-4">{m.bio}</p>
              <ul className="flex flex-col gap-1.5" role="list">
                {m.creds.map((cred, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-text-dim text-left">
                    <div className="w-1 h-1 rounded-full bg-text-dim shrink-0" aria-hidden="true" />
                    {cred}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="text-center mt-9 text-base text-text-dim reveal">
          You&rsquo;ll meet Ahmed and Sam on the discovery call.
        </p>
      </div>
    </section>
  )
}
