import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Accueil", href: "#home" },
    { name: "À Propos", href: "#about" },
    { name: "Projets", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Développement React",
    "Intégration Figma",
    "Refonte Site Web",
    "Optimisation SEO",
  ];

  return (
    <footer className="relative bg-dark-900 border-t border-primary-500/20 overflow-hidden">
      {/* Effets de fond */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Colonne 1 : Logo + Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={logo}
                alt="MB-Tech Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold">
                <span className="text-cyan-400">MB</span>
                <span className="text-white">-Tech</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Développeur React passionné créant des solutions web modernes pour
              votre business digital.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex gap-3">
              <a
                href="https://github.com/bechirmajri"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-800 hover:bg-primary-500 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl" />
              </a>
              <a
                href="https://linkedin.com/in/bechirmajri"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-800 hover:bg-primary-500 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="mailto:bmajri@gmail.com"
                className="w-10 h-10 bg-dark-800 hover:bg-primary-500 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
                aria-label="Email"
              >
                <FaEnvelope className="text-xl" />
              </a>
            </div>
          </div>

          {/* Colonne 2 : Liens rapides */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 transition-all"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 : Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-gray-400 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-primary-400 rounded-full"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 : Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:bmajri@gmail.com"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  bmajri@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+33753611477"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  +33 7 53 61 14 77
                </a>
              </li>
              <li className="text-gray-400">France • Travail à distance</li>
              <li>
                <div className="flex items-center gap-2 mt-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">
                    Disponible
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-primary-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear}{" "}
              <span className="text-cyan-400 font-semibold">MB-Tech</span>. Tous
              droits réservés. Développé avec ❤️ et React.
            </p>

            {/* Bouton retour en haut */}
            <button
              onClick={scrollToTop}
              className="bg-primary-500 hover:bg-primary-600 text-white w-10 h-10 rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
              aria-label="Retour en haut"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
