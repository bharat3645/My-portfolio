import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Code, Paintbrush } from 'lucide-react'; // Example icons

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">About Me</h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm a passionate creative developer with a love for building engaging and intuitive digital experiences. With a background in both design and coding, I strive to bridge the gap between aesthetics and functionality.
            </p>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My journey started with a fascination for how things work, leading me to explore web development. Over the years, I've honed my skills in front-end technologies like React, Next.js, and Three.js, always eager to learn and experiment with new tools.
            </p>
             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="flex items-center space-x-2">
                  <Code className="w-6 h-6 text-accent" />
                  <span className="font-medium">Development</span>
                </div>
                 <div className="flex items-center space-x-2">
                  <Paintbrush className="w-6 h-6 text-accent" />
                  <span className="font-medium">Design</span>
                </div>
                 <div className="flex items-center space-x-2">
                  <Award className="w-6 h-6 text-accent" />
                  <span className="font-medium">Problem Solving</span>
                </div>
             </div>
          </div>
          <div className="flex items-center justify-center">
             <Card className="overflow-hidden rounded-lg shadow-lg">
               <CardContent className="p-0">
                  <Image
                    src="https://picsum.photos/seed/profile/600/600"
                    alt="About Me"
                    width={450}
                    height={450}
                    className="aspect-square object-cover"
                    data-ai-hint="professional portrait developer"
                  />
               </CardContent>
              </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
