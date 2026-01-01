import type { Metadata } from 'next';
import { ThemeProvider } from '@/presentation/providers/ThemeProvider';
import { Navigation } from '@/presentation/components/layout/Navigation';
import './globals.css';

export const metadata: Metadata = {
  title: 'Creative Developer Portfolio',
  description: 'I build fun, interactive things with code.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen">
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
