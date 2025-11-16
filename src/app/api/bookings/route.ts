import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  const { userEmail, consultantId, minutes, amount } = await req.json();
  if (!userEmail || !consultantId || !minutes || !amount) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }
  const user = await prisma.user.upsert({
    where: { email: userEmail },
    create: { email: userEmail, name: userEmail.split("@")[0] },
    update: {}
  });
  const booking = await prisma.booking.create({
    data: { userId: user.id, consultantId, minutes: Number(minutes), amount: Number(amount) }
  });
  return NextResponse.json(booking);
}
