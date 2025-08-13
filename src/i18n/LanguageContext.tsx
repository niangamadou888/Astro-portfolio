import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type SupportedLanguage = "en" | "fr";

type TranslationDict = Record<string, string>;

type Translations = Record<SupportedLanguage, TranslationDict>;

const translations: Translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.certifications": "Certifications",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hello, I'm Amadou Boubacar Niang",
    "hero.role.software": "Software Engineer",
    "hero.role.web": "Web",
    "hero.role.mobile": "Mobile",
    "hero.role.gaming": "Gaming",
    "hero.subtitle": "I build exceptional digital experiences that make people's lives easier.",
    "hero.download.en": "Download Resume (EN)",
    "hero.download.fr": "Download Resume (FR)",
    "hero.toast.title": "Opening Resume",
    "hero.toast.desc.en": "Opening resume in English",
    "hero.toast.desc.fr": "Opening resume in French",

    // About
    "about.title": "About Me",
    "about.p1": "As a Full-Stack Engineer specializing in Angular, React, Node, and Java (Spring Boot), I design and develop comprehensive solutions, from front-end to back-end, ensuring robustness, scalability, and quality. With a strong work ethic and a passion for learning, I am committed to bringing my best to every project and working collaboratively within a team to achieve success.",
    "about.p3": "I look forward to the opportunity to contribute my skills and expertise to your team.",
    "about.skills": "Skills & Technologies",

    // Projects
    "projects.title": "Projects",
    "projects.tab.web": "Web Projects",
    "projects.tab.game": "Game Projects",

    // Contact
    "contact.badge": "Contact",
    "contact.title": "Get In Touch",
    "contact.subtitle": "Let's create something amazing together",
    "contact.p": "I'm currently open to new opportunities and would love to hear from you. Whether you have a question or just want to say hi, feel free to reach out!",
    "contact.cta": "Say Hello",
    "contact.footer": "Looking forward to hearing from you!",

    // Footer
    "footer.rights": "All rights reserved.",

    // Sections
    "experience.title": "Experience",
    "education.title": "Education",
    "certifications.title": "Certifications",
    "certifications.view": "View Certificate",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.experience": "Expérience",
    "nav.education": "Éducation",
    "nav.certifications": "Certifications",
    "nav.projects": "Projets",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Bonjour, je suis Amadou Boubacar Niang",
    "hero.role.software": "Ingenieur logiciel",
    "hero.role.web": "Web",
    "hero.role.mobile": "Mobile",
    "hero.role.gaming": "Jeux vidéo",
    "hero.subtitle": "Je conçois des expériences numériques remarquables qui facilitent la vie des gens.",
    "hero.download.en": "Télécharger le CV (EN)",
    "hero.download.fr": "Télécharger le CV (FR)",
    "hero.toast.title": "Ouverture du CV",
    "hero.toast.desc.en": "Ouverture du CV en anglais",
    "hero.toast.desc.fr": "Ouverture du CV en français",

    // About
    "about.title": "À propos de moi",
    "about.p1": "En tant que Ingenieur Full-Stack spécialisé en Angular, React, Node et Java (Spring Boot), je conçois et développe des solutions complètes, du front-end au back-end, en garantissant robustesse, évolutivité et qualité. Avec un fort sens du travail et une passion pour l'apprentissage, je m'engage à donner le meilleur de moi-même sur chaque projet et à collaborer efficacement en équipe pour atteindre les objectifs.",
    "about.p3": "J'ai hâte de mettre mes compétences et mon expertise au service de votre équipe.",
    "about.skills": "Compétences & Technologies",

    // Projects
    "projects.title": "Projets",
    "projects.tab.web": "Projets Web",
    "projects.tab.game": "Projets de Jeux",

    // Contact
    "contact.badge": "Contact",
    "contact.title": "Entrons en contact",
    "contact.subtitle": "Créons quelque chose d'extraordinaire ensemble",
    "contact.p": "Je suis actuellement ouvert à de nouvelles opportunités et serais ravi d'échanger avec vous. Que vous ayez une question ou souhaitiez simplement dire bonjour, contactez-moi !",
    "contact.cta": "Dire bonjour",
    "contact.footer": "Au plaisir de vous lire !",

    // Footer
    "footer.rights": "Tous droits réservés.",

    // Sections
    "experience.title": "Expérience",
    "education.title": "Éducation",
    "certifications.title": "Certifications",
    "certifications.view": "Voir le certificat",
  },
};

type LanguageContextValue = {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<SupportedLanguage>("en");

  useEffect(() => {
    const stored = localStorage.getItem("app.language") as SupportedLanguage | null;
    if (stored === "en" || stored === "fr") {
      setLanguageState(stored);
    } else {
      const browserLang = navigator.language?.toLowerCase().startsWith("fr") ? "fr" : "en";
      setLanguageState(browserLang);
    }
  }, []);

  const setLanguage = useCallback((lang: SupportedLanguage) => {
    setLanguageState(lang);
    localStorage.setItem("app.language", lang);
  }, []);

  const t = useCallback(
    (key: string) => {
      const dict = translations[language] || translations.en;
      return dict[key] ?? key;
    },
    [language]
  );

  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}


