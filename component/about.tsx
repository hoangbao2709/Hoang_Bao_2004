"use client";

import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Download,
} from "lucide-react";
import {
  User,
} from "lucide-react";
function RevealOnScroll({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });

  let hiddenStyle: { opacity: number; x?: number; y?: number } = {
    opacity: 0,
    y: 60,
  };

  if (direction === "left") hiddenStyle = { opacity: 0, x: -60 };
  if (direction === "right") hiddenStyle = { opacity: 0, x: 60 };

  return (
    <motion.div
      ref={ref}
      initial={hiddenStyle}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : hiddenStyle}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-black pt-5 text-white">
      <RevealOnScroll>
        <div className="mb-4 flex items-center justify-center gap-2 text-white/70">
          <User size={60} />
          <h1 className="text-center font-[var(--font-heading)] text-5xl [font-family:var(--font-heading)] text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.08)] md:text-7xl">
            About me
          </h1>
        </div>

      </RevealOnScroll>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[420px_minmax(0,1fr)]">
          {/* Left image */}
          <RevealOnScroll direction="left">
            <div className="relative mx-auto w-full max-w-[420px]">
              <div className="absolute inset-0 rounded-[34px] border border-[#ff3b30]/20 shadow-[0_0_40px_rgba(255,59,48,0.12)]" />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-[34px] border border-[#ff3b30]/35 bg-[#080808] p-4 shadow-[0_0_30px_rgba(255,59,48,0.1)]"
              >
                <div className="relative h-[620px] overflow-hidden rounded-[26px] bg-[linear-gradient(180deg,#111_0%,#140909_100%)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.08),transparent_14%),radial-gradient(circle_at_60%_55%,rgba(255,59,48,0.25),transparent_18%),radial-gradient(circle_at_75%_35%,rgba(255,255,255,0.04),transparent_12%)]" />

                  <Image
                    src="/about.jpg"
                    alt="About me visual"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>


              <div className="absolute left-[-150px] top-[90px] rounded-[20px] bg-[#ff3b30] px-6 py-5 shadow-[0_0_24px_rgba(255,59,48,0.35)]">
                <p className="text-5xl font-bold leading-none text-white">1+</p>
                <p className="mt-2 text-xl text-white/90 [font-family:var(--font-heading)]">
                  Years Experience
                </p>
              </div>

            </div>
          </RevealOnScroll>

          {/* Right content */}
          <RevealOnScroll direction="right">
            <div>
              <RevealOnScroll delay={0.1}>
                <p className="mt-8 max-w-4xl text-lg leading-10 text-white/55 md:text-[19px]">
                  Hi, my name is Hoang Bao. I am a developer working across web, embedded systems, and robotics, focused on building modern, efficient, and intelligent solutions.
                </p>
                <p className="mt-8 max-w-4xl text-lg leading-10 text-white/55 md:text-[19px]">
                  I am currently a fourth-year student at Ho Chi Minh City University of Technology (Bach Khoa University). I enjoy turning complex ideas into simple and elegant solutions, where attention to detail makes the difference.
                </p>
              </RevealOnScroll>

              <div className="mt-10 space-y-5 [font-family:var(--font-heading)]">
                <RevealOnScroll delay={0.2}>
                  <div className="flex items-center gap-5 rounded-[24px] hover:scale-105 cursor-pointer border border-white/5 bg-[#0a0a0a] px-8 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition duration-300 hover:border-[#ff3b30]/20 hover:shadow-[0_0_20px_rgba(255,59,48,0.08)]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ff3b30]/10">
                      <MapPin className="h-8 w-8 text-[#ff3b30]" />
                    </div>
                    <div>
                      <h3 className="text-2xl text-white">My Location</h3>
                      <p className="mt-2 text-lg text-white/55">Thủ Đức, Hồ Chí Minh City, Vietnam</p>
                    </div>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll delay={0.3}>
                  <div className="flex items-center gap-5 rounded-[24px] hover:scale-105 cursor-pointer border border-white/5 bg-[#0a0a0a] px-8 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition duration-300 hover:border-[#ff3b30]/20 hover:shadow-[0_0_20px_rgba(255,59,48,0.08)]">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ff3b30]/10">
                      <Phone className="h-8 w-8 text-[#ff3b30]" />
                    </div>
                    <div>
                      <h3 className="text-2xl text-white">My Phone Number</h3>
                      <p className="mt-2 text-lg text-white/55">0368 287 072</p>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>

              <RevealOnScroll delay={0.4}>
                <div className="mt-12 [font-family:var(--font-heading)]">
                  <motion.a
                    href="/Hoang_Thanh_Chi_Bao.pdf"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative inline-flex h-[62px] items-center justify-center overflow-hidden rounded-full border border-[#ff8a84]/50 bg-[#050505] px-9 font-[var(--font-ui)] text-base font-semibold text-white shadow-[0_0_18px_rgba(255,59,48,0.14)]"
                  >
                    <span className="absolute inset-y-[3px] left-[-10%] z-0 w-[120%] -translate-x-[118%] skew-x-[-20deg] rounded-l-full bg-[#f1f1f1] transition-transform duration-2000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />

                    <span className="absolute inset-0 rounded-full border border-[#ffb3ae]/35" />

                    <span className="relative z-10 flex items-center gap-3">
                      <span className="transition-colors duration-300 group-hover:text-[#6d6d6d]">
                        Download CV
                      </span>
                      <motion.span
                        animate={{ x: [0, 2, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                        className="transition-colors duration-300 group-hover:text-[#6d6d6d]"
                      >
                        <Download className="h-5 w-5" />
                      </motion.span>
                    </span>
                  </motion.a>
                </div>
              </RevealOnScroll>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
}