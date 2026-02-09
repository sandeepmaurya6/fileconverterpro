import './globals.css';
import { Providers } from './providers';
import { Inter } from 'next/font/google';
import { metadata } from './metadata';

const inter = Inter({ subsets: ['latin'] });

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'File Converter Pro',
              url: 'https://fileconverterpro.com',
              description: 'Free online file converter for images and videos',
              sameAs: ['https://twitter.com/fileconverterpro'],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'File Converter Pro',
              applicationCategory: 'Utility',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              featureList: [
                'Convert WebP to PNG',
                'Convert PNG to WebP',
                'Optimize PNG images',
                'Optimize JPEG images',
                'Convert MP4 to MP3',
                'Convert MOV to MP4',
                'Batch file conversion',
                'Privacy-focused processing',
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
