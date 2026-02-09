import { Metadata } from 'next';

const title = 'Free Online File Converter - Convert Images & Videos Instantly';
const description = 'Convert images and videos online for free. Support WebP, PNG, JPEG, MP4, MOV. Batch convert up to 20 files. No signup required. 100% private and secure conversion in your browser.';

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
  'online file converter',
  'free image converter online',
  'free video converter online',
  'batch image converter',
  'image optimizer tool',
  'video optimizer tool'
];

export const metadata: Metadata = {
  title,
  description,
  keywords: keywords.join(', '),
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: '#ffffff',
  authors: [
    {
      name: 'File Converter Pro',
    }
  ],
  creator: 'File Converter Pro',
  publisher: 'File Converter Pro',
  openGraph: {
    title,
    description,
    type: 'website',
    siteName: 'File Converter Pro',
    locale: 'en_US',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@fileconverterpro',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};
