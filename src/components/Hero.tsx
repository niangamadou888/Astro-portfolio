import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, MailIcon, FileDown } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Hero = () => {
  const handleDownload = (language: 'en' | 'fr') => {
    const pdfUrl = language === 'en' ? '/Amadou Boubacar Niang cv anglais.pdf' : '/CV de Amadou Boubacar Niang.pdf';
    window.open(pdfUrl, '_blank');

    toast({
      title: "Opening Resume",
      description: `Opening resume in ${language === 'en' ? 'English' : 'French'}`,
    });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center p-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50 pointer-events-none" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/20 to-transparent rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-6 relative z-10"
      >
        <motion.div variants={item}>
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-primary animate-gradient">
            Hello, I'm Amadou Boubacar Niang
          </h1>
        </motion.div>

        <motion.div variants={item}>
          <p className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-muted-foreground to-muted-foreground/80">
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
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
        >
          <Button 
            variant="default" 
            onClick={() => handleDownload('en')}
            className="w-full sm:w-auto bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300"
          >
            <FileDown className="mr-2" />
            Download Resume (EN)
          </Button>
          <Button 
            variant="default" 
            onClick={() => handleDownload('fr')}
            className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-primary hover:from-purple-600/90 hover:to-primary/90 transition-all duration-300"
          >
            <FileDown className="mr-2" />
            Download Resume (FR)
          </Button>
        </motion.div>

        <motion.div 
          variants={item}
          className="flex gap-4 justify-center mt-8"
        >
          <Button 
            variant="outline" 
            size="icon"
            className="rounded-full hover:scale-110 transition-transform duration-300 hover:bg-primary/10 border-primary/20"
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