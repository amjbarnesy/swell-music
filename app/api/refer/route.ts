import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      referrerName, referrerRole, referrerOrganisation, referrerEmail, referrerPhone,
      participantName, condition, location, notes,
    } = body;

    if (!referrerName || !referrerEmail || !participantName) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from: "Swell Music Website <noreply@swellmusic.org.uk>",
        to: ["info@swellmusic.org.uk"],
        replyTo: referrerEmail,
        subject: `New referral: ${participantName} — referred by ${referrerName}`,
        html: `
          <h2>New referral — Swell Music CIC</h2>
          <h3>Referrer details</h3>
          <p><strong>Name:</strong> ${referrerName}</p>
          <p><strong>Role:</strong> ${referrerRole ?? "Not specified"}</p>
          <p><strong>Organisation:</strong> ${referrerOrganisation ?? "Not specified"}</p>
          <p><strong>Email:</strong> ${referrerEmail}</p>
          ${referrerPhone ? `<p><strong>Phone:</strong> ${referrerPhone}</p>` : ""}
          <h3>About the person being referred</h3>
          <p><strong>First name:</strong> ${participantName}</p>
          <p><strong>Programme / condition:</strong> ${condition ?? "Not specified"}</p>
          <p><strong>Preferred location:</strong> ${location ?? "No preference"}</p>
          ${notes ? `<h3>Additional notes</h3><p style="white-space:pre-wrap">${notes}</p>` : ""}
        `,
      });
    } else {
      console.log("Referral submission (no RESEND_API_KEY set):", body);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Referral form error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
