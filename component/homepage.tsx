import { Github, Instagram, Youtube, Music2, ArrowRight, Smartphone, Code2 } from "lucide-react";
import Image from "next/image";
import TechStackPreview from "./TechStackPreview";
const stats = [
  { value: "20+", label: "Project Completed" },
  { value: "1+", label: "Years Experience" },
  { value: "2+", label: "Happy Clients" },
];

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Music2, href: "#", label: "TikTok" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="relative overflow-hidden mt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,59,48,0.09),transparent_24%),radial-gradient(circle_at_75%_40%,rgba(255,59,48,0.08),transparent_20%),radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_35%)]" />
        <div className="absolute right-24 top-28 h-72 w-72 rounded-full bg-red-500/10 blur-[120px]" />
        <div className="absolute left-24 bottom-12 h-56 w-56 rounded-full bg-red-500/10 blur-[120px]" />

        <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-10 md:px-10 lg:grid-cols-2">
          <div className="z-10">
            <p className="mb-3 text-3xl font-semibold tracking-tight text-white/90 md:text-4xl">
              Welcome
            </p>

            <h1 className="max-w-3xl text-5xl font-[var(--font-heading)] font-bold leading-[0.95] text-[#ff3b30] drop-shadow-[0_0_18px_rgba(255,59,48,0.28)] md:text-7xl">
              Hello Everyone I&apos;m Hoang Bao
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/60 md:text-xl">
              I am a web developer focused on building modern, responsive, and efficient
              websites. I also enjoy working close to the system layer with embedded and
              low-level development.
            </p>

            <div className="mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[28px] border border-white/8 bg-[#0b0b0b] px-6 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                >
                  <div className="text-5xl font-bold tracking-tight text-[#ff3b30] drop-shadow-[0_0_12px_rgba(255,59,48,0.25)]">
                    {item.value}
                  </div>
                  <div className="mt-3 text-lg text-white/45">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#ff3b30] px-8 py-4 text-lg font-semibold text-black transition hover:scale-[1.02] hover:shadow-[0_0_28px_rgba(255,59,48,0.35)]"
              >
                Hire me
                <ArrowRight className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="inline-flex items-center rounded-full border border-[#ff3b30]/50 px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#ff3b30]/10 hover:shadow-[0_0_20px_rgba(255,59,48,0.18)]"
              >
                Download CV
              </a>
            </div>
            


          </div>

            <div className="relative z-10 flex items-center justify-center">
                <div className="relative">


                    <div className="rounded-xl border-4 border-[#ff3b30] p-1 shadow-[0_0_25px_rgba(255,59,48,0.35)]">
                        <Image
                        src="/avt.jpg"
                        alt="Hoang Bao Avatar"
                        width={180}
                        height={180}
                        priority
                        className="w-[400px] rounded-xl object-cover"
                        />
                    </div>
                  <div className="mt-14 w-full flex items-between justify-around gap-4 px-5">
                    {socials.map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#090909] text-white/80 transition hover:-translate-y-1 hover:border-[#ff3b30]/40 hover:text-[#ff3b30] hover:shadow-[0_0_18px_rgba(255,59,48,0.18)]"
                      >
                        <Icon className="h-6 w-6" />
                      </a>
                    ))}
                  </div>
                </div>
            </div>
        </section>
        <TechStackPreview/>
      </div>
      
    </main>
  );
}