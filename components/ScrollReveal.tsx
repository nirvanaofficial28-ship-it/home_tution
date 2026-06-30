"use client";

import { useEffect, useRef } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
  delay?: number;
}

export default function ScrollReveal({ children, className = "", stagger = false, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (delay) el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
        } else {
          // Re-animate when scrolled back out of view
          el.classList.remove("in-view");
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`${stagger ? "reveal-stagger" : "reveal"} ${className}`}>
      {children}
    </div>
  );
}
