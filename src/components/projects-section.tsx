import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { ExternalLink, Github } from "lucide-react";

// User's project data from resume
const projects = [
 {
    title: "AI-Driven Image Encryption System",
    description: "Designed a self-adaptive encryption model using CNNs and RNNs, securing images 50% faster than AES-256, tailored for healthcare and IIoT applications.",
    imageUrl: "https://picsum.photos/seed/encryption/600/400",
    imageHint: "cyber security abstract",
    liveUrl: "https://github.com/bharat516",
    repoUrl: "https://github.com/bharat516",
    tags: ["PyTorch", "YOLOv8", "LSTM", "AWS", "Raspberry Pi", "CNN", "RNN"]
  },
  {
    title: "Federated Learning for Anomaly Detection",
    description: "Developed a federated learning system for anomaly detection across complex computing devices, ensuring privacy and efficiency.",
    imageUrl: "https://picsum.photos/seed/federated/600/400",
    imageHint: "network anomaly detection",
    liveUrl: "https://github.com/bharat516",
    repoUrl: "https://github.com/bharat516",
    tags: ["FedML", "TensorFlow Federated", "TLS", "Machine Learning"]
  },
   {
    title: "DeepFake Detection",
    description: "Focused on distinguishing real faces from fakes (e.g., deep fakes) using a fine-tuned CNN model. Integrated Multi-Criteria Decision-Making (MCDM) for enhanced accuracy.",
    imageUrl: "https://picsum.photos/seed/deepfake/600/400",
    imageHint: "ai face recognition",
    liveUrl: "https://github.com/bharat516",
    repoUrl: "https://github.com/bharat516",
    tags: ["CNN", "MCDM", "NumPy", "TensorFlow", "Keras", "Python"]
  },
  {
    title: "Brain-Tumor Detection Model",
    description: "Developed and deployed a scalable AI-powered brain tumor detection model using YOLOv8 and PyTorch, achieving 89% accuracy on MRI scans and reducing false positives by 15%.",
    imageUrl: "https://picsum.photos/seed/braintumor/600/400",
    imageHint: "mri scan brain ai",
    liveUrl: "https://github.com/bharat516",
    repoUrl: "https://github.com/bharat516",
    tags: ["YOLOv8", "PyTorch", "CUDA", "OpenCV", "Scikit-learn", "Docker", "Seaborn"]
  },
   {
    title: "Book Detection for Visually Impaired",
    description: "Created an OCR-based system to convert book text into spoken words using PyTesseract and OpenCV, significantly improving accessibility for the visually impaired.",
    imageUrl: "https://picsum.photos/seed/ocr/600/400",
    imageHint: "ocr accessibility vision",
    liveUrl: "https://github.com/bharat516",
    repoUrl: "https://github.com/bharat516",
    tags: ["PyTesseract", "OpenCV", "ImageMagick", "Python", "Legionica"]
  },
  {
    title: "AquaTrace Software",
    description: "Experimented with APIs (OAuth Access Tokens) to get data from the given pipeline for a software project involving Figma, TypeScript, and React.",
    imageUrl: "https://picsum.photos/seed/aquatrace/600/400",
    imageHint: "software development abstract",
    liveUrl: "https://github.com/bharat516",
    repoUrl: "https://github.com/bharat516",
    tags: ["Figma", "TypeScript", "HTML/CSS", "ReactJS", "Webpack", "Git", "Firebase"]
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">My Projects</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A selection of projects showcasing my skills in AI, Machine Learning, Full-Stack Development, and Data Science.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-[1.02]">
               <CardHeader className="p-0">
                <div className="aspect-video relative">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill={true} /* Changed layout to fill */
                    style={{objectFit: 'cover'}} /* Added objectFit */
                    data-ai-hint={project.imageHint}
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                 </div>
               </CardHeader>
              <CardContent className="p-6 flex-1 flex flex-col">
                 <CardTitle className="mb-2 text-primary">{project.title}</CardTitle>
                 <CardDescription className="mb-4 flex-1">{project.description}</CardDescription>
                 <div className="flex flex-wrap gap-2 mb-4">
                   {project.tags.map(tag => (
                      <span key={tag} className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">{tag}</span>
                   ))}
                 </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-end space-x-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> Code
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
