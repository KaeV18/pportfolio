import type { Metadata } from "next";
import Ph from "@/components/Ph";
import Reveal from "@/components/Reveal";
import NextPage from "@/components/NextPage";
import PageTitle from "@/components/PageTitle";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "About" };

export default function About() {
  const a = site.about;
  return (
    <>
      <PageTitle title="About" />
      <div className="about-wrap">
        <div className="about-photos">
          {a.portraits.map((src, i) => (
            <Reveal key={src} delay={i * 90}>
              <Ph lb natural src={src} ratio="4/5" title={`${site.name}, photo ${i + 1}`} alt={site.name} className={i === 0 ? "lead-photo" : ""} />
            </Reveal>
          ))}
        </div>
        <div className="about-text">
          <Reveal><p className="lead">{a.lead}</p></Reveal>
          {a.paragraphs.map((t, i) => <Reveal key={i} delay={(i + 1) * 100}><p>{t}</p></Reveal>)}
          <Reveal delay={400}><section className="exp" aria-label="Experience">
            <h2>Experience</h2>
            <ul>
              {a.experience.map((e, i) => (
                <li key={i}><span>{e.place}</span><span>{e.when}</span></li>
              ))}
            </ul>
          </section></Reveal>
        </div>
      </div>
      <NextPage href="/work/" title="Work" />
    </>
  );
}
