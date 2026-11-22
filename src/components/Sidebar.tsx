"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Clock from "./Clock";
import { site } from "@/content/site";

const st = (i: number) => ({ "--i": i } as React.CSSProperties);

export default function Sidebar() {
  const path = usePathname() ?? "/";
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);

  return (
    <aside className={`side${open ? " open" : ""}`}>
      <div className="side-top">
        <Link href="/" className="wordmark">{site.name}</Link>
        <div className="top-actions">
          <a className="top-cta" href={site.links.bookCall} target="_blank" rel="noopener noreferrer">Book a call</a>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="side-body"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div className="side-body" id="side-body">
        <div className="side-inner">
          <p className="side-intro rise" style={st(1)}>{site.role}</p>
          <div className="divider" />
          <nav className="nav" aria-label="Sections">
            <ul>
              {site.nav.map((n, i) => (
                <li key={n.href} className="rise" style={st(i + 2)}>
                  <Link href={n.href} aria-current={path.startsWith(n.href) ? "page" : undefined}>
                    <span className="num" aria-hidden="true">0{i + 1}</span>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="side-bottom rise" style={st(7)}>
            <a className="btn-dark" href={site.links.bookCall} target="_blank" rel="noopener noreferrer">
              Book a call<span className="go" aria-hidden="true">↗</span>
            </a>
            <div className="pills">
              <a className="pill" href={site.links.resume} target="_blank" rel="noopener noreferrer">Resume ↗</a>
              <a className="pill" href={site.links.email}>Email</a>
            </div>
            <div className="divider" style={{ margin: "12px 0 6px" }} />
            <Clock tz={site.timezone} city={site.city} />
            <div className="socials">
              {site.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"><span>{s.label}</span></a>
              ))}
            </div>
            <p className="credit">
              Made with Claude and{" "}
              <a href={site.links.credit} target="_blank" rel="noopener noreferrer">this Fred Again set</a>
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
