import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const body = await req.json()
  const { name, company, email, signatureDataURL, timestamp } = body

  if (!name || !email || !signatureDataURL) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown'

  // Notify Ahmed
  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: process.env.NOTIFICATION_EMAIL!,
    subject: `Portfolio NDA Signed — ${name} (${company})`,
    html: `
      <h2>Portfolio NDA Signed — Startline</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Timestamp:</strong> ${timestamp}</p>
      <p><strong>IP:</strong> ${ip}</p>
    `,
  })

  // Send confirmation to signer
  // Note: Attach generated NDA PDF when jsPDF integration is complete
  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: email,
    subject: 'Your Startline Portfolio NDA — Signed Copy',
    html: `
      <h2>Thank you, ${name}.</h2>
      <p>Your signed NDA has been recorded. A member of our team will follow up with portfolio access shortly.</p>
      <p>Signed: ${timestamp}</p>
      <p>If you have questions, reply to this email or reach us at info@staffva.com.</p>
      <p>— Ahmed Kassem, Startline / Global Staffing</p>
    `,
  })

  return NextResponse.json({ success: true })
}
