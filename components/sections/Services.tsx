import { services } from "@/lib/data/services";

export function Services() {
  return (
    <section
      id="services"
      className="services w-full py-16 sm:py-20 lg:py-24"
      aria-labelledby="services-heading"
    >
      <div className="site-container">
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
              className="service-card-glow transition-transform duration-300 hover:scale-[1.02]"
            >
              <div
                className={`service-card-inner service-card-inner--${service.variant}`}
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
      </div>
    </section>
  );
}
