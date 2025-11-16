// About.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaPython,
  FaDatabase,
  FaServer,
  FaCloud,
  FaCertificate,
} from "react-icons/fa";
import { SiTypescript, SiFramer } from "react-icons/si";
import { MdDevices } from "react-icons/md";
import "./about.css";
import { useTranslation, Trans } from "react-i18next";

const SECTIONS = [
  {
    id: "core",
    titleKey: "about.sections.core.title",
    defaultTitle: "Frontend · Backend · Databases",
    icon: FaReact,
    items: [
      {
        title: "Frontend",
        desc: "HTML, CSS, Flex, Grid, Bootstrap, Tailwind, SASS, jQuerry, React",
      },
      {
        title: "Backend",
        desc: "JavaScript, Node.js / Express, REST APIs, JSON, Postman",
      },
      {
        title: "Databases",
        desc: "PostgreSQL, MySQL, MongoDB — projektowanie schematów, indeksy, migracje",
      },
    ],
  },
  {
    id: "python",
    titleKey: "about.sections.python.title",
    defaultTitle: "Python",
    icon: FaPython,
    items: [
      {
        title: "Core",
        desc: "OOP, async/await, generators, packaging (venv/poetry/pip)",
      },
      {
        title: "Frameworks",
        desc: "Flask / FastAPI / Django",
      },
      { title: "Tests & Tooling", desc: "pytest, linting, formatting" },
    ],
  },
  {
    id: "datasci",
    titleKey: "about.sections.datasci.title",
    defaultTitle: "Data Science",
    icon: SiFramer,
    items: [
      {
        title: "Libraries",
        desc: "numpy, pandas, scikit-learn, matplotlib — ETL, EDA, feature engineering",
      },
      {
        title: "Modeling",
        desc: "Regresja, klasyfikacja, walidacja krzyżowa, pipeline'y",
      },
      {
        title: "Projekty",
        desc: "Tutaj możesz dodać linki do projektów / repozytoriów",
      },
    ],
  },
  {
    id: "devops",
    titleKey: "about.sections.devops.title",
    defaultTitle: "DevOps",
    icon: FaServer,
    items: [
      {
        title: "CI / CD",
        desc: "GitHub Actions / GitLab CI — automatyzacja buildów i deployów",
      },
      {
        title: "Containers",
        desc: "Docker, Kubernetes, Jenkins",
      },
      {
        title: "Monitoring",
        desc: "Prometheus, Grafana",
      },
    ],
  },
  {
    id: "cloud",
    titleKey: "about.sections.cloud.title",
    defaultTitle: "Cloud",
    icon: FaCloud,
    items: [
      {
        title: "Platformy",
        desc: "AWS / GCP / Azure",
      },
      { title: "IaC", desc: "Terraform / CloudFormation" },
    ],
  },
  {
    id: "certs",
    titleKey: "about.sections.certs.title",
    defaultTitle: "Certyfikaty",
    icon: FaCertificate,
    items: [
      {
        title: "Posiadane",
        desc: "Responsive Web Design - Free Code Camp / Complete Full Stack Web Developement - Udemy / Complete JavaScript Course - Udemy",
      },
      {
        title: "W trakcie",
        desc: "Tu możesz wpisać certyfikaty, które planujesz zdobyć",
      },
    ],
  },
];

function Collapsible({ id, TitleIcon, title, children }) {
  return (
    <details className="about-details" id={id}>
      <summary className="about-summary">
        <span className="about-summary-left">
          {TitleIcon && (
            <TitleIcon className="about-summary-icon" aria-hidden="true" />
          )}
          <span className="about-summary-title">{title}</span>
        </span>
        <span className="about-summary-right" aria-hidden="true">
          ▸
        </span>
      </summary>

      <div className="about-detail-content">{children}</div>
    </details>
  );
}

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
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.22 }}
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

          <div className="about-sections">
            {SECTIONS.map((sec, idx) => {
              const Icon = sec.icon;
              const title = t(sec.titleKey, { defaultValue: sec.defaultTitle });
              return (
                <motion.div
                  key={sec.id}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: 0.04 * idx }}
                >
                  <Collapsible id={sec.id} TitleIcon={Icon} title={title}>
                    <ul className="section-items">
                      {sec.items.map((it, i) => (
                        <li key={i} className="section-item">
                          <strong className="section-item-title">
                            {it.title}:
                          </strong>
                          <span className="section-item-desc">{it.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </Collapsible>
                </motion.div>
              );
            })}
          </div>
        </aside>
      </motion.div>
    </section>
  );
}
