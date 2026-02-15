export interface ExpertiseTech {
  slug: string;
  label: string;
}

export interface ExpertiseCard {
  title: string;
  description: string;
  techs: ExpertiseTech[];
}

export const SIMPLE_ICONS_BASE = 'https://cdn.simpleicons.org';
export const EXPERTISE_ICON_COLOR = 'CF9D7B';

/** URL d’une icône Simple Icons (réutilisable pour expertise et projets). */
export function getSimpleIconUrl(slug: string, color = EXPERTISE_ICON_COLOR): string {
  return `${SIMPLE_ICONS_BASE}/${slug}/${color}`;
}

export const expertiseCards: ExpertiseCard[] = [
  {
    title: 'Langage et framework',
    description:
      'Applications web modernes avec React et Next.js : SSR, composants réutilisables et performances optimisées.',
    techs: [
      { slug: 'react', label: 'React' },
      { slug: 'nextdotjs', label: 'Next.js' },
    ],
  },
  {
    title: 'CRM, WordPress et WooCommerce',
    description:
      'Sites vitrines, e-commerce et outils métier : WordPress, WooCommerce et intégrations CRM sur mesure.',
    techs: [
      { slug: 'wordpress', label: 'WordPress' },
      { slug: 'woocommerce', label: 'WooCommerce' },
    ],
  },
  {
    title: 'Base de données',
    description:
      'Modélisation, requêtes et maintenance : PostgreSQL et MariaDB pour des données fiables et performantes.',
    techs: [
      { slug: 'postgresql', label: 'PostgreSQL' },
      { slug: 'mariadb', label: 'MariaDB' },
    ],
  },
  {
    title: 'Développement mobile avec React Native',
    description:
      'Applications mobiles cross-platform pour iOS et Android : interfaces natives, performances et expérience utilisateur soignée avec React Native.',
    techs: [{ slug: 'react', label: 'React Native' }],
  },
];
