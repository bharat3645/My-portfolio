import { HeroSection } from '@/components/hero-section';
import { ProjectsSection } from '@/components/projects-section';
import { AboutSection } from '@/components/about-section';
import { ContactSection } from '@/components/contact-section';
import { AiTailorSection } from '@/components/ai-tailor-section';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <AiTailorSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
