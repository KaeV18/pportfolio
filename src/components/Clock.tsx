"use client";
import { useEffect, useState } from "react";

type Parts = { h: string; m: string; ap: string };

export default function Clock({ tz, city }: { tz: string; city: string }) {
  const [p, setP] = useState<Parts | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", { timeZone: tz, hour: "numeric", minute: "2-digit" });
    const tick = () => {
      const parts = fmt.formatToParts(new Date());
      const get = (t: string) => parts.find((x) => x.type === t)?.value ?? "";
      setP({ h: get("hour"), m: get("minute"), ap: get("dayPeriod") });
    };
    tick();
    const id = setInterval(tick, 5_000);
    return () => clearInterval(id);
  }, [tz]);
  return (
    <p className="clock" aria-label={`Local time in ${city}`}>
      {city}{" "}
      {p ? (
        <span className="time">
          {p.h}<span className="colon">:</span>{p.m} {p.ap}
        </span>
      ) : (
        " "
      )}
    </p>
  );
}
