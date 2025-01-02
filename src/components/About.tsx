import { Card } from "./ui/card";
import { TechStack } from "./ui/tech-stack";
import { motion } from "framer-motion";
import { CodeIcon, UserIcon } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/80 to-background pointer-events-none" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-purple-500/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="flex items-center gap-2 mb-8">
          <UserIcon className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-6 backdrop-blur-sm bg-background/50">
              <p className="text-muted-foreground leading-relaxed">
                I am a highly motivated and driven 23-year-old student who is eager to take on new challenges that align with my career ambitions. With a strong work ethic and a passion for learning, I am committed to bringing my best to every project and working collaboratively within a team to achieve success.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                My portfolio showcases my ability to deliver quality work on time and with attention to detail. I am confident in my ability to adapt quickly to new situations and technologies. If you have any questions or would like to learn more about my qualifications, please don't hesitate to contact me.
              </p>
              <p className="text-primary font-medium mt-4">
                I look forward to the opportunity to contribute my skills and expertise to your team.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 backdrop-blur-sm bg-background/50">
              <div className="flex items-center gap-2 mb-4">
                <CodeIcon className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Skills & Technologies</h3>
              </div>
              <TechStack />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};