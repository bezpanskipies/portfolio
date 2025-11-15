import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiTypescript, SiFramer } from "react-icons/si";
import { MdDevices } from "react-icons/md";
import "./about.css";
import { useTranslation, Trans } from "react-i18next";

const SKILLS = [
  { key: "skills.react", icon: <FaReact /> },
  { key: "skills.javascript", icon: <FaJsSquare /> },
  { key: "skills.python", icon: <FaPython /> },
  { key: "skills.typescript", icon: <SiTypescript /> },
  {
    key: "skills.htmlcss",
    icon: (
      <span className="multi-icons" aria-hidden>
        <FaHtml5 />
        <FaCss3Alt />
      </span>
    ),
  },
  { key: "skills.framer", icon: <SiFramer /> },
  { key: "skills.responsive", icon: <MdDevices /> },
];

export default function About() {
  const { t } = useTranslation();

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
            {t("about.title")}
          </h2>

          <p className="about__lead">
            <Trans
              i18nKey="about.lead"
              components={{ 1: <strong /> }}
              values={{ name: "Grzegorz" }}
            />
          </p>

          <p className="about__desc">{t("about.desc")}</p>
        </div>

        <aside className="about__skills" aria-label={t("about.skills.aria")}>
          <h3 className="about__skills-title">{t("about.skills.title")}</h3>

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
            {SKILLS.map(({ key, icon }) => (
              <motion.li
                className="skill"
                key={key}
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
                <span className="skill__name">{t(key)}</span>
              </motion.li>
            ))}
          </motion.ul>
        </aside>
      </motion.div>
    </section>
  );
}
