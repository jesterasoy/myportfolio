import { Link } from "react-router-dom";
import myProjectsData from "../common/data";

function SecSection() {
  return (
    <>
      <div className="p-10 max-w-screen-2xl mx-auto min-h-screen">
        <div className="sora">
          <h1 className="text-center font-bold text-4xl 2xl:text-6xl tracking-wide uppercase line-through decoration-yellow-500/40">
            Projects
          </h1>
        </div>

        {/*DISPLAYING OF PROJECTS */}
        <div className="grid grid-cols-1 mt-15 sora">
          {myProjectsData.map((project, index) => (
            <div key={project.id || index} className="mb-10">
              <div className="relative w-full flex flex-col lg:flex-row rounded-lg overflow-hidden shadow-md">
                {index % 2 === 0 ? (
                  <>
                    {/* Gradient Left (even index) */}
                    <div
                      className={`w-full lg:w-1/2 h-[200px] lg:h-[300px] bg-gradient-to-r ${
                        index === 0
                          ? "from-red-500 via-red-600 to-red-700"
                          : "from-blue-500 via-blue-600 to-blue-700"
                      }`}
                      style={{
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
                        className="text-decoration-none"
                      >
                        <h2 className="text-2xl font-bold mb-2  ">
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
                        className="text-decoration-none"
                      >
                        <h2 className="text-2xl font-bold mb-2 truncate">
                          {project.Title}
                        </h2>
                      </Link>
                      <p className="text-gray-700">{project.Preview}</p>
                    </div>

                    {/* Gradient Right (odd index) */}
                    <div
                      className="w-full lg:w-1/2 h-[200px] lg:h-auto bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700"
                      style={{
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
    </>
  );
}

export default SecSection;
