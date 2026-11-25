import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Ph from "@/components/Ph";
import Reveal from "@/components/Reveal";
import NextPage from "@/components/NextPage";
import { projects, defaultProcess } from "@/content/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: projects.find((p) => p.slug === slug)?.name ?? "Work" };
}

const Sec = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <Reveal>
    <section id={id} data-sec className="sec">
      <h2>{title}</h2>
      {children}
    </section>
  </Reveal>
);
const Txt = ({ children }: { children: React.ReactNode }) => <p className="txt">{children}</p>;

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];
  const steps = p.process?.length ? p.process : defaultProcess;
  const menu: [string, string][] = [
    p.problem ? ["Problem", "problem"] : null,
    ["Process", "process"],
    p.decisions?.length ? ["Decisions", "decisions"] : null,
    p.solution ? ["Solution", "solution"] : null,
    p.results ? ["Results", "results"] : null,
  ].filter(Boolean) as [string, string][];
  return (
    <>
      <Link href="/work/" className="back">← Work</Link>
      <div className="cs-head">
        <h1>{p.name}</h1>
        <p>{p.claim}</p>
      </div>
      {p.cover ? (
        <div className="stage big">
          <Ph src={p.cover} label="" />
        </div>
      ) : null}
      <div className="meta-grid">
        {[["Role", p.role], ["Team", p.team], ["Timeline", p.duration], ["Tools", p.tools]].map(([l, v]) => (
          <div key={l}><p className="eyebrow">{l}</p><p>{v}</p></div>
        ))}
      </div>
      {p.stats?.length ? (
        <div className="stats">
          {p.stats.map((x) => (
            <div className="stat" key={x.label}><b>{x.value}</b><span>{x.label}</span></div>
          ))}
        </div>
      ) : null}

      <nav className="cs-nav" aria-label="Case study sections">
        {menu.map(([l, id]) => <button type="button" key={id} data-jump={id}>{l}</button>)}
      </nav>

      {p.problem ? (
        <Reveal>
          <section id="problem" data-sec className="sec duo">
            <div><h2>Problem</h2><Txt>{p.problem}</Txt></div>
            {p.constraints ? <div><h2>Constraints</h2><Txt>{p.constraints}</Txt></div> : null}
          </section>
        </Reveal>
      ) : null}

      <Reveal>
        <section id="process" data-sec className="sec" aria-label="Process">
          <div className="sec-head"><h2>Process</h2><span className="counter">{String(steps.length).padStart(2, "0")} steps</span></div>
          <div className={steps.some((s) => s.img) ? "rail" : "steps-text"} tabIndex={0}>
            {steps.map((s, n) => (
              <figure className="pstep" key={n}>
                {s.img ? <Ph lb src={s.img} label="" ratio="4/3" title={`${s.label}`} /> : null}
                <figcaption>
                  <span className="counter">{String(n + 1).padStart(2, "0")} · {s.label}</span>
                  <span>{s.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </Reveal>

      {p.decisions?.length ? (
        <Sec id="decisions" title="Key decisions">
          {p.decisions.map((d, n) => (
            <div className={`decision${n % 2 ? " flip" : ""}${d.img ? "" : " noimg"}`} key={d.title}>
              {d.img ? <Ph src={d.img} label="" ratio="4/3" /> : null}
              <div className="d">
                <b>{d.title}</b>
                <p><span>Why</span>{d.why}</p>
                <p><span>Trade-off</span>{d.tradeoff}</p>
              </div>
            </div>
          ))}
        </Sec>
      ) : null}
      {p.solution ? (
        <Sec id="solution" title="Solution">
          <Txt>{p.solution}</Txt>
          {p.link ? <p className="txt"><a className="strong" href={p.link.href} target="_blank" rel="noopener noreferrer">{p.link.label} <span className="arrow">→</span></a></p> : null}
        </Sec>
      ) : null}
      {p.results ? <Sec id="results" title="Results"><Txt>{p.results}</Txt></Sec> : null}
      <NextPage href={`/work/${next.slug}/`} title={next.name} />
    </>
  );
}
