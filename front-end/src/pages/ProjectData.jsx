import { useLocation, useParams } from "react-router-dom";

const ProjectData = () => {
  const { state } = useLocation();

  const project = state?.project;

  if (!project) return <p>No project data provided.</p>;

  return (
    <div className="p-6 h-full">
      <h1 className="text-3xl font-bold">{project.Title}</h1>
      <p className="text-gray-700 mt-4">{project.Description}</p>
      <p className="mt-2 text-sm text-gray-500">
        Technologies: {project.Technologies.join(", ")}
      </p>
    </div>
  );
};

export default ProjectData;
