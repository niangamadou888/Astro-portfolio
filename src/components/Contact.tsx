import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { MailIcon } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Glowing background effects */}
      <div className="absolute inset-0 bg-background">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px] animate-pulse"
          style={{ animationDuration: '4s' }}
        />
        <div 
          className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[80px] animate-pulse"
          style={{ animationDuration: '6s' }}
        />
        <div 
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[90px] animate-pulse"
          style={{ animationDuration: '5s' }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground">Let's create something amazing together</p>
        </div>
        
        <Card className="p-12 max-w-2xl mx-auto bg-card/50 backdrop-blur-sm border-primary/10 shadow-lg relative">
          {/* Card inner glow */}
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 via-purple-500/10 to-blue-500/10 animate-gradient" />
          
          <div className="relative">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm currently open to new opportunities and would love to hear from you.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <Button 
              size="lg"
              className="w-full sm:w-auto text-lg px-8 py-6 h-auto bg-primary hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/20"
              onClick={() => window.open("mailto:amadouniang2001@gmail.com", "_blank")}
            >
              <MailIcon className="h-5 w-5 mr-2" />
              Say Hello
            </Button>
          </div>
        </Card>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary rounded-full animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-500 rounded-full animate-ping" style={{ animationDuration: '5s' }} />
      </div>
    </section>
  );
};