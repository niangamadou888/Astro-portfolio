import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 right-28 z-50 md:right-14"
          aria-label="Toggle language"
        >
          <Globe className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")}>
          {language === "en" ? "✓ " : ""}English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("fr")}>
          {language === "fr" ? "✓ " : ""}Français
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}


