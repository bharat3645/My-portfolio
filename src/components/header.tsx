'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Brush } from 'lucide-react';
import { motion } from 'framer-motion'; // 🔥 Animation import

export function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-20 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2 group">
          <Brush className="h-8 w-8 text-primary transition-transform duration-300 ease-in-out group-hover:rotate-[-15deg]" />
          <span className="font-poppins font-semibold text-2xl hidden sm:inline-block tracking-tight text-foreground group-hover:text-primary transition-colors">
            Bharat S. Parihar
          </span>
          <span className="font-poppins font-semibold text-2xl inline-block sm:hidden tracking-tight text-foreground group-hover:text-primary transition-colors">
            BSP
          </span>
        </Link>
        <nav className="flex flex-1 items-center space-x-2 sm:space-x-4 justify-end">
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
    </motion.header>
  );
}
