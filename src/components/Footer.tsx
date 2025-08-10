import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="border-t py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-muted-foreground">
            <p>© {currentYear} Amadou Boubacar Niang. {t('footer.rights')}</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10">
              <a href="https://github.com/niangamadou888/" target="_blank" rel="noopener noreferrer">
                <GithubIcon className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10">
              <a href="https://www.linkedin.com/in/amadou-boubacar-niang-09b973160/" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-primary/10">
              <a href="mailto:amadouniang2001@gmail.com">
                <MailIcon className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};