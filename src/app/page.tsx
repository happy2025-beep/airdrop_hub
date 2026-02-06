import Link from 'next/link';
import { SearchBar } from '@/components/SearchBar';
import { AirdropCard } from '@/components/AirdropCard';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  getFeaturedAirdrops, 
  getUpcomingDeadlines, 
  getLatestAirdrops 
} from '@/data/airdrops';

const categories = [
  { name: 'DeFi', icon: '💰', color: 'from-green-500 to-emerald-500' },
  { name: 'L2', icon: '⚡', color: 'from-blue-500 to-cyan-500' },
  { name: 'NFT', icon: '🎨', color: 'from-pink-500 to-rose-500' },
  { name: 'Gaming', icon: '🎮', color: 'from-purple-500 to-indigo-500' },
  { name: 'Infrastructure', icon: '🔧', color: 'from-orange-500 to-amber-500' },
  { name: 'Social', icon: '👥', color: 'from-cyan-500 to-teal-500' },
];

export default function HomePage() {
  const featured = getFeaturedAirdrops();
  const deadlines = getUpcomingDeadlines();
  const latest = getLatestAirdrops();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 py-20 relative">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30 text-sm px-4 py-1">
              🔥 已收录 50+ 优质空投项目
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                发现优质空投
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              聚合最新 DeFi、NFT、L2 空投信息，帮助你不错过任何机会。
              <br />
              免费、安全、高效。
            </p>
            
            <SearchBar />
            
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {categories.map((cat) => (
                <Link key={cat.name} href={`/airdrops?category=${cat.name}`}>
                  <Badge 
                    variant="outline" 
                    className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-800/50 transition-colors border-gray-700"
                  >
                    {cat.icon} {cat.name}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured & Deadlines */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                🔥 热门空投
              </h2>
              <Link href="/airdrops?featured=true">
                <Button variant="ghost" className="text-purple-400 hover:text-purple-300">
                  查看全部 →
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              {featured.slice(0, 3).map((airdrop) => (
                <AirdropCard key={airdrop.id} airdrop={airdrop} compact />
              ))}
            </div>
          </div>
          
          {/* Deadlines */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                ⏰ 即将截止
              </h2>
              <Link href="/airdrops?sort=deadline">
                <Button variant="ghost" className="text-purple-400 hover:text-purple-300">
                  查看全部 →
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              {deadlines.length > 0 ? (
                deadlines.map((airdrop) => (
                  <AirdropCard key={airdrop.id} airdrop={airdrop} compact />
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  暂无即将截止的空投
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Airdrops */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            📋 最新空投
          </h2>
          <Link href="/airdrops">
            <Button variant="ghost" className="text-purple-400 hover:text-purple-300">
              查看全部 →
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latest.slice(0, 6).map((airdrop) => (
            <AirdropCard key={airdrop.id} airdrop={airdrop} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">📊 按分类浏览</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link key={cat.name} href={`/airdrops?category=${cat.name}`}>
              <div className={`p-6 rounded-2xl bg-gradient-to-br ${cat.color} bg-opacity-10 border border-gray-800 hover:border-gray-600 transition-all cursor-pointer text-center group`}>
                <span className="text-4xl mb-3 block">{cat.icon}</span>
                <span className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                  {cat.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-3xl p-12 text-center border border-purple-500/20">
          <h2 className="text-3xl font-bold mb-4">发现了好空投？</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            帮助社区一起发现更多机会，提交你发现的空投项目
          </p>
          <Link href="/submit">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-500 text-lg px-8">
              📤 提交空投
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
