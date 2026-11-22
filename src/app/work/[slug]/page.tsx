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

const MENU: [string, string][] = [
  ["Problem", "problem"], ["Process", "process"], ["Decisions", "decisions"], ["Solution", "solution"], ["Results", "results"],
];

const Sec = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <Reveal>
    <section id={id} data-sec className="sec">
      <h2>{title}</h2>
      {children}
    </section>
  </Reveal>
);
const Txt = ({ children }: { children: React.ReactNode }) => <p className="txt">{children}</p>;
const Decision = ({ n }: { n: number }) => (
  <div className={`decision${n % 2 ? "" : " flip"}`}>
    <Ph label="[Screen or diagram 4:3]" ratio="4/3" />
    <div className="d">
      <b>[Decision {n}]</b>
      <p><span>Why</span>[The evidence or constraint behind it]</p>
      <p><span>Trade-off</span>[What you gave up]</p>
    </div>
  </div>
);

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];
  const steps = p.process?.length ? p.process : defaultProcess;
  return (
    <>
      <Link href="/work/" className="back">← Work</Link>
      <div className="cs-head">
        <h1>{p.name}</h1>
        <p>{p.claim}</p>
      </div>
      <div className={p.cover ? "stage big" : "stage big empty"}>
        <Ph src={p.cover} label="[Hero image 16:9]" />
      </div>
      <div className="meta-grid">
        {[["Role", p.role], ["Team", p.team], ["Timeline", p.duration], ["Tools", p.tools]].map(([l, v]) => (
          <div key={l}><p className="eyebrow">{l}</p><p>{v}</p></div>
        ))}
      </div>
      <div className="stats">
        {[1, 2, 3].map((n) => (
          <div className="stat" key={n}><b>[Result {n}]</b><span>[What it measures]</span></div>
        ))}
      </div>

      <nav className="cs-nav" aria-label="Case study sections">
        {MENU.map(([l, id]) => <button type="button" key={id} data-jump={id}>{l}</button>)}
      </nav>

      <Reveal>
        <section id="problem" data-sec className="sec duo">
          <div><h2>Problem</h2><Txt>[Who is stuck, on what, and how you know.]</Txt></div>
          <div><h2>Constraints</h2><Txt>[Time, tech, team, data.]</Txt></div>
        </section>
      </Reveal>

      <Reveal>
        <section id="process" data-sec className="sec" aria-label="Process">
          <div className="sec-head"><h2>Process</h2><span className="counter">{String(steps.length).padStart(2, "0")} steps</span></div>
          <div className="rail" tabIndex={0}>
            {steps.map((s, n) => (
              <figure className="pstep" key={n}>
                <Ph lb src={s.img} label="[Sketch, frame or photo]" ratio="4/3" title={`${s.label}`} />
                <figcaption>
                  <span className="counter">{String(n + 1).padStart(2, "0")} · {s.label}</span>
                  <span>{s.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </Reveal>

      <Sec id="decisions" title="Key decisions"><Decision n={1} /><Decision n={2} /></Sec>
      <Sec id="solution" title="Solution">
        <Txt>[What shipped.]</Txt>
        <Ph label="[Final design 16:9]" ratio="16/9" style={{ borderRadius: 28 }} />
      </Sec>
      <Sec id="results" title="Results"><Txt>[Outcome, with evidence. What you would change next.]</Txt></Sec>
      <NextPage href={`/work/${next.slug}/`} title={next.name} />
    </>
  );
}
