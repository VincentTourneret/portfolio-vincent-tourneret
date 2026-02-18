import Image from "next/image";
import { SiteContainer } from "@/components/SiteContainer";

export function About() {
  return (
    <section
      id="a-propos"
      className="about relative w-full overflow-hidden bg-[var(--section-bg-b)] py-16 sm:py-20 lg:py-24"
      aria-labelledby="about-heading"
    >
      <div
        className="absolute inset-0 z-0 overflow-hidden blur-[5px]"
        aria-hidden="true"
      >
        <Image
          src="/images/workspace.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          width={960}
          height={540}
          loading="lazy"
          fetchPriority="low"
        />
      </div>
      <SiteContainer className="relative z-10">
        <div className="animate-on-scroll mx-auto max-w-4xl rounded-2xl border border-brand-light/10 bg-brand-surface p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl sm:p-10 lg:p-12">
          <h2
            id="about-heading"
            className="mb-6 font-serif text-3xl font-bold tracking-tight text-brand-light sm:text-4xl"
          >
            À propos
          </h2>
          <div className="prose prose-invert max-w-none text-brand-light/90">
            <p className="text-lg leading-relaxed">
              Je développe des applications web et des plateformes e commerce
              robustes en PHP et Next.js, adaptées aux enjeux métier de chaque
              projet.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              J&apos;accompagne entreprises et porteurs de projets dans la
              conception technique, l&apos;architecture et le déploiement de
              solutions performantes, accessibles et optimisées pour le
              référencement naturel.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              Mon approche repose sur une architecture propre, une attention
              forte aux performances et une intégration soignée orientée
              conversion. Chaque projet est conçu pour être maintenable,
              évolutif et aligné avec les objectifs business.
            </p>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
