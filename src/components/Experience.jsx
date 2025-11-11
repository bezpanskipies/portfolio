import React from "react";
import { motion } from "framer-motion";
import "./experience.css";

const journey = [
  {
    id: 1,
    side: "left",
    year: "2015–2024",
    title: "Poliglota i tłumacz",
    description:
      "Przez niemal dekadę pracowałem z językami obcymi — uczyłem się, tłumaczyłem i współpracowałem z ludźmi z różnych krajów. To nauczyło mnie komunikacji, precyzji i cierpliwości – rzeczy niezbędnych także w programowaniu.",
    icon: "🌍",
  },
  {
    id: 2,
    side: "right",
    year: "Aug 2025",
    title: "Responsive Web Design",
    subtitle: "freeCodeCamp",
    description:
      "Podstawy HTML, CSS i responsywnego projektowania. Projektowanie stron przyjaznych dla użytkownika i dostępnych na różnych urządzeniach.",
    credential: "Credential ID: bezpanski_pies-rwd",
    link: "#",
    logo: "https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg",
  },
  {
    id: 3,
    side: "right",
    year: "Sep 2025",
    title: "The Complete Full-Stack Web Development Bootcamp",
    subtitle: "Udemy",
    description:
      "Intensywny kurs obejmujący HTML, CSS, JavaScript, Node.js, Express i MongoDB. Pierwsze pełne aplikacje full-stack.",
    credential: "Credential ID: ude.my/UC-569776df-da78-4e52-84f3-5f4c2aedaeba",
    link: "#",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg",
  },
  {
    id: 4,
    side: "right",
    year: "Oct 2025",
    title: "The Complete JavaScript Course 2025: From Zero to Expert!",
    subtitle: "Udemy",
    description:
      "Zaawansowany kurs JavaScript obejmujący DOM, async JS, API i nowoczesne wzorce. Solidne podstawy dla pracy z React.",
    credential: "Credential ID: UC-bd907d8a-093e-47a6-9ead-878fbf1aa294",
    link: "#",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg",
  },
  {
    id: 5,
    side: "left",
    year: "2025–",
    title: "Frontend Developer (React)",
    description:
      "Rozwijam swoje portfolio, uczę się Reacta, TypeScriptu i Framer Motion. Buduję własne projekty i przygotowuję się do pierwszej roli w branży IT.",
    icon: "💻",
  },
];

export default function Experience() {
  return (
    <section id="journey" className="experience container">
      <motion.h2
        className="experience__title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Moja droga
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
                  <img src={item.logo} alt={item.subtitle || item.title} />
                ) : (
                  <span>{item.icon}</span>
                )}
              </motion.div>

              <div className="timeline-box">
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title">{item.title}</h3>
                {item.subtitle && (
                  <p className="timeline-subtitle">{item.subtitle}</p>
                )}
                <p className="timeline-desc">{item.description}</p>
                {item.credential && (
                  <p className="timeline-cred">{item.credential}</p>
                )}
                {item.link && (
                  <a
                    href={item.link}
                    className="timeline-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Show credential →
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
