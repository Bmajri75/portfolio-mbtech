import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-dark-900 rounded-xl overflow-hidden border border-primary-500/20 hover:border-primary-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary-500/20">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        {/* Overlay au hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Liens GitHub + Demo (apparaissent au hover) */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-dark-800 hover:bg-primary-500 text-white rounded-full flex items-center justify-center transition-all transform hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-primary-500 hover:bg-primary-600 text-white rounded-full flex items-center justify-center transition-all transform hover:scale-110"
            aria-label="Live Demo"
          >
            <FaExternalLinkAlt className="text-lg" />
          </a>
        </div>

        {/* Badge catégorie */}
        <div className="absolute top-4 left-4">
          <span className="bg-primary-500/90 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-6">
        {/* Titre */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-dark-800 text-primary-400 px-3 py-1 rounded-full border border-primary-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
