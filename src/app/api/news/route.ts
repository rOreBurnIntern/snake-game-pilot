import { NextResponse } from 'next/server';
import { mockStories } from '@/lib/news';

export async function GET() {
  return NextResponse.json(mockStories);
}