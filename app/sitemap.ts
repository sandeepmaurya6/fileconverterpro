import { MetadataRoute } from 'next';
import { getAllTools } from '@/lib/tools-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fileconverterpro.com';
  const tools = getAllTools();

  const toolPages = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...toolPages,
  ];
}
