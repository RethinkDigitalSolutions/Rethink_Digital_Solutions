import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const steps = [
  {
    label: "01",
    title: "Discover & Strategy",
    text: "We start with your goals, audience, and positioning, then map a clear plan for a site that actually supports your business – not just looks good.",
  },
  {
    label: "02",
    title: "UX Flows & Wireframes",
    text: "User journeys, site architecture, and low-fi wireframes so every page has a purpose and every click feels obvious.",
  },
  {
    label: "03",
    title: "Visual Design & Prototyping",
    text: "Modern, brand-aligned UI with interactive prototypes so you can feel the experience before a single line of code ships.",
  },
  {
    label: "04",
    title: "Build & Integrations",
    text: "Production-ready frontend, backend, and integrations built with performance, accessibility, and security in mind.",
  },
  {
    label: "05",
    title: "Launch, Measure, Iterate",
    text: "We deploy, monitor real-world behavior, and keep iterating so your site stays fast, relevant, and revenue-focused.",
  },
];


const HomeProcessSection = () => {
  const sectionRef = useRef(null);
  const TextRef = useRef(null);
  const slideRef = useRef(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !slideRef.current) return;

    // scope everything to this section
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray(".panel", slideRef.current);

      // create tween with a named ScrollTrigger so we can kill it precisely
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          id: "home-process-pin",          // important: id for cleanup
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + sectionRef.current.offsetWidth,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

    }, sectionRef);

    return () => {
      // kill only this trigger, then revert DOM changes
      const st = ScrollTrigger.getById("home-process-pin");
      if (st) st.kill();
      ctx.revert(); // removes pin-spacer and restores DOM
    };
  }, []);

  useGSAP(() => {
    const split = SplitText.create(TextRef.current, { type: "words, chars" });

    gsap.from(split.chars, {
      scrollTrigger: {
        trigger: TextRef.current,
        start: "top 80%",
        end: "bottom 30%",
        scrub: true,
        markers: false,
      },
      // duration: 1,
      y: 50,
      autoAlpha: 0,
      stagger: 0.05,
    });
  }, { scope: TextRef })

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative h-screen bg-black text-slate-50 py-24 sm:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div ref={TextRef} className=" mb-6 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
            Process
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            How your website comes to life
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-400">
            Every project moves through a clear, high-touch process so you
            always know what we are designing, building, and shipping next.
          </p>
        </div>
      </div>

      <div ref={slideRef} className="flex flex-row w-max h-full">
        {steps.map((step) => (
          <article
            key={step.label}
            className="panel w-screen shrink-0 flex flex-col items-center lg:justify-center text-center lg:pt-0 pt-[10vh] px-10 pb-20"
          >
            <div className="text-xl font-bold bg-amber-300 text-black h-12 w-12 flex items-center justify-center rounded-full mb-6">
              {step.label}
            </div>
            <h3 className="text-4xl lg:text-7xl font-semibold text-slate-50">
              {step.title}
            </h3>
            <p className="mt-5 text-lg text-slate-300 max-w-xl">
              {step.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HomeProcessSection;
