import { Card } from "./ui/card";
import { GraduationCapIcon, CalendarIcon, MapPinIcon } from "lucide-react";
import { motion } from "framer-motion";

export const Education = () => {
  const education = [
    {
      degree: "Master's degree in Software Engineering",
      school: "Université Numérique Cheikh Hamidou Kane",
      location: "Dakar, Senegal",
      period: "Apr 2024 - Present",
      description: "Advanced studies in Software Engineering, focusing on modern software development practices and methodologies.",
      achievements: [
        "Specializing in advanced software architecture",
        "Focus on enterprise-level application development",
        "Research in modern software engineering practices"
      ]
    },
    {
      degree: "Bachelor's degree in Software Development",
      school: "Université Numérique Cheikh Hamidou Kane",
      location: "Dakar, Senegal",
      period: "Oct 2019 - Oct 2023",
      description: "Comprehensive study of software development across web, mobile, and gaming platforms.",
      achievements: [
        "Full-stack web development expertise",
        "Mobile application development for iOS and Android",
        "Game development and interactive media",
        "Project-based learning with real-world applications"
      ]
    },
    {
      degree: "High School Diploma",
      school: "Lycée Technique Andre Peytavin",
      location: "Saint-Louis, Senegal",
      period: "Oct 2016 - Jul 2019",
      description: "Science and Technique of Economics and Management",
      achievements: [
        "Strong foundation in economics and management principles",
        "Technical training in business applications",
        "Development of analytical and problem-solving skills"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/80 to-background pointer-events-none" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-purple-500/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="flex items-center gap-2 mb-8">
          <GraduationCapIcon className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">Education</h2>
        </div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 backdrop-blur-sm bg-background/50 hover:bg-primary/5 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-xl text-foreground/90 bg-clip-text">{edu.degree}</h3>
                    <div className="space-y-1">
                      <p className="text-muted-foreground font-medium">{edu.school}</p>
                      <div className="flex items-center gap-2 text-muted-foreground/80">
                        <MapPinIcon className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground whitespace-nowrap">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground/90">{edu.description}</p>
                <ul className="mt-4 space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-muted-foreground/80">
                      <span className="text-primary mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
