import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Brain from "../../Images/Brain.png"
import { useGSAP } from "@gsap/react";
// import { easeInOut } from "motion";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const services = [
    {
        title: "Web Development",
        summary:
            "Start with a clear goal: a site or app that actually wins you customers, not just pageviews.",
        detail:
            "We craft conversion-focused sites, landing pages, and web apps that stay fast and secure under real traffic."
    },
    {
        title: "UI/UX Design",
        summary:
            "Then we turn rough ideas into journeys your users instantly understand.",
        detail:
            "From wireframes to high-fidelity screens and design systems, we make your product feel intuitive and enjoyable."
    },
    {
        title: "Frontend Development",
        summary:
            "The visuals become living, breathing interfaces that feel smooth and responsive.",
        detail:
            "We ship pixel-perfect frontends using modern frameworks, performance budgets, and clean, maintainable code."
    },
    {
        title: "Backend Development",
        summary:
            "Behind the scenes, your data, logic, and integrations stay reliable and secure.",
        detail:
            "We design APIs, databases, and services that scale with growth and keep your product online when it matters."
    },
    {
        title: "AI Integration",
        summary:
            "Finally, we add intelligence so your product can do more than just display data.",
        detail:
            "Chatbots, recommendations, and workflow automation built on leading AI platforms and APIs."
    }
];

const HomeServices = () => {
    const sectionRef = useRef(null);
    const TextRef = useRef(null);
    const cardsRef = useRef([]);
    const ImageRef = useRef(null);



    // intro text timeline
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ImageRef.current,
                start: "top 20%",
                end: '+=130%',
                scrub: true,
                pin: true,
                // markers:true
            }
        });
        tl.to(ImageRef.current, {
            rotateY: 360,
            rotate: 360,
            rotateX: 360,
            ease: "easeInOut"
        })

        // cards reveal – small storytelling “chapters”
        gsap.from(cardsRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 40%",
                end: "bottom 20%",
                scrub: true,
                // markers: true,
            },
            x: -140,
            opacity: 0,
            stagger: 0.2,
            ease: "power2.out"
        });

    })
    useGSAP(() => {
        const split = SplitText.create(TextRef.current, { type: "words, chars" });

        gsap.from(split.chars, {
            scrollTrigger: {
                trigger: TextRef.current,
                start: "top 80%",
                end: "bottom 50%",
                scrub: true,
                markers: false,
            },
            // duration: 1,
            x: 50,
            autoAlpha: 0,
            stagger: 0.05,
        });
    }, { scope: TextRef })


    return (
        <section
            ref={sectionRef}
            className="relative bg-black py-20 text-slate-50 sm:py-24 "
            id="services"
        >

            <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 lg:px-8">
                {/* storytelling intro */}
                <div ref={TextRef} className=" max-w-3xl">
                    <p className="services-kicker text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
                        Services
                    </p>
                    <h2 className="services-title mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                        What We Build for You
                    </h2>
                    <p className="services-intro mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
                        We design and develop end-to-end digital solutions, from first
                        wireframe to production-ready code, so you can stay focused on
                        actually running your business instead of managing vendors.
                    </p>

                    <p className="mt-4 text-sm text-slate-400 sm:text-base">
                        Think of it as a small story: your idea comes in on one side –
                        strategy, UX, UI, frontend, backend and AI all work together –
                        and a stable, conversion-ready product walks out on the other.
                    </p>
                </div>

                {/* services cards – each one is a “chapter” */}
                <div className=" flex ">
                    <div className="flex flex-col gap-6 w-fit ">
                        {services.map((service, index) => (
                            <article
                                key={service.title}
                                ref={(el) => (cardsRef.current[index] = el)}
                                className="group relative overflow-hidden rounded-2xl border border-slate-800/80  p-5  transition-colors hover:border-sky-500/60"
                            >
                                {/* hover glow */}
                                <div className="pointer-events-none absolute inset-0 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100">
                                    <div className="absolute inset-0 bg-linear-to-br from-sky-500/18 via-cyan-400/10 to-emerald-400/10" />
                                </div>

                                <div className="relative flex h-full flex-col gap-3">
                                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-slate-900/90 ring-1 ring-slate-700/80 group-hover:ring-sky-500/70">
                                        <span className="text-[11px] font-semibold text-sky-400">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>

                                    <h3 className="text-base font-semibold text-slate-50">
                                        {service.title}
                                    </h3>

                                    <p className="text-sm text-slate-300">{service.summary}</p>

                                    <p className="mt-1 text-xs leading-relaxed text-slate-500">
                                        {service.detail}
                                    </p>

                                    <div className="mt-auto pt-3">
                                        <span className="inline-flex items-center text-xs font-medium text-sky-400">
                                            This is where your product grows
                                            <svg
                                                className="ml-1 h-3 w-3 translate-x-0 transform transition-transform duration-200 group-hover:translate-x-1"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path d="M12.293 4.293a1 1 0 011.414 0L17 7.586a2 2 0 010 2.828l-3.293 3.293a1 1 0 01-1.414-1.414L13.586 11H5a1 1 0 110-2h8.586l-1.293-1.293a1 1 0 010-1.414z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div
                        ref={ImageRef}
                        className="object-cover h-fit ml-4 -mt-13 hidden sm:block md:block"
                    >
                        <img src={Brain} alt="Brain" className="h-110 w-110" />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HomeServices;
