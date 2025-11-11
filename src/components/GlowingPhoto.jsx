// src/components/GlowingPhoto.jsx
import React from "react";
import { motion } from "framer-motion";
import "./glowing-photo.css";

export default function GlowingPhoto({ src, alt = "Zdjęcie profilowe" }) {
  return (
    <motion.div
      className="glow-photo"
      initial={{ scale: 0.98 }}
      animate={{ y: [0, -8, 0] }} // delikatne unoszenie
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.06, y: -12, rotate: 1.5 }}
      aria-label={alt}
      role="img"
    >
      <div className="glow-photo__frame" aria-hidden="true" />
      <img src={src} alt={alt} className="glow-photo__img" />
    </motion.div>
  );
}
