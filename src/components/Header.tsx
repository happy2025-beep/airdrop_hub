'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl">🪂</span>
          <span className="font-bold text-xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            AirdropHub
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/airdrops" className="text-gray-300 hover:text-white transition-colors">
            全部空投
          </Link>
          <Link href="/airdrops?status=active" className="text-gray-300 hover:text-white transition-colors">
            进行中
          </Link>
          <Link href="/airdrops?status=upcoming" className="text-gray-300 hover:text-white transition-colors">
            即将开始
          </Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <Link href="/submit">
            <Button variant="outline" className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10">
              📤 提交空投
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
