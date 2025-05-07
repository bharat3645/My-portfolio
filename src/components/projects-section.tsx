"use client";

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
    title: "GigX",
    description:
      "A decentralized freelance job marketplace built using Next.js, Hardhat, and Solidity. Features a token-based task system, smart contract escrow, and Dockerized deployment for efficient job management.",
    imageUrl: "https://picsum.photos/seed/appxcess/600/400",
    imageHint: "decentralized freelance marketplace UI",
    liveUrl: null,
    repoUrl: "https://github.com/bharat3645/AppXcess-GigX",
    tags: ["Next.js", "Solidity", "Hardhat", "Docker", "Web3"],
  },
  {
    title: "HandTalk",
    description:
      "Real-time ASL detection system for video calls using a fine-tuned MobileNet model. Designed for inclusive communication with integrated gesture-to-text translation.",
    imageUrl: "https://picsum.photos/seed/handtalk/600/400",
    imageHint: "ASL detection in video calls",
    liveUrl: null,
    repoUrl: "https://github.com/bharat3645/HandTalk",
    tags: ["React", "Node.js", "WebRTC", "Mediapipe", "Python"],
  },
  {
    title: "NeuroOCR",
    description:
      "A TensorFlow.js-based OCR engine for handwriting recognition, featuring real-time image processing and a modern UI built with React and Tailwind CSS.",
    imageUrl: "https://picsum.photos/seed/neuroocr/600/400",
    imageHint: "handwriting OCR interface",
    liveUrl: null,
    repoUrl: "https://github.com/bharat3645/NeuroOCR1",
    tags: ["TensorFlow.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "ChainFusion",
    description:
      "Bridging Web2 and Web3 through AI agents that assist in blockchain onboarding and integration. Automates Web3 tasks and simplifies smart contract interaction.",
    imageUrl: "https://picsum.photos/seed/chainfusion/600/400",
    imageHint: "Web2 to Web3 integration platform",
    liveUrl: null,
    repoUrl: "https://github.com/bharat3645/ChainFusion",
    tags: ["Next.js", "AI Agents", "Web3", "Blockchain"],
  },
  {
    title: "GlobalGive",
    description:
      "A blockchain-powered crowdfunding platform that ensures donor transparency and decentralized fundraising using Ethereum smart contracts.",
    imageUrl: "https://picsum.photos/seed/globalgive/600/400",
    imageHint: "blockchain crowdfunding platform",
    liveUrl: null,
    repoUrl: "https://github.com/bharat3645/GlobalGive",
    tags: ["Ethereum", "Smart Contracts", "Web3", "Crowdfunding"],
  },
  {
    title: "TruthGuardAI",
    description:
      "AI-driven misinformation detection platform that uses NLP and credibility scoring to detect and flag false content across the web.",
    imageUrl: "https://picsum.photos/seed/truthguard/600/400",
    imageHint: "ai misinformation detector interface",
    liveUrl: null,
    repoUrl: "https://github.com/bharat3645/TruthGuardAI",
    tags: ["AI", "Misinformation Detection", "NLP"],
  },
  {
    title: "MediChain",
    description:
      "Blockchain-based secure medical record management system to ensure patient data integrity, access control, and decentralized storage.",
    imageUrl: "https://picsum.photos/seed/medichain/600/400",
    imageHint: "blockchain medical records",
    liveUrl: null,
    repoUrl: "https://github.com/bharat3645/MediChain",
    tags: ["Blockchain", "Healthcare", "Data Security"],
  },
  {
    title: "ETS (Emotion Tracking System)",
    description:
      "Emotion analysis system using facial recognition and machine learning to track and interpret real-time emotional responses.",
    imageUrl: "https://picsum.photos/seed/ets/600/400",
    imageHint: "real-time facial emotion detection",
    liveUrl: null,
    repoUrl: "https://github.com/bharat3645/ETS",
    tags: ["Facial Recognition", "Emotion Analysis", "ML"],
  },
  {
    title: "DreamCanvas",
    description:
      "AI-powered generative art platform that converts text descriptions into personalized visual art using Stable Diffusion models.",
    imageUrl: "https://picsum.photos/seed/dreamcanvas/600/400",
    imageHint: "ai art generator from text",
    liveUrl: null,
    repoUrl: "https://github.com/bharat3645/DreamCanvas",
    tags: ["AI Art", "Text-to-Image", "Generative Models"],
  },
  {
    title: "Federated Learning for Anomaly Detection",
    description:
      "Developed a privacy-preserving federated learning system for anomaly detection across complex computing devices.",
    liveUrl: null,
    repoUrl: "https://github.com/bharat3645",
    tags: ["FedML", "TensorFlow", "Privacy", "MLOps", "Security"],
  },
  {
    title: "DeepFake Detection",
    description:
      "Focused on distinguishing real faces from fakes using a fine-tuned CNN model. Integrated Multi-Criteria Decision-Making (MCDM) for enhanced accuracy.",
    liveUrl: null,
    repoUrl: "https://github.com/bharat3645",
    tags: ["CNN", "MCDM", "Computer Vision", "Python", "Keras"],
  },
  {
    title: "Brain-Tumor Detection Model",
    description:
      "Developed and deployed a scalable AI-powered brain tumor detection model using YOLOv8 and PyTorch, achieving high accuracy on MRI scans.",
    liveUrl: null,
    repoUrl: "https://github.com/bharat3645",
    tags: ["YOLOv8", "PyTorch", "AI", "Medical Imaging", "Docker"],
  },
  {
    title: "Book Detection for Visually Impaired",
    description:
      "Created an OCR-based system to convert book text into spoken words using PyTesseract and OpenCV, improving accessibility.",
    liveUrl: null,
    repoUrl: "https://github.com/bharat3645",
    tags: ["OCR", "OpenCV", "Accessibility", "Python", "TTS"],
  },
  {
    title: "AquaTrace Software UI/API",
    description:
      "Experimented with APIs (OAuth Access Tokens) and frontend components for a software project using Figma, TypeScript, and React.",
    liveUrl: null,
    repoUrl: "https://github.com/bharat3645",
    tags: ["ReactJS", "TypeScript", "API", "UI Design", "Figma", "Firebase"],
  }
];

export function ProjectsSection() {
  // Separate projects with and without images
  const featuredProjects = projects.filter(p => Boolean(p.imageUrl));
  const otherProjects = projects.filter(p => !p.imageUrl);
  return (
    <section id="projects" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="font-poppins text-3xl font-bold tracking-tighter sm:text-5xl text-foreground animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
            Featured Projects
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            A selection of projects blending UI/UX principles with Data Science and AI.
          </p>
        </div>
        {/* Featured Projects */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12">
          {featuredProjects.length > 0 ? (
            featuredProjects.map((project, index) => (
              <Card
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-lg shadow-sm border border-transparent hover:border-primary/20 hover:shadow-xl transition-all duration-300 ease-in-out bg-card animate-slide-in-up"
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                <CardHeader className="p-0 relative overflow-hidden">
                  <div className="aspect-video">
                    <Image
                      src={project.imageUrl!}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      data-ai-hint={project.imageHint}
                      className="transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardHeader>
                <CardContent className="p-4 flex-1 flex flex-col">
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
                <CardFooter className="p-4 pt-0 mt-auto flex justify-end bg-secondary/30 rounded-b-lg">
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
            ))
          ) : (
            <div className="col-span-full text-center text-destructive animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
              No featured projects found.
            </div>
          )}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="mt-16">
            <h3 className="font-poppins text-2xl font-bold tracking-tight mb-6 text-foreground">Other Projects</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {otherProjects.map((project) => (
                <li key={project.title}>
                  {project.repoUrl ? (
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary underline">
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
