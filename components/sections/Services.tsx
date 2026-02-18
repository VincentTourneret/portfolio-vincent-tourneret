import { services, type ServiceVariant } from "@/lib/data/services";
import { SiteContainer } from "@/components/SiteContainer";

const innerVariantClasses: Record<ServiceVariant, string> = {
  muted:
    "bg-brand-muted text-brand-light-contrast",
  accent:
    "bg-[color-mix(in_srgb,var(--color-brand-dark)_82%,var(--color-brand-accent))] text-brand-light",
  surface: "bg-brand-surface text-brand-light",
};

export function Services() {
  return (
    <section
      id="services"
      className="services w-full bg-[var(--section-bg-c)] py-16 sm:py-20 lg:py-24"
      aria-labelledby="services-heading"
    >
      <SiteContainer>
        <h2
          id="services-heading"
          className="animate-on-scroll mb-12 text-center font-serif text-3xl font-bold tracking-tight text-brand-light sm:text-4xl"
        >
          Mes services
        </h2>
        <ul className="animate-on-scroll-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li
              key={service.title}
              className="rounded-[1.2rem] p-[1px] bg-gradient-to-br from-[color-mix(in_srgb,var(--color-brand-light)_95%,transparent)] via-brand-accent to-[color-mix(in_srgb,var(--color-brand-light)_90%,transparent)] shadow-[0_1rem_1.5rem_-0.9rem_rgba(12,21,25,0.9)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_1rem_2rem_-0.5rem_color-mix(in_srgb,var(--color-brand-accent)_50%,transparent)]"
            >
              <div
                className={`min-h-full rounded-[calc(1.2rem-1px)] p-6 text-base ${innerVariantClasses[service.variant]}`}
              >
                <h3 className="mb-3 text-xl font-semibold text-brand-light">
                  {service.title}
                </h3>
                <p
                  className="text-brand-light-contrast [&_br]:block [&_br]:h-2"
                  dangerouslySetInnerHTML={{ __html: service.desc }}
                />
              </div>
            </li>
          ))}
        </ul>
      </SiteContainer>
    </section>
  );
}
