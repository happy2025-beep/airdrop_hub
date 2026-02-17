export type Category = 'DeFi' | 'NFT' | 'L2' | 'Gaming' | 'Infrastructure' | 'Social' | 'AI';
export type Chain = 'ETH' | 'SOL' | 'ARB' | 'OP' | 'BASE' | 'ZK' | 'BNB' | 'MULTI';
export type Status = 'upcoming' | 'active' | 'ended';
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Airdrop {
  id: string;
  slug: string;
  name: string;
  description: string;
  projectUrl: string;
  logoUrl: string;
  category: Category;
  chain: Chain;
  status: Status;
  estimatedValue: string;
  difficulty: Difficulty;
  requirements: string[];
  steps: string[];
  deadline?: string;
  verified: boolean;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Submission {
  id: string;
  airdropName: string;
  url: string;
  submitterEmail: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}
