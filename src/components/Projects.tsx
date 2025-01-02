import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLinkIcon, GithubIcon, GamepadIcon, GlobeIcon } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { 
  FaReact, 
  FaNode, 
  FaJava, 
  FaAngular, 
  FaBootstrap, 
  FaGithub, 
  FaUnity,
  FaPython,
  FaDatabase
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiVite, 
  SiExpress, 
  SiMongodb, 
  SiMysql, 
  SiPostgresql,
  SiSpringboot,
  SiSharp,
  SiDjango,
  SiShadcnui,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const getTechIcon = (tech: string) => {
  const iconProps = { className: "inline-block mr-1 text-lg" };
  const techMap: { [key: string]: JSX.Element } = {
    "React": <FaReact {...iconProps} className={cn(iconProps.className, "text-[#61DAFB]")} />,
    "TypeScript": <SiTypescript {...iconProps} className={cn(iconProps.className, "text-[#3178C6]")} />,
    "Tailwind CSS": <SiTailwindcss {...iconProps} className={cn(iconProps.className, "text-[#06B6D4]")} />,
    "Vite": <SiVite {...iconProps} className={cn(iconProps.className, "text-[#646CFF]")} />,
    "Node.js": <FaNode {...iconProps} className={cn(iconProps.className, "text-[#339933]")} />,
    "Express": <SiExpress {...iconProps} />,
    "MongoDB": <SiMongodb {...iconProps} className={cn(iconProps.className, "text-[#47A248]")} />,
    "Angular": <FaAngular {...iconProps} className={cn(iconProps.className, "text-[#DD0031]")} />,
    "Java": <FaJava {...iconProps} className={cn(iconProps.className, "text-[#007396]")} />,
    "SpringBoot": <SiSpringboot {...iconProps} className={cn(iconProps.className, "text-[#6DB33F]")} />,
    "MySQL": <SiMysql {...iconProps} className={cn(iconProps.className, "text-[#4479A1]")} />,
    "PostgreSQL": <SiPostgresql {...iconProps} className={cn(iconProps.className, "text-[#336791]")} />,
    "Bootstrap": <FaBootstrap {...iconProps} className={cn(iconProps.className, "text-[#7952B3]")} />,
    "Unity": <FaUnity {...iconProps} />,
    "C#": <SiSharp {...iconProps} className={cn(iconProps.className, "text-[#239120]")} />,
    "Django": <SiDjango {...iconProps} className={cn(iconProps.className, "text-[#092E20]")} />,
    "JavaScript": <IoLogoJavascript {...iconProps} className={cn(iconProps.className, "text-[#F7DF1E]")} />,
    "shadcn/ui": <SiShadcnui {...iconProps} className={cn(iconProps.className, "text-[#F7DF1E]")} />,
  };
  
  return techMap[tech] || null;
};

export const Projects = () => {
  const [activeTab, setActiveTab] = useState<"web" | "game">("web");

  const webProjects: Project[] = [
    {
      title: "The Useless Button",
      description: "The Whimsy Website Rotator is a modern web application that provides an elegant and interactive way to showcase multiple websites in a rotating carousel format. Built with performance and user experience in mind, it allows seamless transitions between different website previews while maintaining a smooth and responsive interface.",
      image: "/useless.png",
      tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "shadcn/ui"],
      liveUrl: "https://takemeuselesswebsite.vercel.app/",
      githubUrl: "https://github.com/ytlab23/whimsy-website-rotator"
    },
    {
      title: "Free AI Detector",
      description: "A web-based application that helps detect whether text was written by a human or generated by AI. This tool uses advanced natural language processing techniques to analyze text patterns and provide insights into the likelihood of AI-generated content.",
      image: "/freeaidetector.png",
      tags: ["JavaScript", "Express","Natural Language Processing (NLP)", "Node.js"],
      liveUrl: "http://free-ai-detector.com/",
      githubUrl: "https://github.com/niangamadou888/ai-detector"
    },
    {
      title: "TopSMM Reseller",
      description: "TopSMM Reseller is a comprehensive SMM (Social Media Marketing) panel reseller platform that enables users to provide and manage social media marketing services. The platform facilitates the buying and selling of social media services such as likes, followers, views, and engagement across various social media platforms.",
      image: "/toppsmm.png",
      tags: ["Vite", "Bootstrap"],
      liveUrl: "https://topsmmreseller.vercel.app/",
      githubUrl: "https://github.com/ytlab23/topsmmreseller"
    },
    {
      title: "Budget App",
      description: "Interactive budget app using React Router and local storage.",
      image: "/budgetapp.png",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://budget-app-niangamadou888.netlify.app/",
      githubUrl: "https://github.com/niangamadou888/Budget-app"
    },
    {
      title: "Mini Social Network",
      description: "The mini social network is a web application developed using the MERN (MongoDB, Express.js, React, Node.js) stack. The project includes features such as user authentication, publication creation, and a dashboard displaying user publications.",
      image: "/mini-social-network.png",
      tags: ["MongoDB", "Express","React", "Node.js"],
      liveUrl: "https://mini-social-network.netlify.app",
      githubUrl: "https://github.com/niangamadou888/Mini-Social-Network"
    },
    {
      title: "School Management",
      description: "School Management is an web app, secured which allows you to manage the enrolment of a school by adding students and their information",
      image: "/SchoolManagement.png",
      tags: ["Angular", "Java", "SpringBoot", "MySQL"],
      githubUrl: "https://github.com/niangamadou888/school-management"
    },
    {
      title: "City Life",
      description: "City Life is a web platform that gives city users access to information on the various services and activities available in their area.",
      image: "/CityLife.png",
      tags: ["Angular", "Django", "PostgreSQL"],
      githubUrl: "https://github.com/niangamadou888/City-Life"
    }
  ];

  const gameProjects: Project[] = [
    {
      title: "EN ROUTE VERS UNCHK",
      description: "EN ROUTE VERS UNCHK, a 3D mobile game in isometric view, classified as a serious game. This game allows players to learn more about the godfather, Cheikh Hamidou Kane, and prepare prepare for cross-disciplinary courses aimed at new students, through an immersive scenario. The game is designed to be generic, with a scenario and modifiable resources. It also communicates with a learning platform to manage quizzes and monitor player progress.",
      image: "/1.png",
      tags: ["Unity", "C#", "Game Design", "Internship", "Moodle Learning"],
    },
    {
      title: "ROI PION",
      description: "At a Game Jam organized by Game Hub, my friends and I and I developed “Roi Pion”,a puzzle game. Using Unity 3D and the C# language, we succeeded in to create a mobile game with original assets. The is designed to be played by two players.",
      image: "/2.png",
      tags: ["Unity", "C#", "Game Design"],
    },
    {
      title: "SOKOBAN",
      description: "Developed as part of our final year dissertation, this mobile puzzle game is designed for gamers looking for a looking for a challenge. It offers several levels of difficulty and includes a timer to increase the pressure. Inspired by the game Sokoban, it stimulates the mind and encourages thinking. The game was created using Unity 3D and C#.",
      image: "/3.png",
      tags: ["Unity", "C#", "Game Design"]
    }
  ];

  const activeProjects = activeTab === "web" ? webProjects : gameProjects;

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/80 to-background pointer-events-none" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-primary/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-purple-500/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        {/* Project Type Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <Button
            variant={activeTab === "web" ? "default" : "ghost"}
            className="gap-2"
            onClick={() => setActiveTab("web")}
          >
            <GlobeIcon className="w-4 h-4" />
            Web Projects
          </Button>
          <Button
            variant={activeTab === "game" ? "default" : "ghost"}
            className="gap-2"
            onClick={() => setActiveTab("game")}
          >
            <GamepadIcon className="w-4 h-4" />
            Game Projects
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group">
                <div className="aspect-video relative overflow-hidden">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    {project.liveUrl && (
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLinkIcon className="h-4 w-4" />
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <GithubIcon className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center px-2 py-1 mr-2 mb-2 text-sm font-medium rounded bg-secondary text-secondary-foreground"
                      >
                        {getTechIcon(tag)}
                        {tag}
                      </span>
                    ))}
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