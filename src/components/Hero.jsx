import React from "react";
import { motion } from "framer-motion";
import ProfilePic from "../assets/main.jpg";
import "./hero.css";
import { useTranslation, Trans } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <motion.div
        className="hero__left"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="hero__photo-wrapper">
          <img
            className="hero__photo"
            src={ProfilePic}
            alt={t("hero.photoAlt", "Photo of Grzegorz")}
          />
          <div className="hero__photo-glow" />
        </div>
      </motion.div>

      <motion.div
        className="hero__right"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <h1 className="hero__name">{t("hero.name", "Grzegorz Wylegała")}</h1>
        <p className="hero__role">
          {t("hero.role", "Fullstack Developer • React • JS")}
        </p>
        <p className="hero__intro">
          <Trans i18nKey="hero.intro" components={{ 1: <strong /> }} />
        </p>
      </motion.div>
    </section>
  );
}
