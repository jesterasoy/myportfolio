function SecSection() {
  const myProjects = [
    {
      id: 1,
      Title: "Personal Portfolio Website",
      Description:
        "A responsive portfolio site built with HTML, CSS, and JavaScript to showcase my skills and projects.",
      Technologies: ["HTML", "CSS", "JavaScript"],
      Link: "https://example.com/portfolio",
    },
    {
      id: 2,
      Title: "Task Manager App",
      Description:
        "A simple task manager that allows users to add, delete, and mark tasks as completed.",
      Technologies: ["React", "Tailwind CSS", "Firebase"],
      Link: "https://example.com/task-manager",
    },
    {
      id: 3,
      Title: "Movie Finder",
      Description:
        "A movie search app using an external API to browse movies and view details.",
      Technologies: ["HTML", "CSS", "JavaScript", "TMDB API"],
      Link: "https://example.com/movie-finder",
    },
    {
      id: 4,
      Title: "E-Commerce Website",
      Description:
        "A dummy e-commerce front-end with shopping cart functionality.",
      Technologies: ["React", "Redux", "Bootstrap"],
      Link: "https://example.com/ecommerce",
    },
    {
      id: 5,
      Title: "Blog CMS",
      Description:
        "A basic blog platform with admin dashboard for managing posts.",
      Technologies: ["PHP", "MySQL", "Bootstrap"],
      Link: "https://example.com/blog-cms",
    },
  ];

  return (
    <>
      <div className="p-10 max-w-screen-2xl mx-auto min-h-screen">
        <div className="sora">
          <h1 className="text-center font-bold text-6xl tracking-wide uppercase line-through decoration-yellow-500/40">
            Projects
          </h1>
        </div>

        {/*DISPLAYING OF PROJECTS */}
        <div className="grid grid-cols-1  mt-15 sora">
          {myProjects[0] && (
            <div key={myProjects[0].id} className="mb-10">
              <div className="relative h-[350px] w-full flex rounded-lg overflow-hidden shadow-md">
                <div
                  className="w-1/2 h-full bg-gradient-to-r from-red-500 via-red-600 to-red-700"
                  style={{
                    clipPath: "polygon(0 0, 90% 0, 100% 100%, 0% 100%)",
                  }}
                ></div>

                <div className="w-1/2 h-full bg-white p-6 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold mb-2">
                    {myProjects[0].Title}
                  </h2>
                  <p className="text-gray-700">{myProjects[0].Description}</p>
                </div>
              </div>
            </div>
          )}
          {myProjects[1] && (
            <div key={myProjects[1].id} className="mb-10">
              <div className="relative h-[350px] w-full flex rounded-lg overflow-hidden shadow-md">
                <div className="w-1/2 h-full bg-white p-6 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold mb-2">
                    {myProjects[1].Title}
                  </h2>
                  <p className="text-gray-700">{myProjects[1].Description}</p>
                </div>

                <div
                  className="w-1/2 h-full bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)",
                  }}
                ></div>
              </div>
            </div>
          )}
          {myProjects[2] && (
            <div key={myProjects[2].id} className="mb-10">
              <div className="relative h-[350px] w-full flex rounded-lg overflow-hidden shadow-md">
                <div
                  className="w-1/2 h-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"
                  style={{
                    clipPath: "polygon(0 0, 90% 0, 100% 100%, 0% 100%)",
                  }}
                ></div>

                <div className="w-1/2 h-full bg-white p-6 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold mb-2">
                    {myProjects[2].Title}
                  </h2>
                  <p className="text-gray-700">{myProjects[2].Description}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SecSection;
