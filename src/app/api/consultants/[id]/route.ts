import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(_: Request, { params }: { params: { id: string }}) {
  const c = await prisma.consultant.findUnique({ where: { id: params.id }, include: { user: true } });
  if (!c) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(c);
}
