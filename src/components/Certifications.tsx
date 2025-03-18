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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--primary-rgb),0.05),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(147,51,234,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(60deg,#80808008_1px,transparent_1px),linear-gradient(120deg,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-primary/10 p-2.5 rounded-xl">
            <AwardIcon className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">Certifications</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full backdrop-blur-sm bg-background/30 border-primary/10 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-purple-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="flex flex-col h-full">
                  <div className="space-y-3 flex-grow">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-semibold text-lg tracking-tight">{cert.title}</h3>
                      <div className="flex items-center gap-2 text-primary/80 bg-primary/5 px-3 py-1 rounded-full text-sm">
                        <CalendarIcon className="h-4 w-4" />
                        <span>{cert.date}</span>
                      </div>
                    </div>
                    <p className="text-primary/90 font-medium">{cert.issuer}</p>
                  </div>

                  <div className="mt-6 space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-primary/5 rounded-full text-sm text-primary/80 hover:bg-primary/10 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {cert.link && (
                      <Button
                        variant="ghost"
                        className="w-full justify-between hover:bg-primary/10 transition-all duration-300 group/btn"
                        onClick={() => window.open(cert.link, '_blank')}
                      >
                        View Certificate
                        <ExternalLinkIcon className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                    )}
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
