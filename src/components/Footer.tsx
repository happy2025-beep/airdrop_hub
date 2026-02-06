import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🪂</span>
              <span className="font-bold text-xl text-white">AirdropHub</span>
            </div>
            <p className="text-gray-400 max-w-md">
              发现优质加密空投，不错过任何机会。我们聚合最新的空投信息，帮助你安全、高效地参与。
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/airdrops" className="text-gray-400 hover:text-purple-400 transition-colors">
                  全部空投
                </Link>
              </li>
              <li>
                <Link href="/airdrops?category=DeFi" className="text-gray-400 hover:text-purple-400 transition-colors">
                  DeFi 空投
                </Link>
              </li>
              <li>
                <Link href="/airdrops?category=L2" className="text-gray-400 hover:text-purple-400 transition-colors">
                  L2 空投
                </Link>
              </li>
              <li>
                <Link href="/submit" className="text-gray-400 hover:text-purple-400 transition-colors">
                  提交空投
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">关注我们</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://t.me/airdrophub" target="_blank" rel="noopener" className="text-gray-400 hover:text-purple-400 transition-colors">
                  📱 Telegram
                </a>
              </li>
              <li>
                <a href="https://twitter.com/airdrophub" target="_blank" rel="noopener" className="text-gray-400 hover:text-purple-400 transition-colors">
                  🐦 Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© 2026 AirdropHub. 仅供参考，不构成投资建议。DYOR!</p>
        </div>
      </div>
    </footer>
  );
}
