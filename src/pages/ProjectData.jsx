import { useLocation, useParams } from "react-router-dom";
import myProjectsData from "../common/data";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaNode,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiExpress } from "react-icons/si";

// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

// Optional: Slugify helper for consistency
const slugify = (text) =>
  text.toLowerCase().replace(/\./g, "").replace(/\s+/g, "-");

const ProjectData = () => {
  const { state } = useLocation();
  const { title } = useParams();

  const decodedTitle = decodeURIComponent(title).replace(/-/g, " ");
  const project =
    state?.project ||
    myProjectsData.find((p) => slugify(p.Title) === slugify(decodedTitle));

  if (!project) return <p>No project data provided.</p>;

  const techIcons = {
    HTML: <FaHtml5 className="text-orange-500" />,
    CSS: <FaCss3Alt className="text-blue-500" />,
    JavaScript: <FaJs className="text-yellow-400" />,
    React: <FaReact className="text-cyan-400" />,
    PHP: <FaPhp className="text-indigo-600" />,
    TailwindCss: <SiTailwindcss className="text-sky-400" />,
    TailwindCSS: <SiTailwindcss className="text-sky-400" />,
    MySQL: <SiMysql className="text-blue-600" />,
    Node: <FaNode className="text-green-500" />,
    "Node.js": <FaNode className="text-green-500" />,
    Express: <SiExpress className="text-gray-600" />,
    "Express.js": <SiExpress className="text-gray-600" />,
    Bootstrap: <FaBootstrap className="text-purple-600" />,
  };

  return (
    <>
      <div className="sora">
        {/* Header Banner */}
        <div
          className="h-[300px] xl:h-[450px] 2xl:h-[500px] flex items-center justify-center mb-5 w-full"
          style={{
            backgroundImage: `url('/images/${project.Cover}')`,
            backgroundRepeat:
              window.innerWidth >= 1024 ? "no-repeat" : "repeat",
            backgroundPosition: "top center",
            backgroundSize: "cover",
          }}
        ></div>

        {/* Main Content */}
        <div className="p-10 max-w-screen-2xl mx-auto min-h-screen">
          <div className="border-b border-gray-300 pb-6 mb-6">
            <div className="flex justify-between  border-b border-gray-300 pb-4 mb-4">
              <h1
                className="text-2xl md:text-5xl lg:text-6xl font-extrabold mb-2"
                style={{
                  background: `linear-gradient(to right, ${project.Color}, ${project.viaColor}, ${project.toColor})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {project.Title}
              </h1>
              <span className="inline-block h-fit px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 shadow-sm">
                {project.Year}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Project Description */}
              <p className="text-gray-700">{project.Description}</p>
              <div>
                {project.Images?.length > 0 ? (
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    autoplay={{ delay: 3000 }}
                    loop
                    pagination={{
                      clickable: true,
                      el: ".custom-pagination",
                    }}
                    className="w-full h-[300px] md:h-[350px] lg:h-[400px] rounded-lg"
                  >
                    {project.Images.map((imageName, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={`/images/${imageName}`}
                          alt={`Screenshot ${index + 1}`}
                          className="object-contain w-full h-full rounded-lg"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  <p className="text-gray-500">
                    No images available for this project.
                  </p>
                )}
                <div className="custom-pagination mt-4 text-center"></div>
              </div>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="mt-8">
            <h1 className="text-2xl xl:text-3xl font-bold tracking-wide mb-4">
              Development Tools
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4 gap-y-6 mt-4">
              {project.Technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center text-center p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition aspect-square w-full mx-auto"
                >
                  <i className="text-6xl sm:text-7xl lg:text-8xl mb-2 text-blue-600">
                    {techIcons[tech] || <span>🔧</span>}
                  </i>
                  <span className="text-sm sm:text-base font-semibold text-gray-700 mt-2">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectData;
