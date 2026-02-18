import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/config";
import { getAllProjectSlugs } from "@/lib/data/projects";

/** Sitemap généré pour le SEO (servi à /sitemap.xml). */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl.replace(/\/$/, ""); // pas de slash final
  const slugs = getAllProjectSlugs();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${base}/projet/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
