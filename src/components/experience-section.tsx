import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award, Users, Star } from 'lucide-react'; // Relevant icons

// Data extracted from resume
const professionalExperience = [
  {
    title: "Summer Research Intern",
    company: "PGDAV College – University of Delhi",
    duration: "May 2024 – July 2024",
    description: [
      "Developed a CNN-based deep learning model for real vs. fake face distinction, achieving 83% accuracy.",
      "Integrated Multi-Criteria Decision-Making (MCDM) for enhanced decision precision."
    ]
  },
  {
    title: "Student Intern",
    company: "Kadacy",
    duration: "Jan 2023 – Feb 2023",
    description: [
      "Conducted simulations to guide robotic prototyping, improving efficiency by 15%."
    ]
  }
];

const education = [
  {
    institution: "Symbiosis Institute of Technology, Nagpur, India",
    degree: "B.Tech (Hons.) CSE Core Data Science",
    duration: "Expected 2026",
    details: "CGPA: 7.85/10.00"
  },
  {
    institution: "Kendriya Vidyalaya, Dahi Chowki, Unnao",
    degree: "SSC, PCM with Computer Science",
    duration: "2022",
    details: "Percentage: 87.44%"
  }
];

const certifications = [
  { name: "Fundamental of Deep Learning", issuer: "NVIDIA" },
  { name: "Fundamental of Accelerated Computing with Cuda C", issuer: "NVIDIA" },
  { name: "Cloud Data Engineer", issuer: "Google" },
  { name: "Accelerating CUDA C applications with Multiple GPUs", issuer: "NVIDIA" },
  { name: "SQL (Basic, Intermediate, Advance)", issuer: "HackerRank" },
  { name: "SDE Intern", issuer: "HackerRank" },
  { name: "Machine Learning Specialization", issuer: "Stanford University" },
];

const leadership = [
    { role: "Chair", organization: "Computer Society of India (CSI) Student Chapter", duration: "Dec 2024 - Present" },
    { role: "Organizer", organization: "SITNavate 24 Hours Hackathon", duration: "19, 20 Feb 2025" },
    { role: "Founder Vice Chair", organization: "Computer Society of India (CSI) Student Chapter", duration: "July 2024 - Nov 2024" },
    { role: "Core Member", organization: "IEEE Student Chapter", duration: "Dec 2023 - Jun 2024" },
];


export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">

          {/* Left Column: Experience & Education */}
          <div className="space-y-10">
            {/* Professional Experience */}
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary mb-6 flex items-center gap-2">
                <Briefcase className="w-7 h-7" /> Professional Experience
              </h2>
              <div className="space-y-6">
                {professionalExperience.map((exp, index) => (
                  <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">{exp.title}</CardTitle>
                      <CardDescription className="text-md text-muted-foreground">
                        {exp.company} | {exp.duration}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-foreground">
                        {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

             {/* Education */}
             <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary mb-6 flex items-center gap-2">
                <GraduationCap className="w-7 h-7" /> Education
              </h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">{edu.institution}</CardTitle>
                      <CardDescription className="text-md text-muted-foreground">
                        {edu.degree} | {edu.duration}
                      </CardDescription>
                    </CardHeader>
                    {edu.details && (
                        <CardContent>
                         <p className="text-sm text-foreground">{edu.details}</p>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary mb-6 flex items-center gap-2">
                  <Award className="w-7 h-7" /> Certifications
                </h2>
                 <Card className="shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                     <ul className="space-y-3">
                        {certifications.map((cert, index) => (
                           <li key={index} className="flex items-center gap-3 text-sm">
                             <Star className="w-4 h-4 text-accent flex-shrink-0" />
                             <div>
                                <span className="font-medium text-foreground">{cert.name}</span>
                                <span className="text-muted-foreground"> - {cert.issuer}</span>
                             </div>
                           </li>
                        ))}
                      </ul>
                    </CardContent>
                 </Card>
              </div>

              {/* Leadership Experience */}
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary mb-6 flex items-center gap-2">
                  <Users className="w-7 h-7" /> Leadership Experience
                </h2>
                 <Card className="shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                     <ul className="space-y-3">
                        {leadership.map((lead, index) => (
                           <li key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-sm">
                             <span className="font-medium text-foreground">{lead.role}, {lead.organization}</span>
                             <span className="text-muted-foreground text-xs sm:text-sm">{lead.duration}</span>
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
