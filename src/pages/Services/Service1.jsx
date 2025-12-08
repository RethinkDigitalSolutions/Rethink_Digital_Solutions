import React, { useRef } from "react";
import FinalCtaSection from "../../components/CTA/FinalCtaSection";
import { motion as Motion } from "framer-motion";
import webDevImg from "../../Images/webDevImg.png";

const WebDevelopmentSection = () => {
  const containerRef = useRef(null);

  return (
    <>
      <section
        ref={containerRef}
        className="relative bg-black py-16 text-slate-50 sm:py-20 lg:pt-28 pt-28 overflow-hidden"
      >
        <Motion.div
            initial={{ y: 40, opacity: 0, scale:0.5 }}
            animate={{ y: 0, opacity: 1, delay:0.5, scale:1 }}
            transition={{ duration: 1, ease: "easeOut" }} className="absolute bottom-10">
          <img src={webDevImg} className="object-contain h-80 w-160 hidden sm:block" alt="" />
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
              Service · Web Development
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Custom Web Development
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              We design and build fast, secure, and scalable websites tailored to your
              business goals. From clean marketing sites to complex web applications,
              every project is crafted to convert visitors into customers and support
              your long‑term growth.
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
                      Business websites &amp; landing pages
                    </p>
                    <p className="text-xs text-slate-400">
                      Professionally designed sites that clearly communicate your offer,
                      showcase your brand, and capture leads.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                  <div>
                    <p className="font-medium">
                      Web applications &amp; portals
                    </p>
                    <p className="text-xs text-slate-400">
                      Custom dashboards, portals, and internal tools that streamline
                      operations and improve productivity.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                  <div>
                    <p className="font-medium">E‑commerce experiences</p>
                    <p className="text-xs text-slate-400">
                      Online stores with smooth checkout, inventory integrations, and
                      analytics to track revenue.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                  <div>
                    <p className="font-medium">CMS‑driven sites</p>
                    <p className="text-xs text-slate-400">
                      Easy‑to‑manage websites using modern CMS tools so your team can
                      update content without touching code.
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
                        We choose frameworks and tools that match your needs, focusing
                        on performance, security, and scalability.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <div>
                      <p className="font-medium">Responsive &amp; accessible</p>
                      <p className="text-xs text-slate-400">
                        Every page is optimized for mobile, tablet, and desktop,
                        following accessibility best practices.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <div>
                      <p className="font-medium">SEO‑ready structure</p>
                      <p className="text-xs text-slate-400">
                        Clean code, logical information architecture, and on‑page
                        fundamentals that help search engines understand your site.
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
                      A fully tested, production‑ready website or web app.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    <span>
                      Documentation and basic training so your team can manage content.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    <span>
                      Ongoing support and enhancement options through maintenance plans.
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

export default WebDevelopmentSection;
