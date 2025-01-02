import { Card } from "./ui/card";
import { AwardIcon, CalendarIcon, ExternalLinkIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export const Certifications = () => {
  const certifications = [
    {
      title: "Legacy Full Stack Developer",
      issuer: "freeCodeCamp",
      date: "2023",
      link: "https://www.freecodecamp.org/certification/niangamadou888/full-stack",
      skills: ["Responsive Web Design", "JavaScript Algorithms and Data Structures", "Data Visualization", "Front End", "Back End", "Information Security and Quality Assurance"]
    },
    {
      title: "Software Development with Python",
      issuer: "Force-N",
      date: "2023",
      link: "https://formation.force-n.sn/mod/customcert/verify_certificate.php?contextid=418479&code=FI0GkJ2BIi&qrcode=1",
      skills: ["Python", "Angular", "Django", "SQL/NoSQL", "Git", "Docker"]
    },
    {
      title: "Network Administrator",
      issuer: "IMSAS",
      date: "2023",
      skills: ["Network Security", "System Administration", "Protocols", "Troubleshooting", "Infrastructure", "Security"]
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/80 to-background pointer-events-none" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-purple-500/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex items-center gap-2 mb-8">
          <AwardIcon className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">Certifications</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full backdrop-blur-sm bg-background/50 hover:bg-primary/5 transition-all duration-300 group">
                <div className="flex flex-col h-full">
                  <div className="space-y-2 flex-grow">
                    <h3 className="font-semibold text-lg text-foreground/90">{cert.title}</h3>
                    <p className="text-muted-foreground font-medium">{cert.issuer}</p>
                    <div className="flex items-center gap-2 text-muted-foreground/80">
                      <CalendarIcon className="h-4 w-4" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  <div className="mt-4 space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-primary/10 rounded-full text-xs text-primary/80"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <Button
                      variant="ghost"
                      className="w-full justify-between group-hover:bg-primary/10 transition-colors duration-300"
                      onClick={() => window.open(cert.link, '_blank')}
                    >
                      View Certificate
                      <ExternalLinkIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
