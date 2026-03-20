import { MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className=" bg-black text-white">
      <h1 className="font-[var(--font-heading)] text-5xl text-white md:text-7xl px-auto text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.08)]">
        About me
      </h1>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10">
        
        <div className="grid items-center gap-14 lg:grid-cols-[420px_minmax(0,1fr)]">
          <div className="relative mx-auto w-full max-w-[420px]">
            <div className="absolute inset-0 rounded-[34px] border border-[#ff3b30]/20 shadow-[0_0_40px_rgba(255,59,48,0.12)]" />

            <div className="relative rounded-[34px] border border-[#ff3b30]/35 bg-[#080808] p-4 shadow-[0_0_30px_rgba(255,59,48,0.1)]">
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
            </div>

            <div className="absolute left-[-100px] top-[90px] rounded-[20px] bg-[#ff3b30] px-6 py-5 shadow-[0_0_24px_rgba(255,59,48,0.35)]">
              <p className="text-5xl font-bold leading-none text-white">1+</p>
              <p className="mt-2 text-xl text-white/90">Years Experience</p>
            </div>
          </div>

          <div>

            <p className="mt-8 max-w-4xl text-lg leading-10 text-white/55 md:text-[19px]">
              Hi, my name is Hoang Bao. I am a web developer and creative
              designer passionate about building digital experiences that are
              not only functional but also aesthetic. I believe that great work
              is born from a combination of precise logic and boundless
              creativity. My journey in website creation began with a deep
              curiosity about how websites can be interactive and dynamic. Now,
              I focus on helping various clients and projects transform complex
              ideas into simple and elegant solutions. For me, small details are
              the difference between good results and extraordinary results.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-5 rounded-[24px] border border-white/5 bg-[#0a0a0a] px-8 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ff3b30]/10">
                  <MapPin className="h-8 w-8 text-[#ff3b30]" />
                </div>
                <div>
                  <h3 className="font-[var(--font-heading)] text-2xl text-white">
                    My Location
                  </h3>
                  <p className="mt-2 text-lg text-white/55">Vietnam</p>
                </div>
              </div>

              <div className="flex items-center gap-5 rounded-[24px] border border-white/5 bg-[#0a0a0a] px-8 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ff3b30]/10">
                  <Phone className="h-8 w-8 text-[#ff3b30]" />
                </div>
                <div>
                  <h3 className="font-[var(--font-heading)] text-2xl text-white">
                    My Phone Number
                  </h3>
                  <p className="mt-2 text-lg text-white/55">0368 287 072</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a
                href="/cv.pdf"
                className="inline-flex items-center rounded-full border border-[#ff3b30]/60 px-8 py-4 text-2xl text-white transition hover:bg-[#ff3b30]/10 hover:shadow-[0_0_20px_rgba(255,59,48,0.18)]"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}