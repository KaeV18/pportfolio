/* Markup only. Behaviour lives in public/cat.js. */
export default function Cat() {
  return (
    <div className="cat" id="cat" data-state="sleep" data-flip="0">
      <button type="button" className="cat-btn" aria-label="Wake the cat">
        <svg className="asleep" viewBox="0 0 56 36" aria-hidden="true">
          <g className="breathe"><ellipse cx="26" cy="26" rx="19" ry="8" fill="var(--ink)" /></g>
          <path d="M8 28 C6 34.5 21 35.5 31 33" fill="none" stroke="var(--ink)" strokeWidth="3.4" strokeLinecap="round" />
          <circle cx="41" cy="28" r="6" fill="var(--ink)" />
          <path d="M36.6 24.6 L37.4 19.4 L41.6 22.8Z" fill="var(--ink)" />
          <path d="M41.2 22.6 L45.6 19.4 L46.4 25.2Z" fill="var(--ink)" />
          <path d="M39.8 29 Q42 30.6 44.2 29" fill="none" stroke="var(--bg)" strokeWidth="1.2" strokeLinecap="round" />
          <g className="zz" fill="var(--muted)" fontSize="7" fontFamily="var(--sans)">
            <text x="46" y="14">z</text>
            <text x="50.5" y="8.5" fontSize="5.5">z</text>
          </g>
        </svg>
        <svg className="awake" viewBox="0 0 56 36" aria-hidden="true">
          <g className="tail"><path d="M10 19 C2 18 2 8 8.5 7" fill="none" stroke="var(--ink)" strokeWidth="3.6" strokeLinecap="round" /></g>
          <rect className="leg legB" x="16.5" y="24" width="4" height="10" rx="2" fill="#4a4a4a" />
          <rect className="leg legA" x="34.5" y="24" width="4" height="10" rx="2" fill="#4a4a4a" />
          <g className="torso">
            <rect x="8" y="14" width="30" height="13" rx="6.5" fill="var(--ink)" />
            <circle cx="42" cy="14" r="7.5" fill="var(--ink)" />
            <path d="M36.5 10 L37.5 2.5 L43 7.5Z" fill="var(--ink)" />
            <path d="M43 7.5 L48.5 2.5 L49.5 10Z" fill="var(--ink)" />
            <circle className="eye" cx="45.6" cy="13.4" r="1.4" fill="var(--bg)" />
          </g>
          <rect className="leg legA" x="11" y="24" width="4" height="10" rx="2" fill="var(--ink)" />
          <rect className="leg legB" x="30" y="24" width="4" height="10" rx="2" fill="var(--ink)" />
        </svg>
      </button>
    </div>
  );
}
