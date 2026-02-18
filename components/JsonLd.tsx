import { siteName, siteUrl, linkedinUrl } from "@/lib/config";

/** Données structurées JSON-LD pour le site (Person + WebSite). */
export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteName,
    url: siteUrl,
    sameAs: [linkedinUrl],
    jobTitle: "Développeur web fullstack",
    worksFor: {
      "@type": "Organization",
      name: siteName,
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description:
      "Portfolio de Vincent Tourneret, développeur web fullstack freelance à Besançon.",
    inLanguage: "fr-FR",
    publisher: {
      "@type": "Person",
      name: siteName,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
