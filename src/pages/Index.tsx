import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Logo } from "@/components/Logo";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Navigation } from "@/components/Navigation";

export default function Index() {
  return (
    <main className="min-h-screen">
      <Logo />
      <Navigation />
      <section id="home">
        <Hero />
      </section>
      <About />
      <Experience />
      <Education />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}