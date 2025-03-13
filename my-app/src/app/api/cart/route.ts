import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../db';
import { cart } from '../../../db/schema';
import { eq } from 'drizzle-orm';

export async function GET() {
  const result = await db.select().from(cart);
  return NextResponse.json(result);
}

export async function POST(req: NextRequest) {
  const b = await req.json();

  await db.delete(cart).where(eq(cart.userId, b[0].userId));

  console.log([...b]);

  const result = await db.insert(cart).values([...b]).returning();
  return NextResponse.json([...result]);
}