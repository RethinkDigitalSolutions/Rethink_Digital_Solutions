import React, { useRef } from "react";
import { motion as Motion } from "framer-motion"
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger, SplitText)
const industries = [
  {
    label: "Startups & SaaS",
    summary:
      "Young companies and SaaS products need to move fast and validate ideas.",
    points: [
      "We help launch marketing sites, landing pages, and MVP web apps that clearly explain your product, capture leads, and impress investors.",
      "For SaaS, we design and develop dashboards, onboarding flows, billing areas, and in‑app experiences that keep churn low and engagement high.",
      "AI is used for features like in‑app assistants, smart search, and usage‑based recommendations to improve user experience without huge teams."
    ]
  },
  {
    label: "Local & service businesses",
    summary: "Service businesses win with trust and convenience.",
    points: [
      "We build websites for agencies, consultants, clinics, salons, fitness studios, and other service providers that highlight credibility, social proof, and clear calls to action.",
      "Features can include online booking, contact forms, maps, pricing sections, and integrations with CRMs or WhatsApp for quick follow‑ups.",
      "Automation and AI can handle FAQs, appointment reminders, and lead qualification so your team spends more time on high‑value work."
    ]
  },
  {
    label: "E‑commerce & D2C brands",
    summary: "For product‑based businesses, every second and every click matter.",
    points: [
      "We create storefronts, product pages, and checkout flows that are fast, mobile‑friendly, and built to convert visitors into customers.",
      "Integrations cover payment gateways, shipping providers, inventory systems, and email marketing tools for abandoned cart and post‑purchase flows.",
      "AI can drive personalized product recommendations, dynamic content blocks, and smarter search to increase average order value and repeat purchases."
    ]
  },
  {
    label: "Education & e‑learning",
    summary:
      "Education platforms must be intuitive for both learners and administrators.",
    points: [
      "We design portals where students can easily find courses, track progress, and access content on any device.",
      "Admin tools help instructors manage content, enrollment, assessments, and communication.",
      "AI can be used for personalized learning paths, content recommendations, and automated feedback or support."
    ]
  },
  {
    label: "Corporate, B2B & internal tools",
    summary:
      "Larger organizations often need solid, professional experiences and internal efficiency.",
    points: [
      "We build corporate websites that communicate expertise, case studies, and services clearly for decision‑makers.",
      "Internal tools and dashboards streamline processes like reporting, approvals, and data visualization.",
      "AI can automate routine reporting, document summarization, and insights from large internal datasets."
    ]
  }
];

const IndustriesSection = () => {
  const TextRef = useRef(null);


    // useGSAP(() => {
    //     const split = SplitText.create(TextRef.current, { type: "words, chars" });

    //     gsap.from(split.chars, {
    //         scrollTrigger: {
    //             trigger: TextRef.current,
    //             start: "top 80%",
    //             end: "bottom 50%",
    //             scrub: true,
    //             markers: false,
    //         },
    //         // duration: 1,
    //         y: 50,
    //         autoAlpha: 0,
    //         stagger: 0.05,
    //     });
    // }, { scope: TextRef })
    const ContainerRef = useRef(null)
  return (
    <section ref={ContainerRef} className="relative bg-black overflow-hidden py-16 text-slate-50 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* heading */}
        <div ref={TextRef} className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Industries we serve
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Industries We Work With
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
            While our services can support many types of organizations, we focus
            on industries where modern websites, web apps, and AI can quickly
            create real business value. Here are some of the sectors we know
            especially well.
          </p>
        </div>

        {/* industries grid */}
        <Motion.div className="mt-10 grid gap-6 md:grid-cols-2">
          {industries.map((industry) => (
            <Motion.article
            drag
            dragConstraints={ContainerRef}
              key={industry.label}
              className="group flex h-full flex-col rounded-2xl border backdrop-blur-sm border-slate-800/80 hover:bg-[#0b0a0af1] p-5 s transition-colors hover:border-sky-500/70 sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold text-slate-50">
                  {industry.label}
                </h3>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[11px] text-slate-400">
                  Web · Apps · AI
                </span>
              </div>

              <p className="mt-2 text-sm text-slate-300">
                {industry.summary}
              </p>

              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {industry.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                    <span className="text-xs sm:text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </Motion.article>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
