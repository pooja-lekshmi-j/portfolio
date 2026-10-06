"use client";

import { useEffect, useRef, useState } from "react";

const translateMap = {
  up: "translate-y-8",
  down: "-translate-y-8",
  left: "translate-x-8",
  right: "-translate-x-8",
  none: "",
} as const;

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: keyof typeof translateMap;
  scale?: boolean;
}

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  scale = false,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 scale-100 translate-x-0 translate-y-0"
          : `opacity-0 ${translateMap[direction]} ${scale ? "scale-95" : ""}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
