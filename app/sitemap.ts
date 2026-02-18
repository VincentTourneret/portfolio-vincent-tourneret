import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/config";
import { getAllProjectSlugs } from "@/lib/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl;
  const slugs = getAllProjectSlugs();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    {
      url: `${base}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${base}/projet/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
