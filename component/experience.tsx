"use client";

const experiences = [
  {
    role: "Full-Stack Developer Intern",
    company: "Eyecode",
    time: "2025 • 6 months",
    description: [
      "Developed an online IELTS testing platform using ReactJS, Django, and MongoDB.",
      "Built real-time exam interfaces with timers and dynamic question rendering.",
      "Optimized RESTful APIs for high-concurrency submissions and automated scoring.",
      "Designed scalable database schemas for question banks and analytics.",
      "Implemented authentication and state management for cross-device experience.",
    ],
  },
  {
    role: "Front-End Developer Intern",
    company: "THD Cyber Security",
    time: "2025 • 3 months",
    description: [
      "Developed HRM and attendance modules for an internal ERP system.",
      "Integrated Geolocation and Face Recognition for employee verification.",
      "Built multi-role dashboards with Role-Based Access Control (RBAC).",
      "Consumed RESTful APIs for real-time attendance and payroll data.",
      "Applied security-first UI practices for sensitive data protection.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section className="relative z-10 px-6 py-10">
      <div className="mb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-semibold text-white">
          Experience
        </h1>
        <p className="mt-4 text-white/60">
          My professional journey
        </p>
      </div>

      <div className="mx-auto max-w-5xl space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="
              group relative rounded-2xl border border-white/10
              bg-[#0d0d0d] p-6 md:p-8
              transition-all duration-300
              hover:border-red-500/40
              hover:shadow-[0_0_30px_rgba(255,59,48,0.25)]
            "
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                {exp.role}
              </h2>
              <span className="text-sm text-white/50 mt-1 md:mt-0">
                {exp.time}
              </span>
            </div>

            <div className="mt-2 text-red-400 font-medium">
              {exp.company}
            </div>

            {/* Description */}
            <ul className="mt-4 space-y-2 text-white/70">
              {exp.description.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-red-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}