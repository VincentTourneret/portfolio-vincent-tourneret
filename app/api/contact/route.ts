import { NextResponse } from "next/server";
import { contactEmail } from "@/lib/config";
import { contactFormSchema } from "@/lib/schemas/contact";

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.BREVO_SENDER_EMAIL ?? contactEmail;

    if (!apiKey) {
      console.error("[contact] BREVO_API_KEY manquant");
      return NextResponse.json(
        { error: "Configuration du serveur incomplète." },
        { status: 500 }
      );
    }

    if (!senderEmail) {
      console.error("[contact] CONTACT_EMAIL / BREVO_SENDER_EMAIL manquant");
      return NextResponse.json(
        { error: "Configuration du serveur incomplète." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Données invalides. Vérifiez les champs." },
        { status: 400 }
      );
    }

    const { firstName, name, email, subject, message } = parsed.data;
    const fullName = [firstName, name].filter(Boolean).join(" ").trim() || name;

    const htmlContent = `
      <p><strong>Prénom :</strong> ${escapeHtml(firstName)}</p>
      <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
      <p><strong>Email :</strong> ${escapeHtml(email)}</p>
      <p><strong>Sujet :</strong> ${escapeHtml(subject)}</p>
      <hr />
      <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
    `;

    const res = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: {
          name: "Site Vincent Tourneret",
          email: senderEmail,
        },
        to: [{ email: contactEmail }],
        replyTo: { email, name: fullName },
        subject: `[Contact] ${subject}`,
        htmlContent,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("[contact] Brevo error:", res.status, err);
      return NextResponse.json(
        { error: "Impossible d'envoyer le message. Réessayez plus tard." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("[contact]", e);
    return NextResponse.json(
      { error: "Une erreur est survenue. Réessayez plus tard." },
      { status: 500 }
    );
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
