import React from "react";

const techCategories = [
  {
    label: "Frontend",
    badge: "Interfaces you feel",
    items: ["React", "Vue", "Next.js", "Tailwind CSS", "Figma (design system)"],
  },
  {
    label: "Backend",
    badge: "Logic that scales",
    items: ["Node.js", "Python", "Java", "PostgreSQL", "MongoDB", "AWS / Firebase", "SpringBoot", "Hibernet"],
  },
  {
    label: "AI & Integrations",
    badge: "Smarter workflows",
    items: ["OpenAI APIs", "Vercel AI", "Stripe", "Zapier", "CRM integrations"],
  },
  {
    label: "Practices",
    badge: "How we ship",
    items: [
      "Git & GitHub",
      "Agile sprints",
      "CI/CD pipelines",
      "Performance monitoring",
    ],
  },
];

const AboutSection3 = () => {
  return (
    <section className="w-full h-full bg-black text-white px-10 py-24 md:px-20 md:py-32">
      {/* Top row */}
      <div className="flex flex-col md:flex-row md:items-end gap-10 mb-20">
        {/* Left: Big heading */}
        <div className="md:w-1/2">
          <p className="text-sm uppercase tracking-[0.3em] text-neutral-500 mb-4">
            Tech stack & tools
          </p>
          <h2 className="text-5xl md:text-7xl font-extrabold leading-[0.9]">
            What
            <br />
            We Build
            <br />
            With
          </h2>
        </div>

        {/* Right: Mission / context */}
        <div className="md:w-1/2 max-w-xl text-neutral-300">
          <p className="text-lg md:text-2xl font-medium leading-relaxed">
            From pixel-perfect frontends to AI-powered automations, we ship
            stacks that are fast, scalable, and ready for what your users throw
            at them. No legacy bloat, just tools that keep your brand moving.
          </p>
        </div>
      </div>

      {/* Tech grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techCategories.map((category, index) => (
          <div
            key={category.label}
            className="hand relative overflow-hidden border border-neutral-800 rounded-3xl px-6 py-7 md:px-8 md:py-10 bg-linear-to-br from-neutral-950 via-neutral-900 to-neutral-950 hover:border-neutral-500 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)] transition-all duration-300 cursor-default"
          >
            {/* subtle index tag */}
            <span className="absolute top-5 right-6 text-xs font-mono text-neutral-600">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Pill + title */}
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center rounded-full border border-neutral-700 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neutral-400">
                {category.label}
              </span>
              <span className="text-xs text-neutral-500">{category.badge}</span>
            </div>

            {/* Items */}
            <div className="flex flex-wrap gap-2.5">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="text-sm md:text-base rounded-full bg-neutral-900/70 border border-neutral-800 px-3 py-1 text-neutral-200 hover:bg-white hover:text-black hover:border-white transition-colors duration-200"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Hover accent bar */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-linear-to-r from-fuchsia-500 via-sky-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection3;
