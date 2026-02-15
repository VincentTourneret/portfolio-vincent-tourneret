export type ServiceVariant = 'accent' | 'surface' | 'muted';

export interface Service {
  title: string;
  desc: string;
  variant: ServiceVariant;
}

export const services: Service[] = [
  {
    title: 'Site vitrine sur mesure',
    desc:
      "Un site vitrine professionnel vous permet de présenter clairement votre activité et de renforcer votre crédibilité tout en générant des prises de contact qualifiées.<br/><br/>Conçu avec une architecture structurée, un design aligné sur votre identité et une optimisation technique orientée performance et SEO, il offre une expérience fluide sur tous les supports et constitue un véritable levier de visibilité et de développement commercial.",
    variant: 'accent',
  },
  {
    title: 'Site e-commerce',
    desc:
      "Développement de boutique en ligne sur mesure avec gestion complète du catalogue, tunnel d'achat optimisé, paiement sécurisé et suivi des commandes.<br/> <br/> L'architecture est pensée pour la performance, le référencement naturel et la conversion, avec une expérience utilisateur fluide sur mobile comme sur desktop afin de maximiser vos ventes et la rentabilité de votre activité en ligne.",
    variant: 'surface',
  },
  {
    title: 'Applications web et mobile',
    desc:
      "Conception et développement d'applications web et mobiles sur mesure, de la définition fonctionnelle à la mise en production. <br/><br/>Architecture robuste, API sécurisées, interface performante et expérience utilisateur optimisée pour garantir évolutivité, maintenabilité et performance sur navigateur comme sur iOS et Android.",
    variant: 'muted',
  },
];
