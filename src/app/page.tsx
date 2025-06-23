import { HeroSection } from '@/components/hero-section';
import { ProjectsSection } from '@/components/projects-section';
import { AboutSection } from '@/components/about-section';
import { ContactSection } from '@/components/contact-section';
import { AiTailorSection } from '@/components/ai-tailor-section';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ExperienceSection } from '@/components/experience-section';
import { AnimatedSection } from '@/components/AnimatedSection'; // Import AnimatedSection

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 space-y-0">
        <AnimatedSection direction="up" delay={0.1}>
          <div className="section-gradient section-slide-bottom section-glow space-bg-1">
            <HeroSection />
          </div>
        </AnimatedSection>

        <hr className="section-divider" />

        <AnimatedSection direction="left" delay={0.2}>
          <div className="section-gradient section-slide-left space-bg-2">
            <ProjectsSection />
          </div>
        </AnimatedSection>

        <hr className="section-divider" />

        <AnimatedSection direction="right" delay={0.3}>
          <div className="section-gradient section-slide-right space-bg-3">
            <AboutSection />
          </div>
        </AnimatedSection>

        <hr className="section-divider" />

        <AnimatedSection direction="up" delay={0.4}>
          <div className="section-gradient section-slide-bottom section-glow space-bg-4">
            <ExperienceSection />
          </div>
        </AnimatedSection>

        <hr className="section-divider" />

        <AnimatedSection direction="flip" delay={0.5}>
          <div className="section-gradient section-slide-top space-bg-5">
            <AiTailorSection />
          </div>
        </AnimatedSection>

        <hr className="section-divider" />

        <AnimatedSection direction="down" delay={0.6}>
          <div className="section-gradient section-slide-bottom section-glow space-bg-6">
            <ContactSection />
          </div>
        </AnimatedSection>
      </main>
      <AnimatedSection direction="up" delay={0.7}>
        <Footer />
      </AnimatedSection>
    </div>
  );
}
