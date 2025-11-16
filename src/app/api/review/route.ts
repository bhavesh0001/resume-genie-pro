import { NextRequest, NextResponse } from "next/server";
import { scoreResume } from "@/lib/scorer";

export async function POST(req: NextRequest) {
  const { text } = await req.json();
  if (!text || typeof text !== "string") {
    return NextResponse.json({ error: "Provide 'text' string" }, { status: 400 });
  }
  const result = scoreResume(text);
  return NextResponse.json(result);
}
