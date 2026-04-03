const members = [
  {
    initials: 'AK',
    name: 'Ahmed Kassem',
    role: 'Founder · Head of Business & Recruiting',
    bio: 'Ahmed manages every client relationship and owns the commercial side of every build. He\u2019s on your weekly call, he signs your contract, and he\u2019s accountable for the outcome.',
    creds: [
      'Founder of Global Staffing, StaffVA, and Startline',
      'Manages a bench of 100+ vetted developers',
      'Based in Dearborn, Michigan',
    ],
  },
  {
    initials: 'SN',
    name: 'Sam Nagi',
    role: 'CTO · Head of Engineering',
    bio: 'Sam runs every build personally. He scopes the Blueprint, assembles the technical team, leads daily morning huddles, and reviews every deliverable before it reaches you.',
    creds: [
      'BS Computer & Information Science \u2014 University of Michigan Dearborn',
      'Full-stack: Node.js, React Native, Spring Boot, PostgreSQL, Docker, AWS',
      '3+ years building and deploying production systems',
      'Member, Upsilon Pi Epsilon International Honor Society',
    ],
  },
  {
    initials: 'SG',
    name: 'Shelly Galicia',
    role: 'Head of Marketing',
    bio: 'Shelly leads post-launch growth for Startline clients who want to keep the momentum going. Paid acquisition, content strategy, and SEO \u2014 available after delivery, on request.',
    creds: [
      'Paid acquisition and growth strategy',
      'Content strategy and SEO',
      'Post-launch only \u2014 optional engagement',
    ],
  },
]

export default function Team() {
  return (
    <section className="py-24" id="team">
      <div className="max-w-[1160px] mx-auto px-10">
        <div className="reveal">
          <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-amber mb-3.5">Meet the Team</div>
          <h2 className="font-[family-name:var(--font-syne-var)] text-[46px] font-extrabold tracking-[-1.2px] leading-[1.08] mb-4">
            The people you&rsquo;ll<br />work with directly.
          </h2>
          <p className="text-base text-text-muted leading-[1.65] max-w-[62ch] font-medium">
            No account managers. No middlemen. You work with Ahmed and Sam from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md2:grid-cols-3 gap-5 mt-12">
          {members.map((m, i) => (
            <div
              key={i}
              className={`bg-bg-3 border border-border rounded-xl p-8 text-center reveal ${i > 0 ? `reveal-delay-${i}` : ''}`}
            >
              {/* Avatar */}
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center font-[family-name:var(--font-syne-var)] text-xl font-semibold mx-auto mb-[18px]"
                style={{
                  background: '#EDE8DC',
                  border: '2px solid rgba(184,134,11,0.35)',
                  color: '#1A1A14',
                }}
              >
                {m.initials}
              </div>
              <div className="font-[family-name:var(--font-syne-var)] text-lg font-bold mb-1">{m.name}</div>
              <div className="text-xs font-semibold tracking-[0.06em] uppercase text-amber mb-3.5">{m.role}</div>
              <p className="text-base text-text-muted leading-[1.65] mb-4 font-medium">{m.bio}</p>
              <div className="flex flex-col gap-1.5">
                {m.creds.map((cred, j) => (
                  <div key={j} className="flex items-center gap-[7px] text-xs text-text-dim text-left">
                    <div className="w-1 h-1 rounded-full bg-text-dim shrink-0" />
                    {cred}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-9 text-base text-text-dim reveal font-medium">
          You&rsquo;ll meet Ahmed and Sam on the discovery call. No junior reps. No handoffs.
        </div>
      </div>
    </section>
  )
}
