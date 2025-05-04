import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { BrainCircuit, Palette, Code, DatabaseZap, Cloud, Users, Award, Wrench, Network, Bot, BarChart, Settings } from 'lucide-react'; // Added more icons

const coreSkills = [
 // Programming and Development
 "C/C++", "Python", "Java", "R", "Scala", "JavaScript/TypeScript", "SQL",
 "Flutter", "ReactJS", "Node.js", "ShadCN", "Flask", "FastAPI",
 "WordPress", "Material UI", "Agile Development", "Web3", "DeFi", "Streamlit",
 // AI & ML
 "TensorFlow", "PyTorch", "Keras", "YOLOv8", "Matplotlib", "Seaborn",
 "NumPy", "Pandas", "Scikit-Learn", "PyCaret", "NLTK", "SciPy",
 "OpenCV", "PyTesseract", "ImageMagick", "Leptonica", "CNNs", "Caffe",
 "Darknet", "MLOps", "API", "RAG", "NLP",
 // Tools
 "Git", "GitHub", "UnixShell", "Anaconda", "PowerBI", "AutoCAD",
 "IBM SPSS", "MS Excel", "Figma", "IntelliJ CLion/PyCharm",
 // Cloud & Data Management
 "Google Cloud", "Amazon AWS", "Docker", "Kubernetes", "Firebase",
 "MySQL", "EC2"
];


export function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-5 items-center">
          <div className="lg:col-span-3 space-y-6">
            <h2 className="font-poppins text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">About Me</h2>
            <div className="space-y-4 text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              <p>
                I'm a Computer Science undergraduate specializing in Data Science, driven by a passion for merging analytical thinking with user-centered design. I excel at transforming complex data into intuitive interfaces and leveraging AI/ML to create impactful, real-world applications.
              </p>
              <p>
                My experience spans developing advanced machine learning models, crafting interactive web applications, and leading collaborative projects. Through roles in IEEE and CSI, and success in hackathons, I've honed my teamwork, innovation, and problem-solving skills. I'm eager to explore the intersection of AI, cloud computing, and design to build cutting-edge solutions.
              </p>
            </div>
             {/* Key Areas - simplified */}
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                 <div className="flex items-center space-x-3 p-3 rounded-md bg-secondary/50">
                   <Palette className="w-6 h-6 text-accent flex-shrink-0" />
                   <span className="font-medium text-sm text-secondary-foreground">UI/UX & Dev</span>
                 </div>
                 <div className="flex items-center space-x-3 p-3 rounded-md bg-secondary/50">
                   <BrainCircuit className="w-6 h-6 text-accent flex-shrink-0" />
                   <span className="font-medium text-sm text-secondary-foreground">AI & ML</span>
                 </div>
                  <div className="flex items-center space-x-3 p-3 rounded-md bg-secondary/50">
                   <DatabaseZap className="w-6 h-6 text-accent flex-shrink-0" />
                   <span className="font-medium text-sm text-secondary-foreground">Data & Cloud</span>
                 </div>
                 <div className="flex items-center space-x-3 p-3 rounded-md bg-secondary/50">
                     <Users className="w-6 h-6 text-accent flex-shrink-0" />
                     <span className="font-medium text-sm text-secondary-foreground">Leadership</span>
                 </div>
                  <div className="flex items-center space-x-3 p-3 rounded-md bg-secondary/50">
                     <Bot className="w-6 h-6 text-accent flex-shrink-0" />
                     <span className="font-medium text-sm text-secondary-foreground">NLP & Vision</span>
                 </div>
                 <div className="flex items-center space-x-3 p-3 rounded-md bg-secondary/50">
                     <Settings className="w-6 h-6 text-accent flex-shrink-0" />
                     <span className="font-medium text-sm text-secondary-foreground">Problem Solving</span>
                 </div>
             </div>
              {/* Skills Highlight */}
             <div className="pt-6">
                <h3 className="font-poppins text-xl font-semibold text-foreground mb-3">Core Skills</h3>
                <div className="flex flex-wrap gap-2">
                    {/* Updated Core Skills */}
                    {coreSkills.map(skill => (
                       <span key={skill} className="text-xs bg-primary/10 text-primary font-medium px-3 py-1.5 rounded-full border border-primary/30 transition-colors hover:bg-primary/20">
                         {skill}
                       </span>
                    ))}
                    {/* Removed "... & more" */}
                </div>
             </div>
          </div>
          {/* Image spans 2 columns */}
          <div className="lg:col-span-2 flex items-center justify-center lg:justify-end">
             <Card className="overflow-hidden rounded-xl shadow-xl border-none w-full max-w-md lg:max-w-sm aspect-[4/5]">
               <CardContent className="p-0 h-full">
                  <Image
                    src="https://picsum.photos/seed/bharat-designer/600/750" // Adjusted aspect ratio
                    alt="Bharat Singh Parihar - UI/UX & Data Science"
                    width={600}
                    height={750}
                    className="object-cover w-full h-full"
                    priority // Load image eagerly as it's important
                    data-ai-hint="professional ui ux designer data scientist student portrait modern cyberpunk neon" // Added cyberpunk hint
                  />
               </CardContent>
              </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
