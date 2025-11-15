import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./projects.css";
import Kappa from "../assets/kappalogo.jpeg";
import { useTranslation } from "react-i18next";

const PROJECTS = [
  {
    id: 1,
    titleKey: "projects.p1.title",
    subtitleKey: "projects.p1.subtitle",
    descriptionKey: "projects.p1.desc",
    img: "https://picsum.photos/seed/p1/1200/800",
    href: "#",
    live: null,
    repo: null,
    category: "UI",
  },
  {
    id: 2,
    titleKey: "projects.p2.title",
    subtitleKey: "projects.p2.subtitle",
    descriptionKey: "projects.p2.desc",
    img: "https://picsum.photos/seed/p2/1200/800",
    href: "#",
    live: null,
    repo: null,
    category: "Dashboard",
  },
  {
    id: 3,
    titleKey: "projects.p3.title",
    subtitleKey: "projects.p3.subtitle",
    descriptionKey: "projects.p3.desc",
    img: "https://picsum.photos/seed/p3/1200/800",
    href: "#",
    live: null,
    repo: null,
    category: "Landing",
  },
  {
    id: 4,
    titleKey: "projects.p4.title",
    subtitleKey: "projects.p4.subtitle",
    descriptionKey: "projects.p4.desc",
    img: "https://picsum.photos/seed/p4/1200/800",
    href: "#",
    live: null,
    repo: null,
    category: "Python",
  },
  {
    id: 5,
    titleKey: "projects.p5.title",
    subtitleKey: "projects.p5.subtitle",
    descriptionKey: "projects.p5.desc",
    img: "https://picsum.photos/seed/p5/1200/800",
    href: "#",
    live: null,
    repo: null,
    category: "API",
  },
  {
    id: 6,
    titleKey: "projects.p6.title",
    subtitleKey: "projects.p6.subtitle",
    descriptionKey: "projects.p6.desc",
    img: Kappa,
    href: "#",
    live: null,
    repo: null,
    category: "Edu",
  },
];

const CATEGORIES = [
  "All",
  ...Array.from(new Set(PROJECTS.map((p) => p.category))),
];

function ProjectCard({ project, onOpen, t }) {
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
      aria-label={t("projects.openProject", { title: t(project.titleKey) })}
    >
      <div className="proj-card__media">
        <img src={project.img} alt={t(project.titleKey)} loading="lazy" />
      </div>

      <div className="proj-card__body">
        <h4 className="proj-card__title">{t(project.titleKey)}</h4>
        <p className="proj-card__subtitle">{t(project.subtitleKey)}</p>
      </div>
    </motion.article>
  );
}

function ProjectModal({ project, onClose, t }) {
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
          aria-label={`${t(project.titleKey)} details`}
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
              <img src={project.img} alt={t(project.titleKey)} loading="lazy" />
            </div>
            <div className="proj-modal__body">
              <h3>{t(project.titleKey)}</h3>
              <p className="proj-modal__subtitle">{t(project.subtitleKey)}</p>
              <p className="proj-modal__desc">{t(project.descriptionKey)}</p>

              <div className="proj-modal__actions">
                {project.live && (
                  <a
                    className="proj-btn proj-btn--live"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("projects.live")}
                  </a>
                )}
                {project.repo && (
                  <a
                    className="proj-btn proj-btn--repo"
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("projects.repo")}
                  </a>
                )}
                <button className="proj-btn proj-btn--close" onClick={onClose}>
                  {t("projects.close")}
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
  const { t } = useTranslation();
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
        {t("projects.title")}
      </h2>
      <p className="projects__lead">{t("projects.lead")}</p>

      <div className="projects__controls">
        <div
          className="projects__filters"
          role="tablist"
          aria-label={t("projects.filtersAria")}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {t(`projects.categories.${cat}`, cat)}
            </button>
          ))}
        </div>
      </div>

      <div className="projects__grid">
        {list.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={setOpened} t={t} />
        ))}
      </div>

      <ProjectModal project={opened} onClose={() => setOpened(null)} t={t} />
    </section>
  );
}
