"use client";

import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="relative z-10 px-6 py-20">
      <div className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-[#0b0b0b] p-6 shadow-[0_0_30px_rgba(255,59,48,0.08)] md:p-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-[var(--font-heading)] text-4xl font-semibold text-white md:text-6xl">
              Contact <span className="text-[#ff3b30]">Me</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              Let&apos;s build something great together. Have a project in mind
              or just want to chat about web development, backend systems, or
              creative ideas? Drop me a message and I&apos;ll get back to you as
              soon as possible.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href="https://wa.me/8436827072"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-[24px] border border-[#ff3b30]/25 bg-[#5c0d09] px-6 py-5 shadow-[0_0_18px_rgba(255,59,48,0.12)] transition-all duration-300 hover:scale-[1.01] hover:border-[#ff3b30]/60 hover:shadow-[0_0_28px_rgba(255,59,48,0.2)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white">
                  <MessageCircle size={28} />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    My Whatsapp
                  </h3>
                  <p className="text-base text-white/65">
                    Need help? Contact me
                  </p>
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=Ho+Chi+Minh+City,+Vietnam"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-[24px] border border-[#ff3b30]/25 bg-[#5c0d09] px-6 py-5 shadow-[0_0_18px_rgba(255,59,48,0.12)] transition-all duration-300 hover:scale-[1.01] hover:border-[#ff3b30]/60 hover:shadow-[0_0_28px_rgba(255,59,48,0.2)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white">
                  <MapPin size={28} />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    My Address
                  </h3>
                  <p className="text-base text-white/65">
                    Ho Chi Minh City, Vietnam
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3 pt-2 text-white/60">
                <Phone size={18} />
                <span>0368 270 72</span>
              </div>

              <div className="flex items-center gap-3 text-white/60">
                <Mail size={18} />
                <span>hoangbao27092004@gmail.com</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-[var(--font-heading)] text-4xl font-semibold text-white md:text-6xl">
              Send <span className="text-[#ff3b30]">Email</span>
            </h2>

            <form className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Your name"
                className="h-16 w-full rounded-full border border-white/10 bg-[#0f0f0f] px-6 text-lg text-white outline-none transition placeholder:text-white/25 focus:border-[#ff3b30]/60"
              />

              <input
                type="email"
                placeholder="Your email"
                className="h-16 w-full rounded-full border border-white/10 bg-[#0f0f0f] px-6 text-lg text-white outline-none transition placeholder:text-white/25 focus:border-[#ff3b30]/60"
              />

              <input
                type="text"
                placeholder="Subject"
                className="h-16 w-full rounded-full border border-white/10 bg-[#0f0f0f] px-6 text-lg text-white outline-none transition placeholder:text-white/25 focus:border-[#ff3b30]/60"
              />

              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full rounded-[24px] border border-white/10 bg-[#0f0f0f] px-6 py-5 text-lg text-white outline-none transition placeholder:text-white/25 focus:border-[#ff3b30]/60"
              />

              <button
                type="submit"
                className="inline-flex cursor-pointer h-16 w-full items-center justify-center gap-3 rounded-full bg-[#ff3b30] text-lg font-semibold text-white transition hover:scale-[1.01] hover:bg-[#ff4d43]"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}