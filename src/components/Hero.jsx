import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import logo from "../assets/logo.png";

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);

  // Titres qui vont défiler
  const titles = [
    "Développeur React Junior",
    "Full-Stack Developer",
    "Freelance Web",
    "Passionné de Code",
  ];

  // Animation du texte qui change toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 overflow-hidden"
    >
      {/* Effet de fond animé (cercles lumineux) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Partie gauche : Texte */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/30 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
              <span className="text-primary-400 text-sm font-medium">
                MB-Tech • Développeur disponible
              </span>
            </div>

            {/* Titre principal */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="text-white">Salut, je suis </span>
              <span className="text-cyan-400">MB-Tech</span>
            </h1>

            {/* Sous-titre animé */}
            <div className="h-12 mb-6">
              <p className="text-2xl md:text-3xl text-white font-semibold transition-all duration-500">
                {titles[currentTitle]}
              </p>
            </div>

            {/* Pitch */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              <span className="text-primary-400 font-bold">MB-Tech</span>{" "}
              transforme vos idées en applications web modernes et performantes.
              Solutions React professionnelles pour votre business digital.
            </p>

            {/* Boutons CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#projects"
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-primary-500/50 flex items-center justify-center gap-2"
              >
                Voir mes projets
                <FaArrowDown className="animate-bounce" />
              </a>
              <a
                href="#contact"
                className="bg-transparent border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <HiMail />
                Me contacter
              </a>
            </div>

            {/* Liens sociaux */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/bmajri75"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-dark-800 hover:bg-primary-500 text-gray-400 hover:text-white rounded-lg transition-all transform hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com/in/bechirmajri"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-dark-800 hover:bg-primary-500 text-gray-400 hover:text-white rounded-lg transition-all transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Partie droite : Logo MB-Tech */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Cercles lumineux derrière le logo */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-primary-600/30 rounded-3xl blur-3xl"></div>

              {/* Carré avec logo */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-dark-800 to-dark-900 rounded-3xl border-4 border-primary-500/50 overflow-hidden shadow-2xl flex items-center justify-center p-8">
                <img
                  src={logo}
                  alt="MB-Tech Logo"
                  className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Badges flottants (compétences) */}
              <div className="absolute -top-4 -right-4 bg-dark-800 border border-primary-500/30 rounded-lg px-4 py-2 shadow-xl animate-float">
                <p className="text-primary-400 font-semibold text-sm">
                  ⚡ React
                </p>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-dark-800 border border-primary-500/30 rounded-lg px-4 py-2 shadow-xl animate-float-delayed">
                <p className="text-primary-400 font-semibold text-sm">
                  🚀 JavaScript
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flèche scroll down */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="text-gray-400 hover:text-primary-500 transition-colors"
        >
          <FaArrowDown className="text-2xl" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
