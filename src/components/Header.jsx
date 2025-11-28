import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Détecte le scroll pour changer le style du header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ferme le menu mobile quand on clique sur un lien
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Accueil", href: "#home" },
    { name: "À Propos", href: "#about" },
    { name: "Projets", href: "#projects" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo MB-Tech */}
          <a href="#home" className="flex items-center gap-3 group">
            {/* Image du logo */}
            <img
              src={logo}
              alt="MB-Tech Logo"
              className="w-10 h-10 object-contain transform group-hover:scale-110 transition-transform"
            />

            {/* Nom */}
            <span className="text-2xl font-bold">
              <span className="text-primary-500">MB</span>
              <span className="text-white">-Tech</span>
            </span>
          </a>

          {/* Menu Desktop */}
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-300 hover:text-primary-500 transition-colors font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button Desktop */}
          <a
            href="#contact"
            className="hidden md:block bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-medium transition-all transform hover:scale-105"
          >
            Travailler ensemble
          </a>

          {/* Burger Menu Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu Mobile */}
        <div
          className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-dark-800 shadow-2xl transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-start space-y-6 px-8 pt-20">
            {navLinks.map((link) => (
              <li key={link.name} className="w-full">
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-gray-300 hover:text-primary-500 transition-colors font-medium text-lg block"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="w-full pt-4">
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg font-medium transition-all block text-center"
              >
                Travailler ensemble
              </a>
            </li>
          </ul>
        </div>

        {/* Overlay mobile (fond sombre quand menu ouvert) */}
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm"
            style={{ zIndex: -1 }}
          ></div>
        )}
      </nav>
    </header>
  );
};

export default Header;
