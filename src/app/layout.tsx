import type {Metadata} from 'next';
import { Inter, Poppins } from 'next/font/google'; // Import Google Fonts
import { Toaster } from "@/components/ui/toaster"
import './globals.css';

// Configure fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Define CSS variable for Inter
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Load necessary weights
  variable: '--font-poppins', // Define CSS variable for Poppins
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
      <body className={`antialiased`}> {/* Removed font classes from body, applied via HTML */}
        {children}
        <Toaster />
      </body>
    </html>
  );
}
