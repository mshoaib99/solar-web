import AuthNav from "@/components/AuthNav";
import Link from "next/link";
import { articles } from "@/data/content";
import { site } from "@/data/site";

export default function BlogPage() {
  return <main><Header /><section className="page-hero"><div className="wrap"><span className="eyebrow">SOLAR KNOWLEDGE CENTER</span><h1>Solar Guides & Articles</h1><p>Practical educational resources to help you understand solar energy.</p></div></section><section className="wrap section"><div className="article-grid">{articles.map(a => <Link className="article-card" href={`/blog/${a.slug}`} key={a.slug}><img src={a.image} alt="" /><div className="article-body"><span>{a.category}</span><h2>{a.title}</h2><p>{a.excerpt}</p><small>{a.date} • {a.readTime}</small><strong>Read More →</strong></div></Link>)}</div></section><Footer /></main>
}

function Header(){return <header className="site-header"><div className="nav wrap"><Link className="brand" href="/"><span className="brand-mark">☀</span>{site.name}</Link><nav><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/blog">Blog</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><AuthNav /></nav></div></header>}
function Footer(){return <footer><div className="wrap footer-grid"><div><h3>{site.name}</h3><p>{site.description}</p></div><div><h4>Legal</h4><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Use</Link><Link href="/disclaimer">Disclaimer</Link></div></div><div className="copyright">© {new Date().getFullYear()} {site.name}.</div></footer>}