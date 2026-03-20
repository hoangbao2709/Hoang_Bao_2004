"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Robot Dogzilla System",
    description:
      "Autonomous quadruped robot using ROS2 with SLAM mapping, obstacle avoidance, and real-time control via web interface.",
    image: "/doan.png",
    tags: ["ROS2", "SLAM", "LiDAR"],
    link: "#",
  },
  {
    title: "Kron Coffee",
    description:
      "Modern coffee startup website focused on branding, product showcase, and clean responsive UI/UX experience.",
    image: "/Kron.png",
    tags: ["Next.js", "Django", "MongoDB"],
    link: "#",
  },
  {
    title: "Book Store Website",
    description:
      "Online bookstore platform with product listing, search features, and a simple responsive shopping interface.",
    image: "/trangchu.png",
    tags: ["React", "PHP", "SQL"],
    link: "#",
  },
];

export default function LatestProject() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative z-10 overflow-hidden px-6 py-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-16 text-center [font-family:var(--font-heading)]"
      >
        <h1 className="font-[var(--font-heading)] text-5xl font-semibold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.08)] md:text-7xl">
          Latest Projects
        </h1>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => {
          const glowId = `project-glow-${index}`;

          return (
            <motion.article
              key={project.title}
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
              className="group relative w-[400px] cursor-pointer overflow-hidden rounded-[28px] border-5 border-[#ff3b30]/30 bg-[#0d0d0d] shadow-[0_0_18px_rgba(255,59,48,0.08)] transition-[border,box-shadow,transform] duration-200 hover:border-[#ff3b30]/60 hover:shadow-[0_0_35px_rgba(255,59,48,0.18)]"
              style={{
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              <span
                id={glowId}
                className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-200"
              />

              <span className="pointer-events-none absolute inset-0 z-10 rounded-[28px] border border-transparent opacity-0 transition duration-300 group-hover:border-[#ff3b30]/35 group-hover:opacity-100" />

              <div
                className="relative h-[260px] w-full overflow-hidden"
                style={{ transform: "translateZ(28px)" }}
              >
                <motion.div
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.45 }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className=" transition duration-500"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d0d0d]/70" />
              </div>

              <div
                className="relative h-[370px] px-6 pb-6 pt-5"
                style={{ transform: "translateZ(20px)" }}
              >
                <h2 className="font-[var(--font-heading)] text-4xl font-semibold text-white [font-family:var(--font-heading)]">
                  {project.title}
                </h2>

                <p className="mt-4 text-lg leading-8 text-white/75">
                  {project.description}
                </p>

                <div className="absolute bottom-16 mt-5 flex flex-wrap gap-3 [font-family:var(--font-heading)]">
                  {project.tags.map((tag, i) => (
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
                      className="rounded-full border border-[#ff3b30]/55 bg-[#ff3b30]/15 px-4 py-2 text-base font-medium text-[#ff5a4f] shadow-[0_0_12px_rgba(255,59,48,0.1)] transition duration-300 group-hover:border-[#ff3b30]/75 group-hover:bg-[#ff3b30]/20"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <motion.a
                  href={project.link}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-5 mt-5 inline-block text-base font-medium text-violet-400 transition hover:text-violet-300 [font-family:var(--font-heading)]"
                >
                  View more →
                </motion.a>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}