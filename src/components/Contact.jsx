// src/components/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaEnvelope, FaCopy } from "react-icons/fa";
import "./contact.css";

export default function Contact() {
  const EMAIL = "barnabaszgaska@gmail.com";
  const INSTAGRAM =
    "https://www.instagram.com/bezpanski_pies/?igsh=aGkya3R0dDJ2Zmp6&utm_source=qr";
  const GITHUB = "https://github.com";

  const [copyText, setCopyText] = useState("Kopiuj email");
  const [form, setForm] = useState({ name: "", from: "", message: "" });

  function handleChange(e) {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  function handleCopyEmail() {
    navigator.clipboard?.writeText(EMAIL).then(
      () => {
        setCopyText("Skopiowano!");
        setTimeout(() => setCopyText("Kopiuj email"), 2000);
      },
      () => {
        setCopyText("Kopiowanie nie powiodło się");
        setTimeout(() => setCopyText("Kopiuj email"), 2000);
      }
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Wiadomość od ${form.name || "Osoba z portfolio"}`
    );
    const body = encodeURIComponent(
      `${form.message || "(brak treści)"}\n\nOd: ${form.name || ""}\nEmail: ${
        form.from || ""
      }`
    );
    // otwiera klienta pocztowego
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
        Kontakt
      </motion.h2>

      <motion.div
        className="contact__inner"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="contact__left">
          <p className="contact__lead">
            Masz pytanie albo chcesz porozmawiać o współpracy? Napisz —
            odpowiadam szybko.
          </p>

          <div className="contact__cards">
            <div className="contact__card">
              <FaEnvelope className="contact__icon" />
              <div>
                <div className="contact__card-title">Email</div>
                <div className="contact__card-body">
                  <a href={`mailto:${EMAIL}`} className="contact__link">
                    {EMAIL}
                  </a>
                  <button
                    className="btn-copy"
                    onClick={handleCopyEmail}
                    aria-label="Kopiuj email"
                  >
                    <FaCopy /> <span>{copyText}</span>
                  </button>
                </div>
              </div>
            </div>

            <a
              className="contact__card contact__card--link"
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="contact__icon" />
              <div>
                <div className="contact__card-title">Instagram</div>
                <div className="contact__card-body">@bezpanski_pies</div>
              </div>
            </a>

            <a
              className="contact__card contact__card--link"
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="contact__icon" />
              <div>
                <div className="contact__card-title">GitHub</div>
                <div className="contact__card-body">
                  github.com/bezpanskipies
                </div>
              </div>
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit}>
          <label>
            <span>Twoje imię</span>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Imię i nazwisko"
            />
          </label>

          <label>
            <span>Twój email</span>
            <input
              name="from"
              value={form.from}
              onChange={handleChange}
              placeholder="twój@email.com"
              type="email"
            />
          </label>

          <label>
            <span>Wiadomość</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="6"
              placeholder="Cześć, chciałbym..."
            ></textarea>
          </label>

          <div className="contact__form-actions">
            <button type="submit" className="btn-submit">
              Wyślij (otworzy klienta pocztowego)
            </button>
            <a className="btn-plain" href={`mailto:${EMAIL}`}>
              Wyślij maila bez formularza
            </a>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
