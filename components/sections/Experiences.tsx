import {
  experiences,
  formatDateRange,
  type Experience,
  type ExperienceIcon,
} from "@/lib/data/experiences";
import Image from "next/image";
import { SiteContainer } from "@/components/SiteContainer";

function Icon({ name }: { name: ExperienceIcon }) {
  if (name === "briefcase")
    return (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
        />
      </svg>
    );
  if (name === "building-office")
    return (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
        />
      </svg>
    );
  if (name === "academic-cap")
    return (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M6.75 15.75v-1.5m0 1.5a4.5 4.5 0 11-9 0 3.75 3.75 0 117.5 0z"
        />
      </svg>
    );
  return null;
}

function TimelineEvent({
  event,
  index,
}: {
  event: Experience;
  index: number;
}) {
  const isRight = index % 2 === 1;
  const dateRange = formatDateRange(
    event.start_date,
    event.end_date,
    event.end_label ?? null
  );

  return (
    <div
      className={`js-timeline-item timeline-item grid grid-cols-1 gap-y-4 py-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-x-8 ${
        isRight ? "timeline-item--right" : "timeline-item--left"
      }`}
    >
      {isRight && (
        <div className="hidden lg:col-start-1 lg:order-1 lg:block" />
      )}
      <div
        className={`js-timeline-content timeline-content timeline-card timeline-card--${index} order-first mx-auto w-full max-w-md rounded-2xl border px-5 py-4 shadow-xl backdrop-blur sm:px-6 sm:py-5 text-center ${
          isRight
            ? "lg:order-3 lg:col-start-3 lg:justify-self-start lg:mx-0 lg:text-right"
            : "lg:order-1 lg:col-start-1 lg:justify-self-end lg:mx-0 lg:text-left"
        }`}
      >
        <div
          className={`timeline-card__header flex items-start gap-3 ${
            isRight ? "flex-row-reverse lg:flex-row-reverse" : "flex-row"
          }`}
        >
          <div
            className="timeline-card__icon-circle flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-current/20 bg-brand-light/10 text-brand-light"
            aria-hidden="true"
          >
            <Icon name={event.icon} />
          </div>
          <div className="timeline-card__body min-w-0 flex-1">
            <p className="timeline-card__date mb-1 text-sm font-medium">
              {dateRange}
            </p>
            <h3 className="font-serif text-xl font-semibold italic text-brand-light sm:text-2xl">
              {event.text.headline}
            </h3>
            <p className="mt-2 text-brand-light/85">{event.text.text}</p>
          </div>
        </div>
      </div>
      <div
        className={`js-timeline-dot timeline-dot timeline-dot--${index} order-2 relative z-10 mx-auto flex h-4 w-4 shrink-0 items-center justify-center self-center rounded-full border-2 bg-brand-dark shadow-[0_0_0_4px_var(--section-bg-d)] lg:col-start-2 lg:order-2 lg:mx-0`}
        aria-hidden="true"
      />
      {!isRight && (
        <div className="hidden lg:col-start-3 lg:order-3 lg:block" />
      )}
    </div>
  );
}

export function Experiences() {
  return (
    <section
      id="experiences"
      className="experiences experiences--with-bg relative w-full bg-[var(--section-bg-d)] bg-cover bg-center bg-no-repeat py-16 sm:py-20 lg:py-24"
      aria-labelledby="experiences-heading"
    >
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <Image
          src="/images/bg-3.jpg?v=2"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
          width={1090}
          height={1920}
          sizes="100vh"
          quality={90}
          loading="lazy"
          fetchPriority="low"
        />
      </div>
      <SiteContainer className="relative z-10">
        <h2
          id="experiences-heading"
          className="animate-on-scroll mb-12 text-center font-serif text-3xl font-bold tracking-tight text-brand-light sm:text-4xl"
        >
          Mon expérience
        </h2>
        <div
          id="experiences-timeline"
          className="animate-on-scroll-stagger experiences-timeline relative mx-auto max-w-5xl"
        >
          <div
            className="js-timeline-line timeline-line absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 origin-top bg-brand-accent/30 lg:left-1/2"
            aria-hidden="true"
          />
          {experiences.map((event, i) => (
            <TimelineEvent key={i} event={event} index={i} />
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
