"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const menu = [
  { label: "HOME", id: "home" },
  { label: "ABOUT", id: "about" },
  { label: "PROJECT", id: "project" },
  { label: "SKILL", id: "skill" },
  { label: "EXPERIENCE", id: "experience" },
  { label: "CONTACT", id: "contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    const sections = menu
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) {
      return () => window.removeEventListener("scroll", handleScroll);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection?.target?.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        threshold: [0.2, 0.35, 0.5, 0.7],
        rootMargin: "-18% 0px -45% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  const handleScrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const headerOffset = 100;
    const elementTop = section.getBoundingClientRect().top + window.scrollY;
    const offsetTop = elementTop - headerOffset;

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        top: scrolled ? 12 : 0,
      }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`fixed inset-x-0 z-[1000] transition-all duration-300 ${
        scrolled ? "px-3 sm:px-4" : "px-0"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-7xl items-center justify-between gap-3 border px-3 py-3 transition-all duration-300 sm:px-5 lg:px-6
        ${
          scrolled
            ? "rounded-2xl border-white/10 bg-[#0f0f0f]/75 shadow-[0_0_30px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:rounded-full"
            : "rounded-none border-transparent bg-transparent shadow-none backdrop-blur-0 py-4"
        }`}
      >
        <motion.button
          type="button"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15 }}
          onClick={() => handleScrollToSection("home")}
          className="shrink-0 cursor-pointer text-left [font-family:var(--font-heading)] text-lg font-bold text-[#FF3B30] drop-shadow-[0_0_10px_rgba(255,59,48,0.45)] transition hover:opacity-90 sm:text-xl lg:text-2xl"
        >
          Hoàng Bảo
        </motion.button>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-2 sm:gap-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className={`hidden shrink-0 items-center justify-center border text-sm text-white/85 transition-all duration-300 sm:flex ${
              scrolled
                ? "h-10 w-10 rounded-xl border-[#3A3A40] bg-[#2A2A2E] lg:h-12 lg:w-12 lg:rounded-2xl"
                : "h-10 w-10 rounded-xl border-white/10 bg-white/5 lg:h-12 lg:w-12 lg:rounded-2xl"
            }`}
          >
            {"</>"}
          </motion.div>

          <nav className="min-w-0 max-w-full overflow-x-auto scrollbar-none">
            <div className="flex min-w-max items-center gap-1.5 sm:gap-2">
              {menu.map((item, index) => {
                const isActive = activeSection === item.id;

                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 + index * 0.07 }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => handleScrollToSection(item.id)}
                    className={`group relative shrink-0 cursor-pointer rounded-xl px-3 py-2 text-[11px] font-medium tracking-[0.08em] transition-all duration-300 sm:rounded-2xl sm:px-4 sm:text-xs lg:text-sm ${
                      isActive
                        ? "bg-[#ff3b30]/15 text-[#FF3B30] shadow-[0_0_18px_rgba(255,59,48,0.16)]"
                        : "text-white/85 hover:bg-[#ff3b30]/10 hover:text-white"
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>

                    <span
                      className={`pointer-events-none absolute inset-0 rounded-xl blur-md transition-all duration-300 sm:rounded-2xl ${
                        isActive
                          ? "bg-[#ff3b30]/12 opacity-100"
                          : "bg-[#ff3b30]/10 opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </motion.button>
                );
              })}
            </div>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}