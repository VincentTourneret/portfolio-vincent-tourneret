import Image from "next/image";
import { projects } from "@/lib/data/projects";
import { getSimpleIconUrl } from "@/lib/data/expertise";

export function Projects() {
  if (projects.length === 0) {
    return (
      <section
        id="projets"
        className="projects w-full py-16 sm:py-20 lg:py-24"
        aria-labelledby="projects-heading"
      >
        <div className="site-container">
          <h2
            id="projects-heading"
            className="animate-on-scroll mb-12 text-center font-serif text-3xl font-bold tracking-tight text-brand-light sm:text-4xl"
          >
            Mes projets
          </h2>
          <p className="animate-on-scroll text-center text-brand-light/80">
            Aucun projet pour le moment. Ajoutez des projets dans{" "}
            <code className="rounded bg-brand-surface px-1 py-0.5 text-sm">
              lib/data/projects.ts
            </code>
            .
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projets"
      className="projects w-full py-16 sm:py-20 lg:py-24"
      aria-labelledby="projects-heading"
    >
      <div className="site-container">
        <h2
          id="projects-heading"
          className="animate-on-scroll mb-12 text-center font-serif text-3xl font-bold tracking-tight text-brand-light sm:text-4xl"
        >
          Mes projets
        </h2>
        <ul className="animate-on-scroll-stagger grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.slug} className="group">
              <article className="glass-panel h-full overflow-hidden rounded-2xl border border-brand-light/10 transition-all duration-300 hover:scale-[1.01] hover:shadow-lg">
                {project.image && (
                  <a
                    href={project.url || "#"}
                    className="block aspect-video w-full overflow-hidden bg-brand-light/5"
                    target={project.url ? "_blank" : undefined}
                    rel={project.url ? "noopener noreferrer" : undefined}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      width={400}
                      height={225}
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </a>
                )}
                <div className="p-6 sm:p-8">
                  <h3 className="mb-2 text-xl font-semibold text-brand-light transition-colors group-hover:text-brand-accent">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-brand-light-contrast">
                    {project.description}
                  </p>
                  {project.technologies.length > 0 && (
                    <ul
                      className="flex flex-wrap gap-2"
                      aria-label="Technologies utilisées"
                    >
                      {project.technologies.map((tech, i) => (
                        <li key={i}>
                          <img
                            src={getSimpleIconUrl(tech.iconSlug)}
                            alt={tech.alt}
                            className="h-8 w-8 rounded-lg object-contain bg-brand-light/10 p-0.5"
                            width={32}
                            height={32}
                            loading="lazy"
                            decoding="async"
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                  {project.url && (
                    <p className="mt-4">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded text-sm font-medium text-brand-accent-contrast hover:underline focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-dark"
                      >
                        Voir le site
                        <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
