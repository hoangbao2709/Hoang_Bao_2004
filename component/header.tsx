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
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    const sections = menu
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

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
        threshold: [0.25, 0.4, 0.6],
        rootMargin: "-20% 0px -35% 0px",
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

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-5 left-0  right-0 mx-auto z-[1000] flex h-20 w-[900px] items-center justify-center rounded-full border border-white/10 px-6
      ${
        scrolled
          ? "bg-[#0f0f0f]/80 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.4)]"
          : "bg-[#1A1A1A]"
      }`}
    >
      <motion.p
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        onClick={() => handleScrollToSection("home")}
        className="absolute left-10 cursor-pointer [font-family:var(--font-heading)] text-2xl font-bold text-[#FF3B30] drop-shadow-[0_0_10px_rgba(255,59,48,0.5)]"
      >
        Hoàng Bảo
      </motion.p>

      <div className="absolute right-10 flex items-center gap-2 text-sm text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#3A3A40] bg-[#2A2A2E]"
        >
          {"</>"}
        </motion.div>

        {menu.map((item, index) => {
          const isActive = activeSection === item.id;

          return (
            <motion.button
              key={item.id}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScrollToSection(item.id)}
              className={`relative rounded-2xl px-4 py-2 transition duration-300 cursor-pointer ${
                isActive
                  ? "bg-[#ff3b30]/15 text-[#FF3B30] shadow-[0_0_18px_rgba(255,59,48,0.18)]"
                  : "text-white hover:bg-[#ff3b30]/10"
              }`}
            >
              <span className="relative z-10">{item.label}</span>

              <span
                className={`absolute inset-0 rounded-2xl blur-md transition ${
                  isActive
                    ? "bg-[#ff3b30]/10 opacity-100"
                    : "bg-[#ff3b30]/10 opacity-0 group-hover:opacity-100"
                }`}
              />
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}