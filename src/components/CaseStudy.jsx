// src/components/CaseStudy.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./case-study.css";
import { useTranslation, Trans } from "react-i18next";
import Kappa from "../assets/kappalogo.jpeg"; // jeśli plik w assets

/**
 * CaseStudy component
 * - Jeśli nie masz kluczy w i18n -> zobaczysz fallbacky z STUDY
 * - Możesz przekazać własny 'study' prop z tytułem/steps/img
 */

const DEFAULT_STUDY = {
  id: "kappa-nihongo",
  titleKey: "case.kappa.title",
  subtitleKey: "case.kappa.subtitle",
  // fallback plain strings (używane jeśli tłumaczenie nie istnieje)
  titleFallback: "Kappa Nihongo — Case Study",
  subtitleFallback: "Interaktywne lekcje • Spaced repetition • React",
  heroImg: Kappa, // import obrazu (zamień jeśli chcesz inny)
  steps: [
    {
      id: "goal",
      titleKey: "case.kappa.steps.0.title",
      descKey: "case.kappa.steps.0.desc",
      titleFallback: "Goal",
      descFallback:
        "Create an easy-to-use platform for learning the basics of Japanese (hiragana/katakana), with interactive lessons and spaced repetition for vocabulary.",
      img: null,
    },
    {
      id: "decisions",
      titleKey: "case.kappa.steps.1.title",
      descKey: "case.kappa.steps.1.desc",
      titleFallback: "Decisions",
      descFallback:
        "We picked React + Vite for fast dev and Framer Motion for animations. For storage we prototyped with localStorage and planned a small JSON API for later.",
      img: null,
    },
    {
      id: "challenges",
      titleKey: "case.kappa.steps.2.title",
      descKey: "case.kappa.steps.2.desc",
      titleFallback: "Challenges",
      descFallback:
        "Key challenges: offline-friendly spaced repetition, smooth animations without blocking scroll, and compact UI for mobile users.",
      img: null,
    },
    {
      id: "solution",
      titleKey: "case.kappa.steps.3.title",
      descKey: "case.kappa.steps.3.desc",
      titleFallback: "Solution",
      descFallback:
        "Implemented an SR algorithm (Leitner-inspired), used IntersectionObserver to lazy-load lessons, and optimized animations with will-change + reduced-motion fallback.",
      img: null,
    },
    {
      id: "result",
      titleKey: "case.kappa.steps.4.title",
      descKey: "case.kappa.steps.4.desc",
      titleFallback: "Result",
      descFallback:
        "Interactive lessons with improved retention in tests; small, fast frontend ready to integrate with a backend when scaling.",
      img: null,
    },
  ],
};

export default function CaseStudy({ study = DEFAULT_STUDY }) {
  const { t } = useTranslation();
  const [openId, setOpenId] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -8 },
    visible: { opacity: 1, x: 0 },
  };

  // helper: bezpieczne pobranie tłumaczenia z fallbackiem
  const tr = (key, fallback) => {
    // i18next: jeśli klucz nie istnieje, t zwraca sam klucz.
    // dlatego używamy second arg jako defaultValue
    return t(key, fallback);
  };

  return (
    <section
      id={`case-${study.id}`}
      className="case container"
      aria-labelledby={`case-${study.id}-title`}
    >
      <div className="case__header">
        <div className="case__meta">
          <h2 id={`case-${study.id}-title`} className="case__title">
            {tr(study.titleKey, study.titleFallback)}
          </h2>
          <p className="case__subtitle">
            {tr(study.subtitleKey, study.subtitleFallback)}
          </p>
        </div>

        {study.heroImg && (
          <div className="case__hero">
            {/* obsługa stringa vs import */}
            <img
              src={study.heroImg}
              alt={tr(study.titleKey, study.titleFallback)}
              loading="lazy"
            />
          </div>
        )}
      </div>

      <motion.div
        className="case__timeline"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
      >
        {study.steps.map((step, idx) => {
          const isOpen = openId === step.id;
          const stepTitle = tr(
            step.titleKey,
            step.titleFallback || step.titleKey
          );
          const stepDesc = tr(step.descKey, step.descFallback || "");
          return (
            <motion.article
              key={step.id}
              className={`case-step ${isOpen ? "open" : ""}`}
              variants={itemVariants}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setOpenId(isOpen ? null : step.id);
                }
              }}
            >
              <button
                className="case-step__head"
                onClick={() => setOpenId(isOpen ? null : step.id)}
                aria-expanded={isOpen}
                aria-controls={`case-step-body-${step.id}`}
              >
                <span className="case-step__index">{idx + 1}</span>
                <span className="case-step__title">{stepTitle}</span>
                <span className="case-step__chev" aria-hidden>
                  {isOpen ? "▲" : "▼"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`case-step-body-${step.id}`}
                    className="case-step__body"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.28 }}
                  >
                    {/* jeśli masz w tłumaczeniu markup użyj <Trans>, inaczej plain text */}
                    <p className="case-step__desc">
                      {/* jeśli tłumaczenie pokazuje tagi, Trans je wyrenderuje */}
                      {step.descKey ? (
                        <Trans i18nKey={step.descKey}>{stepDesc}</Trans>
                      ) : (
                        stepDesc
                      )}
                    </p>

                    {step.img && (
                      <div className="case-step__media">
                        <img src={step.img} alt={stepTitle} loading="lazy" />
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </motion.div>

      <div className="case__cta-row">
        <a className="btn" href="#projekty">
          {t("case.viewProjects", "Back to projects")}
        </a>
        <a className="btn btn-ghost" href="#kontakt">
          {t("case.contactMe", "Contact me about this")}
        </a>
      </div>
    </section>
  );
}
