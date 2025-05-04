import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award, Users, Star, Sparkles } from 'lucide-react'; // Added Sparkles for highlights

// Data extracted from resume (Ensure data accuracy)
const professionalExperience = [
  {
    title: "Summer Research Intern",
    company: "PGDAV College – University of Delhi",
    duration: "May 2024 – July 2024",
    description: [
      "Developed a CNN model for DeepFake detection (83% accuracy).",
      "Integrated MCDM methods to enhance decision precision in analysis.",
      "Focused on computer vision and model evaluation techniques."
    ]
  },
  {
    title: "Student Intern",
    company: "Kadacy",
    duration: "Jan 2023 – Feb 2023",
    description: [
      "Performed simulations guiding robotic prototyping, boosting efficiency by 15%.",
      "Gained exposure to simulation software and iterative design processes."
    ]
  }
];

const education = [
  {
    institution: "Symbiosis Institute of Technology, Nagpur",
    degree: "B.Tech (Hons.) CSE - Data Science",
    duration: "2022 – Expected 2026",
    details: "CGPA: 7.85/10.00"
  },
  {
    institution: "Kendriya Vidyalaya, Unnao",
    degree: "SSC, PCM with Computer Science",
    duration: "Completed 2022",
    details: "Percentage: 87.44%"
  }
];

const certifications = [
  { name: "Machine Learning Specialization", issuer: "Stanford University" },
  { name: "Fundamental of Deep Learning", issuer: "NVIDIA" },
  { name: "Fundamental of Accelerated Computing with CUDA C", issuer: "NVIDIA" },
   { name: "Accelerating CUDA C applications with Multiple GPUs", issuer: "NVIDIA" },
  { name: "Cloud Data Engineer", issuer: "Google" },
  { name: "SQL (Basic, Intermediate, Advance)", issuer: "HackerRank" },
  { name: "SDE Intern", issuer: "HackerRank" },
];

const leadership = [
    { role: "Chair", organization: "CSI Student Chapter", duration: "Dec 2024 - Present" },
    { role: "Organizer", organization: "SITNavate Hackathon", duration: "Feb 2025" },
    { role: "Founder Vice Chair", organization: "CSI Student Chapter", duration: "Jul 2024 - Nov 2024" },
    { role: "Core Member", organization: "IEEE Student Chapter", duration: "Dec 2023 - Jun 2024" },
];


export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30"> {/* Slightly different background */}
      <div className="container px-4 md:px-6">
         <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="font-poppins text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">My Journey</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Blending academic knowledge with practical experience in tech leadership and skill development.
            </p>
          </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left Column: Experience & Education */}
          <div className="space-y-10">
            {/* Professional Experience */}
            <div>
              <h3 className="font-poppins text-2xl font-semibold tracking-tight text-foreground mb-6 flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-primary" /> Professional Experience
              </h3>
              <div className="space-y-6 border-l-2 border-primary/30 pl-6">
                {professionalExperience.map((exp, index) => (
                   <Card key={index} className="shadow-sm hover:shadow-lg transition-shadow duration-300 border-transparent hover:border-primary/20 relative before:absolute before:left-[-1.65rem] before:top-6 before:h-3 before:w-3 before:rounded-full before:bg-primary">
                    <CardHeader>
                      <CardTitle className="text-lg font-medium text-foreground">{exp.title}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground flex justify-between items-center pt-1">
                         <span>{exp.company}</span>
                         <span className="text-xs font-mono bg-muted px-2 py-0.5 rounded">{exp.duration}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-outside pl-5 space-y-1.5 text-sm text-muted-foreground">
                        {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

             {/* Education */}
             <div>
              <h3 className="font-poppins text-2xl font-semibold tracking-tight text-foreground mb-6 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-primary" /> Education
              </h3>
              <div className="space-y-6 border-l-2 border-primary/30 pl-6">
                {education.map((edu, index) => (
                  <Card key={index} className="shadow-sm hover:shadow-lg transition-shadow duration-300 border-transparent hover:border-primary/20 relative before:absolute before:left-[-1.65rem] before:top-6 before:h-3 before:w-3 before:rounded-full before:bg-primary">
                    <CardHeader>
                      <CardTitle className="text-lg font-medium text-foreground">{edu.institution}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground flex justify-between items-center pt-1">
                         <span>{edu.degree}</span>
                         <span className="text-xs font-mono bg-muted px-2 py-0.5 rounded">{edu.duration}</span>
                      </CardDescription>
                    </CardHeader>
                    {edu.details && (
                        <CardContent>
                         <p className="text-sm text-primary font-medium">{edu.details}</p>
                        </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </div>

           {/* Right Column: Certifications & Leadership */}
           <div className="space-y-10">
              {/* Certifications */}
              <div>
                 <h3 className="font-poppins text-2xl font-semibold tracking-tight text-foreground mb-6 flex items-center gap-3">
                   <Award className="w-6 h-6 text-accent" /> Certifications & Skills
                 </h3>
                 <Card className="shadow-sm hover:shadow-lg transition-shadow duration-300 border-transparent hover:border-accent/20">
                    <CardContent className="pt-6">
                     <ul className="space-y-3">
                        {certifications.map((cert, index) => (
                           <li key={index} className="flex items-center gap-3 text-sm group">
                             <Star className="w-4 h-4 text-accent/80 flex-shrink-0 transition-colors group-hover:text-accent" />
                             <div>
                                <span className="font-medium text-foreground">{cert.name}</span>
                                <span className="text-muted-foreground text-xs"> - {cert.issuer}</span>
                             </div>
                           </li>
                        ))}
                      </ul>
                    </CardContent>
                 </Card>
              </div>

              {/* Leadership Experience */}
              <div>
                 <h3 className="font-poppins text-2xl font-semibold tracking-tight text-foreground mb-6 flex items-center gap-3">
                   <Users className="w-6 h-6 text-accent" /> Leadership & Involvement
                 </h3>
                 <Card className="shadow-sm hover:shadow-lg transition-shadow duration-300 border-transparent hover:border-accent/20">
                    <CardContent className="pt-6">
                     <ul className="space-y-4">
                        {leadership.map((lead, index) => (
                           <li key={index} className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 text-sm group">
                             <div className="flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-accent/80 flex-shrink-0 transition-colors group-hover:text-accent"/>
                                <span className="font-medium text-foreground">{lead.role}, {lead.organization}</span>
                              </div>
                             <span className="text-muted-foreground text-xs sm:text-sm pl-6 sm:pl-0 sm:text-right">{lead.duration}</span>
                           </li>
                        ))}
                      </ul>
                    </CardContent>
                 </Card>
              </div>
           </div>

        </div>
      </div>
    </section>
  );
}
