"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    description:
      "Build modern, responsive, and user-friendly interfaces with ReactJS, NextJS, TailwindCSS, Bootstrap, HTML, CSS, and JavaScript.",
    skills: [
      "ReactJS",
      "NextJS",
      "TailwindCSS",
      "Bulma",
      "Bootstrap",
      "EJS",
      "CSS",
      "HTML",
      "JavaScript",
    ],
  },
  {
    title: "Backend",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    description:
      "Develop scalable server-side systems, REST APIs, authentication flows, and application logic with Django, ExpressJS, PHP, C, C++, and Python.",
    skills: ["Django", "ExpressJS", "PHP", "C++", "C", "Python"],
  },
  {
    title: "Database",
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1200&auto=format&fit=crop",
    description:
      "Design and manage reliable data systems using MySQL and MongoDB for performance, consistency, and scalability.",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Tools & Platforms",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    description:
      "Use modern development tools and deployment platforms including Git, GitHub, Figma, Draw.io, AWS, and Postman.",
    skills: ["Git", "GitHub", "Figma", "Draw.io", "AWS", "Postman"],
  },
];

export default function SkillsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });

  return (
    <section
      ref={sectionRef}
      className="relative z-10 overflow-hidden px-4 py-8 sm:px-6 sm:py-10 lg:px-8 [font-family:var(--font-heading)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-10 text-center sm:mb-12 lg:mb-16"
      >
        <h1 className="font-[var(--font-heading)] text-3xl font-semibold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.08)] sm:text-5xl md:text-6xl lg:text-7xl">
          Tech Stack
        </h1>
        <p className="mt-3 text-sm text-white/60 sm:mt-4 sm:text-base">
          Technologies and tools I work with
        </p>
      </motion.div>

      <div className="mx-auto max-w-7xl">
        {/* Mobile + Tablet */}
        <div className="flex flex-col gap-4 lg:hidden">
          {skillGroups.map((group, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 40, scale: 0.98 }
                }
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                onClick={() => setActiveIndex(index)}
                className={`group relative overflow-hidden rounded-[22px] border transition-all duration-300 ${
                  isActive
                    ? "border-[#ff3b30]/45 shadow-[0_0_24px_rgba(255,59,48,0.12)]"
                    : "border-white/10"
                }`}
              >
                <motion.img
                  src={group.image}
                  alt={group.title}
                  animate={isActive ? { scale: 1.04 } : { scale: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20" />

                <div className="relative min-h-[220px] p-5 sm:min-h-[250px] sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="text-2xl font-semibold text-white sm:text-3xl">
                      {group.title}
                    </h2>

                    <span
                      className={`mt-1 shrink-0 rounded-full border px-3 py-1 text-xs transition ${
                        isActive
                          ? "border-[#ff3b30]/60 bg-[#ff3b30]/15 text-[#ff6b61]"
                          : "border-white/15 bg-white/5 text-white/70"
                      }`}
                    >
                      {isActive ? "Open" : "Tap"}
                    </span>
                  </div>

                  <motion.div
                    initial={false}
                    animate={
                      isActive
                        ? { opacity: 1, height: "auto", marginTop: 16 }
                        : { opacity: 0.92, height: "auto", marginTop: 14 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    <p
                      className={`max-w-2xl leading-7 text-white/80 transition-all duration-300 sm:text-lg sm:leading-8 ${
                        isActive
                          ? "line-clamp-none"
                          : "line-clamp-2 text-sm sm:text-base"
                      }`}
                    >
                      {group.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2.5 sm:mt-5 sm:gap-3">
                      {group.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.85 }}
                          animate={
                            isActive && isInView
                              ? { opacity: 1, scale: 1 }
                              : { opacity: 0.9, scale: 1 }
                          }
                          transition={{
                            duration: 0.25,
                            delay: 0.08 + skillIndex * 0.03,
                          }}
                          className="rounded-full border border-[#ff3b30]/75 bg-white/10 px-3 py-1.5 text-xs text-[#ff6b61] backdrop-blur-sm transition duration-300 hover:bg-[#ff3b30]/15 sm:px-4 sm:py-2 sm:text-sm"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="hidden h-[520px] gap-4 overflow-hidden rounded-[28px] lg:flex xl:h-[560px]"
        >
          {skillGroups.map((group, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 50, scale: 0.96 }
                }
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                onMouseEnter={() => setActiveIndex(index)}
                className={`group relative cursor-pointer overflow-hidden rounded-[28px] border border-white/10 transition-all duration-500 ease-out ${
                  isActive
                    ? "flex-[5] border-[#ff3b30]/45 shadow-[0_0_30px_rgba(255,59,48,0.14)]"
                    : "flex-[1.2] hover:border-white/20"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  willChange: "transform, flex",
                }}
              >
                <span className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-hover:bg-[radial-gradient(circle_at_center,rgba(255,59,48,0.14),transparent_45%)]" />

                <span
                  className={`pointer-events-none absolute inset-0 z-10 rounded-[28px] border transition duration-300 ${
                    isActive
                      ? "border-[#ff3b30]/35 opacity-100"
                      : "border-transparent opacity-0"
                  }`}
                />

                <motion.img
                  src={group.image}
                  alt={group.title}
                  animate={isActive ? { scale: 1.06 } : { scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/45" />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20 transition-all duration-500 ${
                    isActive ? "opacity-100" : "opacity-80"
                  }`}
                />

                {!isActive && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 flex items-end justify-center pb-10"
                  >
                    <div className="[writing-mode:vertical-rl] rotate-180 text-2xl font-semibold tracking-[0.08em] text-white">
                      {group.title}
                    </div>
                  </motion.div>
                )}

                <div
                  className={`absolute inset-x-0 bottom-0 p-6 xl:p-8 transition-all duration-500 ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-8 opacity-0"
                  }`}
                  style={{ transform: isActive ? "translateZ(30px)" : undefined }}
                >
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isActive && isInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.35 }}
                    className="text-3xl font-semibold text-white xl:text-4xl"
                  >
                    {group.title}
                  </motion.h2>

                  <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={
                      isActive && isInView
                        ? { opacity: 1, scaleX: 1 }
                        : { opacity: 0, scaleX: 0 }
                    }
                    transition={{ duration: 0.35, delay: 0.05 }}
                    className="mt-4 h-[2px] w-32 origin-left bg-white/40 xl:w-40"
                  />

                  <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    animate={
                      isActive && isInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 24 }
                    }
                    transition={{ duration: 0.4, delay: 0.08 }}
                    className="mt-5 max-w-2xl text-base leading-7 text-white/85 xl:mt-6 xl:text-lg xl:leading-8"
                  >
                    {group.description}
                  </motion.p>

                  <div className="mt-5 flex flex-wrap gap-2.5 xl:mt-6 xl:gap-3">
                    {group.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={
                          isActive && isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0.8 }
                        }
                        transition={{
                          duration: 0.28,
                          delay: 0.12 + skillIndex * 0.04,
                        }}
                        className="rounded-full border border-[#ff3b30]/75 bg-white/10 px-4 py-2 text-sm text-[#ff6b61] backdrop-blur-sm transition duration-300 hover:bg-[#ff3b30]/15"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}