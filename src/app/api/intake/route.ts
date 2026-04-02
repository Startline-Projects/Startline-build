import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const body = await req.json()
  const { name, company, email, whatToBuild, budgetRange, targetLaunch, wireframes } = body

  if (!name || !email || !whatToBuild) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: process.env.NOTIFICATION_EMAIL!,
    subject: `New Startline Project Inquiry — ${name} (${company})`,
    html: `
      <h2>New Project Intake — Startline</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Budget:</strong> ${budgetRange}</p>
      <p><strong>Target Launch:</strong> ${targetLaunch}</p>
      <p><strong>Wireframes:</strong> ${wireframes}</p>
      <h3>What they want to build:</h3>
      <p>${whatToBuild}</p>
    `,
  })

  return NextResponse.json({ success: true })
}
