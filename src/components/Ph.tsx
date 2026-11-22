/* Image block. Shows the image if `src` is set, otherwise a gray placeholder.
   natural: keep the photo's own proportions (no crop). lb: click opens the lightbox (public/lightbox.js). */
type Props = {
  src?: string; label?: string; ratio?: string; bg?: string; className?: string;
  style?: React.CSSProperties; alt?: string; natural?: boolean; lb?: boolean; title?: string;
};

export default function Ph({ src, label, ratio, bg, className = "", style = {}, alt = "", natural, lb, title }: Props) {
  const nat = !!(natural && src);
  const lbAttrs = lb
    ? {
        "data-lb": "",
        "data-src": src ?? "",
        "data-title": title ?? alt,
        "data-ratio": ratio ?? "",
        "data-label": label ?? "",
        role: "button" as const,
        tabIndex: 0,
        "aria-label": `View ${title || alt || "image"} larger`,
      }
    : {};
  return (
    <div
      className={`ph${nat ? " nat" : ""} ${className}`}
      style={{ aspectRatio: nat ? undefined : ratio, background: src ? undefined : bg, ...style }}
      {...lbAttrs}
    >
      {src ? <img src={src} alt={alt || title || ""} loading="lazy" /> : label ?? ""}
    </div>
  );
}
