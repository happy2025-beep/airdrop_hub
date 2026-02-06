'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { AirdropCard } from '@/components/AirdropCard';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { filterAirdrops, mockAirdrops } from '@/data/airdrops';

const categories = ['全部', 'DeFi', 'NFT', 'L2', 'Gaming', 'Infrastructure', 'Social'];
const chains = ['全部', 'ETH', 'SOL', 'ARB', 'OP', 'BASE', 'ZK', 'BNB', 'MULTI'];
const statuses = [
  { value: '全部', label: '全部' },
  { value: 'active', label: '进行中' },
  { value: 'upcoming', label: '即将开始' },
  { value: 'ended', label: '已结束' }
];
const difficulties = [
  { value: '全部', label: '全部难度' },
  { value: 'easy', label: '简单' },
  { value: 'medium', label: '中等' },
  { value: 'hard', label: '困难' }
];

function AirdropsContent() {
  const searchParams = useSearchParams();
  
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [category, setCategory] = useState(searchParams.get('category') || '全部');
  const [chain, setChain] = useState(searchParams.get('chain') || '全部');
  const [status, setStatus] = useState(searchParams.get('status') || '全部');
  const [difficulty, setDifficulty] = useState(searchParams.get('difficulty') || '全部');

  const filteredAirdrops = useMemo(() => {
    return filterAirdrops({
      category: category === '全部' ? undefined : category,
      chain: chain === '全部' ? undefined : chain,
      status: status === '全部' ? undefined : status,
      difficulty: difficulty === '全部' ? undefined : difficulty,
      search: search || undefined
    });
  }, [category, chain, status, difficulty, search]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">全部空投</h1>
        <p className="text-gray-400">共 {mockAirdrops.length} 个空投项目</p>
      </div>

      {/* Filters */}
      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Search */}
          <div className="lg:col-span-2">
            <Input
              placeholder="搜索空投..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-gray-800/50 border-gray-700"
            />
          </div>
          
          {/* Status */}
          <div className="flex flex-wrap gap-2">
            {statuses.map((s) => (
              <Badge
                key={s.value}
                variant={status === s.value ? 'default' : 'outline'}
                className={`cursor-pointer ${status === s.value ? 'bg-purple-600' : 'hover:bg-gray-800'}`}
                onClick={() => setStatus(s.value)}
              >
                {s.label}
              </Badge>
            ))}
          </div>
          
          {/* Difficulty */}
          <div className="flex flex-wrap gap-2">
            {difficulties.map((d) => (
              <Badge
                key={d.value}
                variant={difficulty === d.value ? 'default' : 'outline'}
                className={`cursor-pointer ${difficulty === d.value ? 'bg-purple-600' : 'hover:bg-gray-800'}`}
                onClick={() => setDifficulty(d.value)}
              >
                {d.label}
              </Badge>
            ))}
          </div>
        </div>

        {/* Category & Chain */}
        <div className="mt-4 pt-4 border-t border-gray-800">
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="text-gray-400 text-sm mr-2">分类:</span>
            {categories.map((c) => (
              <Badge
                key={c}
                variant={category === c ? 'default' : 'outline'}
                className={`cursor-pointer ${category === c ? 'bg-purple-600' : 'hover:bg-gray-800'}`}
                onClick={() => setCategory(c)}
              >
                {c}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="text-gray-400 text-sm mr-2">链:</span>
            {chains.map((c) => (
              <Badge
                key={c}
                variant={chain === c ? 'default' : 'outline'}
                className={`cursor-pointer ${chain === c ? 'bg-blue-600' : 'hover:bg-gray-800'}`}
                onClick={() => setChain(c)}
              >
                {c}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      {filteredAirdrops.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAirdrops.map((airdrop) => (
            <AirdropCard key={airdrop.id} airdrop={airdrop} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <span className="text-6xl mb-4 block">🔍</span>
          <h3 className="text-xl font-semibold mb-2">没有找到空投</h3>
          <p className="text-gray-400">尝试调整筛选条件</p>
        </div>
      )}
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <div className="h-9 w-40 bg-gray-800 rounded animate-pulse mb-2" />
        <div className="h-5 w-32 bg-gray-800 rounded animate-pulse" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="h-48 bg-gray-900 rounded-xl animate-pulse" />
        ))}
      </div>
    </div>
  );
}

export default function AirdropsPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <AirdropsContent />
    </Suspense>
  );
}
