import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { consultantId, minutes } = await req.json();
    if (!consultantId || !minutes) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const consultant = await prisma.consultant.findUnique({ where: { id: consultantId } });
    if (!consultant) return NextResponse.json({ error: "Consultant not found" }, { status: 404 });

    const amount = Math.max(consultant.pricePerMin * Number(minutes), 1000); // paise
    const rzp = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const origin = process.env.APP_URL || "http://localhost:3000";
    const link = await rzp.paymentLink.create({
      amount, currency: "INR",
      description: `Consultation with ${consultantId} (${minutes} min)`,
      callback_url: `${origin}/chat/${consultantId}-session`,
      callback_method: "get",
      notes: { consultantId, minutes: String(minutes) }
    });

    return NextResponse.json({ url: (link as any).short_url });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Razorpay error" }, { status: 500 });
  }
}
