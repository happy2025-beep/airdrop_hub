'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/airdrops?search=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <Input
          type="text"
          placeholder="搜索空投项目... (如: LayerZero, zkSync)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full h-14 pl-6 pr-14 text-lg bg-gray-900/80 border-gray-700 focus:border-purple-500 rounded-2xl text-white placeholder:text-gray-500"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-purple-600 hover:bg-purple-500 rounded-xl flex items-center justify-center transition-colors"
        >
          🔍
        </button>
      </div>
    </form>
  );
}
