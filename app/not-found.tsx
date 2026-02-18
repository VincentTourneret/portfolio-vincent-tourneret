import Link from "next/link";
import { SiteContainer } from "@/components/SiteContainer";

export default function NotFound() {
  return (
    <section
      className="not-found relative flex min-h-[calc(100vh-var(--header-height,5.5rem))] items-center justify-center overflow-hidden bg-[hsl(198_35%_7%)] py-16 sm:py-20"
      aria-label="Page introuvable"
    >
      {/* Même mesh que le Hero pour cohérence visuelle */}
      <div className="hero__mesh hero__mesh--a absolute inset-0" aria-hidden="true" />
      <div className="hero__mesh hero__mesh--b absolute inset-0" aria-hidden="true" />

      <SiteContainer className="relative z-10 flex w-full flex-col items-center text-center">
        {/* Code / terminal fictif */}
        <div
          className="not-found__terminal mb-8 w-full max-w-md rounded-xl border border-brand-light/20 bg-brand-surface/60 px-4 py-3 font-mono text-sm backdrop-blur-sm sm:px-5 sm:py-4"
          aria-hidden="true"
        >
          <div className="flex items-center gap-2 border-b border-brand-light/10 pb-2 text-brand-light/60">
            <span className="h-2 w-2 rounded-full bg-red-500/80" />
            <span className="h-2 w-2 rounded-full bg-amber-500/80" />
            <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs">terminal</span>
          </div>
          <div className="mt-3 space-y-1 text-left text-brand-light-contrast/90">
            <p>
              <span className="text-brand-accent">&gt;</span> navigateur.get("/cette-page")
            </p>
            <p>
              <span className="text-brand-accent">←</span>{" "}
              <span className="text-red-400/90">404</span> Not Found
            </p>
            <p className="pt-2 text-brand-light/70">
              Route non exportée. Vérifiez l’URL ou revenez à l’accueil.
            </p>
          </div>
        </div>

        {/* Titre 404 avec effet */}
        <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand-accent">
          Erreur
        </p>
        <h1 className="not-found__title font-serif text-7xl font-bold tracking-tight text-brand-light sm:text-8xl lg:text-9xl">
          404
        </h1>
        <p className="mx-auto mb-6 mt-4 max-w-md font-serif text-xl font-semibold text-brand-light-contrast sm:text-2xl">
          Cette page n’existe pas dans le bundle.
        </p>
        <p className="mx-auto mb-10 max-w-sm text-brand-light/80">
          Vous avez peut-être suivi un lien cassé ou une URL erronée. Pas de panique&nbsp;: vous
          pouvez revenir à l’accueil.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center rounded-xl bg-brand-accent px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-brand-accent/90 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-dark active:scale-[0.98]"
          >
            Retour à l’accueil
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl border border-brand-light/30 bg-brand-surface/50 px-6 py-3 text-base font-medium text-brand-light backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:border-brand-light/50 hover:bg-brand-surface focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-brand-dark active:scale-[0.98]"
          >
            Me contacter
          </Link>
        </div>

        {/* Petit détail décoratif : boussole / "lost" */}
        <p
          className="mt-14 font-mono text-xs uppercase tracking-widest text-brand-light/40"
          aria-hidden="true"
        >
          // lost in the code
        </p>
      </SiteContainer>
    </section>
  );
}
