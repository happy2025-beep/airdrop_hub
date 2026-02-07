import { Airdrop } from '@/types/airdrop';

// 示例数据，之后会从数据库或API获取
export const mockAirdrops: Airdrop[] = [
  {
    id: '1',
    slug: 'layerzero',
    name: 'LayerZero',
    description: '跨链互操作协议，连接多个区块链网络。通过跨链桥接和消息传递获得积分。',
    projectUrl: 'https://layerzero.network',
    logoUrl: '/logos/layerzero.png',
    category: 'Infrastructure',
    chain: 'MULTI',
    status: 'active',
    estimatedValue: '$500-$5000',
    difficulty: 'medium',
    requirements: [
      '跨链桥接资产',
      '使用支持的 DApp',
      '持有一定时间'
    ],
    steps: [
      '连接钱包到 Stargate Finance',
      '进行跨链桥接（至少5次不同链）',
      '使用其他 LayerZero 生态 DApp',
      '保持活跃度'
    ],
    deadline: '2026-06-01',
    verified: true,
    featured: true,
    createdAt: '2026-01-15',
    updatedAt: '2026-02-01'
  },
  {
    id: '2',
    slug: 'zksync-era',
    name: 'zkSync Era',
    description: 'Matter Labs 开发的 zkRollup L2 扩容方案，已确认会发币。',
    projectUrl: 'https://zksync.io',
    logoUrl: '/logos/zksync.png',
    category: 'L2',
    chain: 'ZK',
    status: 'active',
    estimatedValue: '$1000-$10000',
    difficulty: 'easy',
    requirements: [
      '在 zkSync Era 上交互',
      '使用主流 DeFi 协议',
      '保持月活'
    ],
    steps: [
      '通过官方桥转入 ETH',
      '在 SyncSwap/Mute 进行交易',
      '提供流动性',
      '铸造 NFT',
      '每月保持活跃'
    ],
    verified: true,
    featured: true,
    createdAt: '2026-01-10',
    updatedAt: '2026-02-05'
  },
  {
    id: '3',
    slug: 'scroll',
    name: 'Scroll',
    description: 'zkEVM L2 扩容方案，与以太坊完全兼容。',
    projectUrl: 'https://scroll.io',
    logoUrl: '/logos/scroll.png',
    category: 'L2',
    chain: 'ETH',
    status: 'active',
    estimatedValue: '$500-$3000',
    difficulty: 'easy',
    requirements: [
      '桥接资产到 Scroll',
      '使用生态 DApp'
    ],
    steps: [
      '使用官方桥转入资产',
      '在 Ambient/Zebra 交易',
      '参与 Scroll Origins NFT'
    ],
    verified: true,
    featured: false,
    createdAt: '2026-01-20',
    updatedAt: '2026-02-03'
  },
  {
    id: '4',
    slug: 'eigenlayer',
    name: 'EigenLayer',
    description: '再质押协议，允许ETH质押者获得额外收益。',
    projectUrl: 'https://eigenlayer.xyz',
    logoUrl: '/logos/eigenlayer.png',
    category: 'DeFi',
    chain: 'ETH',
    status: 'active',
    estimatedValue: '$2000-$20000',
    difficulty: 'medium',
    requirements: [
      '质押 ETH 或 LST',
      '委托给运营商'
    ],
    steps: [
      '准备 stETH/rETH 等 LST',
      '在 EigenLayer 存入',
      '委托给运营商',
      '等待积分积累'
    ],
    verified: true,
    featured: true,
    createdAt: '2026-01-05',
    updatedAt: '2026-02-06'
  },
  {
    id: '5',
    slug: 'berachain',
    name: 'Berachain',
    description: '基于流动性证明的 L1 公链，社区氛围浓厚。',
    projectUrl: 'https://berachain.com',
    logoUrl: '/logos/berachain.png',
    category: 'Infrastructure',
    chain: 'ETH',
    status: 'upcoming',
    estimatedValue: '$1000-$5000',
    difficulty: 'hard',
    requirements: [
      '参与测试网',
      '社区活跃'
    ],
    steps: [
      '加入 Discord 社区',
      '参与测试网活动',
      '获取测试网 NFT',
      '等待主网上线'
    ],
    deadline: '2026-03-01',
    verified: true,
    featured: false,
    createdAt: '2026-02-01',
    updatedAt: '2026-02-06'
  },
  {
    id: '6',
    slug: 'monad',
    name: 'Monad',
    description: '高性能 EVM L1，10000 TPS 目标。',
    projectUrl: 'https://monad.xyz',
    logoUrl: '/logos/monad.png',
    category: 'Infrastructure',
    chain: 'ETH',
    status: 'upcoming',
    estimatedValue: '$500-$3000',
    difficulty: 'medium',
    requirements: [
      '加入等待名单',
      '社区活跃'
    ],
    steps: [
      '关注官方 Twitter',
      '加入 Discord',
      '等待测试网'
    ],
    verified: false,
    featured: false,
    createdAt: '2026-02-05',
    updatedAt: '2026-02-06'
  },
  {
    id: '7',
    slug: 'linea',
    name: 'Linea',
    description: 'ConsenSys 开发的 zkEVM L2，背靠 MetaMask 生态。',
    projectUrl: 'https://linea.build',
    logoUrl: '/logos/linea.png',
    category: 'L2',
    chain: 'ETH',
    status: 'active',
    estimatedValue: '$500-$2000',
    difficulty: 'easy',
    requirements: [
      '桥接资产到 Linea',
      '使用生态 DApp',
      '参与 Linea Voyage'
    ],
    steps: [
      '使用官方桥转入 ETH',
      '在 SyncSwap 交易',
      '参与 Linea Voyage 活动',
      '铸造 Linea Voyage NFT'
    ],
    verified: true,
    featured: false,
    createdAt: '2026-01-18',
    updatedAt: '2026-02-05'
  },
  {
    id: '8',
    slug: 'starknet',
    name: 'StarkNet',
    description: 'StarkWare 开发的 ZK-STARK L2，已发币但仍有生态激励。',
    projectUrl: 'https://starknet.io',
    logoUrl: '/logos/starknet.png',
    category: 'L2',
    chain: 'ETH',
    status: 'active',
    estimatedValue: '$200-$1000',
    difficulty: 'medium',
    requirements: [
      '使用 StarkNet 生态',
      '参与 DeFi 协议'
    ],
    steps: [
      '创建 Argent X 或 Braavos 钱包',
      '桥接 ETH 到 StarkNet',
      '在 JediSwap/10kSwap 交易',
      '参与借贷协议'
    ],
    verified: true,
    featured: false,
    createdAt: '2026-01-12',
    updatedAt: '2026-02-04'
  },
  {
    id: '9',
    slug: 'base',
    name: 'Base',
    description: 'Coinbase 推出的 L2，生态快速发展中。',
    projectUrl: 'https://base.org',
    logoUrl: '/logos/base.png',
    category: 'L2',
    chain: 'BASE',
    status: 'active',
    estimatedValue: '$300-$1500',
    difficulty: 'easy',
    requirements: [
      '在 Base 上交互',
      '使用生态协议'
    ],
    steps: [
      '通过官方桥转入资产',
      '在 Aerodrome 交易',
      '参与 Onchain Summer 活动',
      '铸造 Base NFT'
    ],
    verified: true,
    featured: true,
    createdAt: '2026-01-25',
    updatedAt: '2026-02-06'
  },
  {
    id: '10',
    slug: 'arbitrum-stylus',
    name: 'Arbitrum Stylus',
    description: 'Arbitrum 新一代技术升级，支持 WASM 智能合约。',
    projectUrl: 'https://arbitrum.io',
    logoUrl: '/logos/arbitrum.png',
    category: 'L2',
    chain: 'ARB',
    status: 'active',
    estimatedValue: '$100-$500',
    difficulty: 'medium',
    requirements: [
      '在 Arbitrum 保持活跃',
      '使用 Stylus 生态应用'
    ],
    steps: [
      '保持 Arbitrum 活跃度',
      '参与 Stylus 测试网',
      '使用新上线的 Stylus DApp'
    ],
    verified: true,
    featured: false,
    createdAt: '2026-02-01',
    updatedAt: '2026-02-06'
  },
  {
    id: '11',
    slug: 'hyperliquid',
    name: 'Hyperliquid',
    description: '链上永续合约 DEX，交易量快速增长。',
    projectUrl: 'https://hyperliquid.xyz',
    logoUrl: '/logos/hyperliquid.png',
    category: 'DeFi',
    chain: 'ARB',
    status: 'active',
    estimatedValue: '$1000-$5000',
    difficulty: 'medium',
    requirements: [
      '进行交易',
      '保持交易量'
    ],
    steps: [
      '连接钱包',
      '充值 USDC',
      '进行永续合约交易',
      '保持活跃交易'
    ],
    deadline: '2026-04-01',
    verified: true,
    featured: true,
    createdAt: '2026-01-08',
    updatedAt: '2026-02-06'
  },
  {
    id: '12',
    slug: 'blast',
    name: 'Blast',
    description: 'Blur 团队推出的 L2，原生收益机制。',
    projectUrl: 'https://blast.io',
    logoUrl: '/logos/blast.png',
    category: 'L2',
    chain: 'ETH',
    status: 'active',
    estimatedValue: '$500-$3000',
    difficulty: 'easy',
    requirements: [
      '存入 ETH/稳定币',
      '使用生态 DApp'
    ],
    steps: [
      '桥接 ETH 到 Blast',
      '在生态 DApp 中使用',
      '邀请好友获得积分',
      '等待 Gold 兑换'
    ],
    verified: true,
    featured: false,
    createdAt: '2026-01-22',
    updatedAt: '2026-02-05'
  },
  {
    id: '13',
    slug: 'eclipse',
    name: 'Eclipse',
    description: '首个 SVM L2，将 Solana 虚拟机带到以太坊。',
    projectUrl: 'https://eclipse.xyz',
    logoUrl: '/logos/eclipse.png',
    category: 'L2',
    chain: 'ETH',
    status: 'upcoming',
    estimatedValue: '$500-$2000',
    difficulty: 'medium',
    requirements: [
      '参与测试网',
      '社区互动'
    ],
    steps: [
      '加入 Discord',
      '参与测试网活动',
      '完成社区任务'
    ],
    verified: false,
    featured: false,
    createdAt: '2026-02-03',
    updatedAt: '2026-02-06'
  },
  {
    id: '14',
    slug: 'zora',
    name: 'Zora',
    description: 'NFT 铸造和交易平台，自己的 L2 网络。',
    projectUrl: 'https://zora.co',
    logoUrl: '/logos/zora.png',
    category: 'NFT',
    chain: 'ETH',
    status: 'active',
    estimatedValue: '$200-$1000',
    difficulty: 'easy',
    requirements: [
      '铸造 NFT',
      '收藏和交易'
    ],
    steps: [
      '连接钱包到 Zora',
      '铸造免费 NFT',
      '收藏其他创作者作品',
      '创建自己的 NFT'
    ],
    verified: true,
    featured: false,
    createdAt: '2026-01-28',
    updatedAt: '2026-02-05'
  },
  {
    id: '15',
    slug: 'polymarket',
    name: 'Polymarket',
    description: '去中心化预测市场，Polygon 上热门应用。',
    projectUrl: 'https://polymarket.com',
    logoUrl: '/logos/polymarket.png',
    category: 'DeFi',
    chain: 'ETH',
    status: 'active',
    estimatedValue: '$300-$1500',
    difficulty: 'easy',
    requirements: [
      '参与预测市场',
      '保持交易活跃'
    ],
    steps: [
      '注册账户并 KYC',
      '充值 USDC',
      '参与预测市场交易',
      '保持活跃度'
    ],
    verified: true,
    featured: false,
    createdAt: '2026-01-30',
    updatedAt: '2026-02-06'
  },
  {
    id: '16',
    slug: 'magic-eden',
    name: 'Magic Eden',
    description: '多链 NFT 市场，覆盖 Solana/ETH/BTC。',
    projectUrl: 'https://magiceden.io',
    logoUrl: '/logos/magiceden.png',
    category: 'NFT',
    chain: 'MULTI',
    status: 'active',
    estimatedValue: '$200-$800',
    difficulty: 'easy',
    requirements: [
      '使用平台交易',
      '多链参与'
    ],
    steps: [
      '连接钱包',
      '在不同链上交易 NFT',
      '参与 Rewards 计划',
      '收集钻石积分'
    ],
    verified: true,
    featured: false,
    createdAt: '2026-02-02',
    updatedAt: '2026-02-06'
  }
];

// 辅助函数
export function getAirdropBySlug(slug: string): Airdrop | undefined {
  return mockAirdrops.find(a => a.slug === slug);
}

export function getFeaturedAirdrops(): Airdrop[] {
  return mockAirdrops.filter(a => a.featured && a.status !== 'ended');
}

export function getUpcomingDeadlines(): Airdrop[] {
  return mockAirdrops
    .filter(a => a.deadline && a.status === 'active')
    .sort((a, b) => new Date(a.deadline!).getTime() - new Date(b.deadline!).getTime())
    .slice(0, 4);
}

export function getLatestAirdrops(): Airdrop[] {
  return [...mockAirdrops]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 10);
}

export function filterAirdrops(options: {
  category?: string;
  chain?: string;
  status?: string;
  difficulty?: string;
  search?: string;
}): Airdrop[] {
  return mockAirdrops.filter(a => {
    if (options.category && a.category !== options.category) return false;
    if (options.chain && a.chain !== options.chain) return false;
    if (options.status && a.status !== options.status) return false;
    if (options.difficulty && a.difficulty !== options.difficulty) return false;
    if (options.search) {
      const search = options.search.toLowerCase();
      if (!a.name.toLowerCase().includes(search) && 
          !a.description.toLowerCase().includes(search)) {
        return false;
      }
    }
    return true;
  });
}
