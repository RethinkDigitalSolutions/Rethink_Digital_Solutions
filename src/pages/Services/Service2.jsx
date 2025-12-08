import React, { useRef } from "react";
import FinalCtaSection from "../../components/CTA/FinalCtaSection";
import { motion as Motion } from "framer-motion";
import uiuxImg from "../../Images/uiuxImg.png";

const UiUxDesignSection = () => {
  const containerRef = useRef(null);

  return (
    <>
      <section
        ref={containerRef}
        className="relative overflow-hidden bg-black py-16 text-slate-50 sm:py-20 lg:pt-28 pt-28"
      >
        <Motion.div
                    initial={{ y: 40, opacity: 0, scale:0.5 }}
                    animate={{ y: 0, opacity: 1, delay:0.5, scale:1 }}
                    transition={{ duration: 1, ease: "easeOut" }} className="absolute bottom-25">
                  <img src={uiuxImg} className="object-contain h-80 w-160 hidden sm:block" alt="" />
                </Motion.div>
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:gap-16 lg:px-8">
          {/* Left: heading + intro */}
          <Motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-md"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              Service · UI/UX Design
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              UI/UX Design that Puts Users First
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              Great products feel simple to use, even when the technology behind
              them is complex. Our UI/UX team turns your ideas into intuitive,
              beautiful digital experiences that keep users engaged and make it
              easy for them to take action.
            </p>
          </Motion.div>

          {/* Right: three sub‑sections */}
          <div className="grid flex-1 gap-8 md:grid-cols-2">
            {/* What we do */}
            <Motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="space-y-4"
            >
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                What we do
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                  <div>
                    <p className="font-medium">
                      User research &amp; UX strategy
                    </p>
                    <p className="text-xs text-slate-400">
                      Interviews, surveys, and competitor analysis to understand
                      your users, their goals, and pain points before any pixels
                      are designed.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                  <div>
                    <p className="font-medium">
                      Information architecture &amp; user flows
                    </p>
                    <p className="text-xs text-slate-400">
                      Clear structures and journeys so users always know where
                      they are and what to do next.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                  <div>
                    <p className="font-medium">
                      Wireframes &amp; prototypes
                    </p>
                    <p className="text-xs text-slate-400">
                      Low‑ and high‑fidelity prototypes that let you click through
                      the experience, validate ideas, and gather feedback early.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                  <div>
                    <p className="font-medium">
                      UI design &amp; design systems
                    </p>
                    <p className="text-xs text-slate-400">
                      Modern interfaces, typography, color, and components
                      documented in reusable design systems ready for development.
                    </p>
                  </div>
                </li>
              </ul>
            </Motion.div>

            {/* How we design + What you get */}
            <Motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                  How we design
                </h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <div>
                      <p className="font-medium">User‑centered process</p>
                      <p className="text-xs text-slate-400">
                        Define → research → ideate → prototype → test → refine,
                        ensuring each decision is backed by data and real feedback.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <div>
                      <p className="font-medium">Consistent across devices</p>
                      <p className="text-xs text-slate-400">
                        Designs optimized for mobile, tablet, and desktop with a
                        focus on accessibility and performance.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <div>
                      <p className="font-medium">Developer‑friendly handoff</p>
                      <p className="text-xs text-slate-400">
                        Organized files, specs, and assets so your product can
                        move smoothly from Figma to code.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <Motion.div
                drag
                whileDrag={{ scale: 1.05 }}
                dragConstraints={containerRef}
                initial={{ scale: 0.95, opacity: 0, y: 16 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 text-sm shadow-[0_18px_50px_rgba(15,23,42,0.85)]"
              >
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                  What you get
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    <span>
                      Clickable prototypes and final UI screens for web or web apps.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    <span>
                      A mini design system (colors, typography, components) that
                      keeps future pages consistent.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    <span>
                      Documentation and support during implementation to ensure
                      the final build matches the approved designs.
                    </span>
                  </li>
                </ul>
              </Motion.div>
            </Motion.div>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </>
  );
};

export default UiUxDesignSection;
