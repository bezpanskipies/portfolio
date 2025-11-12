// src/components/Projects.jsx
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./projects.css";

/**
 * DANE TESTOWE - zastąp własnymi (img może być lokalnym importem z /src/assets lub URL)
 * pole `category` służy do filtrowania
 * pola live/repo mogą być null lub href
 */
const PROJECTS = [
  {
    id: 1,
    title: "Projekt A",
    subtitle: "Aplikacja React • UI/UX",
    img: "https://picsum.photos/seed/p1/1200/800",
    href: "#",
    live: null,
    repo: null,
    category: "UI",
    description:
      "Krótki opis projektu A. Tutaj opisz problem, technologie i rolę.",
  },
  {
    id: 2,
    title: "Projekt B",
    subtitle: "Dashboard • Charts",
    img: "https://picsum.photos/seed/p2/1200/800",
    href: "#",
    live: null,
    repo: null,
    category: "Dashboard",
    description:
      "Krótki opis projektu B — integracje, wydajność i rozwiązania UI.",
  },
  {
    id: 3,
    title: "Projekt C",
    subtitle: "Landing Page • Performance",
    img: "https://picsum.photos/seed/p3/1200/800",
    href: "#",
    live: null,
    repo: null,
    category: "Landing",
    description: "Krótki opis projektu C — optymalizacja, SEO i animacje.",
  },

  /* --- DODANE PROJEKTY --- */

  {
    id: 4,
    title: "PyData Tool",
    subtitle: "Narzędzie analizy danych • Python",
    img: "https://picsum.photos/seed/p4/1200/800",
    href: "#",
    live: null,
    repo: null,
    category: "Python",
    description:
      "Projekt w Pythonie: pipeline do przetwarzania i wizualizacji danych. Wykorzystuje pandas, matplotlib/plotly oraz skrypty do automatycznego przetwarzania danych. Idealny jako demo umiejętności backendowych i pracy z danymi.",
  },
  {
    id: 5,
    title: "OpenAPI Connector",
    subtitle: "Integracja z zewnętrznym API",
    img: "https://picsum.photos/seed/p5/1200/800",
    href: "#",
    live: null,
    repo: null,
    category: "API",
    description:
      "Projekt pokazujący bezpieczne łączenie się z REST/GraphQL API, caching odpowiedzi, obsługę błędów i autoryzację. Zaimplementowano retry/backoff i testy integracyjne (można dodać demo w postaci małego frontendowego klienta).",
  },
  {
    id: 6,
    title: "Kappa Nihongo",
    subtitle: "Strona do nauki japońskiego",
    img: "src/assets/kappalogo.jpeg",
    href: "#",
    live: null,
    repo: null,
    category: "Edu",
    description:
      "Kappa Nihongo — projekt, który chcesz stworzyć: interaktywne lekcje, spaced repetition dla słówek, quizy i ćwiczenia z pisma (hiragana/katakana). Frontend w React, backend (opcjonalnie) w Node/Python. Cel: pomoc początkującym w nauce japońskiego w przyjemny sposób.",
  },
];

// lista kategorii (All + unikatowe kategorie z danych)
const CATEGORIES = [
  "All",
  ...Array.from(new Set(PROJECTS.map((p) => p.category))),
];

function ProjectCard({ project, onOpen }) {
  return (
    <motion.article
      className="proj-card"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      onClick={() => onOpen(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") onOpen(project);
      }}
      aria-label={`Otwórz projekt ${project.title}`}
    >
      <div className="proj-card__media">
        <img src={project.img} alt={project.title} loading="lazy" />
        <div className="proj-card__overlay">
          <div className="proj-card__overlay-inner">
            {/* Przyciski overlay - nieblokujące kliknięcia karty (klik otwiera modal, przyciski mają swoje cele) */}
            {project.live ? (
              <a
                className="proj-btn proj-btn--live"
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Otwórz live ${project.title}`}
              >
                Live
              </a>
            ) : (
              <button
                className="proj-btn proj-btn--disabled"
                onClick={(e) => e.stopPropagation()}
                aria-hidden
              >
                Live
              </button>
            )}

            {project.repo ? (
              <a
                className="proj-btn proj-btn--repo"
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Otwórz repozytorium ${project.title}`}
              >
                Repo
              </a>
            ) : (
              <button
                className="proj-btn proj-btn--disabled"
                onClick={(e) => e.stopPropagation()}
                aria-hidden
              >
                Repo
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="proj-card__body">
        <h4 className="proj-card__title">{project.title}</h4>
        <p className="proj-card__subtitle">{project.subtitle}</p>
      </div>
    </motion.article>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="proj-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} details`}
        >
          <motion.div
            className="proj-modal__card"
            initial={{ scale: 0.95, y: 12 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.98, y: 8 }}
            transition={{ duration: 0.18 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="proj-modal__media">
              <img src={project.img} alt={project.title} loading="lazy" />
            </div>
            <div className="proj-modal__body">
              <h3>{project.title}</h3>
              <p className="proj-modal__subtitle">{project.subtitle}</p>
              <p className="proj-modal__desc">{project.description}</p>

              <div className="proj-modal__actions">
                {project.live ? (
                  <a
                    className="proj-btn proj-btn--live"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Otwórz Live
                  </a>
                ) : null}
                {project.repo ? (
                  <a
                    className="proj-btn proj-btn--repo"
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Repo
                  </a>
                ) : null}
                <button className="proj-btn proj-btn--close" onClick={onClose}>
                  Zamknij
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [opened, setOpened] = useState(null);

  const list = useMemo(() => {
    return PROJECTS.filter(
      (p) => activeCategory === "All" || p.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section
      id="projekty"
      className="projects container"
      aria-labelledby="projects-title"
    >
      <h2 id="projects-title" className="projects__title">
        Projekty
      </h2>

      <p className="projects__lead">
        Wybrane realizacje — kliknij kartę by zobaczyć szczegóły.
      </p>

      <div className="projects__controls">
        <div
          className="projects__filters"
          role="tablist"
          aria-label="Filtr projektów"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="projects__grid">
        {list.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            onOpen={(prj) => setOpened(prj)}
          />
        ))}
      </div>

      <ProjectModal project={opened} onClose={() => setOpened(null)} />
    </section>
  );
}
