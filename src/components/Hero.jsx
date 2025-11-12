import React from "react";
import { motion } from "framer-motion";
import ProfilePic from "../assets/main.jpg";
import "./hero.css";

function Hero() {
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
            alt="Zdjęcie Grzegorza Gudzińskiego"
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
        <h1 className="hero__name">Grzegorz Wylegała</h1>
        <p className="hero__role">Fullstack Developer • React • JS</p>
        <p className="hero__intro">
          Tworzę eleganckie interfejsy i dbam o dobre doświadczenie użytkowników
        </p>
      </motion.div>
    </section>
  );
}

export default Hero;
