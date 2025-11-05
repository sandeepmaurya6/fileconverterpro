import { Metadata } from 'next';

const title = 'FileConverterPro - Free Online File Converter & Optimizer | No Upload Required';
const description = 'Convert and optimize images & videos instantly in your browser. WebP, PNG, JPEG, MP4, MOV support. No file upload, 100% privacy, batch processing up to 20 files. Completely free forever.';

const keywords = [
  'file converter',
  'image converter',
  'video converter',
  'webp to png',
  'png to webp',
  'png optimizer',
  'jpeg optimizer',
  'mp4 to mp3',
  'mov to mp4',
  'online converter',
  'free converter',
  'image compression',
  'video compression',
  'bulk conversion',
  'batch processing',
  'browser-based converter',
  'no upload converter',
  'privacy-first converter',
  'offline file converter',
  'client-side converter'
];

export const metadata: Metadata = {
  title,
  description,
  keywords: keywords.join(', '),
  openGraph: {
    title,
    description,
    type: 'website',
    siteName: 'FileConverterPro',
    locale: 'en_US',
    url: 'https://fileconverterpro.com',
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
    },
  },
  other: {
    'google-site-verification': 'your-verification-code',
  },
};