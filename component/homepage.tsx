"use client";

import {
  Github,
  Instagram,
  Music2,
  ArrowRight,
  Download,
  Facebook,
  MonitorSmartphone,
  Code2,
} from "lucide-react";
import Image from "next/image";
import TechStackPreview from "./TechStackPreview";
import { motion, type Variants } from "framer-motion";

const stats = [
  { value: "20+", label: "Project Completed" },
  { value: "1+", label: "Years Experience" },
  { value: "2+", label: "Happy Clients" },
];

const socials = [
  { icon: Github, href: "https://github.com/hoangbao2709", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
  {
    icon: Facebook,
    href: "https://www.facebook.com/hoang.bao.311907/",
    label: "Facebook",
  },
  { icon: Music2, href: "#", label: "TikTok" },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const itemFade: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

export default function HomePage() {
  return (
    <main className=" min-h-screen overflow-hidden bg-black text-white">
      <div className="relative overflow-hidden pt-20 sm:pt-24 lg:pt-20">
        {/* Animated background */}
        <motion.div
          animate={{
            opacity: [0.7, 1, 0.75],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(255,59,48,0.12),transparent_24%),radial-gradient(circle_at_82%_30%,rgba(255,59,48,0.08),transparent_18%),radial-gradient(circle_at_50%_65%,rgba(255,255,255,0.03),transparent_28%)]"
        />

        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-60px] top-20 h-52 w-52 rounded-full bg-[#ff3b30]/10 blur-[110px] sm:left-[-40px] sm:top-24 sm:h-72 sm:w-72 sm:blur-[130px]"
        />

        <motion.div
          animate={{ y: [0, 22, 0], x: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-[-50px] top-28 h-56 w-56 rounded-full bg-[#ff3b30]/10 blur-[120px] sm:right-[-30px] sm:top-36 sm:h-80 sm:w-80 sm:blur-[150px]"
        />

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/3 h-40 w-40 rounded-full bg-white/5 blur-[90px] sm:h-56 sm:w-56 sm:blur-[120px]"
        />

        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-10 sm:px-6 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-10"
        >
          {/* Left content */}
          <div className="z-10 order-2 lg:order-1">
            <motion.div
              variants={itemUp}
              className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 sm:px-4"
            >
              <span className="font-[var(--font-ui)] text-[10px] uppercase tracking-[0.22em] text-white/70 sm:text-xs md:text-sm">
                Welcome
              </span>
            </motion.div>

            <motion.h1
              variants={itemUp}
              className="mt-5 max-w-4xl [font-family:var(--font-heading)] text-4xl font-bold uppercase leading-[0.95] tracking-[0.01em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Hello Everyone
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mt-2 block text-[#ff3b30] drop-shadow-[0_0_18px_rgba(255,59,48,0.35)]"
              >
                I&apos;m Hoang Bao
              </motion.span>
            </motion.h1>

            <motion.p
              variants={itemUp}
              className="mt-6 max-w-2xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8 md:text-lg lg:text-xl"
            >
              I am a web developer focused on building modern, responsive, and
              efficient websites. I also enjoy working close to the system layer
              with embedded and low-level development.
            </motion.p>

            <motion.div
              variants={itemUp}
              className="mt-8 flex flex-col gap-3 [font-family:var(--font-heading)] sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[#ff3b30] px-6 font-[var(--font-ui)] text-sm font-semibold uppercase tracking-[0.12em] text-black transition duration-300 hover:shadow-[0_0_28px_rgba(255,59,48,0.35)] sm:h-14 sm:px-8 sm:text-base"
              >
                Hire Me
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                >
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.div>
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full border border-[#ff8a84]/50 bg-[#050505] px-6 font-[var(--font-ui)] text-sm font-semibold text-white shadow-[0_0_18px_rgba(255,59,48,0.14)] sm:h-[58px] sm:px-8 sm:text-base lg:h-[62px] lg:px-9"
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
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3"
            >
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={itemFade}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-[24px] border border-white/10 bg-[#0c0c0c]/90 px-5 py-6 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] hover:border-[#ff3b30]/30 hover:shadow-[0_0_18px_rgba(255,59,48,0.12)] sm:rounded-[28px] sm:px-6 sm:py-7"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
                    className="font-[var(--font-heading)] text-3xl font-bold text-[#ff3b30] drop-shadow-[0_0_10px_rgba(255,59,48,0.28)] sm:text-4xl md:text-5xl"
                  >
                    {item.value}
                  </motion.div>
                  <div className="mt-3 font-[var(--font-ui)] text-[10px] uppercase tracking-[0.18em] text-white/45 sm:text-xs md:text-sm">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right content */}
          <motion.div
            variants={itemFade}
            className="relative z-20 order-1 flex items-center justify-center lg:order-2"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex flex-col items-center"
            >
              <div className="pointer-events-none absolute inset-0 rounded-[34px] bg-[#ff3b30]/15 blur-2xl" />

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-[28px] border border-[#ff3b30]/35 bg-[#0c0c0c] p-2.5 shadow-[0_0_35px_rgba(255,59,48,0.18)] sm:rounded-[34px] sm:p-3"
              >
                <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_35%)] sm:rounded-[34px]" />

                <div className="relative overflow-hidden rounded-[22px] sm:rounded-[26px]">
                  <motion.div
                    animate={{ scale: [1, 1.01, 1] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Image
                      src="/avt.jpg"
                      alt="Hoang Bao Avatar"
                      width={520}
                      height={620}
                      priority
                      className="h-auto w-[240px] rounded-[22px] object-cover sm:w-[300px] sm:rounded-[24px] md:w-[360px] lg:w-[400px] xl:w-[420px]"
                    />
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="relative z-[60] mt-5 flex flex-wrap items-center justify-center gap-3 sm:mt-8 sm:gap-4"
              >
                {socials.map(({ icon: Icon, href, label }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    variants={itemFade}
                    whileHover={{ y: -6, scale: 1.1 }}
                    whileTap={{ scale: 0.92 }}
                    transition={{ duration: 0.25, delay: index * 0.05 }}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#090909] text-white/80 transition duration-300 hover:border-[#ff3b30]/45 hover:text-[#ff3b30] hover:shadow-[0_0_18px_rgba(255,59,48,0.18)] sm:h-12 sm:w-12 md:h-14 md:w-14"
                  >
                    <Icon className="pointer-events-none h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: [0, -4, 0] }}
              transition={{
                opacity: { delay: 0.4, duration: 0.5 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              }}
              className="pointer-events-none absolute -left-4 top-10 z-[30] flex items-center gap-2 rounded-2xl border border-white/10 bg-[#8f241b]/90 px-3 py-2 shadow-[0_8px_22px_rgba(0,0,0,0.28)] backdrop-blur-md sm:left-2 sm:top-14 md:-left-4 lg:-left-10 lg:top-20"
            >
              <MonitorSmartphone className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" />
              <span className="text-[12px] font-semibold text-white sm:text-base md:text-lg lg:text-2xl">
                Responsive
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [0, 4, 0] }}
              transition={{
                opacity: { delay: 0.6, duration: 0.5 },
                y: { duration: 3.4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="pointer-events-none absolute bottom-24 right-0 z-[30] flex items-center gap-2 rounded-2xl border border-white/12 bg-[#d891a7]/88 px-3 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.22)] backdrop-blur-md sm:bottom-28 sm:right-2 md:right-0 lg:-right-6 lg:bottom-40"
            >
              <Code2 className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" />
              <span className="text-sm font-semibold text-white sm:text-base md:text-lg lg:text-xl">
                Clean code
              </span>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <TechStackPreview />
        </motion.div>
      </div>
    </main>
  );
}