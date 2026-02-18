export const siteName =
  process.env.NEXT_PUBLIC_SITE_NAME ?? "Vincent Tourneret";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vincent-tourneret.fr";

export const siteDescription =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
  "Développeur web fullstack freelance à Besançon. Sites sur mesure, e-commerce et applications React/Next.js.";

export const linkedinUrl =
  process.env.NEXT_PUBLIC_LINKEDIN_URL ??
  "https://fr.linkedin.com/in/vincent-tourneret-7891b2173";

export const githubUrl =
  process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/VincentTourneret";

/** Email qui reçoit les messages du formulaire (côté serveur, Brevo). */
export const contactEmail =
  process.env.CONTACT_EMAIL ?? process.env.BREVO_SENDER_EMAIL ?? "";
