import { Interactive3DScene } from './interactive-3d-scene';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="hero" className="w-full min-h-[80vh] md:min-h-screen flex items-center bg-gradient-to-br from-secondary via-background to-secondary/50 relative overflow-hidden">
      {/* Subtle background pattern (optional) */}
       <div className="absolute inset-0 opacity-[0.03] bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="space-y-6 z-10">
          {/* Updated heading with Poppins font (via class) and adjusted size/tracking */}
          <h1 className="font-poppins text-4xl font-bold tracking-tighter !leading-tight sm:text-5xl xl:text-6xl/none text-foreground">
            Bharat Singh Parihar: UI/UX & Data Science Enthusiast
          </h1>
           {/* Updated paragraph style */}
          <p className="max-w-[600px] text-muted-foreground md:text-xl text-base">
            A creative Computer Science student specializing in Data Science, merging design thinking with advanced machine learning and web technologies to craft intuitive user experiences and solve complex problems.
          </p>
          <div className="flex flex-col gap-3 min-[400px]:flex-row">
             {/* Primary button with accent color */}
            <Link href="#projects" passHref>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-sm hover:shadow-md">
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
              </Button>
            </Link>
             {/* Secondary button with subtle style */}
            <Link href="#contact" passHref>
              <Button variant="outline" size="lg" className="border-primary/50 text-primary hover:bg-primary/5 hover:border-primary">
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative w-full h-[350px] md:h-[450px] lg:h-[550px] z-0 flex items-center justify-center">
           {/* Apply perspective for a better 3D feel and ensure centering */}
          <div className="w-full h-full perspective-[1000px]">
             <Interactive3DScene />
          </div>
        </div>
      </div>
       {/* More subtle gradient */}
       {/* <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-transparent to-secondary/10 z-[-1]"></div> */}
    </section>
  );
}
