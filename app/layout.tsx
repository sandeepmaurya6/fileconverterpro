import './globals.css';
import { Providers } from './providers';
import { metadata } from './metadata';
import { StructuredData, websiteSchema } from '@/components/structured-data';
import { Toaster } from '@/components/ui/toaster';

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData data={websiteSchema} />
      </head>
      <body className="font-sans antialiased">
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}