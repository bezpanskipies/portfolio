// src/components/LanguageSwitcher.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./language-switcher.css";

export default function LanguageSwitcher({ className = "", onChange }) {
  const { i18n } = useTranslation();
  const [animating, setAnimating] = useState(false);

  const toggle = () => {
    if (animating) return;
    setAnimating(true);

    const newLang = i18n.language === "pl" ? "en" : "pl";
    i18n.changeLanguage(newLang);
    if (typeof onChange === "function") onChange(newLang);

    // dopasuj timeout do czasu animacji w CSS / Framer
    setTimeout(() => setAnimating(false), 380);
  };

  const letterVariants = {
    initial: { rotateX: -70, opacity: 0, y: -6 },
    animate: { rotateX: 0, opacity: 1, y: 0 },
    exit: { rotateX: 70, opacity: 0, y: 6 },
  };

  return (
    <button
      className={`lang-switcher ${className} ${animating ? "anim" : ""}`}
      onClick={toggle}
      aria-label={
        i18n.language === "pl" ? "Switch to English" : "Przełącz na polski"
      }
      aria-pressed={i18n.language === "en"}
      title={i18n.language === "pl" ? "PL → EN" : "EN → PL"}
    >
      <span className="lang-switcher__inner" aria-hidden>
        <AnimatePresence mode="wait">
          <motion.span
            key={i18n.language} // zmiana klucza wyzwala exit+enter
            className="lang-switcher__letter"
            variants={letterVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.34, ease: "easeInOut" }}
          >
            {i18n.language.toUpperCase()}
          </motion.span>
        </AnimatePresence>
      </span>

      <span className="visually-hidden">
        {i18n.language === "pl" ? "Przełącz na angielski" : "Switch to Polish"}
      </span>
    </button>
  );
}
