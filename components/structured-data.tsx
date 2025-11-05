export function StructuredData({ data }: { data: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'FileConverterPro',
  description: 'Free online file converter and optimizer. Convert images and videos directly in your browser.',
  url: 'https://fileconverterpro.com',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Any',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList: [
    'Image conversion (WebP, PNG, JPEG)',
    'Video conversion (MP4, MOV)',
    'Image optimization',
    'Batch processing',
    'No file upload required',
    'Privacy-first approach'
  ],
  browserRequirements: 'Requires JavaScript. Requires HTML5.',
};

export function generateToolSchema(tool: {
  title: string;
  description: string;
  slug: string;
  category: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.title,
    description: tool.description,
    url: `https://fileconverterpro.com/tools/${tool.slug}`,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
      bestRating: '5',
      worstRating: '1'
    }
  };
}
