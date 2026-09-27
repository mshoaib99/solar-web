import { NextResponse } from "next/server";
import { createSession, sessionCookie } from "@/lib/auth";

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    const expectedEmail = (process.env.ADMIN_EMAIL || "").trim().toLowerCase();
    const expectedPassword = process.env.ADMIN_PASSWORD || "";
    if (!expectedEmail || !expectedPassword) {
      return NextResponse.json({ error: "Authentication is not configured. Add ADMIN_EMAIL, ADMIN_PASSWORD and AUTH_SECRET in Vercel." }, { status: 503 });
    }
    if (String(email || "").trim().toLowerCase() !== expectedEmail || String(password || "") !== expectedPassword) {
      return NextResponse.json({ error: "Invalid email or password." }, { status: 401 });
    }
    const response = NextResponse.json({ ok: true });
    response.cookies.set({ ...sessionCookie, value: createSession(expectedEmail) });
    return response;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
