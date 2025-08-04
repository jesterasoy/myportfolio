import React from "react";

const ThirdSection = () => {
  const myCertificatesData = [
    { id: 1, Cover: "certificates/hackFest.jpg" },
    { id: 2, Cover: "certificates/dataAnalytics.jpg" },
    { id: 3, Cover: "certificates/figma.jpg" },
    { id: 4, Cover: "certificates/plm.jpg" },
    { id: 5, Cover: "certificates/QA.jpg" },
    { id: 6, Cover: "certificates/webDev.jpg" },
  ];

  return (
    <>
      <div className="p-10 max-w-screen-2xl mx-auto h-auto -mt-10">
        <div className="sora">
          <h1 className="text-center font-bold text-4xl 2xl:text-6xl tracking-wide uppercase line-through decoration-yellow-500/40">
            Certificates
          </h1>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 mt-10">
          {myCertificatesData.map((certificate, index) => (
            <div key={certificate.id || index} className="flex justify-center">
              <img
                src={`images/${certificate.Cover}`}
                alt={`Certificate ${certificate.title || index + 1}`}
                className="object-cover rounded-lg shadow-md 
                   hover:shadow-lg hover:scale-105 
                   transition-transform duration-300 
                   w-full max-w-[300px] h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ThirdSection;
