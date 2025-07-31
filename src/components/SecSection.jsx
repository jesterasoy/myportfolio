import { Link } from "react-router-dom";
import myProjectsData from "../common/data";
import { React, useRef, useEffect } from "react";
import { gsap } from "gsap";

function SecSection() {
  const titleRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
    });
  }, []);
  const itemsRef = useRef([]);

  // Clear refs each render
  itemsRef.current = [];

  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  useEffect(() => {
    itemsRef.current.forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        x: i % 2 === 0 ? -50 : 50, // even from left, odd from right
        duration: 1.2,
        delay: i * 0.2, // stagger effect
        ease: "power3.out",
      });
    });
  }, []);
  return (
    <>
      <div className="p-10 max-w-screen-2xl mx-auto min-h-screen">
        <div className="sora">
          <h1
            className="text-center font-bold text-4xl 2xl:text-6xl tracking-wide uppercase line-through decoration-yellow-500/40"
            ref={titleRef}
          >
            Projects
          </h1>
        </div>

        {/*DISPLAYING OF PROJECTS */}
        <div className="grid grid-cols-1 mt-15 sora">
          {myProjectsData.map((project, index) => (
            <div
              key={project.id || index}
              ref={addToRefs}
              className="mb-10 relative w-full flex flex-col lg:flex-row rounded-lg overflow-hidden shadow-md"
            >
              {index % 2 === 0 ? (
                <>
                  {/* Image Left */}
                  <div
                    className="w-full lg:w-1/2 h-[200px] lg:h-[400px]"
                    style={{
                      backgroundImage: `url('images/${project.Cover}')`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      clipPath:
                        window.innerWidth >= 1024
                          ? "polygon(0 0, 90% 0, 100% 100%, 0% 100%)"
                          : "none",
                    }}
                  ></div>

                  {/* Text Right */}
                  <div className="w-full lg:w-1/2 bg-white lg:h-[300px] p-6 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-2">{project.Title}</h2>
                    <p className="text-gray-700">{project.Preview}</p>
                  </div>
                </>
              ) : (
                <>
                  {/* Text Left */}
                  <div className="w-full lg:w-1/2 bg-white lg:h-[300px] p-6 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-2">{project.Title}</h2>
                    <p className="text-gray-700">{project.Preview}</p>
                  </div>

                  {/* Image Right */}
                  <div
                    className="w-full lg:w-1/2 h-[200px] lg:h-[400px]"
                    style={{
                      backgroundImage: `url('images/${project.Cover}')`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      clipPath:
                        window.innerWidth >= 1024
                          ? "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)"
                          : "none",
                    }}
                  ></div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SecSection;
