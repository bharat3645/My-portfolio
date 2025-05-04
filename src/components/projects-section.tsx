import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Github } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection"; // Import animation wrapper

const projects = [
  {
    title: "AI-Driven Image Encryption System",
    description:
      "Designed a self-adaptive encryption model using CNNs and RNNs, securing images 50% faster than AES-256, tailored for healthcare and IIoT applications.",
    imageUrl: "https://picsum.photos/seed/dcgan-encryption-ui/600/400",
    imageHint: "image encryption user interface dcgan",
    liveUrl: null,
    repoUrl: "https://github.com/bharat3645",
    tags: ["PyTorch", "CNN", "RNN", "Security", "Healthcare"],
  },
  {
    title: "Federated Learning for Anomaly Detection",
    description:
      "Developed a privacy-preserving federated learning system for anomaly detection across complex computing devices.",
    imageUrl: "https://picsum.photos/seed/federated/600/400",
    imageHint: "network anomaly detection",
    liveUrl: null,
    repoUrl: "https://github.com/bharat3645",
    tags: ["FedML", "TensorFlow", "Privacy", "MLOps", "Security"],
  },
  {
    title: "DeepFake Detection",
    description:
      "Focused on distinguishing real faces from fakes using a fine-tuned CNN model. Integrated Multi-Criteria Decision-Making (MCDM) for enhanced accuracy.",
    imageUrl: "https://picsum.photos/seed/deepfake/600/400",
    imageHint: "ai face recognition",
    liveUrl: null,
    repoUrl: "https://github.com/bharat3645",
    tags: ["CNN", "MCDM", "Computer Vision", "Python", "Keras"],
  },
  {
    title: "Brain-Tumor Detection Model",
    description:
      "Developed and deployed a scalable AI-powered brain tumor detection model using YOLOv8 and PyTorch, achieving high accuracy on MRI scans.",
    imageUrl: "https://picsum.photos/seed/braintumor/600/400",
    imageHint: "mri scan brain ai",
    liveUrl: null,
    repoUrl: "https://github.com/bharat3645",
    tags: ["YOLOv8", "PyTorch", "AI", "Medical Imaging", "Docker"],
  },
  {
    title: "Book Detection for Visually Impaired",
    description:
      "Created an OCR-based system to convert book text into spoken words using PyTesseract and OpenCV, improving accessibility.",
    imageUrl: "https://picsum.photos/seed/ocr/600/400",
    imageHint: "ocr accessibility vision",
    liveUrl: null,
    repoUrl: "https://github.com/bharat3645",
    tags: ["OCR", "OpenCV", "Accessibility", "Python", "TTS"],
  },
  {
    title: "AquaTrace Software UI/API",
    description:
      "Experimented with APIs (OAuth Access Tokens) and frontend components for a software project using Figma, TypeScript, and React.",
    imageUrl: "https://picsum.photos/seed/aquatrace/600/400",
    imageHint: "software development abstract ui api",
    liveUrl: null,
    repoUrl: "https://github.com/bharat3645",
    tags: ["ReactJS", "TypeScript", "API", "UI Design", "Figma", "Firebase"],
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="w-full py-16 md:py-24 lg:py-32 bg-secondary/50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <AnimatedSection direction="up" delay={0.1} duration={1}>
            <h2 className="font-poppins text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">
              Featured Projects
            </h2>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.2} duration={1}>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of projects blending UI/UX principles with Data
              Science and AI.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.title}
              direction="up"
              delay={0.2 + index * 0.15} // Staggered delay
              duration={0.8}
            >
              <Card className="group flex flex-col overflow-hidden rounded-lg shadow-sm border border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300 ease-in-out bg-card">
                <CardHeader className="p-0 relative overflow-hidden">
                  <div className="aspect-video">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                      data-ai-hint={project.imageHint}
                      className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </CardHeader>

                <CardContent className="p-6 flex-1 flex flex-col">
                  <CardTitle className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="mb-4 flex-1 text-muted-foreground text-sm">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4 pt-2 border-t border-border/50">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-accent/10 text-accent font-medium px-2.5 py-1 rounded-full border border-accent/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 mt-auto flex justify-end bg-secondary/30 rounded-b-lg">
                  {project.repoUrl ? (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5"
                    >
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" /> Code
                      </a>
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      disabled
                      variant="outline"
                      className="text-muted-foreground/50 border-muted-foreground/20 cursor-not-allowed"
                    >
                      <Github className="mr-2 h-4 w-4" /> No Code
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
