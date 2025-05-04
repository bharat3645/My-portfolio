'use client';

import React, { useState, useTransition } from 'react';
import { tailorPortfolio, TailorPortfolioInput, TailorPortfolioOutput } from '@/ai/flows/portfolio-tailor';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Wand2, Sparkles } from 'lucide-react'; // Added Sparkles
import { useToast } from "@/hooks/use-toast";

// Using the existing initial content - UPDATED CONTACT INFO
const initialPortfolioContent = `
## Bharat Singh Parihar - Computer Science Student (Data Science Specialization)

**Contact:** +91 9451747691 | bharat3645@gmail.com | github.com/bharat3645 | linkedin.com/in/bharat-singh-parihar/

**Summary:**
I'm a Computer Science undergraduate student specializing in Data Science, deeply passionate about using technology to solve real-world problems. With experience in creating advanced machine learning applications and predictive analytics tools. My leadership roles in IEEE and CSI, coupled with successful participation in hackathons, have honed my collaborative and innovative skills. I am integrating AI, cloud computing, and cutting-edge technologies to contribute meaningfully while expanding my expertise through impactful research.

**Education:**
- **Symbiosis Institute of Technology, Nagpur, India**
  - B.Tech (Hons.) CSE Core Data Science (CGPA: 7.85/10.00) | Expected 2026
- **Kendriya Vidyalaya, Dahi Chowki, Unnao**
  - SSC, PCM with Computer Science (Percentage: 87.44%) | 2022

**Skills:**
- **Programming and Development:** C/C++, Python, Java, R, Scala, JavaScript/TypeScript, SQL, Flutter, ReactJS, NodeJS, ShadCN, Flask, FastAPI, WordPress, Material UI, Agile Development
- **AI & ML:** TensorFlow, PyTorch, Keras, YOLOv8, Matplotlib, Seaborn, NumPy, Pandas, Scikit-Learn, PyCaret, NLTK, SciPy, OpenCV, PyTesseract, ImageMagick, Legionica, CNNs, Caffe, Darknet, MLDps, APL
- **Tools:** Git, GitHub, UnixShell, Anaconda, PowerBI, AutoCAD, IBM SPSS, MS Excel, Figma, IntelliJ
- **Cloud & Data Management:** Google Cloud, Amazon AWS, Docker, Kubernetes, Firebase, MySQL, EC2

**Professional Experience:**

**PGDAV College – University of Delhi | Summer Research Intern | May 2024 – July 2024**
- Developed a CNN-based deep learning model for real vs. fake face distinction, achieving 83% accuracy.
- Integrated Multi-Criteria Decision-Making (MCDM) for enhanced decision precision.

**Kadacy | Student Intern | Jan 2023 – Feb 2023**
- Conducted simulations to guide robotic prototyping, improving efficiency by 15%.

**Projects:** (See Projects Section for details)
- AI-Driven Image Encryption System (Feb 2025 - Present)
- Federated Learning for Anomaly Detection (Jan 2025 - Present)
- DeepFake Detection (May 2024 - Jul 2024)
- Brain-Tumor Detection Model (Dec 2023)
- Book Detection for Visually Impaired (Feb 2024 - Jun 2024)
- AquaTrace Software (Aug 2023 - Oct 2023)

**Achievements & Awards:**
- Winner, GDSC Hackathon (2023)
- 3rd Place, IEEE Research Hackathon (2023)
- 4th Place, CyberHack Maha Hackathon (2023)

**Publications:**
1. B. S. Parihar, et al., Integration of Computer Vision for Book Detection and Text-to-Speech Conversion, IEEE ICISCT 2024, Kookmin University, Korea (SCOPUS)
2. B. S. Parihar, et al., The Impact of Digitalization on Psychological Treatment, IEEE ICISCT 2024, Kookmin University, Korea (SCOPUS)
3. B. S. Parihar, et al., Realtime Cryptojacking in Advanced mobile devices, IEEE ICIPCT 2025, Amity University, Noida, India (SCOPUS)
4. B. S. Parihar, et al., Revolutionizing Industry 4.0: Multi-Level Federated Learning for Dynamic Ecosystem (Book Chapter) 2025
5. B. S. Parihar, et al., AI and Forecasting for Renewable Energy Generation – (Book Chapter) 2025

**Certifications:**
- Fundamental of Deep Learning (NVIDIA)
- Fundamental of Accelerated Computing with Cuda C (NVIDIA)
- Cloud Data Engineer (Google)
- Accelerating CUDA C applications with Multiple GPUs (NVIDIA)
- SQL (Basic, Intermediate, Advance) (HackerRank)
- SDE Intern (HackerRank)
- Machine Learning Specialization (Stanford University)

**Leadership Experience:**
- **Computer Society of India (CSI) Student Chapter:** Chair (Dec 2024 - Present)
- **SITNavate 24 Hours Hackathon:** Organizer (19, 20 Feb 2025)
- **Computer Society of India (CSI) Student Chapter:** Founder Vice Chair (July 2024 - Nov 2024)
- **IEEE Student Chapter:** Core Member (Dec 2023 - Jun 2024)
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
      setTailoredContent(''); // Clear previous output immediately
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
           variant: "default", // Use default variant for success
         });
      } catch (error) {
        console.error("Error tailoring portfolio:", error);
        toast({
          title: "AI Tailoring Error",
          description: "Failed to generate tailored content. The AI might be busy or encountered an issue. Please try again.",
          variant: "destructive",
        });
        setTailoredContent('// Error generating tailored content. Please check the console or try again.');
      }
    });
  };

  return (
    <section id="tailor" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-secondary/50 to-background"> {/* Gradient background */}
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <Sparkles className="h-10 w-10 text-primary animate-pulse" /> {/* Animated Icon */}
          <h2 className="font-poppins text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">AI Portfolio Tailor</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Paste a job description below. The AI will analyze it and rewrite your portfolio content to highlight the most relevant skills and experiences, helping you stand out.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-start"> {/* items-start to align tops */}
          <Card className="shadow-md border-border/50 rounded-lg overflow-hidden">
            <CardHeader className="bg-secondary/30 p-6">
              <CardTitle className="font-poppins text-xl font-semibold">Input Details</CardTitle>
              <CardDescription>Provide the target job description and your base content.</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div>
                <Label htmlFor="job-description" className="text-sm font-medium text-foreground block mb-2">Job Description</Label>
                <Textarea
                  id="job-description"
                  placeholder="Paste the full job description here..."
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  rows={8}
                  className="bg-background border-border/60 focus:border-primary focus:bg-background/80 text-sm"
                />
              </div>
              <div>
                <Label htmlFor="portfolio-content" className="text-sm font-medium text-foreground block mb-2">Your Current Portfolio Content</Label>
                <Textarea
                  id="portfolio-content"
                  value={portfolioContent}
                  onChange={(e) => setPortfolioContent(e.target.value)}
                  rows={15}
                   className="bg-background border-border/60 focus:border-primary focus:bg-background/80 text-sm font-mono" // Monospaced for code-like content
                />
              </div>
              <Button onClick={handleTailor} disabled={isPending} className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2 shadow-sm hover:shadow-md">
                {isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Tailoring...
                  </>
                ) : (
                  <>
                   <Wand2 className="mr-2 h-4 w-4" />
                    Tailor My Portfolio
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-md border-border/50 rounded-lg overflow-hidden sticky top-24"> {/* Sticky output card */}
            <CardHeader className="bg-secondary/30 p-6">
              <CardTitle className="font-poppins text-xl font-semibold">Tailored Output</CardTitle>
              <CardDescription>AI-suggested content emphasizing job-relevant aspects.</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <Label htmlFor="tailored-content" className="text-sm font-medium text-foreground block mb-2">Suggested Tailored Content</Label>
              <Textarea
                id="tailored-content"
                placeholder="Tailored content will appear here after processing..."
                value={tailoredContent}
                readOnly
                rows={26} // Adjusted rows slightly
                 className="mt-1 bg-background focus-visible:ring-accent text-sm font-mono border-border/60 focus:border-accent focus:bg-background/80" // Use accent for focus, monospaced font
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
