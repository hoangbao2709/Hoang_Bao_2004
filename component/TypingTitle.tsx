"use client";
import { useEffect, useState } from "react";

const text = "Welcome To My Portfolio";

export default function TypingTitle() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i + 1));
      i++;

      if (i === text.length) clearInterval(interval);
    }, 90); // tốc độ gõ

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden font-[var(--font-heading)] text-4xl md:text-7xl uppercase tracking-[0.1em] text-white">
        <span className="inline-block animate-reveal drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            {displayText}
        </span>
        <span className="animate-blink ml-2 text-white/70">|</span>
    </div>
  );
}