import React from "react";
import Typwriter from "typewriter-effect";
import "../styles/Button.css";
import { FaArrowDownLong } from "react-icons/fa6";

const FirstSection = () => {
  return (
    <>
      <div>
        <section className="mt-10">
          <div className="absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-white via-blue-50 to-white [mask-image:linear-gradient(to_bottom,black,black,transparent)]"></div>
          <div className="grid grid-cols-3">
            <div className="flex flex-col items-start h-100 justify-center sora text-balance col-span-2 mt-5 2xl:mt-[5rem]">
              <h1 className="font-bold text-6xl 2xl:text-8xl tracking-wide">
                Hello, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600 via-yellow-700">
                  Jester
                </span>
              </h1>

              <div className="absolute top-[245px] 2xl:top-[290px] left-[370px] 2xl:left-[750px] -z-10 h-[65px] w-[200px] 2xl:w-[300px] bg-[#F4CE14] opacity-30 blur-md"></div>
              <h1 className="font-bold text-6xl 2xl:text-8xl tracking-wide flex items-center gap-5">
                A Web{" "}
                <span>
                  <Typwriter
                    options={{
                      strings: [" Developer."],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h1>

              <p className="mt-4  2xl:text-lg text-lg text-gray-600  leading-relaxed">
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

            <div className="relative h-[450px] w-[300px] mx-auto mt-10 lg:mt-0 rounded-lg overflow-hidden ">
              <img
                src="images/myThirdNoBg.png"
                alt="My Image"
                className="h-full w-full object-cover "
              />
            </div>
          </div>

          <div className="poppins-thin flex justify-start items-center gap-4 -mt-5 2xl:mt-10">
            <button className="get p-4 tracking-wide font-semibold rounded-full cursor-pointer">
              <span> Get to Know Me</span>
            </button>

            <button className="bg p-4 tracking-wide font-semibold rounded-full cursor-pointer">
              <span>Resume</span>
            </button>
          </div>

          <div className="relative sora tracking-wide">
            <div className="absolute -bottom-[120px] 2xl:-bottom-[200px] left-1/2 -translate-x-1/2 flex flex-col items-center">
              <div className="animate-bounce bg-white p-3 rounded-full shadow-lg ring-1 ring-gray-200 hover:ring-gray-400 transition-all duration-300">
                <FaArrowDownLong className="text-[1rem] text-gray-800" />
              </div>
              <span className="mt-3 font-semibold text-gray-700 text-sm sm:text-md transition-opacity duration-300 hover:opacity-80">
                Scroll for more
              </span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FirstSection;
