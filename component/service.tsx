import {
  Code2,
  PenTool,
  Cpu,
  Bot,
} from "lucide-react";

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
  return (
    <main className="relative z-[100] overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,59,48,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,59,48,0.05),transparent_24%)]" />
      <div className="absolute left-20 top-24 h-72 w-72 rounded-full bg-red-500/10 blur-[140px]" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-red-500/10 blur-[160px]" />

      <section className="relative mx-auto max-w-7xl px-6 py-10">
        <div className="mb-14 text-center">
          <h1 className="font-[var(--font-heading)] text-5xl font-semibold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.08)] md:text-7xl">
            My Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/65 md:text-lg">
            I provide practical digital solutions focused on performance, clean
            user experience, and reliable implementation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map(({ title, description, icon: Icon, tags }) => (
            <article
              key={title}
              className="group rounded-[30px] border border-[#ff3b30]/30 bg-[#101010] px-8 py-10 shadow-[0_0_20px_rgba(255,59,48,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#ff3b30]/60 hover:shadow-[0_0_35px_rgba(255,59,48,0.16)]"
            >
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-[#ff3b30] shadow-[0_0_30px_rgba(255,59,48,0.38)] transition duration-300 group-hover:scale-105">
                <Icon className="h-12 w-12 text-white" />
              </div>

              <h2 className="mt-8 text-center font-[var(--font-heading)] text-3xl font-semibold text-white md:text-4xl">
                {title}
              </h2>

              <p className="mx-auto mt-5 max-w-[520px] text-center text-lg leading-8 text-white/75">
                {description}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#ff3b30]/55 bg-[#ff3b30]/15 px-5 py-2 text-base font-medium text-[#ff5a4f] shadow-[0_0_14px_rgba(255,59,48,0.12)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}