import AuthNav from "@/components/AuthNav";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, articleBody } from "@/data/content";
import { ctaLinks, site } from "@/data/site";

export function generateStaticParams(){ return articles.map(a => ({slug:a.slug})); }

export default async function Article({ params }) {
  const {slug}=await params;
  const article=articles.find(a=>a.slug===slug);
  if(!article) return notFound();

  const buttons=[
    ["🏠","Residential Solar Solutions",ctaLinks.residential],
    ["🏢","Commercial Solar Solutions",ctaLinks.commercial],
    ["⚙️","Solar Installation Services",ctaLinks.installation],
    ["☀️","Solar Savings & Incentives",ctaLinks.savings],
  ];

  return <main><header className="site-header"><div className="nav wrap"><Link className="brand" href="/"><span className="brand-mark">☀</span>{site.name}</Link><nav><Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/blog">Blog</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link><AuthNav /></nav></div></header>
    <section className="article-hero"><div className="wrap"><div className="breadcrumbs"><Link href="/">Home</Link> → <Link href="/blog">Blog</Link> → {article.title}</div><h1>{article.title}</h1></div></section>
    <section className="wrap article-layout"><article className="article-content"><img className="article-cover" src={article.image} alt={article.title}/><span className="tag">{article.category}</span><div className="meta">{article.date} &nbsp; • &nbsp; {article.readTime} &nbsp; • &nbsp; {site.name} Editorial</div><p className="lead">{articleBody.intro}</p>{articleBody.sections.map(s=><section key={s.title}><h2>{s.title}</h2>{s.paragraphs.map(p=><p key={p}>{p}</p>)}</section>)}
      <div className="cta-panel"><h2>Explore Related Solar Topics</h2><p>These links are provided as optional resources. Review the destination before making any purchase or project decision.</p><div className="big-cta-grid">{buttons.map(([icon,label,href])=><a href={href} className="big-cta" key={label} target="_blank" rel="noopener noreferrer"><span>{icon}</span><b>{label}</b><em>→</em></a>)}</div></div>
      <div className="notice"><strong>Editorial note:</strong> This article is general educational information. Costs, incentives, tax treatment, utility rules, and installation requirements vary by location and can change.</div>
    </article><aside><div className="side-card"><h3>Related Articles</h3>{articles.filter(x=>x.slug!==article.slug).map(x=><Link href={`/blog/${x.slug}`} key={x.slug}><img src={x.image} alt=""/><span>{x.title}</span></Link>)}</div><div className="side-card pale"><h3>Need more information?</h3><p>Use the resources on this site to explore solar topics and compare what questions to ask a qualified professional.</p><Link className="btn primary" href="/contact">Contact Us</Link></div></aside></section><Footer/></main>
}

function Footer(){return <footer><div className="wrap footer-grid"><div><h3>{site.name}</h3><p>{site.description}</p></div><div><h4>Legal</h4><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Use</Link><Link href="/disclaimer">Disclaimer</Link></div></div><div className="copyright">© {new Date().getFullYear()} {site.name}. Educational information only.</div></footer>}