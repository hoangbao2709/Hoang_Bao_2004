"use client";

import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const contactCards = [
  {
    title: "My Whatsapp",
    description: "Need help? Contact me",
    href: "https://wa.me/8436827072",
    icon: MessageCircle,
  },
  {
    title: "My Address",
    description: "Ho Chi Minh City, Vietnam",
    href: "https://maps.google.com/?q=Ho+Chi+Minh+City,+Vietnam",
    icon: MapPin,
  },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { amount: 0.2 });

  const handleMouseMove = (
    e: React.MouseEvent<HTMLElement>,
    glowId: string
  ) => {
    if (window.innerWidth < 1024) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-6px)
      scale(1.01)
    `;

    const glow = card.querySelector(`#${glowId}`) as HTMLSpanElement | null;
    if (glow) {
      glow.style.opacity = "1";
      glow.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,59,48,0.22), transparent 48%)`;
    }
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLElement>,
    glowId: string
  ) => {
    const card = e.currentTarget;
    card.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)";

    const glow = card.querySelector(`#${glowId}`) as HTMLSpanElement | null;
    if (glow) {
      glow.style.opacity = "0";
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative z-10 overflow-hidden px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="pb-8 text-center sm:pb-10"
      >
        <h1 className="[font-family:var(--font-heading)] text-4xl font-semibold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.08)] sm:text-5xl md:text-6xl lg:text-7xl">
          Contact
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.97 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 60, scale: 0.97 }
        }
        transition={{ duration: 0.7, delay: 0.08, ease: "easeOut" }}
        className="mx-auto max-w-7xl rounded-[24px] border border-white/10 bg-[#0b0b0b] p-4 shadow-[0_0_30px_rgba(255,59,48,0.08)] sm:rounded-[28px] sm:p-6 md:p-8 lg:rounded-[32px] lg:p-10"
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <h2 className="[font-family:var(--font-heading)] text-3xl font-semibold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Contact <span className="text-[#ff3b30]">Me</span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:mt-5 sm:text-base sm:leading-8 md:text-lg">
              Let&apos;s build something great together. Have a project in mind
              or just want to chat about web development, backend systems, or
              creative ideas? Drop me a message and I&apos;ll get back to you as
              soon as possible.
            </p>

            <div className="mt-8 space-y-4 sm:mt-10 sm:space-y-5">
              {contactCards.map((card, index) => {
                const Icon = card.icon;
                const glowId = `contact-glow-${index}`;

                return (
                  <motion.a
                    key={card.title}
                    href={card.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, y: 30, scale: 0.96 }}
                    animate={
                      isInView
                        ? { opacity: 1, y: 0, scale: 1 }
                        : { opacity: 0, y: 30, scale: 0.96 }
                    }
                    transition={{
                      duration: 0.55,
                      delay: 0.18 + index * 0.08,
                    }}
                    onMouseMove={(e) => handleMouseMove(e, glowId)}
                    onMouseLeave={(e) => handleMouseLeave(e, glowId)}
                    className="group relative flex items-center gap-3 overflow-hidden rounded-[20px] border border-[#ff3b30]/25 bg-[#5c0d09] px-4 py-4 shadow-[0_0_18px_rgba(255,59,48,0.12)] transition-[border,box-shadow,transform] duration-200 hover:border-[#ff3b30]/60 hover:shadow-[0_0_28px_rgba(255,59,48,0.2)] sm:gap-4 sm:rounded-[24px] sm:px-5 sm:py-5 lg:px-6"
                    style={{
                      transformStyle: "preserve-3d",
                      willChange: "transform",
                    }}
                  >
                    <span
                      id={glowId}
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200"
                    />

                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white sm:h-12 sm:w-12 md:h-14 md:w-14"
                      style={{ transform: "translateZ(28px)" }}
                    >
                      <Icon size={22} className="sm:h-6 sm:w-6 md:h-7 md:w-7" />
                    </div>

                    <div
                      className="min-w-0"
                      style={{ transform: "translateZ(22px)" }}
                    >
                      <h3 className="[font-family:var(--font-heading)] text-lg font-semibold text-white sm:text-xl md:text-2xl">
                        {card.title}
                      </h3>
                      <p className="text-sm text-white/65 sm:text-base">
                        {card.description}
                      </p>
                    </div>
                  </motion.a>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.45, delay: 0.34 }}
                className="flex items-center gap-3 pt-1 text-sm text-white/60 sm:pt-2 sm:text-base"
              >
                <Phone size={18} className="shrink-0" />
                <span>0368 287 072</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.45, delay: 0.4 }}
                className="flex items-center gap-3 text-sm text-white/60 sm:text-base"
              >
                <Mail size={18} className="shrink-0" />
                <span className="break-all">hoangbao27092004@gmail.com</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.14 }}
          >
            <h2 className="[font-family:var(--font-heading)] text-3xl font-semibold text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Send <span className="text-[#ff3b30]">Email</span>
            </h2>

            <form className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
              {[
                { type: "text", placeholder: "Your name" },
                { type: "email", placeholder: "Your email" },
                { type: "text", placeholder: "Subject" },
              ].map((field, index) => (
                <motion.input
                  key={field.placeholder}
                  type={field.type}
                  placeholder={field.placeholder}
                  initial={{ opacity: 0, y: 24 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
                  }
                  transition={{
                    duration: 0.45,
                    delay: 0.2 + index * 0.07,
                  }}
                  className="h-13 w-full rounded-2xl border border-white/10 bg-[#0f0f0f] px-4 text-base text-white outline-none transition placeholder:text-white/25 focus:border-[#ff3b30]/60 sm:h-14 sm:rounded-full sm:px-5 sm:text-lg md:h-16 md:px-6"
                />
              ))}

              <motion.textarea
                rows={5}
                placeholder="Write your message..."
                initial={{ opacity: 0, y: 24 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
                }
                transition={{ duration: 0.45, delay: 0.42 }}
                className="min-h-[140px] w-full rounded-[20px] border border-white/10 bg-[#0f0f0f] px-4 py-4 text-base text-white outline-none transition placeholder:text-white/25 focus:border-[#ff3b30]/60 sm:min-h-[160px] sm:rounded-[24px] sm:px-5 sm:py-5 sm:text-lg md:px-6"
              />

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 24 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
                }
                transition={{ duration: 0.45, delay: 0.5 }}
                whileHover={{ scale: 1.015, y: -2 }}
                whileTap={{ scale: 0.985 }}
                className="inline-flex h-13 w-full cursor-pointer items-center justify-center gap-3 rounded-2xl bg-[#ff3b30] px-5 text-base font-semibold text-white transition hover:bg-[#ff4d43] hover:shadow-[0_0_24px_rgba(255,59,48,0.22)] sm:h-14 sm:rounded-full sm:text-lg md:h-16"
              >
                Send Message
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.3, repeat: Infinity }}
                >
                  <Send size={18} />
                </motion.span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}