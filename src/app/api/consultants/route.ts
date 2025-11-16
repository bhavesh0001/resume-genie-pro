import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
  const list = await prisma.consultant.findMany({ include: { user: true }});
  return NextResponse.json(list);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, title, bio, skills, pricePerMin } = body || {};
  if (!name || !email || !title || !bio || !skills || !pricePerMin) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  const user = await prisma.user.upsert({
    where: { email },
    create: { email, name },
    update: { name }
  });
  const c = await prisma.consultant.create({
    data: { userId: user.id, title, bio, skills, pricePerMin: Number(pricePerMin) },
    include: { user: true }
  });
  return NextResponse.json(c);
}
