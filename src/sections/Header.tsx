"use client";
import { useEffect, useState, useCallback } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState("hero");

  const handleScroll = useCallback(() => {
    const sections = document.querySelectorAll("section");
    let currentSection = "hero";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
        currentSection = section.id;
      }
    });

    const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
    if (isAtBottom) {
      currentSection = "contact";
    }

    setActiveSection(currentSection);
  }, []);

  useEffect(() => {
    const handleScrollEvent = () => requestAnimationFrame(handleScroll);

    window.addEventListener("scroll", handleScrollEvent);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, [handleScroll]);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur transition-all">
        {["hero", "projects", "about", "contact"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`nav-item px-4 py-2 rounded-full transition-colors ${activeSection === id ? "bg-white text-gray-900 font-semibold" : "text-white"
              }`}
            aria-current={activeSection === id ? "page" : undefined}
          >
            {id === "hero" ? "Início" : id === "projects" ? "Projetos" : id === "about" ? "Sobre mim" : "Contato"}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Header;
