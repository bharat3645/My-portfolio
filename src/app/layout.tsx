import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';

const inter = { // Updated font name
  variable: '--font-inter',
  subsets: ['latin'],
};

const mono = {
  variable: '--font-mono',
  subsets: ['latin'],
};

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
    <html lang="en">
      <body className={`${inter.variable} ${mono.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}


