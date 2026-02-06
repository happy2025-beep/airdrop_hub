import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AirdropHub - 发现优质加密空投",
  description: "聚合最新加密空投信息，帮助你发现DeFi、NFT、L2等领域的空投机会。免费、安全、高效。",
  keywords: "空投, airdrop, crypto, DeFi, NFT, L2, 加密货币, 免费代币",
  openGraph: {
    title: "AirdropHub - 发现优质加密空投",
    description: "聚合最新加密空投信息，不错过任何机会",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
