import { useEffect } from "react";

const SchemaMarkup = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Bechir Majri",
      alternateName: "MB-Tech",
      url: "https://portfolio-mbtech.vercel.app",
      image: "https://portfolio-mbtech.vercel.app/logo.jpg",
      jobTitle: "Développeur React Freelance",
      worksFor: {
        "@type": "Organization",
        name: "MB-Tech",
      },
      sameAs: [
        "https://github.com/Bmajri75",
        "https://linkedin.com/in/bechirmajri",
      ],
      knowsAbout: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "Node.js",
        "Web Development",
        "Front-End Development",
      ],
      address: {
        "@type": "PostalAddress",
        addressCountry: "FR",
        addressLocality: "France",
      },
      email: "bmajri@gmail.com",
      telephone: "+33753611477",
      offers: {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Développement d'applications React",
          description:
            "Services de développement web avec React.js, intégration Figma, et refonte de sites web",
        },
      },
    };

    // Vérifie si le script existe déjà
    const existingScript = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (existingScript) {
      existingScript.textContent = JSON.stringify(schema);
    } else {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    // Cleanup au démontage
    return () => {
      const scriptToRemove = document.querySelector(
        'script[type="application/ld+json"]'
      );
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return null;
};

export default SchemaMarkup;
