import React, { useRef } from "react";
import FinalCtaSection from "../../components/CTA/FinalCtaSection";
import { motion as Motion } from "framer-motion"
import aiImg from "../../Images/aiImg.png";

const AiIntegrationSection = () => {
  const ContainerRef = useRef(null)
  return (
    <>
      <section ref={ContainerRef} className="relative overflow-hidden bg-black py-16 text-slate-50 sm:py-20 lg:pt-28 pt-28">
         <Motion.div
                  initial={{ y: 40, opacity: 0, scale: 0.5 }}
                  animate={{ y: 0, opacity: 1, delay: 0.5, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }} className="absolute bottom-20">
                  <img src={aiImg} className="object-contain h-100 w-160 hidden sm:block" alt="" />
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
              Service · AI Integration
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              AI Integration that Makes Your Product Smarter
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
              AI is no longer a buzzword—it’s a practical way to automate tasks,
              personalize experiences, and unlock insights from your data. Rethink
              helps you integrate AI into your existing or new web solutions so you
              can deliver more value with less manual effort.
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
                      AI‑powered chatbots &amp; assistants
                    </p>
                    <p className="text-xs text-slate-400">
                      Intelligent support bots that answer common questions,
                      collect leads, and guide users 24/7 on your website or web
                      app.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                  <div>
                    <p className="font-medium">
                      Recommendation &amp; personalization engines
                    </p>
                    <p className="text-xs text-slate-400">
                      Show the right content, products, or offers to the right user
                      based on their behavior and preferences.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                  <div>
                    <p className="font-medium">Workflow automation</p>
                    <p className="text-xs text-slate-400">
                      Use AI to summarize data, classify tickets, generate content
                      drafts, and automate repetitive tasks across your tools.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                  <div>
                    <p className="font-medium">Analytics &amp; insights</p>
                    <p className="text-xs text-slate-400">
                      Turn raw data into dashboards, predictions, and alerts that
                      help you make faster, better decisions.
                    </p>
                  </div>
                </li>
              </ul>
            </Motion.div>

            {/* How we integrate AI + What you get */}
            <Motion.div
                          initial={{ y: 24, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                          className="space-y-8"
                        >
              <div className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
                  How we integrate AI
                </h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <div>
                      <p className="font-medium">
                        Using trusted AI platforms &amp; APIs
                      </p>
                      <p className="text-xs text-slate-400">
                        We work with leading AI providers (LLMs, vision, and ML
                        services) and choose options that fit your budget and use
                        case.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <div>
                      <p className="font-medium">Secure data handling</p>
                      <p className="text-xs text-slate-400">
                        Clear data pipelines, anonymization where needed, and
                        access controls so sensitive information stays protected.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <div>
                      <p className="font-medium">Human‑in‑the‑loop design</p>
                      <p className="text-xs text-slate-400">
                        AI supports your team instead of replacing it, with
                        controls, approvals, and fallbacks for critical actions.
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
                      A working AI feature integrated into your product (bot,
                      recommendation block, automation, or analytics) with
                      real‑world use cases.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    <span>
                      Configuration access and documentation so you can tweak
                      prompts, rules, and thresholds without touching code.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    <span>
                      Ongoing optimization options to improve accuracy, reduce
                      costs, and expand AI capabilities over time.
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

export default AiIntegrationSection;
