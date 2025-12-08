import React, { useRef } from "react";
import FinalCtaSection from "../../components/CTA/FinalCtaSection";
import { motion as Motion } from "framer-motion"
import backendImg from "../../Images/backendImg.png";

const BackendDevelopmentSection = () => {
  const ContainerRef = useRef(null)
  return (
    <>
      <section ref={ContainerRef} className="relative overflow-hidden bg-black py-16 text-slate-50 sm:py-20 lg:pt-28 pt-28">
        <Motion.div
          initial={{ y: 40, opacity: 0, scale: 0.5 }}
          animate={{ y: 0, opacity: 1, delay: 0.5, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }} className="absolute bottom-10">
          <img src={backendImg} className="object-contain h-100 w-160 hidden sm:block" alt="" />
        </Motion.div>
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:flex-row lg:gap-16 lg:px-8">
          {/* Left: heading + intro */}
          <Motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              Service · Backend Development
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Backend Development that Powers Your Product
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              The backend is the engine of your digital experience. Robust APIs,
              secure databases, and well‑structured logic keep your website or
              application fast, stable, and ready to scale as your business grows.
            </p>
          </Motion.div>

          {/* Right: three sub‑sections */}
          <div className="grid flex-1 gap-8 md:grid-cols-2">
            {/* What we do */}
            <Motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                What we do
              </h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  <div>
                    <p className="font-medium">API design &amp; development</p>
                    <p className="text-xs text-slate-400">
                      REST/GraphQL APIs that connect your frontend, mobile apps,
                      and third‑party services in a clean, consistent way.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  <div>
                    <p className="font-medium">
                      Database design &amp; management
                    </p>
                    <p className="text-xs text-slate-400">
                      Structured data models, efficient queries, and backups to
                      keep your information organized and safe.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  <div>
                    <p className="font-medium">Business logic &amp; workflows</p>
                    <p className="text-xs text-slate-400">
                      Custom features such as authentication, role‑based access,
                      payments, dashboards, and reporting.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                  <div>
                    <p className="font-medium">Integrations</p>
                    <p className="text-xs text-slate-400">
                      Connecting CRMs, payment gateways, email tools, analytics
                      platforms, and other services into one smooth system.
                    </p>
                  </div>
                </li>
              </ul>
            </Motion.div>

            {/* How we build + What you get */}
            <Motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }} className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                  How we build
                </h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                    <div>
                      <p className="font-medium">Scalable architecture</p>
                      <p className="text-xs text-slate-400">
                        We choose frameworks and hosting setups that can handle
                        growth in users, data, and features over time.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                    <div>
                      <p className="font-medium">Security best practices</p>
                      <p className="text-xs text-slate-400">
                        Proper authentication, authorization, encryption, and
                        input validation to protect your app and user data.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                    <div>
                      <p className="font-medium">Reliable performance</p>
                      <p className="text-xs text-slate-400">
                        Caching, optimized queries, and background jobs so heavy
                        tasks don’t slow down the user experience.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <Motion.div drag
                whileDrag={{
                  scale: 1.1,
                }}
                dragConstraints={ContainerRef} className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-950/80 p-4 text-sm shadow-[0_18px_50px_rgba(15,23,42,0.85)]">
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                  What you get
                </h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    <span>
                      A documented, well‑structured backend ready for current
                      features and future updates.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    <span>
                      API documentation for your team or third‑party developers to
                      integrate with confidence.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    <span>
                      Monitoring and maintenance options to keep your system
                      healthy after launch.
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

export default BackendDevelopmentSection;
