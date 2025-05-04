import { Interactive3DScene } from './interactive-3d-scene';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section id="hero" className="w-full py-12 md:py-24 lg:py-32 bg-secondary relative overflow-hidden">
      <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="space-y-4 z-10">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
            Jane Doe: Creative Developer & Designer
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Passionate about crafting beautiful and functional web experiences. Explore my work and get in touch!
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link href="#projects" passHref>
              <Button size="lg">View Projects</Button>
            </Link>
            <Link href="#contact" passHref>
              <Button variant="outline" size="lg">Contact Me</Button>
            </Link>
          </div>
        </div>
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] z-0">
           {/* Apply perspective for a better 3D feel */}
          <div className="absolute inset-0 perspective-[1000px]">
             <Interactive3DScene />
          </div>
        </div>
      </div>
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary opacity-30 z-[-1]"></div>
    </section>
  );
}
