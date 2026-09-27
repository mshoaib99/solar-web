"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setBusy(true); setError("");
    const res = await fetch("/api/auth/login", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, password }) });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) { setError(data.error || "Unable to sign in."); setBusy(false); return; }
    router.push("/account");
    router.refresh();
  }

  return <main className="auth-page"><div className="auth-card"><Link className="brand auth-brand" href="/">☀ SolarGuide</Link><span className="eyebrow">SECURE AREA</span><h1>Sign in</h1><p>Sign in to access the private account page. The rest of the website remains publicly accessible.</p><form onSubmit={submit}><label>Email<input required type="email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="username" /></label><label>Password<input required type="password" value={password} onChange={e => setPassword(e.target.value)} autoComplete="current-password" /></label>{error && <div className="form-error">{error}</div>}<button className="btn primary" disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button></form><Link className="back-link" href="/">← Back to website</Link></div></main>;
}
