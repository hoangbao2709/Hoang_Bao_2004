"use client";
import Image from "next/image";
export default function LatestProject() {
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
        title: "Kron Coffee Startup",
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

  return (
    <section className="relative z-10  px-6 py-6">
      <div className="text-center mb-16">
        <h1 className="font-[var(--font-heading)] text-5xl font-semibold text-white md:text-7xl drop-shadow-[0_0_10px_rgba(255,255,255,0.08)]">
          Latest Projects
        </h1>
        <p className="text-white/60 mt-4">
          Some of my recent works
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <article
            key={index}
            className="group overflow-hidden w-[400px] rounded-[28px] border border-[#ff3b30]/30 bg-[#0d0d0d] shadow-[0_0_18px_rgba(255,59,48,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#ff3b30]/60 hover:shadow-[0_0_30px_rgba(255,59,48,0.16)]"
          >
            <div className="relative h-[260px] w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className=" transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d0d0d]/60" />
            </div>

            <div className="px-6 pb-6 pt-5 h-[370px] relative">
              <h2 className="font-[var(--font-heading)] text-4xl font-semibold text-white">
                {project.title}
              </h2>

              <p className="mt-4 text-lg leading-8 text-white/75">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-3 absolute bottom-16">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#ff3b30]/55 bg-[#ff3b30]/15 px-4 py-2 text-base font-medium text-[#ff5a4f] shadow-[0_0_12px_rgba(255,59,48,0.1)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="mt-5 inline-block text-base font-medium text-violet-400 transition hover:text-violet-300 absolute bottom-5"
              >
                View more
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}