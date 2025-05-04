'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedSection } from '@/components/AnimatedSection';
import {
  BrainCircuit, Palette, DatabaseZap, Users, Bot, Settings
} from 'lucide-react';

const coreSkills = [
  "C/C++", "Python", "Java", "R", "Scala", "JavaScript/TypeScript", "SQL",
  "Flutter", "ReactJS", "Node.js", "ShadCN", "Flask", "FastAPI",
  "WordPress", "Material UI", "Agile Development", "Web3", "DeFi", "Streamlit",
  "TensorFlow", "PyTorch", "Keras", "YOLOv8", "Matplotlib", "Seaborn",
  "NumPy", "Pandas", "Scikit-Learn", "PyCaret", "NLTK", "SciPy",
  "OpenCV", "PyTesseract", "ImageMagick", "Leptonica", "CNNs", "Caffe",
  "Darknet", "MLOps", "API", "RAG", "NLP",
  "Git", "GitHub", "UnixShell", "Anaconda", "PowerBI", "AutoCAD",
  "IBM SPSS", "MS Excel", "Figma", "IntelliJ CLion/PyCharm",
  "Google Cloud", "Amazon AWS", "Docker", "Kubernetes", "Firebase",
  "MySQL", "EC2"
];

export function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-5 items-center">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-3 space-y-6">
            <AnimatedSection direction="up">
              <h2 className="font-poppins text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-foreground">
                About Me
              </h2>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.1}>
              <div className="space-y-4 text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                <p>
                  I'm a Computer Science undergraduate specializing in Data Science, driven by a passion for merging analytical thinking with user-centered design...
                </p>
                <p>
                  My experience spans developing advanced machine learning models, crafting interactive web applications...
                </p>
              </div>
            </AnimatedSection>

            {/* KEY AREAS */}
            <AnimatedSection direction="up" delay={0.2}>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                {[
                  { icon: <Palette className="w-6 h-6 text-accent" />, label: "UI/UX & Dev" },
                  { icon: <BrainCircuit className="w-6 h-6 text-accent" />, label: "AI & ML" },
                  { icon: <DatabaseZap className="w-6 h-6 text-accent" />, label: "Data & Cloud" },
                  { icon: <Users className="w-6 h-6 text-accent" />, label: "Leadership" },
                  { icon: <Bot className="w-6 h-6 text-accent" />, label: "NLP & Vision" },
                  { icon: <Settings className="w-6 h-6 text-accent" />, label: "Problem Solving" },
                ].map((item, index) => (
                  <AnimatedSection key={item.label} delay={0.25 + index * 0.1} direction="up">
                    <div className="flex items-center space-x-3 p-3 rounded-md bg-secondary/50">
                      {item.icon}
                      <span className="font-medium text-sm text-secondary-foreground">{item.label}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            {/* CORE SKILLS */}
            <AnimatedSection direction="up" delay={0.8}>
              <div className="pt-6">
                <h3 className="font-poppins text-xl font-semibold text-foreground mb-3">Core Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {coreSkills.map((skill, idx) => (
                    <AnimatedSection
                      key={skill}
                      direction="up"
                      delay={0.05 * (idx % 10)} // modest stagger
                    >
                      <span className="text-xs bg-primary/10 text-primary font-medium px-3 py-1.5 rounded-full border border-primary/30 transition-colors hover:bg-primary/20">
                        {skill}
                      </span>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* RIGHT IMAGE */}
          <AnimatedSection direction="flip" delay={0.4}>
            <div className="lg:col-span-2 flex items-center justify-center lg:justify-end">
              <Card className="overflow-hidden rounded-xl shadow-xl border-none w-full max-w-md lg:max-w-sm aspect-[4/5]">
                <CardContent className="p-0 h-full">
                  <Image
                    src="https://picsum.photos/seed/bharat-profile/600/750"
                    alt="Bharat Singh Parihar - Portrait"
                    width={600}
                    height={750}
                    className="object-cover w-full h-full"
                    priority
                  />
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
