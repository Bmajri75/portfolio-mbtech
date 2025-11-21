import { FaCode, FaPaintBrush, FaSync, FaCheck } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: FaCode,
      title: "Développement React",
      description:
        "Application web moderne et performante développée avec React.js et les dernières technologies.",
      price: "À partir de 800€",
      popular: false,
      features: [
        "Application React professionnelle",
        "Design responsive (mobile + desktop)",
        "Intégration API et backend",
        "Optimisation des performances",
        "Code propre et documenté",
        "Support technique 1 mois",
      ],
    },
    {
      id: 2,
      icon: FaPaintBrush,
      title: "Intégration Design Figma",
      description:
        "Transformation de votre maquette Figma en site web pixel-perfect avec code de qualité.",
      price: "À partir de 500€",
      popular: true,
      features: [
        "Intégration fidèle à 100%",
        "HTML/CSS/React au choix",
        "Animations et interactions",
        "Responsive sur tous écrans",
        "SEO optimisé",
        "Livraison rapide (5-7 jours)",
      ],
    },
    {
      id: 3,
      icon: FaSync,
      title: "Refonte Site Web",
      description:
        "Modernisation complète de votre site existant avec design actuel et meilleures performances.",
      price: "À partir de 1000€",
      popular: false,
      features: [
        "Audit complet du site actuel",
        "Nouveau design moderne",
        "Migration vers React/Next.js",
        "Amélioration SEO et vitesse",
        "Formation à la gestion",
        "Garantie 3 mois",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="relative py-20 bg-dark-800 overflow-hidden"
    >
      {/* Effets de fond */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Mes </span>
            <span className="text-cyan-400">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Solutions web professionnelles adaptées à vos besoins et votre
            budget
          </p>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grille de services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative bg-dark-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 ${
                service.popular
                  ? "border-primary-500 shadow-xl shadow-primary-500/20"
                  : "border-primary-500/20 hover:border-primary-500/50"
              }`}
            >
              {/* Badge Populaire */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                    ⭐ POPULAIRE
                  </span>
                </div>
              )}

              {/* Icône */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-6 transform hover:scale-110 transition-transform">
                <service.icon className="text-white text-2xl" />
              </div>

              {/* Titre */}
              <h3 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-6 min-h-[60px]">
                {service.description}
              </p>

              {/* Prix */}
              <div className="mb-6">
                <p className="text-3xl font-bold text-primary-400">
                  {service.price}
                </p>
                <p className="text-gray-500 text-sm">
                  Prix indicatif selon projet
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <FaCheck className="text-primary-500 mt-1 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`block text-center font-semibold py-3 rounded-lg transition-all transform hover:scale-105 ${
                  service.popular
                    ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg hover:shadow-primary-500/50"
                    : "bg-dark-800 text-primary-400 hover:bg-primary-500 hover:text-white border border-primary-500/30"
                }`}
              >
                Démarrer le projet
              </a>
            </div>
          ))}
        </div>

        {/* Section offre personnalisée */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-500/10 to-primary-600/10 border border-primary-500/30 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Besoin d'un projet sur-mesure ?
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Chaque projet est unique. Discutons de vos besoins spécifiques et je
            vous proposerai une solution adaptée à votre budget et vos
            objectifs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Demander un devis gratuit
            </a>
            <a
              href="https://calendly.com/mbtech" // Remplace par ton lien Calendly
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Réserver un appel découverte
            </a>
          </div>

          {/* Stats rapides */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-500/20">
            <div>
              <p className="text-3xl font-bold text-primary-400 mb-1">48h</p>
              <p className="text-gray-400 text-sm">Délai de réponse</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-400 mb-1">100%</p>
              <p className="text-gray-400 text-sm">Satisfaction client</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary-400 mb-1">7j/7</p>
              <p className="text-gray-400 text-sm">Communication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
