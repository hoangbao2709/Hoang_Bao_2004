"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FolderKanban } from "lucide-react";

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
  const isInView = useInView(sectionRef, { amount: 0.2, once: true });

  return (
    <section
      ref={sectionRef}
      className="relative z-10 overflow-hidden px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-10 text-center [font-family:var(--font-heading)] sm:mb-12 lg:mb-16"
      >
        <div className="flex items-center justify-center gap-2 py-3 text-white/70 sm:gap-3 sm:py-5">
          <FolderKanban className="h-9 w-9 sm:h-12 sm:w-12 lg:h-[60px] lg:w-[60px]" />
          <h1 className="ml-1 font-[var(--font-heading)] text-3xl font-semibold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.08)] sm:ml-2 sm:text-5xl md:text-6xl lg:text-7xl">
            Latest Projects
          </h1>
        </div>
      </motion.div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 justify-items-center gap-6 sm:gap-7 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
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
              className="group relative flex h-full w-full max-w-[400px] flex-col overflow-hidden rounded-[22px] border-4 border-[#ff3b30]/30 bg-[#0d0d0d] shadow-[0_0_18px_rgba(255,59,48,0.08)] transition-[border,box-shadow,transform] duration-200 hover:border-[#ff3b30]/60 hover:shadow-[0_0_35px_rgba(255,59,48,0.18)] sm:rounded-[24px] lg:rounded-[28px]"
              style={{
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              <span
                id={glowId}
                className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-200"
              />

              <span className="pointer-events-none absolute inset-0 z-10 rounded-[22px] border border-transparent opacity-0 transition duration-300 group-hover:border-[#ff3b30]/35 group-hover:opacity-100 sm:rounded-[24px] lg:rounded-[28px]" />

              <div
                className="relative h-[210px] w-full overflow-hidden sm:h-[230px] md:h-[220px] lg:h-[240px] xl:h-[260px]"
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
                    className="object-cover transition duration-500"
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d0d0d]/70" />
              </div>

              <div
                className="relative flex min-h-[280px] flex-1 flex-col px-4 pb-5 pt-4 sm:min-h-[300px] sm:px-5 sm:pb-6 sm:pt-5 lg:min-h-[320px] lg:px-6"
                style={{ transform: "translateZ(20px)" }}
              >
                <h2 className="font-[var(--font-heading)] text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                  {project.title}
                </h2>

                <p className="mt-3 text-sm leading-7 text-white/75 sm:mt-4 sm:text-base sm:leading-8 lg:text-lg">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5 sm:gap-3 [font-family:var(--font-heading)]">
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
                      className="rounded-full border border-[#ff3b30]/55 bg-[#ff3b30]/15 px-3 py-1.5 text-sm font-medium text-[#ff5a4f] shadow-[0_0_12px_rgba(255,59,48,0.1)] transition duration-300 group-hover:border-[#ff3b30]/75 group-hover:bg-[#ff3b30]/20 sm:px-4 sm:py-2 sm:text-base"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <motion.a
                  href={project.link}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                  className="mt-6 inline-block text-sm font-medium text-violet-400 transition hover:text-violet-300 sm:text-base [font-family:var(--font-heading)]"
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