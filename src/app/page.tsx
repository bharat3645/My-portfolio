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
      <main className="flex-1 space-y-16">
        <AnimatedSection direction="up" delay={0.1}>
          <HeroSection />
        </AnimatedSection>

        <AnimatedSection direction="left" delay={0.2}>
          <ProjectsSection />
        </AnimatedSection>

        <AnimatedSection direction="right" delay={0.3}>
          <AboutSection />
        </AnimatedSection>

        <AnimatedSection direction="up" delay={0.4}>
          <ExperienceSection />
        </AnimatedSection>

        <AnimatedSection direction="flip" delay={0.5}>
          <AiTailorSection />
        </AnimatedSection>

        <AnimatedSection direction="down" delay={0.6}>
          <ContactSection />
        </AnimatedSection>
      </main>
      <AnimatedSection direction="up" delay={0.7}>
        <Footer />
      </AnimatedSection>
    </div>
  );
}
