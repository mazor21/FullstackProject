import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../db';
import { products } from '../../../db/schema';

export async function GET() {
  const result = await db.select().from(products);
  return NextResponse.json(result);
}

export async function POST(req: NextRequest) {
  const { name, description, price, category, image } = await req.json();
  const result = await db.insert(products).values({ name, description, price, category, image }).returning();
  return NextResponse.json(result[0]);
}