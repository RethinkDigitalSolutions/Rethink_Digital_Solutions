// AboutHero.jsx
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef, useState } from "react";
import About1 from "../../Images/About1.jpg";
import About2 from "../../Images/About2.jpg";
import About3 from "../../Images/About3.jpg";
import About4 from "../../Images/About4.jpg";
import About5 from "../../Images/About5.jpg";
import AboutSection2 from "./AboutSection2";
import AboutSection3 from "./AboutSection3";
import FaqSection from "../../components/FAQ/Faq";

gsap.registerPlugin(ScrollTrigger, SplitText);

const AboutHero = ({ onAboutLoaded }) => {
  const Images = [About1, About2, About3, About4, About5];
  const [showNext, setShowNext] = useState(false);

  const heroRef = useRef(null);
  const introRef = useRef(null);
  const introTextRef = useRef(null);
  const rethinkBlockRef = useRef(null);
  const pinnedImageRef = useRef(null);
  const ImageRef = useRef(null);

  // Intro text + exit
  useGSAP(
    () => {
      const split = SplitText.create(introTextRef.current, {
        type: "words, chars",
      });

      const tl = gsap.timeline();
      tl.from(split.chars, {
        duration: 1,
        y: -100,
        opacity: 0,
        stagger: 0.1,
        ease: "bounce.out",
      }).to(introRef.current, {
        y: "-50vh",
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          setShowNext(true);
          if (onAboutLoaded) onAboutLoaded();
        },
      });
    },
    { scope: heroRef }
  );

  // Bring in "Redesigning Experiences…" block once intro is gone
  useGSAP(
    () => {
      if (!showNext) return;

      gsap.from(rethinkBlockRef.current, {
        y: "100vh",
        duration: 1,
        ease: "power3.out",
      });

      ScrollTrigger.refresh();
    },
    { dependencies: [showNext], scope: heroRef }
  );

  // Pin the image while scrolling Section1 (desktop only)
  useGSAP(
    () => {
      if (!showNext) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        gsap.to(pinnedImageRef.current, {
          scrollTrigger: {
            trigger: pinnedImageRef.current,
            start: "top 20%",
            end: "+=450",
            pin: true,
            onUpdate: (elem) => {
              let ImageIndex;
              if (elem.progress < 1) {
                ImageIndex = Math.floor(elem.progress * Images.length);
              } else {
                ImageIndex = Images.length - 1;
              }
              ImageRef.current.src = Images[ImageIndex];
            },
          },
        });
      });
    },
    { dependencies: [showNext], scope: heroRef }
  );

  return (
    <div
      ref={heroRef}
      className="text-white flex flex-col p-1 relative overflow-x-clip"
    >
      {/* Intro "rethink" */}
      <div
        ref={introRef}
        className="absolute inset-0 h-screen flex items-center justify-center w-full px-4"
      >
        <h1
          ref={introTextRef}
          className="text-[15vw] sm:text-[18vw] lg:text-[19vw] scale-y-150 sm:scale-y-175 uppercase font-[DirtyPunk]"
        >
          rethink
        </h1>
      </div>

      {showNext && (
        <>
          {/* Section 1 */}
          <section className="Section1 relative min-h-screen lg:min-h-[200vh]">
            {/* Big text block from bottom */}
            <div
              ref={rethinkBlockRef}
              className="w-full text-3xl sm:text-4xl md:text-5xl lg:text-[6rem] scale-y-150 sm:scale-y-175 lg:scale-y-200 leading-tight sm:leading-tight lg:leading-22 mt-35 sm:mt-70 md:mt-45 lg:mt-90 px-3 sm:px-4 lg:p-5 font-[Milker]"
            >
              <h1 className="rethink uppercase">Redesigning</h1>
              <h1 className="rethink uppercase">Experiences</h1>
              <h1 className="rethink uppercase">Through</h1>
              <h1 className="rethink uppercase">High-Performance</h1>
              <h1 className="rethink uppercase">Interactive</h1>
              <h1 className="rethink uppercase">Next-Gen</h1>
              <h1 className="rethink uppercase">Kinetics</h1>
            </div>

            {/* Image + copy section */}
            <div className="relative min-h-[55vh] sm:min-h-screen lg:h-[150vh] mt-10 sm:mt-16 lg:-mt-20">
              {/* Pinned image: desktop only */}
              <div
                ref={pinnedImageRef}
                className="hidden lg:block 
                  w-48 h-64 xl:w-60 xl:h-80 
                  rounded-3xl xl:rounded-4xl 
                  overflow-hidden absolute 
                  left-[30%] xl:left-[35%] 
                  top-[40vh]"
              >
                <img
                  ref={ImageRef}
                  className="h-full w-full object-cover"
                  src={About1}
                  alt="Rethink"
                />
              </div>

              {/* Text block */}
              <div
                className="w-full lg:w-[60%] 
                  flex flex-col gap-2 h-fit 
                  px-4 sm:px-6 lg:px-0
                  absolute 
                  lg:right-5 lg:top-[60vh] top-[10vh]
                  text-left lg:text-right 
                  text-xl sm:text-2xl md:text-3xl lg:text-5xl 
                  leading-relaxed sm:leading-relaxed lg:leading-12 
                  text-[#635e5e] font-bold"
              >
                <p>
                  Rethink Digital Solutions is a full‑stack web and AI studio
                  focused on turning ambitious ideas into high‑performing
                  digital products. We design and build custom websites, web
                  apps, and intelligent features that combine clean UI/UX, solid
                  engineering, and practical AI to help startups and growing
                  businesses move faster, look sharper, and operate smarter.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="Section2 min-h-screen w-full">
            <AboutSection2 />
          </section>

          {/* Section 3 */}
          <section className="Section3 min-h-screen w-full">
            <AboutSection3 />
          </section>

          <FaqSection />
        </>
      )}
    </div>
  );
};

export default AboutHero;
