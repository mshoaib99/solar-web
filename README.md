# SolarGuide — Vercel-ready educational solar website

This project is a lightweight Next.js website designed for deployment through GitHub → Vercel.

## Important architecture

- No database
- No authentication/login system
- No user accounts
- No server-side user tracking
- No automatic redirects
- No auto-clicking or forced clicks
- No iframes around external destinations
- External destination buttons are ordinary user-initiated links
- Educational solar content only

The site is intentionally implemented in JavaScript/JSX rather than TypeScript so Vercel does not need TypeScript packages for the production build. This directly avoids the TypeScript dependency error that can occur when a repository contains `.ts`/`.tsx` files without the required packages.

## Before publishing

1. Edit `src/data/site.js`.
2. Replace `hello@example.com` and the placeholder phone number with real business/contact information, or remove them if not used.
3. Replace the four `YOUR-PARKED-DOMAIN.com` URLs with the actual destinations only when those destinations are genuinely relevant to the surrounding content.
4. Review and customize the Privacy Policy, Terms, Disclaimer, and Contact information for the real operator and jurisdiction.
5. Do not add artificial traffic, automated clicks, forced redirects, hidden links, misleading claims, fake testimonials, or fabricated statistics.

## Deploy to Vercel

Upload this folder to GitHub, then import the repository in Vercel.

Recommended settings:

- Framework: Next.js (auto-detected)
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: leave Vercel's default
- Environment Variables: none are required by this project

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

For a production build:

```bash
npm run build
npm start
```

## Why there is no database/auth

The website is a public informational site. Its articles and navigation are static content, so a database and authentication system are not required unless you later add features such as user accounts, private dashboards, saved content, comments, or an admin CMS.

## Optional single-account authentication (no database)
This project includes a simple server-side single-account authentication flow for `/login` and `/account`. The public pages remain accessible without signing in. It does not store users in a database.

In Vercel Project Settings → Environment Variables, set:
- `ADMIN_EMAIL` — the one allowed sign-in email
- `ADMIN_PASSWORD` — a strong password (store it only in Vercel; do not commit it)
- `AUTH_SECRET` — a long random secret used to sign the HTTP-only session cookie

This is intentionally a small single-account system. It is not a substitute for a full identity provider when multiple users, password recovery, roles, MFA, or account management are required.

### Vercel deployment settings
Keep Application Preset = Next.js, Root Directory = `./`, and leave Build Command, Output Directory, and Install Command at their defaults.

If you want the private sign-in area, add the three variables from `.env.example` in Vercel for the Production environment, then redeploy. Public pages do not require sign-in.
