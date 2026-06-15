"use client";

import { useEffect, useRef, useState } from "react";

// Hunter's personal logo: a little wizard in a blue robe. Built as an inline
// SVG the same way as the (now-retired) Claude mascot — idle float + blink +
// a twinkling hat star are CSS; the cursor-lean and hover/click hop are the
// only JS. All motion respects prefers-reduced-motion.

const ROBE = "#3B5BDB";
const HAT = "#2F49B8";
const BEARD = "#E8ECF6";
const SKIN = "#F2C9A2";
const EYE = "#2A2440";
const STAR = "#F6D86B";

export function WizardLogo({ className = "" }: { className?: string }) {
  const wrapRef = useRef<HTMLSpanElement>(null);
  const rafRef = useRef(0);
  const cursor = useRef<{ x: number; y: number } | null>(null);
  const [hop, setHop] = useState(false);

  // Lean a couple pixels toward the cursor, anywhere in the window.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: PointerEvent) => {
      cursor.current = { x: e.clientX, y: e.clientY };
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        const el = wrapRef.current;
        const p = cursor.current;
        if (!el || !p) return;
        const r = el.getBoundingClientRect();
        const dx = p.x - (r.left + r.width / 2);
        const dy = p.y - (r.top + r.height / 2);
        const d = Math.hypot(dx, dy) || 1;
        el.style.setProperty("--cb-tx", `${((dx / d) * 2.5).toFixed(2)}px`);
        el.style.setProperty("--cb-ty", `${((dy / d) * 2.5).toFixed(2)}px`);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <span ref={wrapRef} className={`wiz-lean inline-flex shrink-0 ${className}`}>
      <span
        className={`wiz-react inline-flex cursor-pointer ${hop ? "wiz-hop" : ""}`}
        onMouseEnter={() => setHop(true)}
        onClick={() => setHop(true)}
        onAnimationEnd={() => setHop(false)}
        title="ihrh"
        aria-hidden
      >
        <svg viewBox="0 0 96 112" className="h-7 w-auto">
          <g className="wiz-float">
            {/* robe */}
            <polygon points="32,58 64,58 80,106 16,106" fill={ROBE} />
            {/* face */}
            <rect x="34" y="42" width="28" height="22" rx="9" fill={SKIN} />
            {/* beard */}
            <polygon
              points="33,57 63,57 60,70 53,82 48,90 43,82 36,70"
              fill={BEARD}
            />
            {/* hat */}
            <polygon points="48,6 22,46 74,46" fill={HAT} />
            <ellipse cx="48" cy="46" rx="31" ry="5" fill={HAT} />
            {/* eyes */}
            <g className="wiz-eyes">
              <circle cx="42" cy="54" r="2.4" fill={EYE} />
              <circle cx="54" cy="54" r="2.4" fill={EYE} />
            </g>
            {/* twinkling hat star */}
            <g className="wiz-star">
              <polygon
                points="48,21 49.6,26.4 55,28 49.6,29.6 48,35 46.4,29.6 41,28 46.4,26.4"
                fill={STAR}
              />
            </g>
          </g>
        </svg>
      </span>
    </span>
  );
}
