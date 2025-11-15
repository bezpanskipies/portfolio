// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // NAV / HEADER
      "nav.home": "Home",
      "nav.about": "About",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "nav.aria": "Main navigation",
      "brand.name": "Bezpański Pies",
      "header.cta": "Contact",
      "header.openMenu": "Open menu",
      "header.closeMenu": "Close menu",
      "header.mobileCta": "Send a message",

      // HERO
      "hero.alt": "Photo of Grzegorz Wylegała",
      "hero.name": "Grzegorz Wylegała",
      "hero.role": "Fullstack Developer • React • JS",
      "hero.intro":
        "I create elegant user interfaces with focus on smooth, intuitive user experience",

      // ABOUT
      "about.title": "About me",
      "about.lead":
        "Hi — I'm <1>{{name}}</1>, a front-end developer specializing in building interfaces with React.",
      "about.desc":
        "I work with React, JavaScript, TypeScript, HTML/CSS, Vite and Framer Motion. I enjoy creating clean UIs, subtle animations and solving complex UI problems.",
      "about.skills.title": "Skills",
      "about.skills.aria": "Skills list",

      // CASE STUDY — KAPPA NIHONGO
      "case.kappa.title": "Kappa Nihongo — Case Study",
      "case.kappa.subtitle": "Interactive lessons • Spaced repetition • React",

      "case.kappa.steps.0.title": "Goal",
      "case.kappa.steps.0.desc":
        "Create an easy-to-use platform for learning the basics of Japanese (hiragana and katakana) with interactive lessons and spaced repetition.",

      "case.kappa.steps.1.title": "Decisions",
      "case.kappa.steps.1.desc":
        "React + Vite for fast prototyping, Framer Motion for animations. LocalStorage for early-stage data, prepared for a lightweight backend API.",

      "case.kappa.steps.2.title": "Challenges",
      "case.kappa.steps.2.desc":
        "Main challenges were an offline-friendly spaced repetition system, smooth animations on mobile devices, and a compact UI for small screens.",

      "case.kappa.steps.3.title": "Solution",
      "case.kappa.steps.3.desc":
        "Implemented a simplified SR (Leitner-style), lazy-loaded lessons with IntersectionObserver, and optimized animations with GPU-friendly performance tweaks.",

      "case.kappa.steps.4.title": "Result",
      "case.kappa.steps.4.desc":
        "A fast, interactive learning tool with improved retention in early tests, prepared for scaling into a full application.",

      "case.viewProjects": "Back to projects",
      "case.contactMe": "Contact me about this",

      // SKILLS
      "skills.react": "React",
      "skills.javascript": "JavaScript",
      "skills.python": "Python",
      "skills.typescript": "TypeScript",
      "skills.htmlcss": "HTML & CSS",
      "skills.framer": "Framer Motion",
      "skills.responsive": "Responsive Design",

      // CONTACT
      "contact.title": "Contact",
      "contact.lead":
        "Have a question or want to talk about a project? Write to me — I usually respond quickly.",
      "contact.card.email": "Email",
      "contact.card.instagram": "Instagram",
      "contact.card.github": "GitHub",
      "contact.card.linkedin": "LinkedIn",
      "contact.copy.copy": "Copy email",
      "contact.copy.copied": "Copied!",
      "contact.copy.failed": "Copy failed",
      "contact.copy.aria": "Copy email to clipboard",
      "contact.form.labelName": "Your name",
      "contact.form.placeholderName": "Full name",
      "contact.form.labelEmail": "Your email",
      "contact.form.placeholderEmail": "your@email.com",
      "contact.form.labelMessage": "Message",
      "contact.form.placeholderMessage": "Hi, I'd like to...",
      "contact.form.sendWithClient": "Send (will open email client)",
      "contact.form.sendPlain": "Send email without form",
      "contact.form.anonymous": "Person from portfolio",
      "contact.mail.subjectPrefix": "Message from portfolio",
      "contact.mail.emptyBody": "(no message)",
      "contact.mail.fromLabel": "From",
      "contact.mail.emailLabel": "Email",

      // EXPERIENCE
      "experience.title": "My journey",
      "experience.showCredential": "Show credential",
      "experience.item1.title": "Polyglot & Translator",
      "experience.item1.desc":
        "For nearly a decade I worked with foreign languages — studying, translating and collaborating with people from different countries.",
      "experience.item2.title": "Responsive Web Design",
      "experience.item2.subtitle": "freeCodeCamp",
      "experience.item2.desc":
        "Basics of HTML, CSS and responsive design. Building user-friendly pages.",
      "experience.item3.title":
        "The Complete Full-Stack Web Development Bootcamp",
      "experience.item3.subtitle": "Udemy",
      "experience.item3.desc":
        "Intensive course covering HTML, CSS, JavaScript, Node.js, Express and MongoDB.",
      "experience.item4.title":
        "The Complete JavaScript Course 2025: From Zero to Expert!",
      "experience.item4.subtitle": "Udemy",
      "experience.item4.desc":
        "Advanced JavaScript covering DOM, async, APIs and modern patterns.",
      "experience.item5.title": "Frontend Developer (React)",
      "experience.item5.desc":
        "Building my portfolio, React, TypeScript, animations, personal projects.",

      // PROJECTS
      "projects.title": "Projects",
      "projects.lead": "Selected works — click a card to see details.",
      "projects.filtersAria": "Project filters",
      "projects.live": "Open Live",
      "projects.repo": "Repo",
      "projects.close": "Close",
      "projects.openProject": "Open project {{title}}",
      "projects.categories.All": "All",
      "projects.categories.UI": "UI",
      "projects.categories.Dashboard": "Dashboard",
      "projects.categories.Landing": "Landing Page",
      "projects.categories.Python": "Python",
      "projects.categories.API": "API",
      "projects.categories.Edu": "Education",
      "projects.p1.title": "Project A",
      "projects.p1.subtitle": "React App • UI/UX",
      "projects.p1.desc": "Short description of Project A.",
      "projects.p2.title": "Project B",
      "projects.p2.subtitle": "Dashboard • Charts",
      "projects.p2.desc": "Short description of Project B.",
    },
  },

  pl: {
    translation: {
      // NAV / HEADER
      "nav.home": "Strona główna",
      "nav.about": "O mnie",
      "nav.projects": "Projekty",
      "nav.contact": "Kontakt",
      "nav.aria": "Główna nawigacja",
      "brand.name": "Bezpański Pies",
      "header.cta": "Kontakt",
      "header.openMenu": "Otwórz menu",
      "header.closeMenu": "Zamknij menu",
      "header.mobileCta": "Wyślij wiadomość",

      // HERO
      "hero.alt": "Zdjęcie Grzegorza Wylegały",
      "hero.name": "Grzegorz Wylegała",
      "hero.role": "Fullstack Developer • React • JS",
      "hero.intro":
        "Tworzę eleganckie interfejsy i dbam o dobre doświadczenie użytkowników",

      // ABOUT
      "about.title": "O mnie",
      "about.lead":
        "Cześć — jestem <1>{{name}}</1>, frontend developer specjalizujący się w budowaniu interfejsów z użyciem React.",
      "about.desc":
        "Pracuję z: React, JavaScript, TypeScript, HTML/CSS, Vite i Framer Motion.",
      "about.skills.title": "Umiejętności",
      "about.skills.aria": "Lista umiejętności",

      // CASE STUDY — KAPPA NIHONGO
      "case.kappa.title": "Kappa Nihongo — Case Study",
      "case.kappa.subtitle": "Interaktywne lekcje • Spaced repetition • React",

      "case.kappa.steps.0.title": "Cel",
      "case.kappa.steps.0.desc":
        "Stworzyć platformę do nauki podstaw japońskiego (hiragana i katakana) z interaktywnymi lekcjami i spaced repetition.",

      "case.kappa.steps.1.title": "Decyzje projektowe",
      "case.kappa.steps.1.desc":
        "React + Vite dla szybkiego prototypowania, Framer Motion do animacji. LocalStorage na wczesnym etapie, z myślą o późniejszym backendzie API.",

      "case.kappa.steps.2.title": "Wyzwania",
      "case.kappa.steps.2.desc":
        "Największymi wyzwaniami były: system SR działający offline, płynne animacje na urządzeniach mobilnych oraz kompaktowy UI.",

      "case.kappa.steps.3.title": "Rozwiązanie",
      "case.kappa.steps.3.desc":
        "Wdrożono uproszczony SR (Leitner), lazy loading lekcji przy użyciu IntersectionObserver oraz optymalizacje animacji.",

      "case.kappa.steps.4.title": "Rezultat",
      "case.kappa.steps.4.desc":
        "Szybkie, interaktywne narzędzie do nauki z poprawioną retencją i możliwością dalszego skalowania projektu.",

      "case.viewProjects": "Wróć do projektów",
      "case.contactMe": "Skontaktuj się w sprawie projektu",

      // SKILLS
      "skills.react": "React",
      "skills.javascript": "JavaScript",
      "skills.python": "Python",
      "skills.typescript": "TypeScript",
      "skills.htmlcss": "HTML & CSS",
      "skills.framer": "Framer Motion",
      "skills.responsive": "Responsywne projektowanie",

      // CONTACT
      "contact.title": "Kontakt",
      "contact.lead":
        "Masz pytanie albo chcesz porozmawiać? Napisz — odpowiadam szybko.",
      "contact.card.email": "Email",
      "contact.card.instagram": "Instagram",
      "contact.card.github": "GitHub",
      "contact.card.linkedin": "LinkedIn",
      "contact.copy.copy": "Kopiuj email",
      "contact.copy.copied": "Skopiowano!",
      "contact.copy.failed": "Błąd kopiowania",
      "contact.copy.aria": "Kopiuj email",
      "contact.form.labelName": "Twoje imię",
      "contact.form.placeholderName": "Imię i nazwisko",
      "contact.form.labelEmail": "Twój email",
      "contact.form.placeholderEmail": "twoj@email.com",
      "contact.form.labelMessage": "Wiadomość",
      "contact.form.placeholderMessage": "Cześć, chciałbym...",
      "contact.form.sendWithClient": "Wyślij (otworzy program pocztowy)",
      "contact.form.sendPlain": "Wyślij maila bez formularza",

      // EXPERIENCE
      "experience.title": "Moja droga",
      "experience.showCredential": "Pokaż certyfikat",
      "experience.item1.title": "Poliglota i tłumacz",
      "experience.item1.desc":
        "Przez niemal dekadę pracowałem z językami obcymi — uczyłem się, tłumaczyłem i współpracowałem.",
      "experience.item2.title": "Responsive Web Design",
      "experience.item3.title":
        "The Complete Full-Stack Web Development Bootcamp",

      // PROJECTS
      "projects.title": "Projekty",
      "projects.lead": "Wybrane realizacje — kliknij, aby zobaczyć szczegóły.",
      "projects.categories.All": "Wszystkie",
      "projects.live": "Otwórz Live",
      "projects.repo": "Repo",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "pl",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export default i18n;
