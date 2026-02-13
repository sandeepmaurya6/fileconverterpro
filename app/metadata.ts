import { Metadata } from 'next';

const title = 'Free File Converter - PNG to WebP, Image & Video Conversion Online';
const description = 'Convert PNG to WebP, JPEG, and more with our free online file converter. Batch convert up to 20 files instantly. No registration required, 100% secure client-side processing. Convert images and videos directly in your browser.';

const keywords = [
  'file converter',
  'image converter',
  'PNG to WebP converter',
  'WebP to PNG',
  'JPEG converter',
  'video converter',
  'MP4 converter',
  'free file converter',
  'online converter',
  'image compression',
  'video compression',
  'batch converter',
  'bulk conversion',
  'format converter',
  'image optimization',
  'file compression',
  'convert images online',
  'convert videos online',
  'free online converter',
  'webp compression',
];

export const metadata: Metadata = {
  title,
  description,
  keywords: keywords.join(', '),
  openGraph: {
    title,
    description,
    type: 'website',
    siteName: 'File Converter Pro',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'File Converter Pro - Convert files online for free',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};
