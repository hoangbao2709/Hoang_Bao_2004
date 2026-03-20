"use client";

import { MapPin, Phone, Download, User } from "lucide-react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
  const isInView = useInView(ref, { amount: 0.2, once: true });

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
    <main className="overflow-hidden bg-black px-4 pt-6 text-white sm:px-6 sm:pt-8 lg:px-8">
      <RevealOnScroll>
        <div className="mb-8 flex flex-col items-center justify-center gap-3 text-center text-white/70 sm:mb-10 sm:flex-row sm:gap-4">
          <User className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-[60px] lg:w-[60px]" />
          <h1 className="font-[var(--font-heading)] text-4xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.08)] sm:text-5xl md:text-6xl lg:text-7xl">
            About me
          </h1>
        </div>
      </RevealOnScroll>

      <section className="mx-auto max-w-7xl pb-14 sm:pb-16">
        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[minmax(320px,420px)_minmax(0,1fr)] lg:gap-14 xl:gap-20">
          {/* Left image */}
          <RevealOnScroll direction="left">
            <div className="relative mx-auto w-full max-w-[420px]">
              <div className="absolute inset-0 rounded-[24px] border border-[#ff3b30]/20 shadow-[0_0_40px_rgba(255,59,48,0.12)] sm:rounded-[28px] lg:rounded-[34px]" />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-[24px] border border-[#ff3b30]/35 bg-[#080808] p-3 shadow-[0_0_30px_rgba(255,59,48,0.1)] sm:rounded-[28px] sm:p-4 lg:rounded-[34px]"
              >
                <div className="relative h-[360px] overflow-hidden rounded-[18px] bg-[linear-gradient(180deg,#111_0%,#140909_100%)] sm:h-[460px] sm:rounded-[22px] md:h-[540px] lg:h-[620px] lg:rounded-[26px]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.08),transparent_14%),radial-gradient(circle_at_60%_55%,rgba(255,59,48,0.25),transparent_18%),radial-gradient(circle_at_75%_35%,rgba(255,255,255,0.04),transparent_12%)]" />

                  <Image
                    src="/about.jpg"
                    alt="About me visual"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </motion.div>

              <div className="absolute -left-5 top-3 rounded-2xl bg-[#ff3b30] px-4 py-3 shadow-[0_0_24px_rgba(255,59,48,0.35)] sm:left-4 sm:top-4 sm:px-5 sm:py-4 md:left-5 md:top-5 lg:-left-16 lg:top-20 lg:rounded-[20px] lg:px-6 lg:py-5 xl:-left-28">
                <p className="text-3xl font-bold leading-none text-white sm:text-4xl lg:text-5xl">
                  1+
                </p>
                <p className="mt-1 text-sm text-white/90 sm:mt-2 sm:text-base lg:text-xl [font-family:var(--font-heading)]">
                  Years Experience
                </p>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right content */}
          <RevealOnScroll direction="right">
            <div>
              <RevealOnScroll delay={0.1}>
                <p className="max-w-4xl text-base leading-8 text-white/55 sm:text-lg sm:leading-9 md:text-[18px] lg:mt-2 lg:text-[19px] lg:leading-10">
                  Hi, my name is Hoang Bao. I am a developer working across web,
                  embedded systems, and robotics, focused on building modern,
                  efficient, and intelligent solutions.
                </p>

                <p className="mt-5 max-w-4xl text-base leading-8 text-white/55 sm:mt-6 sm:text-lg sm:leading-9 md:text-[18px] lg:mt-8 lg:text-[19px] lg:leading-10">
                  I am currently a fourth-year student at Ho Chi Minh City
                  University of Technology (Bach Khoa University). I enjoy
                  turning complex ideas into simple and elegant solutions, where
                  attention to detail makes the difference.
                </p>
              </RevealOnScroll>

              <div className="mt-8 space-y-4 [font-family:var(--font-heading)] sm:mt-10 sm:space-y-5">
                <RevealOnScroll delay={0.2}>
                  <div className="flex items-start gap-4 rounded-[20px] border border-white/5 bg-[#0a0a0a] px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition duration-300 hover:scale-[1.02] hover:border-[#ff3b30]/20 hover:shadow-[0_0_20px_rgba(255,59,48,0.08)] sm:items-center sm:gap-5 sm:rounded-[24px] sm:px-6 sm:py-6 lg:px-8 lg:py-8">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ff3b30]/10 sm:h-14 sm:w-14">
                      <MapPin className="h-6 w-6 text-[#ff3b30] sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg text-white sm:text-xl lg:text-2xl">
                        My Location
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-white/55 sm:mt-2 sm:text-base lg:text-lg">
                        Thủ Đức, Hồ Chí Minh City, Vietnam
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>

                <RevealOnScroll delay={0.3}>
                  <div className="flex items-start gap-4 rounded-[20px] border border-white/5 bg-[#0a0a0a] px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition duration-300 hover:scale-[1.02] hover:border-[#ff3b30]/20 hover:shadow-[0_0_20px_rgba(255,59,48,0.08)] sm:items-center sm:gap-5 sm:rounded-[24px] sm:px-6 sm:py-6 lg:px-8 lg:py-8">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ff3b30]/10 sm:h-14 sm:w-14">
                      <Phone className="h-6 w-6 text-[#ff3b30] sm:h-7 sm:w-7 lg:h-8 lg:w-8" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg text-white sm:text-xl lg:text-2xl">
                        My Phone Number
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-white/55 sm:mt-2 sm:text-base lg:text-lg">
                        0368 287 072
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>

              <RevealOnScroll delay={0.4}>
                <div className="mt-8 sm:mt-10 lg:mt-12 [font-family:var(--font-heading)]">
                  <motion.a
                    href="/Hoang_Thanh_Chi_Bao.pdf"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-full border border-[#ff8a84]/50 bg-[#050505] px-6 font-[var(--font-ui)] text-sm font-semibold text-white shadow-[0_0_18px_rgba(255,59,48,0.14)] sm:h-14 sm:w-auto sm:px-8 sm:text-base lg:h-[62px] lg:px-9"
                  >
                    <span className="absolute inset-y-[3px] left-[-10%] z-0 w-[120%] -translate-x-[118%] skew-x-[-20deg] rounded-l-full bg-[#f1f1f1] transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />

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
                        <Download className="h-4 w-4 sm:h-5 sm:w-5" />
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