import React from "react";
import { Link } from "react-router-dom";

const FinalCtaSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0c0c0cb2] py-16 text-slate-50 sm:py-20 rounded-t-4xl  ">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-[-40%] h-[60%] bg-gradient-to-b from-sky-500/15 via-slate-950 to-slate-950 blur-3xl" />
        <div className="absolute left-[-120px] bottom-[-80px] h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute right-[-80px] bottom-[-40px] h-56 w-56 rounded-full bg-indigo-500/15 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
          Let&apos;s build what&apos;s next
        </p>

        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.5rem]">
          Ready to Build Your Next Project?
        </h2>

        <p className="max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
          Share your idea and we’ll come back with a clear plan, timeline, and budget – 
          no obligation. Whether it’s a new marketing site, a product dashboard, or an 
          AI‑powered web app, Rethink makes it fast, modern and ready to grow.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-7 py-3 text-sm font-medium text-white shadow-lg shadow-blue-900/60 transition-colors hover:from-blue-500 hover:to-indigo-500"
          >
            Start a Project
          </Link>

          <p className="text-xs text-slate-500">
            Prefer to talk first? Tell us your target audience (e.g. local businesses in India,
            SaaS startups, D2C brands) and we can tailor this page with niche‑specific examples
            and a full case study.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
