import { cookies } from "next/headers";
import { sessionCookie, verifySession } from "@/lib/auth";

export async function GET() {
  const jar = await cookies();
  const session = verifySession(jar.get(sessionCookie.name)?.value);
  return Response.json({ authenticated: Boolean(session), email: session?.email || null }, { status: 200 });
}
