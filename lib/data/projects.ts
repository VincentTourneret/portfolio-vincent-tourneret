/** Techno affichée via Simple Icons (même source que les domaines d’expertise). */
export interface ProjectTechnology {
  /** Slug Simple Icons (ex: nextdotjs, react, tailwindcss). */
  iconSlug: string;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  url: string;
  image: string;
  technologies: ProjectTechnology[];
  /** Contenu HTML ou Markdown pour la page single (optionnel) */
  content?: string;
}

export const projects: Project[] = [
  // Exemple : ajouter vos projets ici ou importer depuis un JSON.
  // Les images peuvent être dans public/images/projects/ (ex: /images/projects/mon-projet.jpg)
  // {
  //   slug: 'mon-projet',
  //   title: 'Mon projet',
  //   description: 'Courte description.',
  //   url: 'https://example.com',
  //   image: '/images/projects/mon-projet.jpg',
  //   technologies: [
  //     { iconSlug: 'react', alt: 'React' },
  //   ],
  //   content: '<p>Contenu détaillé...</p>',
  // },$
  {
    slug: 'cortexa',
    title: 'Cortexa',
    description: 'Logiciel créé pour la prise de note et mise en relation de connaissance à la demande d’un médecin',
    url: 'https://cortexa.caprover.vincent-tourneret.fr',
    image: '/images/cortexa.png',
    technologies: [
      { iconSlug: 'nextdotjs', alt: 'Next.js' },
      { iconSlug: 'react', alt: 'React' },
      { iconSlug: 'tailwindcss', alt: 'Tailwind CSS' },
    ],
    content: "",
  },
  {
    slug: 'fabien-electricien',
    title: 'Fabien Electricien',
    description: 'Site vitrine pour un electricien. Site headless avec Next.js et Tailwind CSS et backend WordPress.',
    url: 'https://fabienelectricien.fr',
    image: '/images/fabienelectricien.png',
    technologies: [
      { iconSlug: 'wordpress', alt: 'WordPress' },
      { iconSlug: 'nextdotjs', alt: 'Next.js' },
      { iconSlug: 'react', alt: 'React' },
      { iconSlug: 'tailwindcss', alt: 'Tailwind CSS' },
    ],
    content: "",
  },
  {
    slug: 'votre-projet',
    title: 'Votre projet',
    description: 'Et si l\'on parlait de votre projet ? Je suis à votre écoute pour vous aider à le réaliser.',
    url: 'https://vincent-tourneret.fr',
    image: '/images/votre-projet.jpg',
    technologies: [],
    content: '<p>Contenu détaillé...</p>',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
