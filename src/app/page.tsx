import Link from "next/link";
import Ph from "@/components/Ph";
import { site, projects, stills } from "@/content/site";

const pad = (n: number) => String(n).padStart(2, "0");

function Statement() {
  const { statement: s, accent: a } = site.hero;
  const i = a ? s.indexOf(a) : -1;
  if (i < 0) return <>{s}</>;
  return <>{s.slice(0, i)}<em>{a}</em>{s.slice(i + a.length)}</>;
}

export default function Home() {
  const list = projects.filter((x) => x.cover);
  return (
    <div className="home">
      <section className="hero2 rise" style={{ "--i": 0 } as React.CSSProperties}>
        <div className="hero2-text">
          <p className="hero-eyebrow">UX/UI · HCI · Product design</p>
          <h1 className="statement"><Statement /></h1>
          <p className="hero-lede">{site.about.short.split(". ")[0]}.</p>
        </div>
        <figure className="hero2-photo">
          {site.hero.photo ? <img src={site.hero.photo} alt={site.name} /> : null}
          <figcaption>{site.hero.caption}</figcaption>
        </figure>
      </section>

      <section className="selected" id="work">
        <div className="sel-head">
          <h2>Selected work</h2>
          <Link href="/work/" className="sel-all">All work <span className="arrow">→</span></Link>
        </div>
        <div className="sel-grid">
          {list.map((p, i) => (
            <Link key={p.slug} href={`/work/${p.slug}/`} className="sel-item rise" style={{ "--i": i + 1 } as React.CSSProperties}>
              <div className="sel-stage"><Ph src={p.cover} label="" /></div>
              <div className="sel-meta">
                <span className="counter">{pad(i + 1)}</span>
                <h3 className="t">{p.name}</h3>
                <span className="sub">{p.role} · {p.year}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="duo2">
        <Link href="/about/" className="duo-tile">
          <span className="counter">About</span>
          <p>{site.about.short}</p>
          <span className="strong">More about me <span className="arrow">→</span></span>
        </Link>
        <Link href="/stills/" className="duo-tile stills-tile">
          <span className="counter">Stills · {pad(stills.length)}</span>
          <div className="thumbs"><Ph src={stills[0]} bg="var(--g1)" /><Ph src={stills[1]} bg="var(--g2)" /></div>
          <span className="strong">See stills <span className="arrow">→</span></span>
        </Link>
      </section>
    </div>
  );
}
