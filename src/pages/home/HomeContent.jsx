import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import HomeServices from "./HomeServices";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import HomeProcessSection from "./HomeProcessSection";
import WhyUsSection from "./HomeWhy";

gsap.registerPlugin(SplitText)
const HomeContent = () => {
  const heroVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };


  return (
    <>
      <section className="relative h-fit bg-black text-slate-50 ">
        
        <div className="mx-auto flex  max-w-6xl flex-col px-6 pb-16 pt-20 lg:min-h-[88vh] lg:px-8">
          {/* top bar */}
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between ">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-300">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Rethink Studio
            </div>
            <p className="max-w-xl text-sm text-slate-400">
              Your vision, our code – custom websites, web apps, and AI‑powered
              solutions for startups and growing businesses.
            </p>
          </div>

          {/* main content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid flex-1 items-center gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] "
          >
            {/* left: copy */}
            <div className="">
              <motion.h1
                variants={heroVariants}
                className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
              >
                Transforming Ideas into{" "}
                <span className="relative inline-block text-blue-400">
                  Digital Reality
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 h-2 translate-y-2 bg-linear-to-r from-blue-500/40 via-cyan-400/40 to-indigo-500/30 blur-md" />
                </span>
              </motion.h1>

              <motion.p
                variants={heroVariants}
                className="mt-5 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
              >
                Rethink builds fast, modern and secure web experiences that help
                businesses grow, backed by clean UI/UX, solid engineering, and
                smart AI integration.
              </motion.p>

              <motion.div
                variants={heroVariants}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    to="/contact"
                    className="hand inline-flex items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-900/60 transition-colors hover:from-blue-500 hover:to-indigo-500"
                  >
                    Book a Free Consultation
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    to="/portfolio"
                    className="hand inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 px-5 py-2.5 text-sm font-medium text-slate-100 backdrop-blur-sm hover:border-slate-500 hover:bg-slate-900"
                  >
                    View recent work
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                variants={heroVariants}
                className="mt-6 rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 backdrop-blur"
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  What we build
                </p>
                <ul className="grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    Custom Web Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    UI/UX Design &amp; Prototyping
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    Frontend &amp; Backend Development
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    AI Integration &amp; Automation
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* right: animated visual */}
            <motion.div
              variants={heroVariants}
              className="relative h-[260px] rounded-3xl border border-slate-800/80 bg-linear-to-br from-slate-900 via-slate-950 to-slate-950 p-5 shadow-2xl shadow-blue-900/40 md:h-80"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_60%)]" />

              <motion.div
                className="absolute inset-6 rounded-4xl border border-dashed border-slate-700/70"
                animate={{ rotate: 360 }}
                transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                className="absolute right-8 top-10 min-w-40 rounded-2xl border border-blue-500/60 bg-slate-900/90 px-4 py-3 backdrop-blur"
                animate={{ y: [0, -10, 0], x: [0, 4, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Performance
                </p>
                <p className="mt-1 text-sm text-slate-50">
                  &lt; 1s LCP on core pages
                </p>
              </motion.div>

              <motion.div
                className="absolute bottom-10 left-8 min-w-[170px] rounded-2xl border border-emerald-400/60 bg-slate-900/95 px-4 py-3 backdrop-blur"
                animate={{ y: [0, 10, 0], x: [0, -4, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Reliability
                </p>
                <p className="mt-1 text-sm text-slate-50">
                  99.9% uptime for client apps
                </p>
              </motion.div>

              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ opacity: [0.7, 1, 0.7], scale: [0.96, 1.02, 0.96] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex flex-col items-center gap-1 rounded-2xl border border-slate-700/80 bg-slate-900/90 px-5 py-4 text-center shadow-lg shadow-slate-900/80">
                  <span className="text-xs font-medium text-emerald-400">
                    AI‑ready architecture
                  </span>
                  <span className="text-[11px] text-slate-400">
                    From marketing sites to AI‑powered dashboards, built to scale
                    with your startup.
                  </span>
                </div>
              </motion.div> 
            </motion.div>
          </motion.div>
        </div>
      </section >
      <HomeServices />
      <HomeProcessSection />
      <WhyUsSection />
    </>
  );
};

export default HomeContent;
