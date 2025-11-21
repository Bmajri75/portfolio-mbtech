import { useState, useRef } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' ou 'error'

  // Validation email
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Validation du formulaire
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Le nom doit contenir au moins 2 caractères";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email invalide";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Le sujet est requis";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Gestion du changement de champ
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Efface l'erreur du champ modifié
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Envoi du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Valide le formulaire
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // ⚠️ REMPLACE PAR TES IDENTIFIANTS EMAILJS (étape suivante)
      await emailjs.sendForm(
        "service_rpvt59c", // À remplacer
        "template_a4uug29", // À remplacer
        formRef.current,
        "sBL6TTB1cM1NUU0Ni" // À remplacer
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Cache le message après 5 secondes
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error("Erreur:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-dark-900 overflow-hidden"
    >
      {/* Effets de fond */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Contactez </span>
            <span className="text-cyan-400">MB-Tech</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Un projet en tête ? Discutons ensemble de vos besoins
          </p>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Partie gauche : Infos contact */}
          <div className="space-y-8">
            <div className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Informations de contact
              </h3>

              {/* Email */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-primary-400 text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:bmajri@gmail.com"
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    bmajri@gmail.com
                  </a>
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-primary-400 text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Téléphone</h4>
                  <a
                    href="tel:+33753611477"
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    +33 7 53 61 14 77
                  </a>
                </div>
              </div>

              {/* Localisation */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-primary-400 text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">
                    Localisation
                  </h4>
                  <p className="text-gray-400">France • Travail à distance</p>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Suivez-moi</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/bmajri75"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-dark-900 hover:bg-primary-500 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href="https://linkedin.com/in/bechirmajri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-dark-900 hover:bg-primary-500 text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>

            {/* Disponibilité */}
            <div className="bg-gradient-to-r from-primary-500/20 to-primary-600/20 border border-primary-500/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h4 className="text-white font-semibold">
                  Disponible pour nouveaux projets
                </h4>
              </div>
              <p className="text-gray-300 text-sm">
                Réponse sous 24-48h • Devis gratuit • Premier appel offert
              </p>
            </div>
          </div>

          {/* Partie droite : Formulaire */}
          <div className="bg-dark-800/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Envoyez-moi un message
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Nom */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-white font-medium mb-2"
                >
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-dark-900 border ${
                    errors.name ? "border-red-500" : "border-primary-500/30"
                  } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors`}
                  placeholder="Votre nom"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-white font-medium mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-dark-900 border ${
                    errors.email ? "border-red-500" : "border-primary-500/30"
                  } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors`}
                  placeholder="votre@email.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Sujet */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-white font-medium mb-2"
                >
                  Sujet *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full bg-dark-900 border ${
                    errors.subject ? "border-red-500" : "border-primary-500/30"
                  } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors`}
                  placeholder="Sujet de votre message"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-white font-medium mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full bg-dark-900 border ${
                    errors.message ? "border-red-500" : "border-primary-500/30"
                  } rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors resize-none`}
                  placeholder="Décrivez votre projet..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Bouton Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-4 rounded-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Envoyer le message
                  </>
                )}
              </button>

              {/* Messages de statut */}
              {submitStatus === "success" && (
                <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg">
                  ✅ Message envoyé avec succès ! Je vous réponds sous 24-48h.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg">
                  ❌ Erreur lors de l'envoi. Réessayez ou contactez-moi par
                  email.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
