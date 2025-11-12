import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiTypescript, SiFramer } from "react-icons/si";
import { MdDevices } from "react-icons/md";
import "./about.css";

const SKILLS = [
  { name: "React", icon: <FaReact /> },
  { name: "JavaScript", icon: <FaJsSquare /> },
  { name: "Python", icon: <FaPython /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  {
    name: "HTML & CSS",
    icon: (
      <span className="multi-icons" aria-hidden>
        <FaHtml5 />
        <FaCss3Alt />
      </span>
    ),
  },
  { name: "Framer Motion", icon: <SiFramer /> },
  { name: "Responsive Design", icon: <MdDevices /> },
];

export default function About() {
  return (
    <section
      id="o-mnie"
      className="about container"
      aria-labelledby="about-title"
    >
      <motion.div
        className="about__inner"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="about__text">
          <h2 id="about-title" className="about__title">
            O mnie
          </h2>

          <p className="about__lead">
            Cześć — jestem <strong>Grzegorz</strong>, fullstack developer
            specjalizujący się w budowaniu interfejsów z użyciem <em>React</em>.
            Projektuję przejrzyste, responsywne i wydajne aplikacje, dbając o
            dobre doświadczenie użytkownika.
          </p>

          <p className="about__desc">
            Pracuję z: React, JavaScript, TypeScript, HTML/CSS, Vite i Framer
            Motion. Lubię robić czytelne UI, subtelne animacje i rozwiązywać
            złożone problemy interfejsowe.
          </p>
        </div>

        <aside className="about__skills" aria-label="Umiejętności">
          <h3 className="about__skills-title">Umiejętności</h3>

          <motion.ul
            className="skills-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.06 } },
            }}
          >
            {SKILLS.map(({ name, icon }) => (
              <motion.li
                className="skill"
                key={name}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.03, y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="skill__icon" aria-hidden>
                  {icon}
                </span>
                <span className="skill__name">{name}</span>
              </motion.li>
            ))}
          </motion.ul>
        </aside>
      </motion.div>
    </section>
  );
}
