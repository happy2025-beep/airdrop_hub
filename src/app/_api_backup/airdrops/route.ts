import { NextRequest, NextResponse } from 'next/server';
import { mockAirdrops, filterAirdrops } from '@/data/airdrops';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  
  const category = searchParams.get('category') || undefined;
  const chain = searchParams.get('chain') || undefined;
  const status = searchParams.get('status') || undefined;
  const difficulty = searchParams.get('difficulty') || undefined;
  const search = searchParams.get('search') || undefined;
  const featured = searchParams.get('featured') === 'true';
  
  let airdrops = filterAirdrops({
    category,
    chain,
    status,
    difficulty,
    search
  });
  
  if (featured) {
    airdrops = airdrops.filter(a => a.featured);
  }
  
  return NextResponse.json({
    success: true,
    count: airdrops.length,
    data: airdrops
  });
}

// 获取单个空投
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { slug } = body;
    
    const airdrop = mockAirdrops.find(a => a.slug === slug);
    
    if (!airdrop) {
      return NextResponse.json(
        { success: false, error: 'Airdrop not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: airdrop
    });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request' },
      { status: 400 }
    );
  }
}
