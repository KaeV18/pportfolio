export default function PageTitle({ title, count }: { title: string; count?: string }) {
  return (
    <div className="title-row">
      <h1>{title}</h1>
      {count ? <span className="counter">{count}</span> : null}
    </div>
  );
}
