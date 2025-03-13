import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../db';
import { payments } from '../../../db/schema';

export async function GET() {
  const result = await db.select().from(payments);
  return NextResponse.json(result);
}

export async function POST(req: NextRequest) {
  const { orderId, userId, amount, status, paymentMethod } = await req.json();
  const result = await db.insert(payments).values({ orderId, userId, amount, status, paymentMethod }).returning();
  return NextResponse.json(result[0]);
}