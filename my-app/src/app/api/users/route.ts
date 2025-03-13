import { NextRequest, NextResponse } from 'next/server';
import { db } from '../../../db';
import { users } from '../../../db/schema';

export async function GET() {
  const result = await db.select().from(users);
  return NextResponse.json(result);
}

export async function POST(req: NextRequest) {
  const { name, email, password, phone, address } = await req.json();
  const result = await db.insert(users).values({ name, email, password, phone, address }).returning();
  return NextResponse.json(result[0]);
}