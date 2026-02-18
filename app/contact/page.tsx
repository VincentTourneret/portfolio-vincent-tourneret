import type { Metadata } from "next";
import Link from "next/link";
import { siteName, siteUrl, linkedinUrl, githubUrl } from "@/lib/config";
import { SiteContainer } from "@/components/SiteContainer";
import { ContactForm } from "@/components/ContactForm";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Vincent Tourneret, développeur web freelance à Besançon. Envoyez un message ou retrouvez-moi sur LinkedIn et GitHub.",
  alternates: { canonical: `${siteUrl}/contact` },
  openGraph: {
    title: "Contact | Vincent Tourneret",
    description:
      "Contactez Vincent Tourneret, développeur web freelance à Besançon.",
    url: `${siteUrl}/contact`,
    siteName,
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary",
    title: "Contact | Vincent Tourneret",
    description: "Contactez Vincent Tourneret, développeur web freelance.",
  },
  robots: { index: true, follow: true },
};

function ContactFormFallback() {
  return (
    <div className="animate-pulse space-y-6 rounded-2xl border border-brand-light/15 bg-brand-surface/60 p-6 sm:p-8 lg:p-10">
      <div className="h-4 w-1/3 rounded bg-brand-light/20" />
      <div className="h-12 rounded-xl bg-brand-light/10" />
      <div className="h-12 rounded-xl bg-brand-light/10" />
      <div className="h-32 rounded-xl bg-brand-light/10" />
      <div className="h-11 w-40 rounded-xl bg-brand-accent/30" />
    </div>
  );
}

export default function ContactPage() {
  return (
    <article className="contact relative w-full overflow-hidden pt-24 pb-16 sm:py-20 lg:py-24">
      <div className="contact__bg pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-40">
        <div
          className="absolute -left-1/4 top-1/4 h-[32rem] w-[32rem] rounded-full bg-brand-accent/15 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -right-1/4 bottom-1/4 h-[28rem] w-[28rem] rounded-full bg-brand-light/10 blur-3xl"
          aria-hidden
        />
      </div>

      <SiteContainer className="relative z-10">
        <header className="mb-14 text-center lg:mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-brand-accent-contrast/80">
            Échangeons
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-brand-light sm:text-5xl lg:text-6xl">
            Contact
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-light/75">
            Un projet, une question ou une collaboration ? Envoyez-moi un
            message, je vous répondrai rapidement.
          </p>
        </header>

        <div className="mx-auto max-w-2xl">
          <section
            className="rounded-2xl border border-brand-light/15 bg-brand-surface/60 p-6 shadow-[var(--glass-shadow)] backdrop-blur-sm sm:p-8 lg:p-10"
            aria-labelledby="form-title"
          >
            <h2 id="form-title" className="sr-only">
              Formulaire de contact
            </h2>
            <div className="mb-6 border-b border-brand-light/10 pb-6 sm:mb-8 sm:pb-8">
              <h3 className="font-serif text-xl font-semibold text-brand-light sm:text-2xl">
                Envoyer un message
              </h3>
              <p className="mt-1 text-sm text-brand-light/65">
                Remplissez le formulaire ci-dessous. Réponse sous 24–48 h.
              </p>
            </div>
            <Suspense fallback={<ContactFormFallback />}>
              <ContactForm />
            </Suspense>
          </section>

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
            <span className="text-sm text-brand-light/60">
              Ou retrouvez-moi sur :
            </span>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <a
                href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border border-brand-light/20 bg-brand-surface/50 px-5 py-3 text-brand-light transition-colors hover:border-brand-accent hover:bg-brand-surface focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-dark"
            >
              <svg
                className="size-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border border-brand-light/20 bg-brand-surface/50 px-5 py-3 text-brand-light transition-colors hover:border-brand-accent hover:bg-brand-surface focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-dark"
            >
              <svg
                className="size-6"
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
              GitHub
            </a>
            </div>
          </div>

          <p className="mt-12 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-brand-accent underline decoration-brand-accent/50 underline-offset-2 transition-colors hover:decoration-brand-accent"
            >
              Retour à l&apos;accueil
            </Link>
          </p>
        </div>
      </SiteContainer>
    </article>
  );
}
