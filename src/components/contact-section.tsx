import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Linkedin, Github, Phone, Send } from 'lucide-react'; // Added Send icon

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
    // TODO: Add success/error message feedback here using useToast
    // Example:
    // toast({ title: "Message Sent!", description: "Thanks for reaching out." });
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-start"> {/* Use items-start */}
           <div className="space-y-6">
             <h2 className="font-poppins text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">Let's Connect</h2>
             <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Have a project idea, a question, or just want to chat about design and data? Drop me a line or connect online!
             </p>
              {/* Contact Links */}
              <div className="space-y-5 pt-4">
                 <a href="mailto:bharat5160@gmail.com" className="flex items-center space-x-3 group text-muted-foreground hover:text-primary transition-colors">
                     <Mail className="w-5 h-5 text-accent transition-transform group-hover:scale-110" />
                     <span>bharat5160@gmail.com</span>
                 </a>
                  <div className="flex items-center space-x-3 group text-muted-foreground">
                     <Phone className="w-5 h-5 text-accent" />
                     <span>+91 9413770981</span>
                 </div>
                 <a href="https://www.linkedin.com/in/bharat-singh-parihar/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5 text-accent transition-transform group-hover:scale-110" />
                     <span>linkedin.com/in/bharat-singh-parihar</span>
                 </a>
                  <a href="https://github.com/bharat516" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group text-muted-foreground hover:text-primary transition-colors">
                      <Github className="w-5 h-5 text-accent transition-transform group-hover:scale-110" />
                     <span>github.com/bharat516</span>
                 </a>
             </div>
           </div>
           {/* Contact Form */}
           <div>
             <Card className="shadow-lg border-border/50 rounded-lg">
              <CardHeader className="p-6">
                 <CardTitle className="font-poppins text-2xl font-semibold">Send a Message</CardTitle>
                 <CardDescription>I'll get back to you as soon as I can.</CardDescription>
               </CardHeader>
               <CardContent className="p-6 pt-0">
                 <form action={handleSubmit} className="space-y-5">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</Label>
                      <Input id="name" name="name" placeholder="Your Name" required className="bg-secondary/50 border-border/60 focus:border-primary focus:bg-background"/>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="your.email@example.com" required className="bg-secondary/50 border-border/60 focus:border-primary focus:bg-background"/>
                    </div>
                    </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</Label>
                    <Textarea id="message" name="message" placeholder="Tell me about your project or query..." required rows={5} className="bg-secondary/50 border-border/60 focus:border-primary focus:bg-background"/>
                  </div>
                  <Button type="submit" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2 shadow-sm hover:shadow-md">
                      <Send className="w-4 h-4" />
                      Send Message
                  </Button>
                 </form>
               </CardContent>
              </Card>
           </div>
        </div>
      </div>
    </section>
  );
}
