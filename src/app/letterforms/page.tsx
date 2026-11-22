import type { Metadata } from "next";
import Ph from "@/components/Ph";
import Reveal from "@/components/Reveal";
import NextPage from "@/components/NextPage";
import PageTitle from "@/components/PageTitle";
import { letterforms, LETTER_RATIOS } from "@/content/site";

export const metadata: Metadata = { title: "Letterforms" };
const tones = ["var(--g1)", "var(--g2)", "var(--g3)", "var(--g4)"];

export default function Letterforms() {
  const pieces = letterforms.length
    ? letterforms
    : LETTER_RATIOS.map((ratio, i) => ({ src: "", title: `[Piece ${i + 1} title]`, year: "[Year]", ratio }));
  const cols: typeof pieces[] = [[], [], []];
  pieces.forEach((p, i) => cols[i % 3].push(p));
  return (
    <>
      <PageTitle title="Letterforms" count={letterforms.length ? `${letterforms.length} pieces` : "[N] pieces"} />
      <div className="cols">
        {cols.map((c, ci) => (
          <div className="col" key={ci}>
            {c.map((p, i) => (
              <Reveal key={i} delay={ci * 110}>
              <figure className="piece">
                <Ph lb natural src={p.src} ratio={p.ratio} title={p.title} label={p.src ? undefined : `[Artwork ${p.ratio.replace("/", ":")}]`} bg={p.src ? undefined : tones[(ci + i) % 4]} alt={p.title} />
                <figcaption><span>{p.title}</span><span>{p.year}</span></figcaption>
              </figure>
              </Reveal>
            ))}
          </div>
        ))}
      </div>
      <NextPage href="/" title="Home" />
    </>
  );
}
