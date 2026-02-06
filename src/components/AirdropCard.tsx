'use client';

import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Airdrop } from '@/types/airdrop';

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

const difficultyColors = {
  easy: 'bg-emerald-500/20 text-emerald-400',
  medium: 'bg-orange-500/20 text-orange-400',
  hard: 'bg-red-500/20 text-red-400'
};

const difficultyLabels = {
  easy: '简单',
  medium: '中等',
  hard: '困难'
};

const chainColors: Record<string, string> = {
  ETH: 'bg-blue-500/20 text-blue-400',
  SOL: 'bg-purple-500/20 text-purple-400',
  ARB: 'bg-sky-500/20 text-sky-400',
  OP: 'bg-red-500/20 text-red-400',
  BASE: 'bg-blue-600/20 text-blue-300',
  ZK: 'bg-indigo-500/20 text-indigo-400',
  BNB: 'bg-yellow-500/20 text-yellow-400',
  MULTI: 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-purple-300'
};

interface AirdropCardProps {
  airdrop: Airdrop;
  compact?: boolean;
}

export function AirdropCard({ airdrop, compact = false }: AirdropCardProps) {
  const daysLeft = airdrop.deadline 
    ? Math.ceil((new Date(airdrop.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    : null;

  return (
    <Link href={`/airdrop/${airdrop.slug}`}>
      <Card className="group h-full bg-gray-900/50 border-gray-800 hover:border-purple-500/50 hover:bg-gray-900/80 transition-all duration-300 cursor-pointer">
        <CardHeader className="pb-3">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center text-2xl">
                {airdrop.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-bold text-lg text-white group-hover:text-purple-400 transition-colors flex items-center gap-2">
                  {airdrop.name}
                  {airdrop.verified && (
                    <span className="text-blue-400 text-sm">✓</span>
                  )}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="outline" className={chainColors[airdrop.chain] || 'bg-gray-500/20'}>
                    {airdrop.chain}
                  </Badge>
                  <Badge variant="outline" className="bg-gray-700/50 text-gray-300">
                    {airdrop.category}
                  </Badge>
                </div>
              </div>
            </div>
            <Badge className={statusColors[airdrop.status]}>
              {statusLabels[airdrop.status]}
            </Badge>
          </div>
        </CardHeader>
        
        {!compact && (
          <CardContent className="pb-3">
            <p className="text-gray-400 text-sm line-clamp-2">
              {airdrop.description}
            </p>
          </CardContent>
        )}
        
        <CardFooter className="pt-0 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-green-400 font-semibold text-sm">
              💰 {airdrop.estimatedValue}
            </span>
            <Badge variant="outline" className={difficultyColors[airdrop.difficulty]}>
              {difficultyLabels[airdrop.difficulty]}
            </Badge>
          </div>
          {daysLeft !== null && daysLeft > 0 && airdrop.status === 'active' && (
            <span className="text-orange-400 text-xs">
              ⏰ {daysLeft}天后截止
            </span>
          )}
        </CardFooter>
      </Card>
    </Link>
  );
}
