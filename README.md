# 🪂 AirdropHub - 空投聚合站

发现优质加密空投，不错过任何机会。

## 🚀 功能特性

- **空投列表** - 聚合 DeFi、NFT、L2 等领域空投
- **智能筛选** - 按分类、链、状态、难度筛选
- **详情页面** - 完整的参与步骤和要求
- **社区提交** - 用户可提交发现的空投
- **API 接口** - 供 Telegram 机器人等调用
- **SEO 优化** - 动态 sitemap，结构化数据

## 🛠️ 技术栈

- **框架**: Next.js 14 (App Router)
- **样式**: Tailwind CSS 4.0
- **组件**: shadcn/ui
- **语言**: TypeScript
- **部署**: Cloudflare Pages (推荐)

## 📦 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建
npm run build

# 启动生产服务器
npm start
```

访问 http://localhost:3000

## 📁 项目结构

```
src/
├── app/
│   ├── page.tsx              # 首页
│   ├── layout.tsx            # 全局布局
│   ├── airdrops/
│   │   └── page.tsx          # 空投列表
│   ├── airdrop/
│   │   └── [slug]/
│   │       └── page.tsx      # 空投详情
│   ├── submit/
│   │   └── page.tsx          # 提交空投
│   └── api/
│       └── airdrops/
│           └── route.ts      # API 接口
├── components/
│   ├── ui/                   # shadcn 组件
│   ├── AirdropCard.tsx       # 空投卡片
│   ├── SearchBar.tsx         # 搜索框
│   ├── Header.tsx            # 头部导航
│   └── Footer.tsx            # 页脚
├── data/
│   └── airdrops.ts           # 空投数据 (之后接数据库)
├── types/
│   └── airdrop.ts            # TypeScript 类型
└── lib/
    └── utils.ts              # 工具函数
```

## 🔌 API 接口

### 获取空投列表

```
GET /api/airdrops?category=DeFi&status=active&chain=ETH
```

参数:
- `category` - 分类: DeFi, NFT, L2, Gaming, Infrastructure, Social
- `chain` - 链: ETH, SOL, ARB, OP, BASE, ZK, BNB, MULTI
- `status` - 状态: upcoming, active, ended
- `difficulty` - 难度: easy, medium, hard
- `search` - 搜索关键词
- `featured` - 是否精选: true/false

响应:
```json
{
  "success": true,
  "count": 10,
  "data": [...]
}
```

## 🚀 部署到 Cloudflare Pages

1. 推送代码到 GitHub
2. 在 Cloudflare Pages 创建项目
3. 连接 GitHub 仓库
4. 设置构建命令: `npm run build`
5. 设置输出目录: `.next`
6. 添加环境变量 (如需要)

或使用 Wrangler CLI:

```bash
npm install -g wrangler
wrangler pages deploy .next
```

## 📝 TODO

- [ ] 接入 Supabase/D1 数据库
- [ ] 用户登录系统
- [ ] 空投进度追踪
- [ ] Telegram 机器人集成
- [ ] 邮件订阅通知
- [ ] 多语言支持

## 📄 License

MIT

---

Made with ❤️ by AirdropHub Team
