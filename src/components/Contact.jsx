import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaCopy,
  FaLinkedin,
} from "react-icons/fa";
import "./contact.css";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const EMAIL = "barnabaszgaska@gmail.com";
  const INSTAGRAM =
    "https://www.instagram.com/bezpanski_pies/?igsh=aGkya3R0dDJ2Zmp6&utm_source=qr";
  const GITHUB = "https://github.com";
  const LINKEDIN = "https://www.linkedin.com/in/grzegorz-wylegala/";

  const [copyText, setCopyText] = useState(t("contact.copy.copy"));
  const [form, setForm] = useState({ name: "", from: "", message: "" });

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleCopyEmail() {
    navigator.clipboard?.writeText(EMAIL).then(
      () => {
        setCopyText(t("contact.copy.copied"));
        setTimeout(() => setCopyText(t("contact.copy.copy")), 2000);
      },
      () => {
        setCopyText(t("contact.copy.failed"));
        setTimeout(() => setCopyText(t("contact.copy.copy")), 2000);
      }
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    const senderName = form.name || t("contact.form.anonymous");
    const subjectPrefix = t("contact.mail.subjectPrefix");
    const subject = encodeURIComponent(`${subjectPrefix} ${senderName}`);
    const body = encodeURIComponent(
      `${form.message || t("contact.mail.emptyBody")}\n\n${t(
        "contact.mail.fromLabel"
      )}: ${senderName}\n${t("contact.mail.emailLabel")}: ${form.from || ""}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="kontakt"
      className="contact container"
      aria-labelledby="contact-title"
    >
      <motion.h2
        id="contact-title"
        className="contact__title"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {t("contact.title")}
      </motion.h2>

      <motion.div
        className="contact__inner"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="contact__left">
          <p className="contact__lead">{t("contact.lead")}</p>

          <div className="contact__cards">
            {/* Email */}
            <div className="contact__card">
              <FaEnvelope className="contact__icon" />
              <div>
                <div className="contact__card-title">
                  {t("contact.card.email")}
                </div>
                <div className="contact__card-body">
                  <a href={`mailto:${EMAIL}`} className="contact__link">
                    {EMAIL}
                  </a>
                  <button
                    className="btn-copy"
                    onClick={handleCopyEmail}
                    aria-label={t("contact.copy.aria")}
                  >
                    <FaCopy /> <span>{copyText}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Instagram */}
            <a
              className="contact__card contact__card--link"
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="contact__icon" />
              <div>
                <div className="contact__card-title">
                  {t("contact.card.instagram")}
                </div>
                <div className="contact__card-body">@bezpanski_pies</div>
              </div>
            </a>

            {/* GitHub */}
            <a
              className="contact__card contact__card--link"
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="contact__icon" />
              <div>
                <div className="contact__card-title">
                  {t("contact.card.github")}
                </div>
                <div className="contact__card-body">
                  github.com/bezpanskipies
                </div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              className="contact__card contact__card--link"
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="contact__icon" />
              <div>
                <div className="contact__card-title">
                  {t("contact.card.linkedin")}
                </div>
                <div className="contact__card-body">grzegorz-wylegala</div>
              </div>
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <label>
            <span>{t("contact.form.labelName")}</span>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t("contact.form.placeholderName")}
            />
          </label>

          <label>
            <span>{t("contact.form.labelEmail")}</span>
            <input
              name="from"
              value={form.from}
              onChange={handleChange}
              placeholder={t("contact.form.placeholderEmail")}
              type="email"
            />
          </label>

          <label>
            <span>{t("contact.form.labelMessage")}</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="6"
              placeholder={t("contact.form.placeholderMessage")}
            ></textarea>
          </label>

          <div className="contact__form-actions">
            <button type="submit" className="btn-submit">
              {t("contact.form.sendWithClient")}
            </button>
            <a className="btn-plain" href={`mailto:${EMAIL}`}>
              {t("contact.form.sendPlain")}
            </a>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
