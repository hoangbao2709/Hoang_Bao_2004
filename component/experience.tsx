"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Braces,
  FileCode2,
  Palette,
  Database,
  Code2,
  LoaderCircle,
  User,
  Briefcase,
  FolderKanban,
  Wrench,
} from "lucide-react";
const experiences = [
  {
    role: "Full-Stack Developer Intern",
    company: "Eyecode",
    time: "2025 • 6 months",
    description: [
      "Developed an online IELTS testing platform using ReactJS, Django, and MongoDB.",
      "Built real-time exam interfaces with timers and dynamic question rendering.",
      "Optimized RESTful APIs for high-concurrency submissions and automated scoring.",
      "Designed scalable database schemas for question banks and analytics.",
      "Implemented authentication and state management for cross-device experience.",
    ],
  },
  {
    role: "Front-End Developer Intern",
    company: "THD Cyber Security",
    time: "2025 • 3 months",
    description: [
      "Developed HRM and attendance modules for an internal ERP system.",
      "Integrated Geolocation and Face Recognition for employee verification.",
      "Built multi-role dashboards with Role-Based Access Control (RBAC).",
      "Consumed RESTful APIs for real-time attendance and payroll data.",
      "Applied security-first UI practices for sensitive data protection.",
    ],
  },
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.2 });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement>,
    glowId: string
  ) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-8px)
      scale(1.01)
    `;

    const glow = card.querySelector(`#${glowId}`) as HTMLSpanElement | null;
    if (glow) {
      glow.style.opacity = "1";
      glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,59,48,0.20), transparent 45%)`;
    }
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLDivElement>,
    glowId: string
  ) => {
    const card = e.currentTarget;
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)";

    const glow = card.querySelector(`#${glowId}`) as HTMLSpanElement | null;
    if (glow) {
      glow.style.opacity = "0";
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative z-10 overflow-hidden px-6 py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-16 text-center [font-family:var(--font-heading)]"
      >
         
        <div className="mb-4 flex items-center justify-center gap-2 text-white/70">
          <Wrench size={60} />
          <h1 className="text-5xl font-semibold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.08)] md:text-7xl">
            Experience
          </h1>   
        </div>
      </motion.div>

      <div className="mx-auto max-w-5xl space-y-8">
        {experiences.map((exp, index) => {
          const glowId = `experience-glow-${index}`;

          return (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 60, scale: 0.96 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 60, scale: 0.96 }
              }
              transition={{
                duration: 0.6,
                delay: index * 0.14,
                ease: "easeOut",
              }}
              onMouseMove={(e) => handleMouseMove(e, glowId)}
              onMouseLeave={(e) => handleMouseLeave(e, glowId)}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d0d] p-6 transition-[border,box-shadow,transform] duration-200 hover:border-[#ff3b30]/45 hover:shadow-[0_0_35px_rgba(255,59,48,0.16)] md:p-8"
              style={{
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              <span
                id={glowId}
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200"
              />

              <span className="pointer-events-none absolute inset-0 rounded-[28px] border border-transparent opacity-0 transition duration-300 group-hover:border-[#ff3b30]/30 group-hover:opacity-100" />

              <div
                className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-[#ff3b30] via-[#ff3b30]/40 to-transparent"
                style={{ transform: "translateZ(24px)" }}
              />

              <div
                className="relative"
                style={{ transform: "translateZ(28px)" }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between [font-family:var(--font-heading)]">
                  <div>
                    <h2 className="text-xl font-semibold text-white md:text-2xl">
                      {exp.role}
                    </h2>
                    <div className="mt-2 text-base font-medium text-[#ff5a4f]">
                      {exp.company}
                    </div>
                  </div>

                  <span className="mt-2 inline-flex w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/55 md:mt-0">
                    {exp.time}
                  </span>
                </div>

                <ul className="mt-6 space-y-3 text-white/70">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView
                          ? { opacity: 1, x: 0 }
                          : { opacity: 0, x: -20 }
                      }
                      transition={{
                        duration: 0.4,
                        delay: index * 0.14 + i * 0.06 + 0.12,
                      }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-[7px] h-2.5 w-2.5 shrink-0 rounded-full bg-[#ff3b30] shadow-[0_0_12px_rgba(255,59,48,0.45)]" />
                      <span className="leading-7">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}