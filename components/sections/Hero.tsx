import Image from "next/image";
import { linkedinUrl, githubUrl } from "@/lib/config";

export function Hero() {
  return (
    <section
      id="hero"
      className="hero relative flex min-h-screen items-center justify-center overflow-hidden py-10 pt-16 pb-10 sm:py-12 sm:pt-20 sm:pb-12"
      aria-label="Accueil"
    >
      <div className="hero__mesh" aria-hidden="true" />
      <div className="site-container relative z-10 flex w-full flex-col items-center justify-center gap-8 lg:flex-row lg:items-center lg:gap-10">
        <div className="hero__text relative z-10 w-full max-w-2xl flex-1 text-center lg:max-w-none lg:text-left">
          <p className="mb-6 text-sm font-bold uppercase tracking-widest text-brand-accent">
            Bienvenue sur mon portfolio
          </p>
          <h1 className="mb-5 font-serif text-5xl font-bold tracking-tight text-brand-light sm:text-6xl lg:text-7xl">
            Développeur Web Fullstack
          </h1>
          <h2 className="mb-8 font-serif text-2xl font-semibold tracking-tight text-brand-light/90 sm:text-3xl lg:text-4xl">
            Vincent TOURNERET | Freelance à Besançon
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-lg text-brand-light-contrast sm:text-lg">
            Je conçois des applications web et des plateformes e commerce
            performantes, sécurisées et optimisées SEO. De l&apos;architecture
            technique à la mise en production, j&apos;interviens sur des projets
            sur mesure à forte exigence métier.
          </p>
          <div className="flex flex-col items-center gap-6 lg:items-start">
            <div className="flex flex-wrap items-center justify-center gap-5 lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center rounded-xl bg-brand-accent px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-brand-accent/90 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-dark active:scale-[0.98]"
              >
                Me contacter
              </a>
              <a
                href="#projets"
                className="inline-flex items-center rounded-xl border border-brand-light/30 bg-brand-surface/50 px-6 py-3 text-base font-medium text-brand-light backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-brand-light/50 hover:bg-brand-surface focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-dark active:scale-[0.98]"
              >
                Voir mes projets
              </a>
            </div>
            <span className="flex items-center gap-3 text-brand-light/70">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 transition-all duration-300 hover:scale-110 hover:bg-brand-light/10 hover:text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-dark"
                aria-label="LinkedIn"
              >
                <svg
                  className="size-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 transition-all duration-300 hover:scale-110 hover:bg-brand-light/10 hover:text-brand-light focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-dark"
                aria-label="GitHub"
              >
                <svg
                  className="size-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </span>
          </div>
        </div>
        <div
          className="hero__photo-wrapper hero__photo-wrapper--fixed w-full shrink-0 lg:max-w-[457px]"
          aria-hidden="true"
        >
          <Image
            src="/images/photo.png"
            alt="Photo de Vincent Tourneret, développeur fullstack freelance"
            className="hero__photo mx-auto rounded-2xl"
            width={457}
            height={525}
            priority
            sizes="(max-width: 1023px) 100vw, 457px"
          />
        </div>
      </div>
    </section>
  );
}
