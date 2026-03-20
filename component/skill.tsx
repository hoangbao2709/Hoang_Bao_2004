"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

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

  return (
    <section className="relative z-10 px-6 py-20">
      <div className="mb-16 text-center">
        <h1 className="font-[var(--font-heading)] text-5xl font-semibold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.08)] md:text-7xl">
          Tech Stack
        </h1>
        <p className="mt-4 text-white/60">
          Technologies and tools I work with
        </p>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="flex h-[520px] gap-4 overflow-hidden rounded-[28px]">
          {skillGroups.map((group, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={group.title}
                onMouseEnter={() => setActiveIndex(index)}
                className={`group cursor-pointer relative overflow-hidden rounded-[28px] border border-white/10 transition-all duration-500 ease-out ${
                  isActive ? "flex-[5]" : "flex-[1.2]"
                }`}
              >
                <img
                  src={group.image}
                  alt={group.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-black/45" />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20 transition-all duration-500 ${
                    isActive ? "opacity-100" : "opacity-80"
                  }`}
                />

                {!isActive && (
                  <div className="absolute inset-0 flex items-end justify-center pb-10">
                    <div className="[writing-mode:vertical-rl] rotate-180 text-2xl font-semibold tracking-[0.08em] text-white">
                      {group.title}
                    </div>
                  </div>
                )}

                <div
                  className={`absolute inset-x-0 bottom-0 p-8 transition-all duration-500 ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-8 opacity-0"
                  }`}
                >
                  <h2 className="text-4xl font-semibold text-white">
                    {group.title}
                  </h2>

                  <div className="mt-4 h-[2px] w-40 bg-white/40" />

                  <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
                    {group.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#ff3b30] bg-white/10 px-4 py-2 text-sm text-red backdrop-blur-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* <button className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/40 px-6 py-3 text-white transition hover:bg-white hover:text-black">
                    Explore more
                    <ArrowRight size={18} />
                  </button> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}