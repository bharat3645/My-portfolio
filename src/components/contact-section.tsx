'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Linkedin, Github, Phone, Send } from 'lucide-react';

export function ContactSection() {
  const handleSubmit = async (formData: FormData) => {
    console.log("Form submitted!");
    console.log("Name:", formData.get('name'));
    console.log("Email:", formData.get('email'));
    console.log("Message:", formData.get('message'));
  };

  return (
    <motion.section
      id="contact"
      className="w-full py-16 md:py-24 lg:py-32 bg-background"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container px-4 md:px-6">
        <motion.div
          className="grid gap-10 lg:grid-cols-2 items-start"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          {/* Left Side */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {/* Title and Text */}
            <h2 className="font-poppins text-3xl font-bold tracking-tighter sm:text-5xl text-foreground">Let's Connect</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Have a project idea, a question, or just want to chat about design and data? Drop me a line or connect online!
            </p>

            {/* Contact Links */}
            <div className="space-y-5 pt-4">
              <a href="mailto:bharat3645@gmail.com" className="flex items-center space-x-3 group text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                <span>bharat3645@gmail.com</span>
              </a>
              <div className="flex items-center space-x-3 group text-muted-foreground">
                <Phone className="w-5 h-5 text-accent" />
                <span>+91 9451747691</span>
              </div>
              <a href="https://www.linkedin.com/in/bharat-singh-parihar/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                <span>linkedin.com/in/bharat-singh-parihar</span>
              </a>
              <a href="https://github.com/bharat3645" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 group text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                <span>github.com/bharat3645</span>
              </a>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Card className="shadow-lg border-border/50 rounded-lg">
              <CardHeader className="p-6">
                <CardTitle className="font-poppins text-2xl font-semibold">Send a Message</CardTitle>
                <CardDescription>I&apos;ll get back to you as soon as I can.</CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <form action={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" placeholder="Your Name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Tell me about your project or query..." required rows={5} />
                  </div>
                  <Button type="submit" className="w-full sm:w-auto flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
