/* End-of-page panel. Keep scrolling (or click) and the next page rises in. Behaviour: public/scrollnext.js */
export default function NextPage({ href, title }: { href: string; title: string }) {
  return (
    <a className="next-page" href={href} data-next data-title={title}>
      <span className="np-label">Keep scrolling</span>
      <span className="np-title">{title}</span>
      <span className="np-arrow" aria-hidden="true">↓</span>
    </a>
  );
}
