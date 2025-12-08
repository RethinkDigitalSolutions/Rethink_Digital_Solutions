import React, { useState } from "react";

const faqs = [
  {
    question: "What services do you actually ship?",
    answer:
      "Custom websites, web apps, design systems, AI-powered features, and product UI/UX. Strategy to launch — and then iteration once real users touch it.",
    tag: "Services",
  },
  {
    question: "How does a project with ReThink run?",
    answer:
      "Start with a discovery call, then we align on scope, timeline, and budget. From there it’s UX → UI → build → launch, with async updates and shared boards so you never wonder what’s happening.",
    tag: "Process",
  },
  {
    question: "How long does a typical build take?",
    answer:
      "Landing pages and smaller sites usually take 3–6 weeks. Larger platforms or AI-heavy builds can run 8–16+ weeks with milestones and check-ins planned from day zero.",
    tag: "Timeline",
  },
  {
    question: "What does a website or product cost?",
    answer:
      "It depends on complexity, integrations, and speed requirements. After a short call, we send a clear proposal with scope, phases, and investment so there are no surprise fees halfway through.",
    tag: "Pricing",
  },
  {
    question: "Do you work with clients outside our city or country?",
    answer:
      "Yes. Most of our work is remote-first: Figma, Notion, and Slack-style comms keep the project moving whether you’re one city away or across time zones.",
    tag: "Remote",
  },
  {
    question: "Is everything mobile-friendly and SEO-conscious?",
    answer:
      "All builds are responsive, performance-focused, and follow technical SEO best practices. That means fast loads, clean markup, and a structure search engines can actually read.",
    tag: "Performance",
  },
  {
    question: "Can my team edit content without touching code?",
    answer:
      "If you want control, we plug in a CMS so you can update copy, images, and pages. We also include short training or docs so your team feels confident, not scared of breaking things.",
    tag: "CMS",
  },
  {
    question: "What kind of AI features can you integrate?",
    answer:
      "Think support chat, content helpers, smart search, recommendations, and automations that connect to your stack. If your workflow is repetitive, there’s probably an AI-powered shortcut.",
    tag: "AI",
  },
  {
    question: "How do you handle security and data privacy?",
    answer:
      "We use secure coding practices, proper auth, HTTPS everywhere, and scoped access. If you have internal policies or compliance needs, we align the implementation to match.",
    tag: "Security",
  },
  {
    question: "Do you stay around after launch?",
    answer:
      "Yes. Ongoing plans cover fixes, tweaks, performance checks, and AI tuning so your product doesn’t feel outdated six months after going live.",
    tag: "Support",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <section className="relative  py-20 text-slate-50 sm:py-24">


      <div className="mx-auto flex  flex-col gap-12 px-6 lg:px-20 ">
        {/* heading & meta */}
        <div className="w-full space-y-5 flex flex-col">
          <div className="flex">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                <span className="h-px w-6 bg-neutral-500" />
                FAQs
              </p>
              <h2 className="text-3xl lg:text-7xl font-semibold tracking-tight sm:text-4xl">
                Answers before you even hop on a call.
              </h2>
            </div>

            {/* mini stat / trust block */}
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-400">
              <div className="rounded-2xl border border-slate-800  px-4 py-3">
                <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-500">
                  Built for real teams
                </p>
                <p className="mt-1 text-sm text-slate-100">
                  Clear process, async-friendly, no ghosting.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-800  px-4 py-3">
                <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-500">
                  Still have questions?
                </p>
                <p className="mt-1 text-sm text-slate-100">
                  Drop a brief and get answers in under 24h.
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="lg:text-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
              The quick version of how ReThink works, what it’s like to build
              together, and what you can expect from the first message to launch
              day.
            </p>
          </div>
        </div>


        {/* accordion list */}
        <div className="lg:w-full">
          <div className="">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <button
                  key={item.question}
                  type="button"
                  onClick={() => toggle(index)}
                  className="hand group flex w-full flex-col items-stretch text-left"
                >
                  <div className="hand flex items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5">
                    <div className="hand flex items-center gap-3">
                      <span className="rounded-full border border-neutral-500 px-2.5 py-1 text-[0.65rem] uppercase tracking-[0.16em] text-slate-400 group-hover:border-sky-500 group-hover:text-sky-400 transition-colors">
                        {item.tag}
                      </span>
                      <span className="text-sm lg:text-3xl font-medium text-slate-100 sm:text-base group-hover:text-sky-100">
                        {item.question}
                      </span>
                    </div>

                    <span
                      className={`flex transition-all duration-200, text-3xl ${isOpen
                        ? "rotate-45 text-sky-300 "
                        : "rotate-0 text-slate-300 group-hover:border-sky-500/70 group-hover:text-sky-300"
                        }`}
                    >
                      {isOpen ? "+" : "+"}
                    </span>
                  </div>

                  <div
                    className={`grid overflow-hidden px-4 pb-0 text-sm text-slate-300 transition-all duration-200 sm:px-6 ${isOpen
                      ? "grid-rows-[1fr] pb-4 sm:pb-5 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="min-h-0 pr-6 text-xs leading-relaxed text-slate-400 sm:text-sm">
                      {item.answer}
                    </div>
                  </div>

                  {/* divider */}
                  {index !== faqs.length - 1 && (
                    <div className="mx-4 border-t border-slate-800/70 group-last:hidden" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
