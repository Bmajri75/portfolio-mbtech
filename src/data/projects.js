export const projectsData = [
  {
    id: 1, // Change selon le nombre de projets que tu as
    title: 'MB-Coaching',
    description:
      'Plateforme de coaching sportif en ligne avec système de réservation, paiement Stripe et gestion des clients. Coaching privé en MMA, Muay Thai et Grappling.',
    image: '/images/mb-coaching.png',
    technologies: ['React', 'Vite', 'Tailwind', 'Stripe', 'Firebase'],
    category: 'React',
    github: 'https://github.com/Bmajri75/mb-coaching-', // Ou ton lien GitHub si repo public
    demo: 'https://mb-coaching.vercel.app', // ← TON URL VERCEL ICI
  },
  {
    id: 2,
    title: 'SmartFileOrganizer',
    soustitre: 'Organisation intelligente de fichiers avec IA',
    description:
      "SaaS qui automatise l'organisation de fichiers grâce à l'intelligence artificielle. Analyse le contenu, détecte les catégories et crée automatiquement une structure de dossiers logique et optimale.",
    image: '../../public/images/SmartFileOrganizer.png',
    technologies: ['Python', 'HTML'],
    category: 'Python',
    github: 'https://github.com/Bmajri75/SmartFileOrganizer',
    demo: '#',
  },
  {
    id: 3,
    title: 'Athletic Fight Sport',
    description:
      'Athletic Fight Sport est un blog dédié aux sports de combat, avec des actualités récupérées via un flux RSS et présentées dans une interface moderne.',
    image: '/public/#',
    technologies: ['NextJS', 'TypeScript', 'Tylewind'],
    category: 'React',
    github: 'https://github.com/Bmajri75/athletic-fight-sport',
  },
  {
    id: 4,
    title: 'Kongo Parfum',
    description: 'Site web luxueux KONGO by AMENYS - Angular + Node.js',
    image: '/public/images/kongo.png',
    technologies: ['Angular', 'NodeJs', 'SCSS'],
    category: 'Full-Stack',
    github: 'https://github.com/Bmajri75/kongo-parfum',
  },
];

export const categories = [
  'Tous',
  'React',
  'Python',
  'Full-Stack',
  'Landing Page',
];
