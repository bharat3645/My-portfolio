'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CodeXml } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <CodeXml className="h-6 w-6 text-primary" />
          <span className="font-bold hidden sm:inline-block">Portfolio Pro 3D</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-4 justify-end">
          <Link href="#projects" passHref>
            <Button variant="ghost">Projects</Button>
          </Link>
          <Link href="#about" passHref>
            <Button variant="ghost">About</Button>
          </Link>
          <Link href="#tailor" passHref>
             <Button variant="ghost">AI Tailor</Button>
          </Link>
          <Link href="#contact" passHref>
            <Button variant="ghost">Contact</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
