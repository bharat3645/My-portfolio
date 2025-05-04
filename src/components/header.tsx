'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Brush } from 'lucide-react'; // Use Brush icon, more relevant to UI design

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center"> {/* Increased height slightly */}
        <Link href="/" className="mr-6 flex items-center space-x-2 group">
          <Brush className="h-6 w-6 text-primary transition-transform duration-300 ease-in-out group-hover:rotate-[-15deg]" />
          <span className="font-poppins font-semibold text-lg hidden sm:inline-block tracking-tight text-foreground group-hover:text-primary transition-colors">
            Bharat S. Parihar
          </span>
          {/* Mobile initials */}
          <span className="font-poppins font-semibold text-lg inline-block sm:hidden tracking-tight text-foreground group-hover:text-primary transition-colors">
            BSP
          </span>
        </Link>
        <nav className="flex flex-1 items-center space-x-2 sm:space-x-4 justify-end">
          {/* Use text-muted-foreground for subtle look, primary on hover */}
          <Link href="#projects" passHref>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-accent/10">Projects</Button>
          </Link>
          <Link href="#about" passHref>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-accent/10">About</Button>
          </Link>
          <Link href="#experience" passHref>
             <Button variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-accent/10">Experience</Button>
          </Link>
          <Link href="#tailor" passHref>
             <Button variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-accent/10">AI Tailor</Button>
          </Link>
          <Link href="#contact" passHref>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary hover:bg-accent/10">Contact</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
