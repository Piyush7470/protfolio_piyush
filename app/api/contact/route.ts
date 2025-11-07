import { NextResponse } from "next/server"

// Initialize Resend only if API key is available
let resend: any = null
try {
  if (process.env.RESEND_API_KEY) {
    const { Resend } = require("resend")
    resend = new Resend(process.env.RESEND_API_KEY)
  }
} catch (error) {
  console.warn("Resend package not installed. Please run: npm install resend")
}

// Helper function to escape HTML
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      )
    }

    // Escape user input to prevent XSS
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeSubject = escapeHtml(subject)
    const safeMessage = escapeHtml(message)

    // Check if Resend is configured
    if (!resend || !process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service not configured. Please set RESEND_API_KEY in environment variables." },
        { status: 500 }
      )
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>", // You'll need to verify your domain with Resend
      to: "piyushnapit86@gmail.com",
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #059669; border-bottom: 2px solid #059669; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin-top: 20px;">
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
            <p><strong>Subject:</strong> ${safeSubject}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #f3f4f6; border-radius: 5px;">
            <h3 style="color: #374151; margin-top: 0;">Message:</h3>
            <p style="color: #4b5563; white-space: pre-wrap;">${safeMessage}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This email was sent from your portfolio contact form.</p>
            <p>You can reply directly to this email to respond to ${safeName}.</p>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

---
This email was sent from your portfolio contact form.
You can reply directly to this email to respond to ${name}.
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: "Email sent successfully", id: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

