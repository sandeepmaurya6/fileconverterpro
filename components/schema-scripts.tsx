'use client';

export function SchemaScripts() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'File Converter Pro',
    url: 'https://fileconverterpro.com',
    description: 'Free online file converter for images and videos',
    sameAs: ['https://twitter.com/fileconverterpro'],
  };

  const softwareAppSchema = {
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
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
    </>
  );
}
