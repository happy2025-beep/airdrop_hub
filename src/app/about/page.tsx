import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '关于我们 - AirdropHub',
  description: 'AirdropHub 是一个专注于加密空投信息聚合的平台，帮助用户发现和参与优质空投项目。',
};

const stats = [
  { label: '收录空投', value: '50+', icon: '🪂' },
  { label: '覆盖链', value: '10+', icon: '⛓️' },
  { label: '社区用户', value: '1000+', icon: '👥' },
  { label: '每日更新', value: '24h', icon: '🔄' },
];

const features = [
  {
    icon: '🔍',
    title: '精选空投',
    description: '我们只收录经过验证的优质空投项目，过滤掉诈骗和低质量项目。'
  },
  {
    icon: '📊',
    title: '详细教程',
    description: '每个空投都配有详细的参与步骤和要求，让你轻松上手。'
  },
  {
    icon: '⏰',
    title: '及时更新',
    description: '我们持续追踪空投动态，第一时间更新截止日期和新项目。'
  },
  {
    icon: '🛡️',
    title: '安全第一',
    description: '我们只推荐官方链接，提醒用户注意安全，保护资产安全。'
  },
  {
    icon: '🆓',
    title: '完全免费',
    description: 'AirdropHub 完全免费使用，我们不收取任何费用。'
  },
  {
    icon: '🌐',
    title: '多链覆盖',
    description: '覆盖 ETH、Solana、Arbitrum、Base 等主流公链和 L2。'
  },
];

const team = [
  {
    role: '创始人',
    description: '加密行业老兵，专注空投研究多年'
  },
  {
    role: '内容团队',
    description: '负责空投项目的调研和验证'
  },
  {
    role: '技术团队',
    description: '保障平台稳定运行和用户体验'
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
          关于 AirdropHub
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            让每个人都能获得空投机会
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          AirdropHub 致力于聚合和整理最新的加密空投信息，
          帮助用户免费、安全、高效地参与优质空投项目。
        </p>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.label} className="bg-gray-900/50 border-gray-800">
              <CardContent className="pt-6 text-center">
                <span className="text-4xl mb-3 block">{stat.icon}</span>
                <p className="text-3xl font-bold text-purple-400 mb-1">{stat.value}</p>
                <p className="text-gray-400">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">我们的优势</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-gray-900/50 border-gray-800 hover:border-purple-500/50 transition-colors">
              <CardContent className="pt-6">
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-3xl p-12 border border-purple-500/20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">🎯 我们的使命</h2>
            <p className="text-lg text-gray-300 mb-6">
              在加密世界中，空投是项目回馈早期用户的重要方式。然而，信息分散、真假难辨、
              时间紧迫等问题让很多人错过了机会。
            </p>
            <p className="text-lg text-gray-300">
              AirdropHub 的使命就是解决这些问题——我们汇集、验证、整理空投信息，
              让每个人都能便捷地获取和参与优质空投，把握加密世界的每一次机会。
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">如何使用</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center text-2xl font-bold text-purple-400 mx-auto mb-4">
              1
            </div>
            <h3 className="font-semibold mb-2">浏览空投</h3>
            <p className="text-gray-400">在首页或空投列表页发现感兴趣的项目</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center text-2xl font-bold text-purple-400 mx-auto mb-4">
              2
            </div>
            <h3 className="font-semibold mb-2">查看教程</h3>
            <p className="text-gray-400">阅读详细的参与步骤和要求说明</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center text-2xl font-bold text-purple-400 mx-auto mb-4">
              3
            </div>
            <h3 className="font-semibold mb-2">开始参与</h3>
            <p className="text-gray-400">按照教程前往官网参与空投</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">团队介绍</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {team.map((member, i) => (
            <Card key={i} className="bg-gray-900/50 border-gray-800">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{member.role}</h3>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Safety Tips */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-yellow-900/20 border-yellow-800/50">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              ⚠️ 安全提示
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-yellow-400 mb-2">请务必注意：</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• 永远不要分享你的私钥或助记词</li>
                  <li>• 仔细核对官方网站地址</li>
                  <li>• 警惕任何要求转账的空投</li>
                  <li>• 使用小号钱包参与高风险空投</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-yellow-400 mb-2">DYOR (自行研究)：</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• 我们提供的信息仅供参考</li>
                  <li>• 参与前请自行研究项目</li>
                  <li>• 空投价值为预估，不保证实现</li>
                  <li>• 投资有风险，请谨慎决策</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">准备好开始了吗？</h2>
          <p className="text-gray-400 mb-8">探索最新空投，抓住每一个机会</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/airdrops">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-500">
                🔍 浏览空投
              </Button>
            </Link>
            <Link href="/submit">
              <Button size="lg" variant="outline" className="border-purple-500/50 text-purple-400">
                📤 提交空投
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
