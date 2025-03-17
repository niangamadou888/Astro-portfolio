import { motion, useScroll, useTransform } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon, FileDown, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";
import { useEffect, useRef, useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

const glowAnimation = {
  initial: { opacity: 0.5, scale: 0.8 },
  animate: {
    opacity: [0.5, 1, 0.5],
    scale: [0.8, 1.2, 0.8],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const handleDownload = (language: 'en' | 'fr') => {
    const pdfUrl = language === 'en' ? '/Amadou Boubacar Niang cv anglais.pdf' : '/CV de Amadou Boubacar Niang.pdf';
    window.open(pdfUrl, '_blank');

    toast({
      title: "Opening Resume",
      description: `Opening resume in ${language === 'en' ? 'English' : 'French'}`,
    });
  };

  return (
    <section ref={heroRef} className="min-h-screen flex flex-col justify-center items-center text-center p-4 relative overflow-hidden bg-gradient-to-b from-background to-background/80">
      {/* Enhanced grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Enhanced background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
            x: [-30, 30, -30],
            y: [-30, 30, -30]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ y }}
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-primary/40 via-purple-500/30 to-transparent rounded-full blur-3xl dark:from-primary/30 dark:via-purple-500/20"
        />
        
        {/* Add more floating particles */}
        <motion.div
          variants={glowAnimation}
          initial="initial"
          animate="animate"
          className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/60 rounded-full"
        />
        <motion.div
          variants={glowAnimation}
          initial="initial"
          animate="animate"
          transition={{ delay: 1.5 }}
          className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-400/60 rounded-full"
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-8 relative z-10 max-w-4xl mx-auto"
      >
        <motion.div variants={item}>
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-primary animate-gradient relative inline-block group">
            <motion.span
              className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-primary/30 to-purple-500/30 blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-70 group-hover:opacity-100"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            Hello, I'm Amadou Boubacar Niang
          </h1>
        </motion.div>

        <motion.div variants={item}>
          <p className="text-xl md:text-2xl font-medium text-muted-foreground/90 dark:text-muted-foreground/80 relative inline-flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            Software Developer (Web, Mobile, Gaming...)
          </p>
        </motion.div>

        <motion.p 
          variants={item}
          className="max-w-lg mx-auto text-muted-foreground/80 text-lg"
        >
          I build exceptional digital experiences that make people's lives easier.
        </motion.p>
        
        <motion.div 
          variants={item}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center mt-10"
        >
          <Button 
            variant="default" 
            onClick={() => handleDownload('en')}
            className="w-full sm:w-auto bg-gradient-to-r from-primary to-purple-600 hover:from-primary/80 hover:to-purple-600/80 transition-all duration-500 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 dark:shadow-primary/10 dark:hover:shadow-primary/20"
          >
            <FileDown className="mr-2" />
            Download Resume (EN)
          </Button>
          <Button 
            variant="default" 
            onClick={() => handleDownload('fr')}
            className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-primary hover:from-purple-600/80 hover:to-primary/80 transition-all duration-500 hover:-translate-y-0.5"
          >
            <FileDown className="mr-2" />
            Download Resume (FR)
          </Button>
        </motion.div>

        <motion.div 
          variants={item}
          className="flex gap-6 justify-center mt-10"
        >
          <Button 
            variant="outline" 
            size="icon"
            className="rounded-full hover:scale-110 transition-transform duration-300 hover:bg-primary/10 border-primary/20 hover:border-primary/40"
            onClick={() => window.open("https://github.com/niangamadou888/", "_blank")}
          >
            <GithubIcon className="h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="rounded-full hover:scale-110 transition-transform duration-300 hover:bg-primary/10 border-primary/20"
            onClick={() => window.open("https://www.linkedin.com/in/amadou-boubacar-niang-09b973160/", "_blank")}
          >
            <LinkedinIcon className="h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="rounded-full hover:scale-110 transition-transform duration-300 hover:bg-primary/10 border-primary/20"
            onClick={() => window.open("mailto:amadouniang2001@gmail.com", "_blank")}
          >
            <MailIcon className="h-5 w-5" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};