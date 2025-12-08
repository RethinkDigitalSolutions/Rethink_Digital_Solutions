import React, { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const reasons = [
    {
        id: "performance",
        label: "Performance first",
        title: "Performance first",
        content:
            "We ship speed as a feature: fast loads, clean Lighthouse scores, solid accessibility, and SEO best‑practices baked into every build."
    },
    {
        id: "end-to-end",
        label: "End‑to‑end team",
        title: "End‑to‑end team",
        content:
            "From UX and UI to frontend, backend, and AI, one team owns the whole stack so communication stays simple and momentum never drops."
    },
    {
        id: "ai-ready",
        label: "AI‑ready solutions",
        title: "AI‑ready solutions",
        content:
            "Architected for what is next: APIs, data models, and flows designed so AI features can plug in cleanly instead of feeling bolted on."
    },
    {
        id: "transparent",
        label: "Transparent communication",
        title: "Transparent communication",
        content:
            "You get regular updates, clear documentation, honest timelines, and a partner that explains trade‑offs in plain language."
    }
];

const WhyUsSection = () => {
    const [activeId, setActiveId] = useState("performance");
    const contentRef = useRef(null);
    const TextRef = useRef(null);
    const bulletsRef = useRef([]);



    // fade content on active change
    useLayoutEffect(() => {
        if (!contentRef.current) return;
        const tl = gsap.timeline();
        tl.to(contentRef.current, {
            opacity: 0,
            x: 50,
            duration: 0.25,
            ease: "power2.out"
        }).to(contentRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    }, [activeId]);

    const active = reasons.find((r) => r.id === activeId);

    useGSAP(()=>{
            const split = SplitText.create(TextRef.current, { type: "words, chars" });
            
            gsap.from(split.chars, {
                scrollTrigger: {
                    trigger: TextRef.current,
                    start: "top 80%",
                    end: "bottom 40%",
                    scrub: true,
                    markers: false,
                },
                // duration: 1,
                x: -50,
                autoAlpha: 0,
                stagger: 0.05,
            });
        },{scope: TextRef})
    useGSAP(()=>{
            
            gsap.from(bulletsRef.current, {
                scrollTrigger: {
                    trigger: bulletsRef.current,
                    start: "top 80%",
                    end: "bottom 60%",
                    scrub: true,
                    markers: false,
                },
                // duration: 1,
                x: -50,
                autoAlpha: 0,
                stagger: 1,
            });
            gsap.from(contentRef.current, {
                scrollTrigger: {
                    trigger: contentRef.current,
                    start: "top 80%",
                    end: "bottom 60%",
                    scrub: true,
                    markers: false,
                },
                // duration: 1,
                x: 100,
                autoAlpha: 0,
                stagger: 1,
            });
        },{scope: contentRef})

    return (
        <section
            id="why-us"
            className="relative flex lg:items-center lg:justify-center min-h-screen p-1 text-slate-50 bg-black overflow-hidden"
        >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 lg:flex-col mt-20  lg:px-8 ">
                {/* left: intro / summary */}
                <div ref={TextRef} className=" w-full">
                    <p className="whyus-kicker text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">
                        Why choose us
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                        Why Brands Work With Us
                    </h3>
                    <p className="whyus-intro mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
                        Choosing the right technology partner means more than just good code
                        – it means reliable results, clear communication, and a team that
                        cares about your outcomes as much as you do.
                    </p>
                </div>

                {/* right: interactive bullets + content */}
                <div className="flex flex-1 flex-col gap-6 lg:flex-row lg:gap-10">
                    {/* bullet list */}
                    <div className="flex flex-col gap-3 lg:min-w-[230px]">
                        {reasons.map((reason, index) => {
                            const isActive = reason.id === activeId;
                            return (
                                <button
                                    key={reason.id}
                                    ref={(el) => (bulletsRef.current[index] = el)}
                                    type="button"
                                    onClick={() => setActiveId(reason.id)}
                                    className={`hand group flex items-center gap-3 rounded-full border px-3 py-2 text-left text-sm transition-colors ${isActive
                                        ? "border-sky-500/80 bg-slate-900/90 text-sky-100"
                                        : "border-transparent bg-slate-900/40 text-slate-300 hover:border-slate-700 hover:bg-slate-900/70"
                                        }`}
                                >
                                    <span
                                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[11px] font-semibold transition-colors ${isActive
                                            ? "border-sky-400 bg-sky-500/20 text-sky-300"
                                            : "border-slate-600 bg-slate-900/80 text-slate-400 group-hover:border-sky-400 group-hover:text-sky-300"
                                            }`}
                                    >
                                        {index + 1}
                                    </span>
                                    <span className="whitespace-nowrap lg:text-xl sm:text-sm">
                                        {reason.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* active content panel */}
                    <div
                        ref={contentRef}
                        className="relative flex-1 lg:h-fit overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/80 px-5 py-5 sm:px-7 sm:py-7 lg:mb-0 mb-10"
                    >
                        <div className="pointer-events-none absolute inset-0" />

                        <div className="relative space-y-3">
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
                                {active.label}
                            </p>
                            <h4 className="text-lg font-semibold text-slate-50 sm:text-xl">
                                {active.title}
                            </h4>
                            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                                {active.content}
                            </p>

                            <p className="pt-3 text-[11px] text-slate-500">
                                Brands work with us when they want sites that feel crafted, not
                                templated – fast to use, easy to maintain, and ready for what
                                comes next.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;
