import { Card } from "./ui/card";
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export const Experience = () => {
  const { t, language } = useLanguage();
  const experiences = [
    {
      title: language === 'fr' ? "Développeur Web Freelance" : "Web Developer Freelance",
      company: "Upwork",
      location: language === 'fr' ? "Freelance" : "Freelance",
      period: language === 'fr' ? "Actuel" : "Present",
      description:
        language === 'fr'
          ? "Conception et développement de sites web responsives et esthétiques."
          : "Design and programming of responsive and nice websites.",
    },
    {
      title: language === 'fr' ? "Développeur de Jeux Vidéo" : "Video Game Developer",
      company: "Learning-Adventure",
      location: language === 'fr' ? "France" : "France",
      period: language === 'fr' ? "Juil 2024 - Sep 2024" : "Jul 2024 - Sep 2024",
      description:
        language === 'fr'
          ? "Conception et programmation d'un jeu sérieux générique interagissant avec une plateforme d'apprentissage et des solutions logicielles, conformément au cahier des charges."
          : "Design and programming of a generic serious game that interacts with a learning platform and software solutions, in line with specifications.",
    },
    {
      title: language === 'fr' ? "Administrateur Réseau" : "Network Administrator",
      company:
        "Société d'Aménagement et d'Exploitation des Terres du Delta du Fleuve Sénégal (SAED)",
      location: language === 'fr' ? "Saint-Louis" : "Saint-Louis",
      period: language === 'fr' ? "Mars 2023 - Juin 2023" : "Mar 2023 - Jun 2023",
      description:
        language === 'fr'
          ? "Gestion des incidents et des problèmes sur les systèmes et réseaux informatiques, installation et configuration de nouveaux équipements informatiques, accompagnement des utilisateurs."
          : "Management of incidents and problems on IT systems and networks, installation and configuration of new IT equipment, help users get started.",
    },
    {
      title: language === 'fr' ? "Développeur de Jeux Vidéo" : "Video Game Developer",
      company: "Hatice Technologie",
      location: language === 'fr' ? "Dakar" : "Dakar",
      period: language === 'fr' ? "Mars 2022 - Juin 2022" : "Mar 2022 - Jun 2022",
      description:
        language === 'fr'
          ? "Conception et programmation de jeux mobiles et de solutions logicielles en conformité avec le cahier des charges."
          : "Design and programming of mobile games and software solutions in compliance with specifications.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-primary animate-text-shine" id="experience">{t('experience.title')}</h2>
        <div className="relative space-y-8">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-primary/20 hidden md:block" />
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-6 relative glass gradient-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02]"
            >
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary/20 hidden md:flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <BriefcaseIcon className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-xl tracking-tight">{exp.title}</h3>
                  </div>
                  <div className="space-y-2 pl-8">
                    <p className="text-muted-foreground font-medium">{exp.company}</p>
                    <div className="flex items-center gap-2 text-muted-foreground/80">
                      <MapPinIcon className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary/80 font-medium whitespace-nowrap bg-primary/5 px-3 py-1 rounded-full">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed pl-8">{exp.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};