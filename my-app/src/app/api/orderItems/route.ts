import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../db';
import { orderItems } from '../../../db/schema';

export async function GET() {
  const result = await db.select().from(orderItems);
  return NextResponse.json(result);
}

export async function POST(req: NextRequest) {
  const { orderId, productId, quantity, price } = await req.json();
  const result = await db.insert(orderItems).values({ orderId, productId, quantity, price }).returning();
  return NextResponse.json(result[0]);
}