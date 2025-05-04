import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { ExternalLink, Github } from "lucide-react";

// Sample project data (replace with your actual projects)
const projects = [
  {
    title: "Project Alpha",
    description: "An innovative web application using Next.js and Tailwind CSS.",
    imageUrl: "https://picsum.photos/seed/alpha/600/400",
    imageHint: "technology abstract",
    liveUrl: "#", // Replace with actual URL
    repoUrl: "#", // Replace with actual URL
    tags: ["Next.js", "Tailwind CSS", "TypeScript"]
  },
  {
    title: "Project Beta",
    description: "Interactive data visualization dashboard built with React and D3.",
    imageUrl: "https://picsum.photos/seed/beta/600/400",
    imageHint: "data visualization chart",
    liveUrl: "#",
    repoUrl: "#",
    tags: ["React", "D3.js", "Data Viz"]
  },
  {
    title: "Project Gamma",
    description: "A 3D modeling experiment using Three.js exploring creative geometry.",
    imageUrl: "https://picsum.photos/seed/gamma/600/400",
    imageHint: "3d render abstract",
    liveUrl: "#",
    repoUrl: "#",
    tags: ["Three.js", "WebGL", "3D"]
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">My Projects</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Here are some of the projects I've worked on, showcasing my skills in development and design.
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
                    layout="fill"
                    objectFit="cover"
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
