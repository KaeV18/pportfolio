import Link from "next/link";

export default function NotFound() {
  return (
    <div className="tile pad28" style={{ minHeight: 320, justifyContent: "space-between" }}>
      <p className="eyebrow">404</p>
      <p className="about-big">This page doesn’t exist.</p>
      <Link href="/" className="strong">Back home →</Link>
    </div>
  );
}
