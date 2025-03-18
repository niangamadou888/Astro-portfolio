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
      <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/95 to-background/90" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(var(--primary-rgb),0.08)_0%,transparent_60%)]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(147,51,234,0.08)_0%,transparent_60%)]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-primary/10 p-2.5 rounded-xl">
            <GraduationCapIcon className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">Education</h2>
        </div>

        <div className="relative space-y-8">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/10 to-transparent hidden md:block" />
          
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 backdrop-blur-sm bg-background/30 border-primary/10 relative hover:shadow-xl hover:shadow-primary/5 transition-all duration-500">
                <div className="absolute -left-3 top-10 w-6 h-6 rounded-full bg-primary/20 hidden md:flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-3">
                    <h3 className="font-semibold text-xl tracking-tight">{edu.degree}</h3>
                    <div className="space-y-2">
                      <p className="text-primary/90 font-medium">{edu.school}</p>
                      <div className="flex items-center gap-2 text-muted-foreground/80">
                        <MapPinIcon className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-primary/80 font-medium bg-primary/5 px-4 py-1.5 rounded-full">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
                
                <p className="mt-4 text-muted-foreground/90 leading-relaxed">{edu.description}</p>
                
                <ul className="mt-6 grid gap-2">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground/80 pl-4 relative">
                      <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-primary/60" />
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
