import { Link } from "react-router-dom";
import myProjectsData from "../common/data";
import { React, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function SecSection() {
  const titleRef = useRef(null);

  useEffect(() => {
    // Title animation on scroll
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
    });

    // Animate all project containers
    gsap.utils.toArray(".project-container").forEach((el, i) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        x: i % 2 === 0 ? -50 : 50,
        duration: 1,
        ease: "power3.out",
        delay: i * 0.1, // stagger visually
      });
    });
  }, []);

  return (
    <div className="p-10 max-w-screen-2xl mx-auto min-h-screen">
      <div className="sora">
        <h1
          className="text-center font-bold text-4xl 2xl:text-6xl tracking-wide uppercase line-through decoration-yellow-500/40"
          ref={titleRef}
        >
          Projects
        </h1>
      </div>

      {/* DISPLAYING OF PROJECTS */}
      <div className="grid grid-cols-1 mt-15 sora">
        {myProjectsData.map((project, index) => (
          <div key={project.id || index} className="mb-10">
            <div className="project-container relative w-full flex flex-col lg:flex-row rounded-lg overflow-hidden shadow-md">
              {index % 2 === 0 ? (
                <>
                  {/* Gradient Left (even index) */}
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
                    <Link
                      to={`/ProjectData/${project.Title.replace(/\s+/g, "-")
                        .replace(/\./g, "")
                        .toLowerCase()}`}
                      state={{ project }}
                      className="text-decoration-none hover:underline hover:text-yellow-600 transition-all duration-300"
                    >
                      <h2 className="text-2xl font-bold mb-2">
                        {project.Title}
                      </h2>
                    </Link>
                    <p className="text-gray-700">{project.Preview}</p>
                  </div>
                </>
              ) : (
                <>
                  {/* Text Left */}
                  <div className="w-full lg:w-1/2 bg-white lg:h-[300px] p-6 flex flex-col justify-center">
                    <Link
                      to={`/ProjectData/${project.Title.replace(/\s+/g, "-")
                        .replace(/\./g, "")
                        .toLowerCase()}`}
                      state={{ project }}
                      className="text-decoration-none hover:underline hover:text-yellow-600 transition-all duration-300"
                    >
                      <h2 className="text-2xl font-bold mb-2 truncate">
                        {project.Title}
                      </h2>
                    </Link>
                    <p className="text-gray-700">{project.Preview}</p>
                  </div>

                  {/* Gradient Right (odd index) */}
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default SecSection;
