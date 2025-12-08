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
    description:
      "Dashboard d'analyse de données avec graphiques interactifs, filtres avancés et export PDF.",
    image: '../../public/images/SmartFileOrganizer.png',
    technologies: ['Python', 'HTML'],
    category: 'Python',
    github: 'https://github.com/Bmajri75/SmartFileOrganizer',
    demo: '#',
  },
  {
    id: 3,
    title: 'Agence Web Moderne',
    description:
      'Site vitrine pour agence digitale avec animations, formulaire de contact et design premium.',
    image:
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    technologies: ['React', 'Framer Motion', 'EmailJS'],
    category: 'Landing Page',
    github: 'https://github.com/bechirmajri/agence-web',
    demo: 'https://agence-demo.vercel.app',
  },
  {
    id: 4,
    title: 'App Météo Real-Time',
    description:
      'Application météo avec géolocalisation, prévisions 7 jours et interface élégante.',
    image:
      'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80',
    technologies: ['React', 'OpenWeather API', 'CSS3'],
    category: 'React',
    github: 'https://github.com/bechirmajri/weather-app',
    demo: 'https://weather-demo.vercel.app',
  },
  {
    id: 5,
    title: 'Restaurant Booking System',
    description:
      'Système de réservation en ligne pour restaurant avec gestion des tables et notifications.',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    category: 'Full-Stack',
    github: 'https://github.com/bechirmajri/restaurant-booking',
    demo: 'https://restaurant-demo.vercel.app',
  },
  {
    id: 6,
    title: 'Portfolio Photographe',
    description:
      'Portfolio élégant pour photographe avec galerie, lightbox et formulaire de contact.',
    image:
      'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&q=80',
    technologies: ['React', 'Tailwind', 'Lightbox'],
    category: 'Landing Page',
    github: 'https://github.com/bechirmajri/photographer-portfolio',
    demo: 'https://photo-portfolio-demo.vercel.app',
  },
];

export const categories = ['Tous', 'React', 'Full-Stack', 'Landing Page'];
