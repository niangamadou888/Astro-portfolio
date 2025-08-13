import { Card } from "./ui/card";
import { TechStack } from "./ui/tech-stack";
import { motion } from "framer-motion";
import { CodeIcon, UserIcon } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export const About = () => {
  const { t } = useLanguage();
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
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-primary animate-text-shine">{t('about.title')}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="p-8 glass gradient-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover-lift">
              <p className="text-muted-foreground leading-relaxed">
                {t('about.p1')}
              </p>
              <div className="h-px w-1/3 bg-gradient-to-r from-primary/20 to-transparent my-6" />
              <p className="text-primary font-medium mt-6 border-l-2 border-primary pl-4">
                {t('about.p3')}
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 glass gradient-border hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-2 rounded-xl">
                  <CodeIcon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{t('about.skills')}</h3>
              </div>
              <TechStack />
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};