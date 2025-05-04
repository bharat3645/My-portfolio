'use client';

import React, { useState, useTransition } from 'react';
import { tailorPortfolio, TailorPortfolioInput, TailorPortfolioOutput } from '@/ai/flows/portfolio-tailor';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Wand2 } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const initialPortfolioContent = `
## Jane Doe - Creative Developer & Designer

**Summary:**
Passionate and results-oriented Creative Developer with 5+ years of experience specializing in front-end development, UI/UX design, and interactive web applications. Proven ability to translate complex requirements into intuitive and visually appealing user interfaces. Seeking challenging projects where I can leverage my skills in React, Next.js, Three.js, and modern web technologies.

**Experience:**

**Senior Front-End Developer | Tech Solutions Inc. | 2020 - Present**
- Led the development of key features for the company's flagship product using React and TypeScript.
- Collaborated with designers and back-end engineers to implement responsive and accessible UI components.
- Mentored junior developers and contributed to code reviews and best practices.
- Integrated Three.js for interactive 3D product visualizations.

**Web Developer & Designer | Creative Agency | 2018 - 2020**
- Designed and developed websites for various clients across different industries.
- Focused on creating engaging user experiences with HTML, CSS, JavaScript, and WordPress.
- Managed client communication and project timelines.

**Skills:**
- **Front-End:** React, Next.js, JavaScript (ES6+), TypeScript, HTML5, CSS3, Tailwind CSS, SASS/LESS
- **3D & Graphics:** Three.js, WebGL
- **Design:** Figma, Adobe XD, UI/UX Principles, Responsive Design, Accessibility (WCAG)
- **Tools:** Git, Docker, Webpack, Jira
- **Other:** Node.js (Basic), REST APIs

**Projects:**
- Project Alpha: [Brief Description]
- Project Beta: [Brief Description]
- Project Gamma: [Brief Description]

**Education:**
- Bachelor of Science in Computer Science | University of Technology | 2018
`;


export function AiTailorSection() {
  const [jobDescription, setJobDescription] = useState('');
  const [portfolioContent, setPortfolioContent] = useState(initialPortfolioContent);
  const [tailoredContent, setTailoredContent] = useState('');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleTailor = () => {
    if (!jobDescription.trim()) {
      toast({
        title: "Job Description Required",
        description: "Please paste the job description before tailoring.",
        variant: "destructive",
      });
      return;
    }

    startTransition(async () => {
      try {
        const input: TailorPortfolioInput = {
          jobDescription,
          portfolioContent,
        };
        const result: TailorPortfolioOutput = await tailorPortfolio(input);
        setTailoredContent(result.tailoredContent);
         toast({
           title: "Portfolio Tailored!",
           description: "AI has suggested tailored content below.",
         });
      } catch (error) {
        console.error("Error tailoring portfolio:", error);
        toast({
          title: "Error",
          description: "Failed to tailor portfolio content. Please try again.",
          variant: "destructive",
        });
        setTailoredContent('Error generating tailored content.');
      }
    });
  };

  return (
    <section id="tailor" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <Wand2 className="h-10 w-10 text-primary" />
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">AI Portfolio Tailor</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Paste a job description below, and let AI help you highlight the most relevant skills and experiences from your portfolio.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Input</CardTitle>
              <CardDescription>Provide the job description and your base portfolio content.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="job-description" className="text-primary font-medium">Job Description</Label>
                <Textarea
                  id="job-description"
                  placeholder="Paste the job description here..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  rows={8}
                  className="mt-1 bg-background"
                />
              </div>
              <div>
                <Label htmlFor="portfolio-content" className="text-primary font-medium">Your Current Portfolio Content</Label>
                <Textarea
                  id="portfolio-content"
                  value={portfolioContent}
                  onChange={(e) => setPortfolioContent(e.target.value)}
                  rows={15}
                   className="mt-1 bg-background"
                />
              </div>
              <Button onClick={handleTailor} disabled={isPending} className="w-full sm:w-auto">
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Tailoring...
                  </>
                ) : (
                  <>
                   <Wand2 className="mr-2 h-4 w-4" />
                    Tailor Content
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Tailored Output</CardTitle>
              <CardDescription>AI-suggested content emphasizing relevant aspects for the job.</CardDescription>
            </CardHeader>
            <CardContent>
              <Label htmlFor="tailored-content" className="text-primary font-medium">Suggested Tailored Content</Label>
              <Textarea
                id="tailored-content"
                placeholder="Tailored content will appear here..."
                value={tailoredContent}
                readOnly
                rows={25}
                 className="mt-1 bg-background focus-visible:ring-accent" // Use accent for focus
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
