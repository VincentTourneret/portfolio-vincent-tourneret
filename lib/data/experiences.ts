export type ExperienceIcon = 'briefcase' | 'building-office' | 'academic-cap';

export interface ExperienceDate {
  year: string;
  month?: string;
}

export interface Experience {
  start_date: ExperienceDate;
  end_date: ExperienceDate;
  end_label?: string;
  icon: ExperienceIcon;
  text: {
    headline: string;
    text: string;
  };
}

export const MONTHS_FR: Record<number, string> = {
  1: 'Janvier',
  2: 'Février',
  3: 'Mars',
  4: 'Avril',
  5: 'Mai',
  6: 'Juin',
  7: 'Juillet',
  8: 'Août',
  9: 'Septembre',
  10: 'Octobre',
  11: 'Novembre',
  12: 'Décembre',
};

export function formatDateRange(
  start: ExperienceDate,
  end: ExperienceDate,
  endLabel: string | null = null
): string {
  const s =
    (start.month ? `${MONTHS_FR[Number(start.month)]} ` : '') + start.year;
  const e =
    endLabel ??
    (end.month ? `${MONTHS_FR[Number(end.month)]} ` : '') + end.year;
  return `${s} – ${e}`;
}

export const experiences: Experience[] = [
  {
    start_date: { year: '2025', month: '9' },
    end_date: { year: '2025' },
    end_label: "Aujourd'hui",
    icon: 'briefcase',
    text: {
      headline: 'VITAVIE SARL',
      text:
        "Développement et maintenance d'un site web à forte audience (plusieurs milliers d'utilisateurs). Conception d'une architecture microservices, intégration CI/CD et développement d'applications mobiles.",
    },
  },
  {
    start_date: { year: '2023', month: '2' },
    end_date: { year: '2025', month: '8' },
    icon: 'briefcase',
    text: {
      headline: 'Cadcom',
      text:
        "Création de sites web et boutiques e-commerce sur mesure, ainsi que d'applications mobiles, avec optimisation performance et expérience utilisateur.",
    },
  },
  {
    start_date: { year: '2022', month: '9' },
    end_date: { year: '2023', month: '1' },
    icon: 'building-office',
    text: {
      headline: 'Isiconcept',
      text:
        "Maintenance et évolution d'un CRM, mise en place de correctifs et optimisation de la structure existante.",
    },
  },
  {
    start_date: { year: '2020', month: '9' },
    end_date: { year: '2022', month: '8' },
    icon: 'briefcase',
    text: {
      headline: 'Koredge',
      text:
        "Création et maintenance de sites vitrines, sites e-commerce et applications web, en garantissant performance, sécurité et évolutivité.",
    },
  },
  {
    start_date: { year: '2020', month: '9' },
    end_date: { year: '2022', month: '8' },
    icon: 'academic-cap',
    text: {
      headline: 'UFR ST – Master en Architecture Logicielle',
      text:
        "Spécialisation en architecture logicielle web et mobile, programmation fonctionnelle, CI/CD, architecture de tests automatisés et réseaux.",
    },
  },
  {
    start_date: { year: '2017', month: '9' },
    end_date: { year: '2020', month: '8' },
    icon: 'academic-cap',
    text: {
      headline: 'UFR ST – Licence Informatique générale',
      text:
        "Apprentissage du développement logiciel, concepts de polymorphisme, bases de données, fondamentaux web, gestion de serveurs et notions de réseaux.",
    },
  },
];
