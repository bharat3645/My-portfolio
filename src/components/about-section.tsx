import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { BrainCircuit, Cloud, Code, DatabaseZap } from 'lucide-react'; // Using specific icons

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">About Me</h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I'm a Computer Science undergraduate student specializing in Data Science, deeply passionate about using technology to solve real-world problems. With experience in creating advanced machine learning applications and predictive analytics tools, I thrive on challenges. My leadership roles in IEEE and CSI, coupled with successful participation in hackathons, have honed my collaborative and innovative skills. I am eager to integrate AI, cloud computing, and cutting-edge technologies to contribute meaningfully while expanding my expertise through impactful research.
            </p>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Currently, I am focusing on projects involving AI-Driven Image Encryption and Federated Learning for Anomaly Detection. My technical skills include Python, Java, JavaScript/TypeScript, TensorFlow, PyTorch, AWS, and Google Cloud. I am adept at utilizing tools such as Git, Docker, Kubernetes, and familiar with database management using MySQL and EC2.
            </p>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                <div className="flex items-center space-x-2">
                  <BrainCircuit className="w-6 h-6 text-accent" />
                  <span className="font-medium">AI & ML</span>
                </div>
                 <div className="flex items-center space-x-2">
                  <Code className="w-6 h-6 text-accent" />
                  <span className="font-medium">Development</span>
                </div>
                 <div className="flex items-center space-x-2">
                  <DatabaseZap className="w-6 h-6 text-accent" />
                  <span className="font-medium">Data Science</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Cloud className="w-6 h-6 text-accent" />
                    <span className="font-medium">Cloud & Data</span>
                </div>
             </div>
              {/* Optional: Add key skills highlight */}
             <div className="pt-6">
                <h3 className="text-lg font-semibold text-primary mb-2">Key Skills</h3>
                <div className="flex flex-wrap gap-2">
                    {['Python', 'Java', 'JavaScript', 'React', 'TensorFlow', 'PyTorch', 'AWS', 'Docker', 'SQL', 'Data Analysis', 'Deep Learning', 'Machine Learning'].map(skill => (
                       <span key={skill} className="text-xs bg-background text-foreground px-2 py-1 rounded-full border">{skill}</span>
                    ))}
                     <span className="text-xs bg-background text-foreground px-2 py-1 rounded-full border">... & more</span>
                </div>
             </div>
          </div>
          <div className="flex items-center justify-center">
             <Card className="overflow-hidden rounded-lg shadow-lg">
               <CardContent className="p-0">
                  <Image
                    src="https://picsum.photos/seed/bharat-parihar/600/600" // Use a consistent seed
                    alt="Bharat Singh Parihar"
                    width={450}
                    height={450}
                    className="aspect-square object-cover"
                    data-ai-hint="professional data scientist student"
                  />
               </CardContent>
              </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
