import {
  siteName,
  siteUrl,
  linkedinUrl,
  siteDescription,
  siteGeo,
} from "@/lib/config";

/** Données structurées JSON-LD pour le site (Person + WebSite + ProfessionalService). */
export function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteName,
    url: siteUrl,
    sameAs: [linkedinUrl],
    jobTitle: "Développeur web fullstack",
    description: siteDescription,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteGeo.locality,
      addressRegion: siteGeo.region,
      addressCountry: siteGeo.country,
    },
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
    description: siteDescription,
    inLanguage: "fr-FR",
    publisher: { "@type": "Person", name: siteName },
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteName} – Développement web`,
    description: siteDescription,
    url: siteUrl,
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        addressLocality: siteGeo.locality,
        addressRegion: siteGeo.region,
        addressCountry: siteGeo.country,
      },
    },
    provider: { "@type": "Person", name: siteName },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }}
      />
    </>
  );
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/** Fil d’Ariane en JSON-LD pour le SEO (à utiliser sur chaque page). */
export function JsonLdBreadcrumb({ items }: { items: BreadcrumbItem[] }) {
  if (items.length === 0) return null;
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
    />
  );
}
