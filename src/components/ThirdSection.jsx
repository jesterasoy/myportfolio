import React from "react";

const ThirdSection = () => {
  const myCertificatesData = [
    { id: 1, Cover: "certificates/hackFest.jpg" },
    { id: 2, Cover: "certificates/dataAnalytics.jpg" },
  ];

  return (
    <>
      <div className="p-10 max-w-screen-2xl mx-auto min-h-screen -mt-10">
        <div className="sora">
          <h1 className="text-center font-bold text-4xl 2xl:text-6xl tracking-wide uppercase line-through decoration-yellow-500/40">
            Certificates
          </h1>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-10 2xl:grid-cols-5">
          {myCertificatesData.map((certificate, index) => (
            <>
              <div className="" key={certificate.id || index}>
                <img
                  src={`images/${certificate.Cover}`}
                  className="object-cover h-[auto] w-[300px] rounded-lg shadow-md"
                />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default ThirdSection;
