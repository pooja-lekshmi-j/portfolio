"use client";

import { useEffect, useRef, useState } from "react";

export default function TypewriterText({
  text,
  className = "",
  speed = 60,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let interval: ReturnType<typeof setInterval> | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);

        let i = 0;
        interval = setInterval(() => {
          i += 1;
          setDisplayed(text.slice(0, i));
          if (i >= text.length && interval) clearInterval(interval);
        }, speed);
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (interval) clearInterval(interval);
    };
  }, [text, speed]);

  return (
    // aria-label carries the full text so screen readers skip the mid-typing state
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">
        {displayed}
        <span className="typewriter-cursor" />
      </span>
    </span>
  );
}
