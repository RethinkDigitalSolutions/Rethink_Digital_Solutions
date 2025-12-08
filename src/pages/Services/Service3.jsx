import React, { useRef } from "react";
import FinalCtaSection from "../../components/CTA/FinalCtaSection";
import { motion as Motion } from "framer-motion";
import frontendImg from "../../Images/frontendImg.png";

const FrontendDevelopmentSection = () => {
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
                            transition={{ duration: 1, ease: "easeOut" }} className="absolute bottom-40">
                          <img src={frontendImg} className="object-contain h-70 w-160 hidden sm:block" alt="" />
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
              Service · Frontend Development
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Frontend Development that Feels Effortless to Use
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              The frontend is where your users actually experience your product.
              Our team transforms designs into fast, responsive, and accessible
              interfaces that look great on every device and guide users smoothly
              from first click to conversion.
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
                    <p className="font-medium">Responsive UI implementation</p>
                    <p className="text-xs text-slate-400">
                      Pixel‑perfect builds of your designs using modern HTML, CSS,
                      and JavaScript frameworks, optimized for mobile, tablet, and
                      desktop.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                  <div>
                    <p className="font-medium">
                      Single‑page applications (SPAs)
                    </p>
                    <p className="text-xs text-slate-400">
                      Interactive, app‑like web experiences with smooth transitions
                      and minimal page reloads.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                  <div>
                    <p className="font-medium">Performance optimization</p>
                    <p className="text-xs text-slate-400">
                      Code splitting, image optimization, caching, and best
                      practices to reduce load times and improve Core Web Vitals.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                  <div>
                    <p className="font-medium">
                      Accessibility &amp; standards compliance
                    </p>
                    <p className="text-xs text-slate-400">
                      Semantic markup, keyboard navigation, and ARIA support so
                      more users can use your product comfortably.
                    </p>
                  </div>
                </li>
              </ul>
            </Motion.div>

            {/* How we build + What you get */}
            <Motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                  How we build
                </h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <div>
                      <p className="font-medium">Modern tech stack</p>
                      <p className="text-xs text-slate-400">
                        Experience with frameworks and libraries like React, Vue,
                        or Next.js, chosen based on your project’s needs and
                        scalability.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <div>
                      <p className="font-medium">Clean, maintainable code</p>
                      <p className="text-xs text-slate-400">
                        Component‑based architecture, reusable styles, and clear
                        structure that make future changes faster and safer.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <div>
                      <p className="font-medium">
                        Close collaboration with designers &amp; backend
                      </p>
                      <p className="text-xs text-slate-400">
                        Continuous coordination so the final experience matches
                        the UI/UX vision and integrates smoothly with APIs and
                        databases.
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
                      Production‑ready frontend code that matches approved designs
                      and works across modern browsers.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    <span>
                      A component library or design‑system‑aligned UI kit for
                      consistent future development.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    <span>
                      Documentation and support for your in‑house or external
                      developers to continue building on top of a solid foundation.
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

export default FrontendDevelopmentSection;
