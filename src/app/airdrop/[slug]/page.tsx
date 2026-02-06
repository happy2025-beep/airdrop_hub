import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAirdropBySlug, mockAirdrops } from '@/data/airdrops';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const airdrop = getAirdropBySlug(slug);
  
  if (!airdrop) {
    return { title: '空投未找到 - AirdropHub' };
  }
  
  return {
    title: `${airdrop.name} 空投教程 - AirdropHub`,
    description: airdrop.description,
    openGraph: {
      title: `${airdrop.name} 空投 - 预估价值 ${airdrop.estimatedValue}`,
      description: airdrop.description,
    },
  };
}

export async function generateStaticParams() {
  return mockAirdrops.map((airdrop) => ({
    slug: airdrop.slug,
  }));
}

const statusColors = {
  upcoming: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  active: 'bg-green-500/20 text-green-400 border-green-500/30',
  ended: 'bg-gray-500/20 text-gray-400 border-gray-500/30'
};

const statusLabels = {
  upcoming: '即将开始',
  active: '进行中',
  ended: '已结束'
};

const difficultyLabels = {
  easy: '🟢 简单',
  medium: '🟡 中等',
  hard: '🔴 困难'
};

export default async function AirdropDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const airdrop = getAirdropBySlug(slug);
  
  if (!airdrop) {
    notFound();
  }

  const daysLeft = airdrop.deadline 
    ? Math.ceil((new Date(airdrop.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    : null;

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-gray-400 hover:text-white">首页</Link>
        <span className="text-gray-600 mx-2">/</span>
        <Link href="/airdrops" className="text-gray-400 hover:text-white">空投列表</Link>
        <span className="text-gray-600 mx-2">/</span>
        <span className="text-purple-400">{airdrop.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Header */}
          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-4xl shrink-0">
              {airdrop.name.charAt(0)}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">{airdrop.name}</h1>
                {airdrop.verified && (
                  <Badge className="bg-blue-500/20 text-blue-400">✓ 已验证</Badge>
                )}
                <Badge className={statusColors[airdrop.status]}>
                  {statusLabels[airdrop.status]}
                </Badge>
              </div>
              <p className="text-gray-400 text-lg">{airdrop.description}</p>
              <div className="flex items-center gap-3 mt-4">
                <Badge variant="outline">{airdrop.chain}</Badge>
                <Badge variant="outline">{airdrop.category}</Badge>
                <span className="text-gray-500">|</span>
                <span className="text-gray-400">{difficultyLabels[airdrop.difficulty]}</span>
              </div>
            </div>
          </div>

          {/* Requirements */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📋 参与要求
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {airdrop.requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">•</span>
                    <span className="text-gray-300">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Steps */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🚀 参与步骤
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4">
                {airdrop.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 font-bold">
                      {i + 1}
                    </span>
                    <span className="text-gray-300 pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Value Card */}
          <Card className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-green-800/50">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-gray-400 mb-2">预估价值</p>
                <p className="text-3xl font-bold text-green-400">{airdrop.estimatedValue}</p>
              </div>
            </CardContent>
          </Card>

          {/* Deadline */}
          {airdrop.deadline && daysLeft !== null && daysLeft > 0 && (
            <Card className="bg-orange-900/20 border-orange-800/50">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-gray-400 mb-2">⏰ 截止时间</p>
                  <p className="text-2xl font-bold text-orange-400">{daysLeft} 天</p>
                  <p className="text-gray-500 text-sm mt-1">{airdrop.deadline}</p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* CTA */}
          <a href={airdrop.projectUrl} target="_blank" rel="noopener noreferrer">
            <Button className="w-full bg-purple-600 hover:bg-purple-500 h-14 text-lg">
              🔗 前往官网
            </Button>
          </a>

          {/* Info */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="pt-6 space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-400">难度</span>
                <span>{difficultyLabels[airdrop.difficulty]}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">链</span>
                <Badge variant="outline">{airdrop.chain}</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">分类</span>
                <Badge variant="outline">{airdrop.category}</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">更新时间</span>
                <span className="text-gray-300 text-sm">{airdrop.updatedAt}</span>
              </div>
            </CardContent>
          </Card>

          {/* Warning */}
          <div className="p-4 bg-yellow-900/20 border border-yellow-800/50 rounded-xl">
            <p className="text-yellow-400 text-sm">
              ⚠️ 风险提示：参与空投有风险，请自行研究 (DYOR)，不要分享私钥，谨防钓鱼网站。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
