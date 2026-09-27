import AuthNav from "@/components/AuthNav";
import Link from "next/link";
import { articles } from "@/data/content";
import { ctaLinks, site } from "@/data/site";

const cards = [
  ["☀️", "Residential Solar", "Learn about home solar systems, planning, costs, and installation.", ctaLinks.residential],
  ["🏢", "Commercial Solar", "Explore solar considerations for businesses and larger properties.", ctaLinks.commercial],
  ["⚙️", "Solar Installation", "Understand site assessment, system design, installation, and inspections.", ctaLinks.installation],
  ["💡", "Solar Savings & Incentives", "Learn how to research utility programs, incentives, and energy savings.", ctaLinks.savings],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="topbar">{site.tagline}<span>About &nbsp; Blog &nbsp; Contact</span></div>
        <div className="nav wrap">
          <Link className="brand" href="/"><span className="brand-mark">☀</span>{site.name}</Link>
          <nav>
            <Link href="/">Home</Link><Link href="/services">Services</Link><Link href="/blog">Blog</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link>
          <AuthNav /></nav>
          <Link className="nav-cta" href={ctaLinks.residential}>Explore Related Solar Topics →</Link>
        </div>
      </header>

      <section className="hero">
        <div className="hero-overlay">
          <div className="wrap hero-content">
            <span className="eyebrow">CLEAN ENERGY • BRIGHTER TOMORROW</span>
            <h1>Make the Switch to<br />Solar Energy</h1>
            <p>Clear guides and practical information about solar solutions for homes and businesses.</p>
            <div className="hero-actions"><Link className="btn primary" href="/blog">Read the Guides →</Link><Link className="btn ghost" href="/services">Explore Services</Link></div>
          </div>
        </div>
      </section>

      <section className="wrap feature-grid">
        {cards.map(([icon, title, text, href]) => <a className="feature-card" href={href} key={title}><div className="feature-icon">{icon}</div><h3>{title}</h3><p>{text}</p><span>Learn More →</span></a>)}
      </section>

      <section className="wrap split-section">
        <img src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=85" alt="Solar panels in a field" />
        <div><span className="eyebrow dark">WHY SOLAR ENERGY?</span><h2>Clean, Practical & Reliable Energy</h2><p>Solar energy can help households and businesses generate electricity on-site. The right system depends on your location, energy use, property, utility rules, and project goals.</p><ul><li>Understand electricity usage</li><li>Compare system options</li><li>Research local requirements</li><li>Review professional proposals</li></ul><Link className="btn primary" href="/blog">Learn About Solar →</Link></div>
      </section>

      <section className="wrap section">
        <div className="section-head"><div><span className="eyebrow dark">LATEST INFORMATION</span><h2>Solar Guides & Articles</h2></div><Link href="/blog">View all →</Link></div>
        <div className="article-grid">{articles.slice(0,3).map(a => <Link className="article-card" href={`/blog/${a.slug}`} key={a.slug}><img src={a.image} alt="" /><div className="article-body"><span>{a.category}</span><h3>{a.title}</h3><p>{a.excerpt}</p><strong>Read More →</strong></div></Link>)}</div>
      </section>

      <section className="cta-band"><div className="wrap"><div><h2>Ready to Learn More About Solar?</h2><p>Browse practical resources and independently review additional solar information.</p></div><Link className="btn primary" href={ctaLinks.residential}>Explore Now →</Link></div></section>
      <Footer />
    </main>
  );
}

function Footer() {
  return <footer><div className="wrap footer-grid"><div><Link className="brand" href="/"><span className="brand-mark">☀</span>{site.name}</Link><p>{site.description}</p></div><div><h4>Explore</h4><Link href="/services">Services</Link><Link href="/blog">Blog</Link><Link href="/about">About</Link></div><div><h4>Legal</h4><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Use</Link><Link href="/disclaimer">Disclaimer</Link></div><div><h4>Contact</h4><p>{site.email}</p><p>{site.location}</p></div></div><div className="copyright">© {new Date().getFullYear()} {site.name}. Educational information only.</div></footer>
}