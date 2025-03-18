import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { MailIcon } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.08)_0%,transparent_65%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(60deg,#80808008_1px,transparent_1px),linear-gradient(120deg,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        <div className="mb-16 space-y-4">
          <div className="inline-flex items-center justify-center gap-3 text-primary/80 bg-primary/5 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MailIcon className="w-4 h-4" />
            Contact
          </div>
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-primary animate-text-shine">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground">Let's create something amazing together</p>
        </div>
        
        <Card className="p-12 max-w-2xl mx-auto backdrop-blur-sm bg-background/30 border-primary/10 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm currently open to new opportunities and would love to hear from you.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="flex flex-col items-center gap-6">
              <Button 
                size="lg"
                className="relative group/btn px-8 py-6 h-auto bg-primary hover:bg-primary/90 transition-all duration-300"
                onClick={() => window.open("mailto:amadouniang2001@gmail.com", "_blank")}
              >
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/50 to-purple-500/50 blur-md opacity-0 group-hover/btn:opacity-50 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2 text-lg font-medium">
                  <MailIcon className="h-5 w-5" />
                  Say Hello
                </span>
              </Button>

              <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              
              <p className="text-muted-foreground/60 text-sm">
                Looking forward to hearing from you!
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-primary/60 rounded-full animate-ping-slow" />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-purple-500/60 rounded-full animate-ping-slow delay-300" />
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-primary/60 rounded-full animate-ping-slow delay-700" />
      </div>
    </section>
  );
};