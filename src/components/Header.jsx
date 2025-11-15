// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./header.css";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher"; // <- required (see language-switcher.jsx)

export default function Header() {
  const { t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "o-mnie", key: "nav.about" },
    { id: "projekty", key: "nav.projects" },
    { id: "journey", key: "experience.title" },
    { id: "kontakt", key: "nav.contact" },
  ];

  return (
    <header className="site-header">
      <div className="site-header__inner container">
        <div className="brand" aria-hidden>
          <span className="brand__logo" />
          <span className="brand__name">
            {t("brand.name", "Bezpański Pies")}
          </span>
        </div>

        <nav
          className="nav desktop-nav"
          aria-label={t("nav.aria", "Main navigation")}
        >
          {links.map(({ id, key }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav__link ${activeSection === id ? "active" : ""}`}
            >
              {t(key)}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="cta" href="#kontakt">
            {t("header.cta", "Kontakt")}
          </a>

          {/* LanguageSwitcher component (external) */}
          {/* onChange used to close mobile menu when switching language */}
          <LanguageSwitcher
            className="btn-lang"
            onChange={() => {
              setOpen(false);
            }}
          />

          <button
            className="hamburger"
            aria-label={
              open
                ? t("header.closeMenu", "Close menu")
                : t("header.openMenu", "Open menu")
            }
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden>
              {open ? (
                <path
                  d="M6 6 L18 18 M6 18 L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M3 7h18M3 12h18M3 17h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            {links.map(({ id, key }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`mobile-nav__link ${
                  activeSection === id ? "active" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {t(key)}
              </a>
            ))}
            <a
              href="#kontakt"
              className="mobile-nav__link mobile-cta"
              onClick={() => setOpen(false)}
            >
              {t("header.mobileCta", "Wyślij wiadomość")}
            </a>

            {/* Mobile language switcher — close menu then toggle */}
            <div className="mobile-actions-row">
              <LanguageSwitcher
                className="btn-lang mobile-lang"
                onChange={() => {
                  setOpen(false);
                }}
              />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
