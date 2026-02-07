import { MetadataRoute } from 'next';
import { mockAirdrops } from '@/data/airdrops';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://airdrophub.xyz';
  
  // 静态页面
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/airdrops`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/submit`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ];
  
  // 空投详情页
  const airdropPages = mockAirdrops.map((airdrop) => ({
    url: `${baseUrl}/airdrop/${airdrop.slug}`,
    lastModified: new Date(airdrop.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));
  
  return [...staticPages, ...airdropPages];
}
