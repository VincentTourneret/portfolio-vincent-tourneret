import {
  expertiseCards,
  getSimpleIconUrl,
} from "@/lib/data/expertise";
import Image from "next/image";
import { SiteContainer } from "@/components/SiteContainer";

export function Expertise() {
  return (
    <section
      id="expertise"
      className="expertise expertise--with-bg relative w-full bg-[var(--section-bg-f)] bg-cover bg-center bg-no-repeat py-16 sm:py-20 lg:py-24"
      aria-labelledby="expertise-heading"
    >
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <Image
          src="/images/bg-1.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          width={1920}
          height={1080}
          loading="lazy"
          fetchPriority="low"
        />
      </div>
      <SiteContainer className="relative z-10">
        <h2
          id="expertise-heading"
          className="animate-on-scroll mb-12 text-center font-serif text-3xl font-bold tracking-tight text-brand-light sm:text-4xl"
        >
          Domaines d&apos;expertise
        </h2>
        <ul
          className="animate-on-scroll-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          role="list"
        >
          {expertiseCards.map((card, i) => (
            <li key={card.title}>
              <article
                className={`expertise-card expertise-card--${i} h-full rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] shadow-[0_8px_32px_rgba(12,21,39,0.35),inset_0_1px_0_var(--glass-highlight)] backdrop-blur-[10px] p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg sm:p-8`}
              >
                <div className="expertise-card__logos mb-4 flex flex-wrap justify-center gap-3">
                  {card.techs.map((tech) => (
                    <img
                      key={tech.slug}
                      src={getSimpleIconUrl(tech.slug)}
                      alt={tech.label}
                      width={32}
                      height={32}
                      className="expertise-card__logo h-8 w-8 object-contain opacity-90 transition-opacity hover:opacity-100"
                      loading="lazy"
                      decoding="async"
                    />
                  ))}
                </div>
                <h3 className="expertise-card__title mb-2 font-serif text-lg font-semibold italic sm:text-xl">
                  {card.title}
                </h3>
                <p className="expertise-card__desc text-sm leading-relaxed">
                  {card.description}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </SiteContainer>
    </section>
  );
}
