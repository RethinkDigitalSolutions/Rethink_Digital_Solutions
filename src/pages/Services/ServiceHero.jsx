import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion as Motion } from 'framer-motion'
import webDevImg from "../../Images/webDevImg.png";
import uiuxImg from "../../Images/uiuxImg.png";
import frontendImg from "../../Images/frontendImg.png";
import backendImg from "../../Images/backendImg.png";
import aiImg from "../../Images/aiImg.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const ServiceHero = () => {

 const sectionRef = useRef(null);

  useGSAP(() => {
    // Scoped selector helpers:
    const q = gsap.utils.selector(sectionRef);

    // Animate service-item cards individually
    q(".service-item").forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          end: "bottom 70%",
          scrub: true,
          // markers: true,
        },
        opacity: 0,
        y: 50,
        scale: 0.5,
        duration: 1,
        // ease: "power3.out"
      },'a');
    });

    
    // Animate each image parallax and fade
    q(".service-image").forEach((img) => {
      gsap.from(img, {
        scrollTrigger: {
          trigger: img,
          start: "top 85%",
          end: "bottom 70%",
          scrub: true,
          // markers: true,
        },
        opacity: 0,
        y: 50,
        scale: 0.5,
        duration: 1,
        // ease: "power3.out",
      },'a');
    });

    // Clean up scroll triggers when component unmounts
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []); // Empty deps: fire once, ideal for static content

  const services = [
    {
      label: "Web Development",
      slug: "web-development",
      description: "Custom websites and web apps built for performance, scalability, and business growth.",
      image: webDevImg,
    },
    {
      label: "UI/UX Design",
      slug: "ui-ux-design",
      description: "User-first interfaces and flows that make complex products feel simple and intuitive.",
      image: uiuxImg,
    },
    {
      label: "Frontend Development",
      slug: "frontend-development",
      description: "Responsive, accessible frontends that bring your designs to life across all devices.",
      image: frontendImg,
    },
    {
      label: "Backend Development",
      slug: "backend-development",
      description: "Secure, scalable APIs and server logic that keep your product fast and reliable.",
      image: backendImg,
    },
    {
      label: "AI Integration",
      slug: "ai-integration",
      description: "Smart features like chatbots, automation, and personalization powered by AI.",
      image: aiImg,
    },
  ];

  const Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-black py-20 text-slate-50 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6  lg:items-center lg:justify-between lg:px-8 ">
        {/* Left: main copy */}
        <Motion.div variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full">
          <Motion.p variants={Variants} className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-400">
            Services
          </Motion.p>
          <Motion.h1 variants={Variants} className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.6rem]">
            Services tailored to your digital vision
          </Motion.h1>
          <Motion.p variants={Variants} className="mt-4 text-sm leading-relaxed text-slate-400 sm:text-base">
            From idea to deployment, Rethink delivers full‑stack web solutions and
            AI‑powered experiences designed around your business goals.
          </Motion.p>
          <Motion.p variants={Variants} className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
            Whether you need a new website, a scalable web app, or intelligent
            features powered by AI, our team handles strategy, design, frontend,
            backend, and integrations under one roof. You get a reliable partner,
            clear communication, and results you can measure.
          </Motion.p>

          {/* CTAs */}
          <Motion.div variants={Variants}
            className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="hand inline-flex items-center justify-center rounded-full bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-900/60 transition-colors hover:from-blue-500 hover:to-indigo-500"
            >
              Schedule a strategy call
            </Link>
            <Link
              to="/portfolio"
              className="hand text-sm font-medium text-slate-300 underline-offset-4 hover:text-sky-400 hover:underline"
            >
              View recent projects
            </Link>
          </Motion.div>
        </Motion.div>

        <div className="relative mt-4 lg:mt-15 flex-1 lg:w-screen max-w-6xl lg:p-8">

          <Motion.div initial={{ y: 40, opacity: 0, scale:0.5 }}
            animate={{ y: 0, opacity: 1, delay:0.5, scale:1 }}
            transition={{ duration: 1, ease: "easeOut" }} className="mb-4 lg:flex items-center justify-between gap-4 lg:px-2">
            <Motion.div >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                What we do
              </p>
              <p className="mt-1 lg:mb-0 mb-2 text-sm text-slate-200">
                A full stack, under one roof.
              </p>
            </Motion.div>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/70 px-3 py-1 text-[11px] text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Web · Product · AI
            </span>
          </Motion.div>

          <ul className="flex gap-5 lg:justify-between w-full mt-10">
            <div className="flex flex-col gap-30  ">
              {services.map((service, index) => (
                <li
                  key={service.slug}
                  className="service-item  flex w-full h-50 rounded-2xl px-4 py-3 text-slate-200 transition-transform  duration-200 hover:-translate-x-5 "
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className="hand group flex flex-col  items-center gap-3 flex-1"
                  >
                    <div className="flex flex-col items-start gap-3">
                      <div className="mt-0.5 flex h-7 w-7 lg:h-10 lg:w-10 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-[12px] lg:text-[22px] font-bold text-black">
                        {index + 1}
                      </div>
                      <div className=" flex flex-col lg:items-center">
                        <p className="service-title text-base lg:text-3xl font-semibold whitespace-nowrap">{service.label}</p>
                        <p className="service-description mt-1 text-[13px] leading-snug text-slate-400">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <div className="inline-flex items-center text-xs font-medium text-sky-400">
                        This is where your product grows. 
                        <span className="uppercase">&nbsp; &nbsp;click to see</span>
                        <svg
                          className="ml-1 h-3 w-3 translate-x-0 transform transition-transform duration-200 group-hover:translate-x-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M12.293 4.293a1 1 0 011.414 0L17 7.586a2 2 0 010 2.828l-3.293 3.293a1 1 0 01-1.414-1.414L13.586 11H5a1 1 0 110-2h8.586l-1.293-1.293a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </div>
            <div className="flex flex-col gap-20 ">
              {services.map((service) => (
                <img 
                  key={service.slug}
                  src={service.image}
                  alt={service.label}
                  className="service-image w-full h-60 object-contain rounded-xl"
                />
              ))}
            </div>

          </ul>
          <p className="mt-4 text-[11px] text-slate-500 text-center">
            Need something more specific? We can tailor a services bundle around
            your product roadmap, team, and timelines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
