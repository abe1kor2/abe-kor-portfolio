import { ThemeToggle } from "../components/ThemeToggle";
import { StartBackground } from "../components/StartBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutMeSection } from "../components/AboutMeSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      {/* background effects */}
      <StartBackground />

      {/* navbar */}
      <Navbar />

      {/* main content */}
      <main>
        <HeroSection />
        <AboutMeSection />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
        <Footer />
      </main>

      {/* footer */}
    </div>
  );
};
