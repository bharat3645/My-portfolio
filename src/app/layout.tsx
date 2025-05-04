import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google'; // Import Google Fonts
import { Toaster } from "@/components/ui/toaster";
import './globals.css';
import RouteTransition from '@/components/transition'; // Renamed to 'transition' instead of 'RouteTransition'

// Configure fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bharat Singh Parihar - Portfolio',
  description: 'Portfolio of Bharat Singh Parihar, a Computer Science student specializing in Data Science and AI.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased">
        <RouteTransition>
          {children}
        </RouteTransition>
        <Toaster />
      </body>
    </html>
  );
}
