import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  getProjectBySlug,
  getAllProjectSlugs,
} from "@/lib/data/projects";
import { getSimpleIconUrl } from "@/lib/data/expertise";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjetPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <article className="projet-single e-content w-full py-16 sm:py-20 lg:py-24">
      <div className="site-container">
        <header className="mb-8">
          {project.image && (
            <figure className="mb-6 overflow-hidden rounded-2xl">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full object-cover"
                width={800}
                height={450}
                loading="eager"
                priority
              />
            </figure>
          )}
          <h1 className="p-name font-serif text-3xl font-bold tracking-tight text-brand-light sm:text-4xl">
            {project.title}
          </h1>
          {project.url && (
            <p className="mt-2">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brand-accent-contrast hover:underline focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-dark"
              >
                Voir le site
                <span aria-hidden="true">→</span>
              </a>
            </p>
          )}
        </header>

        {project.content && (
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: project.content }}
          />
        )}

        {project.technologies.length > 0 && (
          <aside
            className="mt-10"
            aria-label="Technologies utilisées"
          >
            <h2 className="mb-4 text-lg font-semibold text-brand-light">
              Technologies
            </h2>
            <ul className="flex flex-wrap gap-3">
              {project.technologies.map((tech, i) => (
                <li key={i}>
                  <img
                    src={getSimpleIconUrl(tech.iconSlug)}
                    alt={tech.alt}
                    className="h-10 w-10 rounded-lg object-contain bg-brand-light/10 p-1"
                    width={40}
                    height={40}
                    loading="lazy"
                    decoding="async"
                  />
                </li>
              ))}
            </ul>
          </aside>
        )}

        <p className="mt-12">
          <Link
            href="/#projets"
            className="inline-flex items-center gap-2 text-brand-accent underline decoration-brand-accent/50 underline-offset-2 transition-colors hover:decoration-brand-accent"
          >
            Retour aux projets
          </Link>
        </p>
      </div>
    </article>
  );
}
