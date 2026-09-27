"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function AuthNav() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    fetch("/api/auth/me", { cache: "no-store" }).then(r => r.ok && r.json()).then(d => setLoggedIn(Boolean(d?.authenticated))).catch(() => {});
  }, []);
  return loggedIn ? <Link href="/account">Account</Link> : <Link href="/login">Sign in</Link>;
}
