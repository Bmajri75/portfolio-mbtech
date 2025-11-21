import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projectsData, categories } from "../data/projects";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Tous");

  // Filtrer les projets selon la catégorie
  const filteredProjects =
    activeCategory === "Tous"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative py-20 bg-dark-900 overflow-hidden"
    >
      {/* Effets de fond */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* {/* Header */}
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Mes </span>
            <span className="text-cyan-400">Projets</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations récentes en
            développement web
          </p>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${
                activeCategory === category
                  ? "bg-primary-500 text-white shadow-lg shadow-primary-500/50"
                  : "bg-dark-800 text-gray-400 hover:bg-dark-700 hover:text-white border border-primary-500/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Message si aucun projet */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              Aucun projet dans cette catégorie pour le moment.
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/bmajri75"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-primary-500 text-primary-400 hover:bg-primary-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            <FaGithub className="text-xl" />
            Voir plus sur GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

// Import manquant
import { FaGithub } from "react-icons/fa";

export default Projects;
