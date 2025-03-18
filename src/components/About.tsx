import { Card } from "./ui/card";
import { TechStack } from "./ui/tech-stack";
import { motion } from "framer-motion";
import { CodeIcon, UserIcon } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(var(--primary-rgb),0.08)_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(147,51,234,0.08)_0%,transparent_50%)]" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-primary/10 p-2 rounded-xl">
            <UserIcon className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">About Me</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-8 backdrop-blur-sm bg-background/30 border-primary/10 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
              <p className="text-muted-foreground leading-relaxed">
                I am a highly motivated and driven 23-year-old student who is eager to take on new challenges that align with my career ambitions. With a strong work ethic and a passion for learning, I am committed to bringing my best to every project and working collaboratively within a team to achieve success.
              </p>
              <div className="h-px w-1/3 bg-gradient-to-r from-primary/20 to-transparent my-6" />
              <p className="text-muted-foreground leading-relaxed">
                My portfolio showcases my ability to deliver quality work on time and with attention to detail. I am confident in my ability to adapt quickly to new situations and technologies. If you have any questions or would like to learn more about my qualifications, please don't hesitate to contact me.
              </p>
              <p className="text-primary font-medium mt-6 border-l-2 border-primary pl-4">
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
            <Card className="p-8 backdrop-blur-sm bg-background/30 border-primary/10 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2 rounded-xl">
                  <CodeIcon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Skills & Technologies</h3>
              </div>
              <TechStack />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};