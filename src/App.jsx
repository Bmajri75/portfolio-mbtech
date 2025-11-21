import { useState } from "react";
import SEO from "./components/SEO";
import SchemaMarkup from "./components/SchemaMarkup";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* SEO Meta Tags */}
      <SEO
        title="MB-Tech | Développeur React Freelance - Bechir Majri"
        description="MB-Tech - Développeur React freelance spécialisé en création d'applications web modernes. Services : développement React, intégration Figma, refonte de sites web. Basé en France, disponible à distance."
        keywords="développeur react, freelance react, création site web, développeur web france, intégration figma, react js, développeur javascript, portfolio développeur, mb-tech, bechir majri"
        canonical="https://portfolio-mbtech.vercel.app/"
        ogImage="https://portfolio-mbtech.vercel.app/og-image.jpg"
      />

      {/* Schema.org Structured Data */}
      <SchemaMarkup />

      {/* Main Content */}
      <div className="min-h-screen bg-dark-900">
        <Header />
        <main>
          <Hero />
          <About />
          <Projects />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
