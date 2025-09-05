import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, subject, message } = body; 

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing email, subject, or message" },
        { status: 400 }
      );
    }

    
    const data = await resend.emails.send({
      from: fromEmail,                     
      to: "anmolmishrahere@gmail.com",     
      reply_to: email,                     
      subject: subject,
      html: `
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Exception sending email:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
