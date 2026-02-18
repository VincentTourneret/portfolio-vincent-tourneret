export const siteName =
  process.env.NEXT_PUBLIC_SITE_NAME ?? "Vincent Tourneret";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vincent-tourneret.fr";

export const siteDescription =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ??
  "Développeur web fullstack freelance à Besançon. Sites sur mesure, e-commerce et applications React/Next.js.";

/** Mots-clés SEO ciblant le secteur (développeur web, freelance, région). */
export const siteKeywords = [
  "développeur web freelance",
  "développeur fullstack Besançon",
  "création site web Besançon",
  "développeur React Next.js",
  "site vitrine e-commerce",
  "freelance web Bourgogne-Franche-Comté",
  "développeur web Doubs",
];

export const siteLocale = "fr_FR";
export const siteRegion = "Bourgogne-Franche-Comté";
export const siteGeo = { locality: "Besançon", region: "Doubs", country: "FR" };

export const linkedinUrl =
  process.env.NEXT_PUBLIC_LINKEDIN_URL ??
  "https://fr.linkedin.com/in/vincent-tourneret-7891b2173";

export const githubUrl =
  process.env.NEXT_PUBLIC_GITHUB_URL ?? "https://github.com/VincentTourneret";

/** Vérification propriété (Google Search Console, Bing). Optionnel. */
export const verificationGoogle =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "";
export const verificationBing =
  process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? "";

/** Email qui reçoit les messages du formulaire (côté serveur, Brevo). */
export const contactEmail =
  process.env.CONTACT_EMAIL ?? process.env.BREVO_SENDER_EMAIL ?? "";
