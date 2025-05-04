import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Linkedin, Github } from 'lucide-react'; // Example icons

export function ContactSection() {
  // In a real app, you'd handle form submission here (e.g., using Server Actions or an API route)
  const handleSubmit = async (formData: FormData) => {
    'use server';
    // Process form data here
    console.log("Form submitted!");
    console.log("Name:", formData.get('name'));
    console.log("Email:", formData.get('email'));
    console.log("Message:", formData.get('message'));
    // Add logic to send email or save to database
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
           <div className="space-y-4">
             <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Get In Touch</h2>
             <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Have a project in mind, want to collaborate, or just say hi? Feel free to reach out!
             </p>
              <div className="space-y-4 pt-4">
                 <a href="mailto:your.email@example.com" className="flex items-center space-x-3 group">
                     <Mail className="w-6 h-6 text-accent transition-transform group-hover:scale-110" />
                     <span className="text-muted-foreground group-hover:text-foreground">your.email@example.com</span>
                 </a>
                 <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                      <Linkedin className="w-6 h-6 text-accent transition-transform group-hover:scale-110" />
                     <span className="text-muted-foreground group-hover:text-foreground">LinkedIn Profile</span>
                 </a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group">
                      <Github className="w-6 h-6 text-accent transition-transform group-hover:scale-110" />
                     <span className="text-muted-foreground group-hover:text-foreground">GitHub Profile</span>
                 </a>
             </div>
           </div>
           <div>
             <Card className="shadow-lg">
              <CardHeader>
                 <CardTitle>Send me a message</CardTitle>
                 <CardDescription>I'll get back to you as soon as possible.</CardDescription>
               </CardHeader>
               <CardContent>
                 <form action={handleSubmit} className="space-y-4">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="Your Email" required />
                    </div>
                    </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Your message here..." required rows={5} />
                  </div>
                  <Button type="submit" className="w-full sm:w-auto">Send Message</Button>
                 </form>
               </CardContent>
              </Card>
           </div>
        </div>
      </div>
    </section>
  );
}
