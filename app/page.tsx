"use client";

import { useEffect, useMemo, useState } from "react";
import Contract from "@/component/contract";
import TypingTitle from "../component/TypingTitle";
import Header from "../component/header";
import HomePage from "../component/homepage";
import About from "../component/about";
import ServicesPage from "../component/service";
import LastestProject from "../component/lastestproject";
import Skillsdiv from "../component/skill";
import Experiencediv from "@/component/experience";
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

const loaderSkills = [
  {
    label: "JS",
    icon: Braces,
    className:
      "border-yellow-400/70 text-yellow-300 bg-yellow-400/10 shadow-[0_0_25px_rgba(250,204,21,0.18)]",
  },
  {
    label: "HTML",
    icon: FileCode2,
    className:
      "border-orange-500/70 text-orange-300 bg-orange-500/10 shadow-[0_0_25px_rgba(249,115,22,0.18)]",
  },
  {
    label: "CSS",
    icon: Palette,
    className:
      "border-blue-500/70 text-blue-300 bg-blue-500/10 shadow-[0_0_25px_rgba(59,130,246,0.18)]",
  },
  {
    label: "PHP",
    icon: Database,
    className:
      "border-indigo-500/70 text-indigo-300 bg-indigo-500/10 shadow-[0_0_25px_rgba(99,102,241,0.18)]",
  },
  {
    label: "PY",
    icon: Code2,
    className:
      "border-sky-400/70 text-sky-300 bg-sky-400/10 shadow-[0_0_25px_rgba(56,189,248,0.18)]",
  },
];

export default function Home() {
  const [percent, setPercent] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let current = 0;

    const timer = setInterval(() => {
      current += Math.floor(Math.random() * 4) + 1;

      if (current >= 100) {
        current = 100;
        setPercent(current);
        clearInterval(timer);

        setTimeout(() => {
          setIsDone(true);
        }, 500);
      } else {
        setPercent(current);
      }
    }, 60);

    return () => clearInterval(timer);
  }, []);

  const progressWidth = useMemo(() => `${percent}%`, [percent]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black scroll-smooth">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(99,102,241,0.10)_0%,transparent_40%),radial-gradient(circle_at_60%_60%,rgba(168,85,247,0.08)_0%,transparent_45%),radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,rgba(0,0,0,1)_70%)] animate-gradientMove" />

      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[130px] animate-pulseSlow" />
      <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[90px] animate-pulseSlow delay-300" />

      {!isDone && (
        <div className="relative z-10  font-[var(--font-heading)] flex min-h-screen items-center justify-center px-6 transition-all duration-700">
          <div className="text-center">
            <div className="mb-8 flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {loaderSkills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.label}
                    className={`animate-floatIn flex items-center gap-2 rounded-2xl border px-5 py-4 text-sm tracking-[0.18em] backdrop-blur-md md:px-6 md:py-5 md:text-base ${skill.className}`}
                    style={{ animationDelay: `${index * 120}ms` }}
                  >
                    <Icon size={18} className="shrink-0" />
                    <span>{skill.label}</span>
                  </div>
                );
              })}
            </div>

            <h1 className="text-4xl uppercase tracking-[0.1em] text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.12)] md:text-7xl">
              <TypingTitle />
            </h1>

            <div className="mt-6 flex animate-fadeIn items-center justify-center gap-2 text-center text-[11px] uppercase tracking-[0.45em] text-white/45 md:text-xs">
              <LoaderCircle size={16} className="animate-spin" />
              <span>Loading Experience...</span>
            </div>

            <div className="mx-auto mt-8 w-[220px] md:w-[320px]">
              <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-400 to-white shadow-[0_0_20px_rgba(129,140,248,0.7)] transition-all duration-200 ease-out"
                  style={{ width: progressWidth }}
                />
              </div>

              <div className="mt-4 text-center text-sm text-white/55 md:text-base">
                {String(percent).padStart(2, "0")}%
              </div>
            </div>
          </div>
        </div>
      )}

      {isDone && (
        <div>
          <Header />

          <section id="home" className="scroll-mt-32">
            <div className="relative z-[100] flex min-h-screen items-center justify-center px-6 transition-all duration-700">
              <HomePage />
            </div>
          </section>

          <section id="about" className="relative scroll-mt-32">
            <About />
          </section>

          <section id="services" className="relative bg-black scroll-mt-32">
            <ServicesPage />
          </section>

          <section id="project" className="relative min-h-screen bg-black scroll-mt-32">
            <LastestProject />
          </section>

          <section id="skill" className="relative bg-black scroll-mt-32">
            <Skillsdiv />
          </section>

          <section id="experience" className="relative min-h-screen scroll-mt-32">
            <Experiencediv />
          </section>

          <section id="contact" className="relative min-h-screen scroll-mt-32">
            <Contract />
          </section>
        </div>
      )}
    </main>
  );
}