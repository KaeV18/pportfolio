import Link from "next/link";
import type { Metadata } from "next";
import Ph from "@/components/Ph";
import Reveal from "@/components/Reveal";
import PageTitle from "@/components/PageTitle";
import NextPage from "@/components/NextPage";
import { projects } from "@/content/site";

export const metadata: Metadata = { title: "Work" };

export default function Work() {
  return (
    <>
      <PageTitle title="Work" count={`${String(projects.length).padStart(2, "0")} projects`} />
      <div className="launches">
        {projects.map((p, i) => (
          <Reveal key={p.slug}>
            <Link href={`/work/${p.slug}/`} className="launch">
              {p.cover ? (
                <div className="stage">
                  <Ph src={p.cover} label="" />
                </div>
              ) : null}
              <div className="launch-meta">
                <div className="lm-left">
                  <span className="counter">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="t">{p.name}</h2>
                </div>
                <div className="lm-right">
                  <p className="claim">{p.claim}</p>
                  <div className="lm-foot">
                    <span className="sub">{p.role} · {p.team} · {p.year}</span>
                    <span className="strong">Case study <span className="arrow">→</span></span>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
      <NextPage href="/stills/" title="Stills" />
    </>
  );
}
