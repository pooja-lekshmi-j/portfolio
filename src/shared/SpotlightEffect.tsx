"use client";

import { useEffect, useRef, useCallback } from "react";

export default function SpotlightEffect() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (spotlightRef.current) {
        spotlightRef.current.style.background = `radial-gradient(600px at ${e.clientX}px ${e.clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [handleMouseMove]);

  return (
    <div
      ref={spotlightRef}
      // keep the spotlight fixed so it follows the viewport while scrolling
      className="pointer-events-none fixed inset-0 z-50 transition duration-300"
      aria-hidden="true"
    />
  );
}
