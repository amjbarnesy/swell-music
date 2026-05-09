import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, reason, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // Send email via Resend if API key is configured
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: "Swell Music Website <noreply@swellmusic.org.uk>",
        to: ["info@swellmusic.org.uk"],
        replyTo: email,
        subject: `Contact form: ${reason ?? "General enquiry"} — ${name}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
          <p><strong>Reason:</strong> ${reason ?? "Not specified"}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="white-space:pre-wrap">${message}</p>
        `,
      });
    } else {
      // Log locally during development — add RESEND_API_KEY to .env.local to enable email
      console.log("Contact form submission (no RESEND_API_KEY set):", { name, email, phone, reason, message });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
