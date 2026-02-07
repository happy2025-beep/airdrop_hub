import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AirdropHub - 发现优质加密空投",
    template: "%s | AirdropHub",
  },
  description: "聚合最新加密空投信息，帮助你发现DeFi、NFT、L2等领域的空投机会。免费、安全、高效。收录50+优质空投项目。",
  keywords: ["空投", "airdrop", "crypto", "DeFi", "NFT", "L2", "加密货币", "免费代币", "zkSync", "LayerZero", "EigenLayer", "Arbitrum", "Base"],
  authors: [{ name: "AirdropHub Team" }],
  creator: "AirdropHub",
  metadataBase: new URL("https://airdrophub.io"),
  openGraph: {
    title: "AirdropHub - 发现优质加密空投",
    description: "聚合最新加密空投信息，不错过任何机会。收录50+优质空投项目。",
    type: "website",
    locale: "zh_CN",
    siteName: "AirdropHub",
  },
  twitter: {
    card: "summary_large_image",
    title: "AirdropHub - 发现优质加密空投",
    description: "聚合最新加密空投信息，不错过任何机会",
    creator: "@airdrophub",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
