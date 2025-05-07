import { Github, Linkedin, Mail } from "lucide-react"; // Added Linkedin and Mail

export function Footer() {
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <footer className="relative z-[9999] px-8 md:px-12 py-8 md:py-10 bg-secondary/50 border-t border-border/40 text-secondary-foreground">
      <div className="container flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between">
        <p className="text-center text-xs md:text-sm leading-loose text-muted-foreground">
          &copy; {currentYear} Bharat Singh Parihar. Designed & Built with Passion.
        </p>
        {/* Social Links */}
        <div className="flex items-center gap-4">
            <a
             href="mailto:bharat3645@gmail.com"
             aria-label="Email Bharat"
             target="_blank"
             rel="noopener noreferrer"
             className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
                <Mail className="w-5 h-5"/>
                <span className="sr-only">Email</span>
            </a>
             <a
             href="https://github.com/bharat3645"
             aria-label="Bharat's GitHub Profile"
             target="_blank"
             rel="noopener noreferrer"
             className="text-muted-foreground hover:text-primary transition-colors duration-200"
             >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
             </a>
             <a
             href="https://www.linkedin.com/in/bharat-singh-parihar/"
             aria-label="Bharat's LinkedIn Profile"
             target="_blank"
             rel="noopener noreferrer"
             className="text-muted-foreground hover:text-primary transition-colors duration-200"
             >
                <Linkedin className="w-5 h-5" />
                 <span className="sr-only">LinkedIn</span>
             </a>
        </div>
      </div>
    </footer>
  );
}
