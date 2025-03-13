import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../db';
import { orders } from '../../../db/schema';

export async function GET() {
  const result = await db.select().from(orders);
  return NextResponse.json(result);
}

export async function POST(req: NextRequest) {
  const { userId, totalPrice, status, isPaid } = await req.json();
  const result = await db.insert(orders).values({ userId, totalPrice, status, isPaid }).returning();
  return NextResponse.json(result[0]);
}