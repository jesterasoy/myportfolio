import { React, useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Typwriter from "typewriter-effect";
//STYLE
import "../styles/Button.css";
//ICONS
import { FaArrowDownLong } from "react-icons/fa6";
import AboutMe from "./AboutMe";
const FirstSection = () => {
  const [isClickScrollDown, setIsClickScrollDown] = useState(false);

  const handleScrollDown = () => {
    setIsClickScrollDown(true);
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  const textRef = useRef(null);
  const imageRef = useRef(null);
  const subTextRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(textRef.current, {
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: "power3.out",
    })
      .from(
        subTextRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .from(
        imageRef.current,
        {
          opacity: 0,
          x: 50,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.8"
      );
  }, []);

  const isSmall = window.innerWidth <= 360;

  const style = {
    fontSize: isSmall ? "1.2rem" : "",
  };
  return (
    <>
      <div>
        <section className="-mt-10 2xl:mt-0">
          <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-white via-blue-50 to-white [mask-image:linear-gradient(to_bottom,black,black,transparent)]"></div>
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="flex flex-col items-start h-100 justify-center sora text-balance col-span-2 -mt-[8rem] md:-mt-[5rem] lg:-mt-[3rem] 2xl:mt-[2.5rem]">
              <h1
                className="font-bold text-xl md:text-3xl lg:text-4xl  xl:text-5xl 2xl:text-6xl tracking-wide"
                style={style}
                ref={textRef}
              >
                Hello I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600 via-yellow-700">
                  Jester
                </span>{" "}
                —
              </h1>

              <div className="absolute top-[100px] md:top-[150px] lg:top-[190px] 2xl:top-[300px] left-[130px] md:left-[185px] lg:left-[200px] xl:left-[260px] 2xl:left-[520px] -z-10 h-[10px] w-[90px] md:w-[120px] lg:h-[55px] xl:h-[65px] lg:w-[160px] xl:w-[200px] 2xl:w-[240px] bg-[#F4CE14] opacity-30 blur-md"></div>
              <h1
                ref={subTextRef}
                style={style}
                className="font-bold text-xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl tracking-wide flex items-center gap-3"
              >
                Aspiring
                <span>
                  <Typwriter
                    options={{
                      strings: ["Web Developer.", "IT Specialist."],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h1>

              <p
                ref={subTextRef}
                className="mt-4 text-xs md:text-lg 2xl:text-lg lg:text-[15px] text-gray-600  leading-relaxed"
              >
                A passionate developer turning ideas into interactive
                experiences — focused on{" "}
                <span className="underline decoration-cyan-500">modern</span>,{" "}
                {""}
                <span className="underline decoration-violet-500">
                  user-friendly,
                </span>
                <span> and </span>
                <span className="underline decoration-red-500">
                  accessible web solutions.
                </span>
              </p>
            </div>

            <div className="relative w-full h-[200px] md:h-[300px] lg:h-[360px] xl:h-[450px] mx-auto -mt-[6rem] mb-5 sm:mt-0 md:mb-0 lg:mb-0 2xl:mb-0">
              <img
                ref={imageRef}
                src="images/myThirdNoBg.png"
                alt="My Image"
                className="h-full w-full object-contain mx-auto"
              />
            </div>
          </div>

          <AboutMe />

          <div className="relative sora tracking-wide mb-[5rem] lg:mb-[8rem] 2xl:mb-[15rem]">
            <div className="absolute -bottom-[120px] 2xl:-bottom-[200px] left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="" onClick={handleScrollDown}>
                <div className="text-center w-fit mx-auto cursor-pointer animate-bounce bg-white p-3 rounded-full shadow-lg ring-1 ring-gray-200 hover:ring-gray-400 transition-all duration-300">
                  <FaArrowDownLong className="text-[1rem] text-gray-800" />
                </div>
                <span className="cursor-pointer mt-3 font-semibold text-gray-700 text-sm sm:text-md transition-opacity duration-300 hover:opacity-80">
                  Scroll for more
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FirstSection;
