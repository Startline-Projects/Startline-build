import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const body = await req.json()
  const { name, company, email, phone, signatureDataURL, timestamp } = body

  if (!name || !email || !phone || !signatureDataURL) {
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
      <p><strong>Phone:</strong> ${phone}</p>
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
      <p>This email confirms that your signed NDA and non-compete agreement with Stafva LLC d/b/a Startline has been recorded.</p>
      <p><strong>Signed:</strong> ${timestamp}</p>
      <p>You already have full portfolio access — return to startline.build at any time to browse our work.</p>
      <p>If you have questions, email us at info@staffva.com.</p>
      <p>— Ahmed Kassem, Startline / Global Staffing<br>3 Parklane Blvd Suite 1210W, Dearborn MI 48126</p>
    `,
  })

  return NextResponse.json({ success: true })
}
