import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { WorksSection } from "@/components/portfolio/WorksSection";
import { ArchivesSection } from "@/components/portfolio/ArchivesSection";
import { Footer } from "@/components/portfolio/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WorksSection />
      <ArchivesSection />
      <Footer />
    </div>
  );
};

export default Portfolio;