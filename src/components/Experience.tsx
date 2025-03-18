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
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50" id="experience">Experience</h2>
        <div className="relative space-y-8">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-primary/20 hidden md:block" />
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-6 relative border border-primary/10 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:scale-[1.02] hover:bg-primary/5"
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