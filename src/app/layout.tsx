import type {Metadata} from 'next';
import { Geist } from 'next/font/google'; // Use Geist Sans
import './globals.css';
import { Toaster } from '@/components/ui/toaster'; // Import Toaster
// Removed AuthProvider import

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' }); // Initialize Geist Sans

export const metadata: Metadata = {
  title: 'Peptide Pal', // Update title
  description: 'Calculate your peptide dosages easily.', // Update description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} font-sans antialiased`}> {/* Apply Geist Sans font variable */}
        {/* Removed AuthProvider wrapper */}
        <div className="frame"> {/* Add black frame */}
          {children}
        </div>
        <Toaster /> {/* Add Toaster for notifications */}
      </body>
    </html>
  );
}
