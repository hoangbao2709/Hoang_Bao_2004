"use client";

import { Wrench } from "lucide-react";
import { FaGithub, FaGitAlt, FaDocker, FaFigma, FaAws } from "react-icons/fa";
import {
  SiPostman,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiC,
  SiCplusplus,
  SiLinux,
  SiPython,
  SiRaspberrypi,
  SiArduino,
  SiExpress,
  SiPhp,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiBootstrap,
  SiBulma,
  SiMysql,
  SiEjs,
  SiLaravel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbVectorBezier2 } from "react-icons/tb";
import type { IconType } from "react-icons";

type TechItem = {
  name: string;
  icon: IconType;
  color: string;
};

const techItems: TechItem[] = [
  { name: "ReactJS", icon: SiReact, color: "text-cyan-400" },
  { name: "NextJS", icon: SiNextdotjs, color: "text-white" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Bulma", icon: SiBulma, color: "text-emerald-400" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-violet-400" },
  { name: "EJS", icon: SiEjs, color: "text-yellow-300" },
  { name: "CSS", icon: SiCss, color: "text-blue-400" },
  { name: "HTML", icon: SiHtml5, color: "text-orange-400" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-300" },

  { name: "Django", icon: SiDjango, color: "text-green-300" },
  { name: "ExpressJS", icon: SiExpress, color: "text-white" },
  { name: "PHP", icon: SiPhp, color: "text-indigo-300" },
  { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
  { name: "C++", icon: SiCplusplus, color: "text-blue-400" },
  { name: "C", icon: SiC, color: "text-blue-300" },

  { name: "MySQL", icon: SiMysql, color: "text-sky-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-emerald-400" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-300" },

  { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
  { name: "GitHub", icon: FaGithub, color: "text-white" },
  { name: "VS Code", icon: VscVscode, color: "text-blue-400" },
  { name: "Figma", icon: FaFigma, color: "text-pink-400" },
  { name: "Postman", icon: SiPostman, color: "text-orange-400" },
  { name: "Docker", icon: FaDocker, color: "text-sky-400" },
  { name: "AWS", icon: FaAws, color: "text-yellow-400" },
  { name: "Draw.io", icon: TbVectorBezier2, color: "text-orange-300" },

  { name: "Node.js", icon: SiNodedotjs, color: "text-green-400" },
  { name: "Python", icon: SiPython, color: "text-sky-300" },
  { name: "Linux", icon: SiLinux, color: "text-yellow-300" },
  { name: "Raspberry Pi", icon: SiRaspberrypi, color: "text-rose-400" },
  { name: "Arduino", icon: SiArduino, color: "text-cyan-300" },
];

function TechMarqueeItem({ item }: { item: TechItem }) {
  const Icon = item.icon;

  return (
    <div
      title={item.name}
      className="group flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#1b2235]/80 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-4 cursor-pointer hover:border-white/20 hover:bg-[#24304a]"
    >
      <Icon
        size={30}
        className={`${item.color} transition-transform duration-300 group-hover:scale-110`}
      />
    </div>
  );
}

function TechMarqueeRow({
  items,
  speed = "35s",
}: {
  items: TechItem[];
  speed?: string;
}) {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="marquee-track flex w-max items-center gap-4 md:gap-6 pt-4"
        style={{ ["--marquee-speed" as any]: speed }}
      >
        {repeated.map((item, idx) => (
          <TechMarqueeItem key={`${item.name}-${idx}`} item={item} />
        ))}
      </div>

      <style jsx>{`
        .marquee-track {
            animation: marquee-right var(--marquee-speed) linear infinite;
            will-change: transform;
        }

        @keyframes marquee-right {
            0% {
                transform: translate3d(-25%, 0, 0);
            }
            100% {
                transform: translate3d(0, 0, 0);
            }
        }
      `}</style>
    </div>
  );
}

export default function TechStackPreview() {
  return (
    <section className="relative z-100 w-full overflow-hidden pb-16">
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />

        <TechMarqueeRow items={techItems} speed="40s" />
      </div>
    </section>
  );
}