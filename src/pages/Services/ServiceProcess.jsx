import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Foundation & Discovery",
    description:
      "We begin by deeply understanding your product vision, business model, and real user needs. This sets the strategic foundation for everything that follows.",
    points: [
      "Business, audience & competitor insight",
      "Understand problems, motivations & opportunities",
      "Define product direction, value and positioning",
      "Identify technical constraints & success metrics",
    ],
  },
  {
    number: "02",
    title: "Blueprint & Experience Architecture",
    description:
      "We convert insight into a clear, structured blueprint. This ensures every interaction, feature, and flow aligns with real user goals.",
    points: [
      "User journeys, experience mapping & flows",
      "Information architecture for clarity & navigation",
      "Feature prioritization based on business value",
      "Early wireframes for layout agreements",
    ],
  },
  {
    number: "03",
    title: "UI Design & Visual Experience",
    description:
      "We craft beautiful, modern interfaces that feel intuitive, fast, and aligned with your brand personality.",
    points: [
      "High-fidelity UI design for web & mobile",
      "Micro-interactions & motion design",
      "Design system foundations (colors, typography, components)",
      "Consistent, scalable design library",
    ],
  },
  {
    number: "04",
    title: "Development & Engineering",
    description:
      "We bring the design to life with high-performance, scalable code — optimized for speed, reliability and long-term growth.",
    points: [
      "Frontend development with animations & interactions",
      "Backend architecture, APIs, authentication & dashboards",
      "Integration of payments, automations & third-party tools",
      "Clean, maintainable code built for scale",
    ],
  },
  {
    number: "05",
    title: "Testing, QA & Launch Preparation",
    description:
      "Before going live, we ensure everything works flawlessly across browsers, devices, and real user scenarios.",
    points: [
      "Functional, performance & security testing",
      "Responsive checks for all screen sizes",
      "Final improvements & polish",
      "Launch setup: hosting, SSL, domains, analytics",
    ],
  },
  {
    number: "06",
    title: "Growth, Optimization & Support",
    description:
      "After launch, we monitor performance, improve user experience, and help you plan the next phase of growth.",
    points: [
      "User behavior analysis & insights",
      "Feature enhancements & new iterations",
      "Performance optimization & SEO improvements",
      "Long-term support & product evolution roadmaps",
    ],
  },
];

const ProcessSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = gsap.utils.toArray(".step");

    sections.forEach((step, index) => {
      const next = sections[index + 1];
      if (!next) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: step,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      });

      tl.fromTo(step, { autoAlpha: 1 }, { autoAlpha: 0 }).fromTo(
        next,
        { autoAlpha: 0 },
        { autoAlpha: 1 },
        "<"
      );
    });
  }, []);

  return (
    <div className="w-full bg-black text-white">
      {/* HEADER */}
      <header className="h-screen flex flex-col items-center justify-center px-6 text-center">
        <p className="text-[10px] sm:text-xs tracking-[0.3em] text-sky-400 mb-3 uppercase">
          Our Process
        </p>

        <h1 className="text-3xl sm:text-6xl font-bold max-w-2xl leading-tight">
          A Seamless Workflow Built for Quality & Clarity
        </h1>

        <p className="mt-5 max-w-md sm:max-w-xl text-slate-400 text-sm sm:text-lg leading-relaxed">
          Every project follows a structured journey — from discovery to launch —
          ensuring communication, flawless execution, and real business results.
        </p>
      </header>

      {/* CINEMATIC STEPS */}
      {steps.map((step) => (
        <div
          key={step.number}
          className="step h-screen flex flex-col items-center justify-center opacity-0 px-4 sm:px-6 text-center"
        >
          <div className="w-full max-w-2xl border border-white/30 rounded-3xl backdrop-blur-sm px-6 py-8 sm:px-10 sm:py-12">
            <p className="text-[10px] sm:text-xs tracking-[0.3em] text-sky-400 mb-4 uppercase">
              Step {step.number}
            </p>

            <h2 className="text-2xl sm:text-4xl font-semibold mb-4 sm:mb-6">
              {step.title}
            </h2>

            <p className="max-w-xl mx-auto text-slate-300 text-sm sm:text-lg mb-6 sm:mb-8 leading-relaxed">
              {step.description}
            </p>

            <ul className="max-w-xl mx-auto text-slate-300 text-sm sm:text-base space-y-2">
              {step.points.map((p, i) => (
                <li key={i} className="flex gap-3 justify-center text-left">
                  <span className="h-2 w-2 mt-1 bg-sky-400 rounded-full shrink-0"></span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProcessSection;
