import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useLoader } from "../../context/LoaderContext";

gsap.registerPlugin(SplitText);

const Loader = () => {
    const { setHomeContent, hasVisited, markVisited } = useLoader();
    const circleRef = useRef(null);
    const lineRef = useRef(null);
    if (hasVisited) return null;

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to(circleRef.current, {
            rotate: 720,
            duration: 1,
            delay: 1,
        }, "a");

        tl.to(lineRef.current, {
            duration: 1.9,
            delay: 1,
            scaleX: 0.25,
            transformOrigin: "left",
        }, "a");

        tl.to(circleRef.current, {
            y: 305,
            duration: 1,
            delay: 2,
            ease: "bounce.out",
        }, "a");

        tl.to(circleRef.current, {
            scale: 45,
            duration: 1,
            delay: -0.7,
            ease: "expo.inOut",
            transformOrigin: "50% 50%",
            onComplete: () => {
                setHomeContent(true);
                // this.kill()
                markVisited();
            },
        });
    });

    useGSAP(() => {
        const split = SplitText.create(".split", { type: "words, chars" });

        gsap.from(split.chars, {
            duration: 1,
            x: 50,
            autoAlpha: 0,
            stagger: 0.05,
        });
    });

    return (
        <div className="loader h-screen w-full bg-black text-white flex flex-col items-center justify-center overflow-hidden">
            <h1 className="split uppercase font-bold lg:-top-10 top-20 lg:left-10 lg:text-[8em] lg:scale-y-135 scale-y-185 absolute font-[Felix] text-6xl flex flex-col ">
                rethink
                <span className="lg:text-2xl text-[15px] lg:mt-8 mt-4 tracking-widest">
                    Your vision, our code.
                </span>
            </h1>

            <div
                ref={circleRef}
                className="bg-white lg:h-15 lg:w-15 h-10 w-10 rounded-full p-3 text-black z-10"
            ></div>

            <div
                ref={lineRef}
                className="bg-white h-1 lg:w-[25%] w-[45%] rounded-4xl"
            ></div>
        </div>
    );
};

export default Loader;
