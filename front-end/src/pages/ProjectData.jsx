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

const ProjectData = () => {
  const { state } = useLocation();
  const { title } = useParams();

  const decodedTitle = decodeURIComponent(title).replace(/-/g, " ");
  const project =
    state?.project ||
    myProjectsData.find(
      (p) => p.Title.toLowerCase().replace(/\./g, "") === decodedTitle
    );

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
        <div className="h-[300px] 2xl:h-[400px] bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 flex items-center justify-center mb-5">
          <div className="p-10 max-w-screen-2xl mx-auto min-h-screen"></div>
        </div>
        <div className="p-10 max-w-screen-2xl mx-auto min-h-screen">
          <div className="border-b-1 border-gray-300 pb-4 mb-8 p-0 ">
            <div className="border-b border-gray-300 pb-6 mb-6 flex justify-between">
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-transparent bg-clip-text mb-2">
                {project.Title}
              </h1>
              <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 shadow-sm  h-fit w-fit">
                {project.Year}
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <p className="text-gray-700 mt-4 mb-4">{project.Description}</p>
              <img />
            </div>
          </div>
          <div className="mt-8">
            <h1 className=" text-2xl xl:text-3xl   font-bold tracking-wide">
              Development Tools
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-4 gap-y-6 mt-8">
              {project.Technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center text-center p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition aspect-square  w-full mx-auto"
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
