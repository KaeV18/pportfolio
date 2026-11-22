import Link from "next/link";
import Ph from "@/components/Ph";
import NextPage from "@/components/NextPage";
import { site, projects, stills, letterforms } from "@/content/site";

const st = (i: number) => ({ "--i": i } as React.CSSProperties);
const pad = (n: number) => String(n).padStart(2, "0");

function Head({ title, count, size = 22 }: { title: string; count?: string; size?: number }) {
  return (
    <div className="head">
      <h2 className="t" style={{ fontSize: size }}>{title}</h2>
      <span className="right">
        {count ? <span className="counter">{count}</span> : null}
        <span className="arrow" aria-hidden="true">→</span>
      </span>
    </div>
  );
}

function Statement() {
  const { statement: s, accent: a } = site.hero;
  const i = a ? s.indexOf(a) : -1;
  if (i < 0) return <>{s}</>;
  return <>{s.slice(0, i)}<em>{a}</em>{s.slice(i + a.length)}</>;
}

export default function Home() {
  const covers = [0, 1, 2, 3].map((i) => projects[i]);
  return (
    <>
      <div className="bento">
        <div className="tile t-statement rise" style={st(0)}>
          <h1 className="statement"><Statement /></h1>
        </div>

        <div className="tile t-photo rise" style={st(1)}>
          {site.hero.photo ? (
            <img className="cover" src={site.hero.photo} alt={site.name} />
          ) : (
            <span className="photo-ph">[Your photo]</span>
          )}
          <span className="photo-caption">{site.hero.caption}</span>
        </div>

        <Link href="/work/" className="tile pad28 t-work rise" style={st(2)}>
          <Head title="Work" count={`${pad(projects.length)} projects`} size={30} />
          <div className="collage">
            {covers.map((p, i) => (
              <Ph key={i} src={p?.cover} label={`[Cover ${i + 1}]`} bg={p?.cover ? undefined : i % 2 ? "var(--g1)" : undefined} />
            ))}
          </div>
          <span className="strong">View all work <span className="arrow">→</span></span>
        </Link>

        <Link href="/stills/" className="tile t-stills rise" style={st(3)}>
          <Head title="Stills" count={stills.length ? pad(stills.length) : "[N]"} size={20} />
          <div className="thumbs"><Ph bg="var(--g1)" /><Ph bg="var(--g2)" /></div>
        </Link>

        <Link href="/letterforms/" className="tile t-letters rise" style={st(4)}>
          <Head title="Letterforms" count={letterforms.length ? pad(letterforms.length) : "[N]"} size={20} />
          <div className="thumbs"><Ph bg="var(--g1)" /><Ph bg="var(--g2)" /></div>
        </Link>

        <Link href="/about/" className="tile t-about rise" style={st(5)}>
          <Head title="About" size={20} />
          <p className="about-mini">{site.about.short}</p>
        </Link>
      </div>
      <NextPage href="/about/" title="About" />
    </>
  );
}
