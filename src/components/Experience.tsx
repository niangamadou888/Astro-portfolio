import { Card } from "./ui/card";
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Web Developer Freelance",
      company: "Upwork",
      location: "Freelance",
      period: "Present",
      description: "Design and programming of responsive and nice websites.",
    },
    {
      title: "Video Game Developer",
      company: "Learning-Adventure",
      location: "France",
      period: "Jul 2024 - Sep 2024",
      description: "Design and programming of a generic serious game that interacts with a learning platform and software solutions, in line with specifications.",
    },
    {
      title: "Network Administrator",
      company: "Société d'Aménagement et d'Exploitation des Terres du Delta du Fleuve Sénégal (SAED)",
      location: "Saint-Louis",
      period: "Mar 2023 - Jun 2023",
      description: "Management of incidents and problems on IT systems and networks, installation and configuration of new IT equipment, help users get started.",
    },
    {
      title: "Video Game Developer",
      company: "Hatice Technologie",
      location: "Dakar",
      period: "Mar 2022 - Jun 2022",
      description: "Design and programming of mobile games and software solutions in compliance with specifications.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8" id="experience">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 hover:bg-primary/5 animate-fade-in"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <BriefcaseIcon className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold text-xl">{exp.title}</h3>
                  </div>
                  <div className="space-y-1">
                    <p className="text-muted-foreground font-medium">{exp.company}</p>
                    <div className="flex items-center gap-2 text-muted-foreground/80">
                      <MapPinIcon className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground whitespace-nowrap">
                  <CalendarIcon className="h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">{exp.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};