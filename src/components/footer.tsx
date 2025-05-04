import { Github } from "lucide-react"; // Import Github icon

export function Footer() {
  const currentYear = new Date().getFullYear(); // Get current year dynamically

  return (
    <footer className="py-6 md:px-8 md:py-0 bg-secondary text-secondary-foreground">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row md:justify-between">
        <p className="text-center text-sm leading-loose md:text-left">
          &copy; {currentYear} Bharat Singh Parihar. All rights reserved.
        </p>
        <a
          href="https://github.com/bharat516"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="w-4 h-4" />
          View Source on GitHub
        </a>
      </div>
    </footer>
  );
}
