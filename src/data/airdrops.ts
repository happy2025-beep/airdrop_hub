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
  },
  {
    id: '17',
    slug: 'axiom-trade',
    name: 'Axiom Trade',
    description: 'Solana 上高收入的永续合约 DEX，DefiLlama 数据显示为 Solana 收入最高的协议之一。',
    projectUrl: 'https://axiom.trade',
    logoUrl: '/logos/axiom.png',
    category: 'DeFi',
    chain: 'SOL',
    status: 'active',
    estimatedValue: '$500-$5000',
    difficulty: 'medium',
    requirements: [
      '在 Axiom 上进行交易',
      '保持交易量',
      '使用平台功能'
    ],
    steps: [
      '连接 Solana 钱包',
      '充值 USDC/SOL',
      '进行 Memecoin 或永续合约交易',
      '持续保持活跃交易量'
    ],
    deadline: '2026-03-31',
    verified: true,
    featured: true,
    createdAt: '2026-02-09',
    updatedAt: '2026-02-09'
  },
  {
    id: '18',
    slug: 'fuel-network',
    name: 'Fuel Network',
    description: '模块化执行层，长期测试网运行，开发者参与度高。',
    projectUrl: 'https://fuel.network',
    logoUrl: '/logos/fuel.png',
    category: 'Infrastructure',
    chain: 'ETH',
    status: 'upcoming',
    estimatedValue: '$500-$3000',
    difficulty: 'medium',
    requirements: [
      '参与测试网交互',
      '使用钱包功能',
      '开发者活动'
    ],
    steps: [
      '创建 Fuel 钱包',
      '获取测试网代币',
      '与测试网 dApp 交互',
      '参与开发者活动'
    ],
    verified: true,
    featured: true,
    createdAt: '2026-02-09',
    updatedAt: '2026-02-09'
  },
  {
    id: '19',
    slug: 'zetachain',
    name: 'ZetaChain',
    description: '跨链互操作协议，奖励跨多链资产转移和 dApp 交互。',
    projectUrl: 'https://zetachain.com',
    logoUrl: '/logos/zetachain.png',
    category: 'Infrastructure',
    chain: 'MULTI',
    status: 'active',
    estimatedValue: '$200-$1500',
    difficulty: 'easy',
    requirements: [
      '跨链资产转移',
      'dApp 交互'
    ],
    steps: [
      '连接钱包到 ZetaChain',
      '进行跨链转账',
      '使用生态 dApp',
      '参与 ZETA 代币活动'
    ],
    verified: true,
    featured: false,
    createdAt: '2026-02-09',
    updatedAt: '2026-02-09'
  },
  {
    id: '20',
    slug: 'etherfi',
    name: 'Ether.fi',
    description: 'DeFi 再质押协议，通过质押 ETH 和持有 eETH 获得积分奖励。',
    projectUrl: 'https://ether.fi',
    logoUrl: '/logos/etherfi.png',
    category: 'DeFi',
    chain: 'ETH',
    status: 'active',
    estimatedValue: '$500-$3000',
    difficulty: 'medium',
    requirements: [
      'ETH 再质押',
      '持有 eETH',
      '参与合作 DeFi 协议'
    ],
    steps: [
      '准备 ETH',
      '在 Ether.fi 质押获得 eETH',
      '参与任务获取积分',
      '积分将转换为 ETHFI 代币'
    ],
    verified: true,
    featured: true,
    createdAt: '2026-02-09',
    updatedAt: '2026-02-09'
  },
  {
    id: '21',
    slug: 'ai-arena',
    name: 'AI Arena',
    description: 'Play-to-Earn 游戏，基于游戏表现而非被动挖矿分配奖励。',
    projectUrl: 'https://aiarena.io',
    logoUrl: '/logos/aiarena.png',
    category: 'Gaming',
    chain: 'ARB',
    status: 'active',
    estimatedValue: '$100-$800',
    difficulty: 'medium',
    requirements: [
      '进行游戏对战',
      '提升排名'
    ],
    steps: [
      '注册 AI Arena 账号',
      '连接钱包',
      '进行对战提升排名',
      '根据表现获得奖励'
    ],
    verified: true,
    featured: false,
    createdAt: '2026-02-09',
    updatedAt: '2026-02-09'
  },
  {
    id: '22',
    slug: 'friend-tech',
    name: 'friend.tech',
    description: 'SocialFi 平台，通过社交活动和 Key 交易获得奖励。',
    projectUrl: 'https://friend.tech',
    logoUrl: '/logos/friendtech.png',
    category: 'Social',
    chain: 'BASE',
    status: 'active',
    estimatedValue: '$200-$1000',
    difficulty: 'easy',
    requirements: [
      '账户活跃',
      'Key 交易',
      '社交互动'
    ],
    steps: [
      '注册 friend.tech 账号',
      '绑定 Twitter',
      '买卖 Key 保持活跃',
      '参与社交互动和推荐'
    ],
    verified: true,
    featured: false,
    createdAt: '2026-02-09',
    updatedAt: '2026-02-09'
  },
  {
    id: '23',
    slug: 'megaeth',
    name: 'MegaETH',
    description: '超高性能以太坊 L2，主网于 2月9日上线。MEGA 代币 TGE 预计 2-3 月进行，早期用户有积分奖励。',
    projectUrl: 'https://megaeth.com',
    logoUrl: '/logos/megaeth.png',
    category: 'L2',
    chain: 'ETH',
    status: 'active',
    estimatedValue: '$500-$5000',
    difficulty: 'medium',
    requirements: [
      '参与主网交互',
      '使用生态 DApp',
      '积累积分'
    ],
    steps: [
      '连接钱包到 MegaETH 主网',
      '桥接资产到 MegaETH',
      '使用生态内 DeFi 协议',
      '积累积分等待 TGE'
    ],
    deadline: '2026-03-31',
    verified: true,
    featured: true,
    createdAt: '2026-02-11',
    updatedAt: '2026-02-11'
  },
  {
    id: '24',
    slug: 'backpack',
    name: 'Backpack',
    description: 'Solana 生态交易所，由前 FTX 高管创办。宣布将 25% 代币用于空投，早期用户和交易活跃用户将获得奖励。',
    projectUrl: 'https://backpack.exchange',
    logoUrl: '/logos/backpack.png',
    category: 'DeFi',
    chain: 'SOL',
    status: 'active',
    estimatedValue: '$1000-$10000',
    difficulty: 'medium',
    requirements: [
      '注册并完成 KYC',
      '进行交易',
      '保持活跃'
    ],
    steps: [
      '注册 Backpack 交易所账户',
      '完成身份验证',
      '进行现货或永续合约交易',
      '持续保持交易量'
    ],
    verified: true,
    featured: true,
    createdAt: '2026-02-11',
    updatedAt: '2026-02-11'
  },
  {
    id: '25',
    slug: 'nexira',
    name: 'Nexira',
    description: '跨游戏经济协议，通过 Ruby 积分系统奖励玩家。积分将于 2月19-23日解锁，2月24日左右转换为 $NEXI。',
    projectUrl: 'https://nexira.ai',
    logoUrl: '/logos/nexira.png',
    category: 'Gaming',
    chain: 'ETH',
    status: 'active',
    estimatedValue: '$100-$1000',
    difficulty: 'easy',
    requirements: [
      '完成任务',
      '参与小活动',
      '收集奖励箱'
    ],
    steps: [
      '访问 nexira.ai/airdrops',
      '注册账号并连接钱包',
      '完成每日任务和小活动',
      '领取奖励箱获取 Ruby'
    ],
    deadline: '2026-02-23',
    verified: true,
    featured: false,
    createdAt: '2026-02-11',
    updatedAt: '2026-02-11'
  },
  {
    id: '26',
    slug: 'alaya-ai',
    name: 'Alaya AI',
    description: 'Web3 AI 数据基础设施项目，通过社区参与标注、训练和验证 AI 数据集。BNB Chain Lucky Season 空投进行中。',
    projectUrl: 'https://alaya.ai',
    logoUrl: '/logos/alaya.png',
    category: 'Infrastructure',
    chain: 'BNB',
    status: 'active',
    estimatedValue: '$50-$500',
    difficulty: 'easy',
    requirements: [
      '完成日常任务',
      '参与数据标注训练任务'
    ],
    steps: [
      '在 DappBay 注册活动',
      '绑定 BNB Chain 钱包',
      '完成每日任务',
      '完成至少一个训练任务'
    ],
    deadline: '2026-02-21',
    verified: true,
    featured: false,
    createdAt: '2026-02-11',
    updatedAt: '2026-02-11'
  },
  {
    id: '27',
    slug: 'sodex',
    name: 'SoDEX',
    description: '基于 ValueChain 的去中心化交易所，主打高速交易和完全托管。空投领取已于 2月13日开启，通过 SoPoints 系统分配 $SOSO 代币。',
    projectUrl: 'https://sodex.io',
    logoUrl: '/logos/sodex.png',
    category: 'DeFi',
    chain: 'SOL',
    status: 'active',
    estimatedValue: '$100-$1000',
    difficulty: 'easy',
    requirements: [
      '参与测试网交易',
      '积累 SoPoints',
      '每周快照前保持活跃'
    ],
    steps: [
      '注册 SoDEX 测试网账户',
      '进行交易积累 SoPoints',
      '邀请好友获得 25% 额外奖励',
      '等待每周二分配确认'
    ],
    deadline: '2026-08-01',
    verified: true,
    featured: true,
    createdAt: '2026-02-12',
    updatedAt: '2026-02-12'
  },
  {
    id: '28',
    slug: 'lootgo',
    name: 'LootGo',
    description: 'Walk-to-earn GameFi 项目，像 Pokémon GO 一样通过走路收集 memecoins。无需初始资金投入，通过日常活动赚取加密货币。',
    projectUrl: 'https://www.lootgo.app',
    logoUrl: '/logos/lootgo.png',
    category: 'Gaming',
    chain: 'MULTI',
    status: 'active',
    estimatedValue: '$50-$500',
    difficulty: 'easy',
    requirements: [
      '下载 LootGo App',
      '每日走路和开宝箱',
      '完成任务获取奖励'
    ],
    steps: [
      '下载并安装 LootGo 移动应用',
      '创建账户并连接钱包',
      '每天走路收集宝箱',
      '完成游戏内任务',
      '收集 memecoins 和 NFT 奖励'
    ],
    verified: true,
    featured: true,
    createdAt: '2026-02-13',
    updatedAt: '2026-02-13'
  },
  {
    id: '29',
    slug: 'loopscale',
    name: 'Loopscale',
    description: 'Solana 上的新一代 DeFi 借贷协议，通过模块化订单簿系统提供更高效的借贷市场。有积分奖励系统，预期会有空投。',
    projectUrl: 'https://app.loopscale.com',
    logoUrl: '/logos/loopscale.png',
    category: 'DeFi',
    chain: 'SOL',
    status: 'active',
    estimatedValue: '$200-$2000',
    difficulty: 'medium',
    requirements: [
      '获取 waitlist code（beta 阶段）',
      '存入资产并参与借贷',
      '积累 Loopscale 积分'
    ],
    steps: [
      '申请 waitlist 获取访问权限',
      '连接 Solana 钱包',
      '在平台上存入或借出资产',
      '通过循环借贷获得更多积分',
      '与合作伙伴项目（如 OnRe）获得双重奖励'
    ],
    verified: true,
    featured: true,
    createdAt: '2026-02-13',
    updatedAt: '2026-02-13'
  },
  {
    id: '30',
    slug: 'ionx-chain',
    name: 'IONX Chain',
    description: 'AI 驱动的区块链项目，预售已筹集超过 $8M。提供 5% loyalty airdrop 和高达 70% 的代币奖励，已通过 CertiK 和 Solid Proof 审计。',
    projectUrl: 'https://ionxchain.com',
    logoUrl: '/logos/ionx.png',
    category: 'Infrastructure',
    chain: 'ETH',
    status: 'upcoming',
    estimatedValue: '$100-$1000',
    difficulty: 'easy',
    requirements: [
      '参与 presale',
      '持有 IONX 代币',
      '参与社区活动'
    ],
    steps: [
      '访问官方网站参与预售',
      '最低投资 $15',
      '根据投资金额获得额外代币（25%-70%）',
      '获得 5% loyalty airdrop',
      '等待主网上线'
    ],
    verified: true,
    featured: false,
    createdAt: '2026-02-13',
    updatedAt: '2026-02-13'
  },
  {
    id: '31',
    slug: 'tord-labs',
    name: 'Tord Labs',
    description: 'DeFi + AI 交易生态系统，集成智能合约和人工智能交易工具。通过社交任务和钱包交互获取代币奖励。',
    projectUrl: 'https://tordlabs.com/airdrop.html',
    logoUrl: '/logos/tord-labs.png',
    category: 'DeFi',
    chain: 'BNB',
    status: 'active',
    estimatedValue: '$50000+',
    difficulty: 'medium',
    requirements: [
      'BNB 钱包连接',
      'X (Twitter) 关注和转发',
      '加入 Telegram 社区',
      '评论完成标记'
    ],
    steps: [
      '访问 tordlabs.com/airdrop',
      '连接 BNB 钱包',
      '关注 @torddefi 并启用通知',
      '在 X 上转发空投帖子',
      '加入官方 Telegram',
      '评论 DONE 并标签 5 个朋友',
      '累积积分获取更高奖励'
    ],
    deadline: '2026-02-28',
    verified: true,
    featured: true,
    createdAt: '2026-02-15',
    updatedAt: '2026-02-15'
  },
  {
    id: '32',
    slug: 'labubi-festival',
    name: 'LABUBU Festival',
    description: '限时空投活动，随机分配 100-1000 LABUBU 代币。在 PancakeSwap 或 Four.meme 上启动。',
    projectUrl: 'https://pancakeswap.finance',
    logoUrl: '/logos/labubu.png',
    category: 'DeFi',
    chain: 'BNB',
    status: 'active',
    estimatedValue: '$100-$1000',
    difficulty: 'easy',
    requirements: [
      'BNB 钱包',
      '参与活动窗口'
    ],
    steps: [
      '访问 PancakeSwap 或 Four.meme',
      '连接 BNB 钱包',
      '参与 LABUBU 事件',
      '领取随机奖励（100-1000 LABUBU）'
    ],
    deadline: '2026-02-23',
    verified: true,
    featured: true,
    createdAt: '2026-02-15',
    updatedAt: '2026-02-15'
  },
  {
    id: '33',
    slug: 'azen-protocol',
    name: 'AZEN Protocol',
    description: '基于排名的空投竞赛，为 1000 名获奖者分配 $AZEN 代币。完成任务以获得排名分数。',
    projectUrl: 'https://azen.protocol',
    logoUrl: '/logos/azen.png',
    category: 'Infrastructure',
    chain: 'MULTI',
    status: 'active',
    estimatedValue: '$50-$500',
    difficulty: 'medium',
    requirements: [
      '参与排名竞争',
      '完成指定的链上和社交任务'
    ],
    steps: [
      '注册 AZEN 账户',
      '完成任务以获得排名分数',
      '在 1000 名获奖者中竞争',
      '根据排名最终获得 $AZEN 代币奖励'
    ],
    deadline: '2026-02-28',
    verified: true,
    featured: false,
    createdAt: '2026-02-15',
    updatedAt: '2026-02-15'
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
