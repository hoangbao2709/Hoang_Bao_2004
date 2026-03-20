"use client";

import { Code2, PenTool, Cpu, Bot, Briefcase } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Web Development",
    description:
      "Crafting high-performance, responsive, and modern websites using current frameworks and clean development practices to help your product stand out.",
    icon: Code2,
    tags: ["React", "Next.js", "Deployment"],
  },
  {
    title: "UI/UX Designer",
    description:
      "Designing intuitive and visually polished interfaces with a strong focus on usability, consistency, and seamless web and mobile experience.",
    icon: PenTool,
    tags: ["Figma", "Canva", "Wireframe"],
  },
  {
    title: "Embedded Systems",
    description:
      "Building reliable embedded solutions with low-level programming, hardware interaction, and performance-focused development for practical real-world systems.",
    icon: Cpu,
    tags: ["C/C++", "Microcontroller", "Firmware"],
  },
  {
    title: "Robotics",
    description:
      "Developing robotic solutions that combine control logic, sensors, and system integration to create smart, efficient, and interactive machines.",
    icon: Bot,
    tags: ["Control", "Sensors", "Automation"],
  },
];

export default function ServicesPage() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.2 });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLElement>,
    glowId: string
  ) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-8px)
      scale(1.02)
    `;

    const glow = card.querySelector(`#${glowId}`) as HTMLSpanElement | null;
    if (glow) {
      glow.style.opacity = "1";
      glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,59,48,0.24), transparent 45%)`;
    }
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLElement>,
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
    <main
      ref={sectionRef}
      className="relative z-[100] overflow-hidden bg-black text-white [font-family:var(--font-heading)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,59,48,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,59,48,0.05),transparent_24%)]" />
      <div className="absolute left-20 top-24 h-72 w-72 rounded-full bg-red-500/10 blur-[140px]" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-red-500/10 blur-[160px]" />

      <section className="relative mx-auto max-w-7xl px-6 py-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-2 bg-black text-white/70">    
              <Briefcase size={60} />
              <h1 className="text-5xl ml-2 font-semibold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.08)] md:text-7xl">
                My Services
              </h1>
            </div>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/65 md:text-lg">
            I provide practical digital solutions focused on performance, clean
            user experience, and reliable implementation.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map(({ title, description, icon: Icon, tags }, index) => {
            const glowId = `service-glow-${index}`;

            return (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 60, scale: 0.95 }
                }
                transition={{
                  duration: 0.6,
                  delay: index * 0.14,
                  ease: "easeOut",
                }}
                onMouseMove={(e) => handleMouseMove(e, glowId)}
                onMouseLeave={(e) => handleMouseLeave(e, glowId)}
                className="group relative cursor-pointer overflow-hidden rounded-[30px] border border-[#ff3b30]/30 bg-[#101010] px-8 py-10 shadow-[0_0_20px_rgba(255,59,48,0.08)] transition-[border,box-shadow,transform] duration-200 hover:border-[#ff3b30]/65 hover:shadow-[0_0_40px_rgba(255,59,48,0.18)]"
                style={{
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                }}
              >
                <span
                  id={glowId}
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200"
                />

                <span className="pointer-events-none absolute inset-0 rounded-[30px] border border-transparent opacity-0 transition duration-300 group-hover:border-[#ff3b30]/35 group-hover:opacity-100" />

                <motion.div
                  animate={isInView ? { scale: [0.9, 1.05, 1] } : { scale: 0.9 }}
                  transition={{ duration: 0.6, delay: index * 0.14 }}
                  whileHover={{ scale: 1.13, rotate: 8 }}
                  className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-[#ff3b30] shadow-[0_0_30px_rgba(255,59,48,0.38)] transition-transform duration-300"
                  style={{ transform: "translateZ(40px)" }}
                >
                  <Icon className="h-12 w-12 text-white" />
                </motion.div>

                <h2
                  className="mt-8 text-center text-3xl font-semibold text-white md:text-4xl"
                  style={{ transform: "translateZ(30px)" }}
                >
                  {title}
                </h2>

                <p
                  className="mx-auto mt-5 max-w-[520px] text-center text-lg leading-8 text-white/75"
                  style={{ transform: "translateZ(24px)" }}
                >
                  {description}
                </p>

                <div
                  className="mt-8 flex flex-wrap items-center justify-center gap-3"
                  style={{ transform: "translateZ(20px)" }}
                >
                  {tags.map((tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{
                        delay: index * 0.14 + i * 0.06,
                        duration: 0.4,
                      }}
                      className="rounded-full border border-[#ff3b30]/55 bg-[#ff3b30]/15 px-5 py-2 text-base font-medium text-[#ff5a4f] shadow-[0_0_14px_rgba(255,59,48,0.12)] transition duration-300 group-hover:border-[#ff3b30]/75 group-hover:bg-[#ff3b30]/20"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>
    </main>
  );
}