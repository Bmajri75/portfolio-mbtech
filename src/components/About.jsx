import { useEffect, useRef, useState } from 'react';
import { FaCheckCircle, FaCode, FaRocket, FaUsers } from 'react-icons/fa';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Détecte quand la section est visible pour animer les barres
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Compétences techniques
  const skills = [
    { name: 'React.js', level: 70, color: 'bg-blue-500' },
    { name: 'JavaScript / ES6+', level: 85, color: 'bg-yellow-500' },
    { name: 'Tailwind CSS', level: 70, color: 'bg-cyan-500' },
    { name: 'Node.js / Express', level: 60, color: 'bg-green-500' },
    { name: 'Git / GitHub', level: 85, color: 'bg-orange-500' },
    { name: 'HTML5 / CSS3', level: 95, color: 'bg-red-500' },
    { name: 'Python', level: 60, color: 'bg-blue-300' },
  ];

  // Stats
  const stats = [
    { icon: FaCode, number: '10+', label: 'Projets réalisés' },
    { icon: FaUsers, number: '8+', label: 'Clients satisfaits' },
    { icon: FaRocket, number: '1+', label: "Années d'expérience" },
    { icon: FaCheckCircle, number: '100%', label: 'Engagement qualité' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 bg-dark-800 overflow-hidden"
    >
      {/* Effets de fond */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">À Propos de </span>
            <span className="text-cyan-400">MB-Tech</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Partie gauche : Présentation */}
          <div className="space-y-6">
            {/* Carte principale */}
            <div className="bg-dark-900/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Qui suis-je ?
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Je suis{' '}
                <span className="text-primary-400 font-semibold">
                  Bechir Majri
                </span>
                , développeur web passionné et fondateur de{' '}
                <span className="text-primary-400 font-semibold">MB-Tech</span>.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                En reconversion professionnelle, je me spécialise dans le{' '}
                <span className="text-primary-400">
                  développement d'applications web modernes
                </span>{' '}
                avec React, JavaScript et les technologies full-stack.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Mon objectif : créer des{' '}
                <span className="text-primary-400">
                  solutions web performantes
                </span>{' '}
                qui propulsent votre business digital tout en me construisant
                une carrière dans la tech.
              </p>
            </div>

            {/* Expertise */}
            <div className="bg-dark-900/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Mon Expertise
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-300">
                  <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" />
                  <span>
                    Développement d'applications React modernes et performantes
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" />
                  <span>
                    Intégration de designs Figma/XD en code pixel-perfect
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" />
                  <span>Refonte et modernisation de sites web existants</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" />
                  <span>
                    Solutions full-stack avec Node.js et bases de données
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" />
                  <span>Optimisation SEO et performance web</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Partie droite : Compétences */}
          <div className="space-y-6">
            {/* Compétences techniques */}
            <div className="bg-dark-900/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Compétences Techniques
              </h3>
              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-primary-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-dark-900/50 backdrop-blur-sm border border-primary-500/20 rounded-xl p-6 text-center hover:border-primary-500/50 transition-all transform hover:scale-105"
                >
                  <stat.icon className="text-primary-500 text-3xl mx-auto mb-3" />
                  <h4 className="text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </h4>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                Prêt à collaborer ?
              </h3>
              <p className="text-white/90 mb-6">
                Transformons votre idée en réalité digitale
              </p>
              <a
                href="#contact"
                className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Discutons de votre projet
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
