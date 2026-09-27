import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { sessionCookie, verifySession } from "@/lib/auth";
import LogoutButton from "@/components/LogoutButton";

export default async function AccountPage() {
  const jar = await cookies();
  const session = verifySession(jar.get(sessionCookie.name)?.value);
  if (!session) redirect("/login");
  return <main><header className="site-header"><div className="nav wrap"><Link className="brand" href="/">☀ SolarGuide</Link><nav><Link href="/">Home</Link><Link href="/blog">Blog</Link><LogoutButton /></nav></div></header><section className="wrap account-page"><span className="eyebrow">PRIVATE ACCOUNT</span><h1>Welcome</h1><p>You are signed in as <strong>{session.email}</strong>.</p><div className="account-card"><h2>Authentication status</h2><p>Your session is protected by an HTTP-only cookie and does not require a database.</p><p className="muted">This simple single-account authentication is suitable for a small private area. For multiple users, password reset, roles, or production-grade identity management, use a dedicated authentication provider and persistent user store.</p><LogoutButton /></div></section></main>;
}
