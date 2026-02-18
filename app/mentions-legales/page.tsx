import type { Metadata } from "next";
import Link from "next/link";
import { siteName, siteUrl } from "@/lib/config";
import { getLegalConfig } from "@/lib/data/legal";
import { SiteContainer } from "@/components/SiteContainer";
import { JsonLdBreadcrumb } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales, CGU et informations juridiques du site Vincent Tourneret.",
  alternates: { canonical: `${siteUrl}/mentions-legales` },
  openGraph: {
    title: "Mentions légales | Vincent Tourneret",
    description: "Mentions légales et informations juridiques du site.",
    url: `${siteUrl}/mentions-legales`,
    siteName,
    type: "website",
    locale: "fr_FR",
  },
  twitter: { card: "summary", title: "Mentions légales | Vincent Tourneret" },
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  const legal = getLegalConfig(siteName);

  return (
    <article className="mentions-legales w-full pt-24 pb-16 sm:py-20 lg:py-24">
      <JsonLdBreadcrumb
        items={[
          { name: "Accueil", url: siteUrl },
          { name: "Mentions légales", url: `${siteUrl}/mentions-legales` },
        ]}
      />
      <SiteContainer>
        <header className="mb-12">
          <h1 className="font-serif text-3xl font-bold tracking-tight text-brand-light sm:text-4xl">
            Mentions légales
          </h1>
          <p className="mt-2 text-brand-light/90">
            Dernière mise à jour :{" "}
            {new Date().toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </header>

        <div className="prose prose-invert max-w-none space-y-10 text-brand-light/90">
          <section aria-labelledby="editeur-heading">
            <h2
              id="editeur-heading"
              className="text-xl font-semibold text-brand-light"
            >
              Éditeur du site
            </h2>
            <p className="mt-2 leading-relaxed">Ce site est édité par :</p>
            <p className="mt-1 font-medium text-brand-light">
              {legal.editorName}
            </p>
            <p className="mt-2 leading-relaxed">
              Site :{" "}
              <Link
                href="/"
                className="text-brand-accent underline decoration-brand-accent/50 underline-offset-2 transition-colors hover:decoration-brand-accent"
              >
                {siteName}
              </Link>
            </p>
          </section>

          <section aria-labelledby="hebergeur-heading">
            <h2
              id="hebergeur-heading"
              className="text-xl font-semibold text-brand-light"
            >
              Hébergeur
            </h2>
            {legal.hostName && legal.hostAddress ? (
              <>
                <p className="mt-2 leading-relaxed">
                  L&apos;hébergement de ce site est assuré par :
                </p>
                <p className="mt-1 font-medium text-brand-light">
                  {legal.hostName}
                </p>
                <p className="mt-1 whitespace-pre-line text-brand-light/80">
                  {legal.hostAddress}
                </p>
              </>
            ) : (
              <p className="mt-2 leading-relaxed text-brand-light/80">
                L&apos;hébergement est assuré par un prestataire dont les
                coordonnées peuvent être communiquées sur demande. Vous pouvez
                les renseigner dans les variables d&apos;environnement
                NEXT_PUBLIC_LEGAL_HOST_NAME et NEXT_PUBLIC_LEGAL_HOST_ADDRESS.
              </p>
            )}
          </section>

          <section aria-labelledby="propriete-heading">
            <h2
              id="propriete-heading"
              className="text-xl font-semibold text-brand-light"
            >
              Propriété intellectuelle
            </h2>
            <p className="mt-2 leading-relaxed">
              L&apos;ensemble du contenu de ce site (textes, images, graphismes,
              logo, structure, etc.) est protégé par le droit d&apos;auteur et
              le droit des marques. Toute reproduction, représentation,
              modification ou exploitation, totale ou partielle, sans
              autorisation préalable de l&apos;éditeur est interdite et
              constitutive d&apos;une contrefaçon.
            </p>
            <p className="mt-2 leading-relaxed">
              Les marques et logos mentionnés sur ce site sont des marques
              déposées par leurs propriétaires respectifs.
            </p>
          </section>

          <section aria-labelledby="donnees-heading">
            <h2
              id="donnees-heading"
              className="text-xl font-semibold text-brand-light"
            >
              Données personnelles et RGPD
            </h2>
            <p className="mt-2 leading-relaxed">
              Les informations recueillies via les formulaires de contact ou la
              navigation sur ce site sont destinées uniquement à traiter vos
              demandes et à améliorer le site. Conformément au Règlement général
              sur la protection des données (RGPD) et à la loi « informatique et
              libertés », vous disposez d&apos;un droit d&apos;accès, de
              rectification, de suppression et d&apos;opposition aux données vous
              concernant.
            </p>
            <p className="mt-2 leading-relaxed">
              Pour exercer ces droits ou pour toute question relative à vos
              données personnelles, vous pouvez contacter l&apos;éditeur du
              site via la page Contact.
            </p>
          </section>

          <section aria-labelledby="cookies-heading">
            <h2
              id="cookies-heading"
              className="text-xl font-semibold text-brand-light"
            >
              Cookies
            </h2>
            <p className="mt-2 leading-relaxed">
              Ce site peut utiliser des cookies techniques nécessaires au bon
              fonctionnement (session, préférences). Aucun cookie publicitaire
              ou de traçage tiers n&apos;est utilisé sans votre consentement.
              Vous pouvez configurer votre navigateur pour refuser les cookies
              non essentiels.
            </p>
          </section>

          <section aria-labelledby="droit-heading">
            <h2
              id="droit-heading"
              className="text-xl font-semibold text-brand-light"
            >
              Droit applicable et crédits
            </h2>
            <p className="mt-2 leading-relaxed">
              Le présent site est soumis au droit français. En cas de litige, les
              tribunaux français seront seuls compétents.
            </p>
            <p className="mt-2 leading-relaxed">
              Conception et développement :{" "}
              <Link
                href="/"
                className="text-brand-accent underline decoration-brand-accent/50 underline-offset-2 transition-colors hover:decoration-brand-accent"
              >
                {siteName}
              </Link>
            </p>
          </section>
        </div>

        <p className="mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-brand-accent underline decoration-brand-accent/50 underline-offset-2 transition-colors hover:decoration-brand-accent"
          >
            Retour à l&apos;accueil
          </Link>
        </p>
      </SiteContainer>
    </article>
  );
}
