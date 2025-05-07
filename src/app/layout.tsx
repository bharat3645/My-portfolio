import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google'; // Import Google Fonts
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import RouteTransition from '@/components/transition'; // Renamed to 'transition' instead of 'RouteTransition'
import TechBackgroundWrapper from '@/components/TechBackgroundWrapper';

// Configure fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Bharat | Full-Stack Developer & AI Enthusiast',
    template: '%s | Bharat',
  },
  description: 'Portfolio of Bharat - Full-stack developer and AI enthusiast',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        {/* Temporarily disabled to isolate error */}
        {/* <TechBackgroundWrapper /> */}
        <RouteTransition>
          {children}
        </RouteTransition>
        <Toaster />
      </body>
    </html>
  );
}
