import type { Metadata } from "next";
import Ph from "@/components/Ph";
import Reveal from "@/components/Reveal";
import NextPage from "@/components/NextPage";
import PageTitle from "@/components/PageTitle";
import { stills, STILL_RATIOS } from "@/content/site";

export const metadata: Metadata = { title: "Stills" };
const tones = ["var(--g1)", "var(--g2)", "var(--g3)", "var(--g4)"];

export default function Stills() {
  const items = stills.length
    ? stills.map((src) => ({ src, ratio: "" }))
    : STILL_RATIOS.map((ratio) => ({ src: "", ratio }));
  return (
    <>
      <PageTitle title="Stills" count={stills.length ? `${stills.length} photos` : "[N] photos"} />
      <div className="masonry">
        {items.map((it, i) => (
          <Reveal key={i} delay={(i % 3) * 90}>
            <Ph
              lb natural src={it.src} ratio={it.ratio} title={`Still ${String(i + 1).padStart(2, "0")}`}
              label={it.src ? undefined : `still ${String(i + 1).padStart(2, "0")}`}
              bg={it.src ? undefined : tones[i % 4]}
            />
          </Reveal>
        ))}
      </div>
      <NextPage href="/letterforms/" title="Letterforms" />
    </>
  );
}
