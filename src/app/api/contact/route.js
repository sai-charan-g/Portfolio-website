import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const contactEmail = process.env.CONTACT_TO_EMAIL || "saicharanreddy131@gmail.com";
const fromEmail = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

const resend = resendApiKey && resendApiKey !== "paste_your_resend_api_key_here"
  ? new Resend(resendApiKey)
  : null;

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = body.name?.trim();
    const email = body.email?.trim();
    const subject = body.subject?.trim();
    const message = body.message?.trim();

    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: "Please fill in all fields before sending your message." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!resend) {
      return Response.json(
        {
          error:
            "Email service is not configured yet. Add a real RESEND_API_KEY to .env.local and restart the app.",
        },
        { status: 500 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      replyTo: email,
      subject: `Portfolio contact: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <h2>New portfolio message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      return Response.json(
        {
          error: error.message || "Resend could not send your message.",
        },
        { status: 500 },
      );
    }

    return Response.json({ success: true, id: data?.id ?? null });
  } catch (error) {
    return Response.json(
      {
        error: "Unable to send your message right now. Please try again later.",
        details: error.message,
      },
      { status: 500 },
    );
  }
}
