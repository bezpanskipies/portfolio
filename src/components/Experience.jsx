import React from "react";
import { motion } from "framer-motion";
import "./experience.css";
import { useTranslation } from "react-i18next";

const journey = [
  {
    id: 1,
    side: "left",
    year: "2015–2024",
    titleKey: "experience.item1.title",
    descriptionKey: "experience.item1.desc",
    icon: "🌍",
  },
  {
    id: 2,
    side: "right",
    year: "Aug 2025",
    titleKey: "experience.item2.title",
    subtitleKey: "experience.item2.subtitle",
    descriptionKey: "experience.item2.desc",
    credentialKey: "experience.item2.credential",
    link: "#",
    logo: "https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg",
  },
  {
    id: 3,
    side: "right",
    year: "Sep 2025",
    titleKey: "experience.item3.title",
    subtitleKey: "experience.item3.subtitle",
    descriptionKey: "experience.item3.desc",
    credentialKey: "experience.item3.credential",
    link: "#",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg",
  },
  {
    id: 4,
    side: "right",
    year: "Oct 2025",
    titleKey: "experience.item4.title",
    subtitleKey: "experience.item4.subtitle",
    descriptionKey: "experience.item4.desc",
    credentialKey: "experience.item4.credential",
    link: "#",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg",
  },
  {
    id: 5,
    side: "left",
    year: "2025–",
    titleKey: "experience.item5.title",
    descriptionKey: "experience.item5.desc",
    icon: "💻",
  },
];

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section id="journey" className="experience container">
      <motion.h2
        className="experience__title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t("experience.title")}
      </motion.h2>

      <div className="timeline">
        {journey.map((item) => (
          <motion.div
            key={item.id}
            className={`timeline-item ${item.side}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-content">
              <motion.div
                className="timeline-dot"
                initial={{ scale: 0.9, boxShadow: "0 0 0 rgba(88,110,255,0)" }}
                whileInView={{
                  scale: 1.1,
                  boxShadow:
                    "0 0 25px rgba(88,110,255,0.7), 0 0 50px rgba(255,80,180,0.3)",
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.7 }}
              >
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={
                      item.subtitleKey ? t(item.subtitleKey) : t(item.titleKey)
                    }
                  />
                ) : (
                  <span>{item.icon}</span>
                )}
              </motion.div>

              <div className="timeline-box">
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title">{t(item.titleKey)}</h3>
                {item.subtitleKey && (
                  <p className="timeline-subtitle">{t(item.subtitleKey)}</p>
                )}
                <p className="timeline-desc">{t(item.descriptionKey)}</p>
                {item.credentialKey && (
                  <p className="timeline-cred">{t(item.credentialKey)}</p>
                )}
                {item.link && (
                  <a
                    href={item.link}
                    className="timeline-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("experience.showCredential")} →
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
