import { React, useState, useEffect } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
const ThirdSection = () => {
  const myCertificatesData = [
    { id: 1, Cover: "certificates/hackFest.jpg" },
    { id: 2, Cover: "certificates/dataAnalytics.jpg" },
    { id: 3, Cover: "certificates/figma.jpg" },
    { id: 4, Cover: "certificates/plm.jpg" },
    { id: 5, Cover: "certificates/QA.jpg" },
    { id: 6, Cover: "certificates/webDev.jpg" },
  ];

  const [isSelected, setIsSelected] = useState(null);

  function handleCertificateClick(certificate) {
    setIsSelected(certificate);
  }

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsSelected(null);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  });

  useEffect(() => {
    document.body.style.overflow = isSelected ? "hidden" : "auto";
  }, [isSelected]);

 useEffect(() => {
    const handleClickOutside = (event) => {
      if (isSelected && !event.target.closest(".certificate-modal")) {
        setIsSelected(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSelected]);

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
            <div
              key={certificate.id || index}
              onClick={() => handleCertificateClick(certificate)}
              className="flex justify-center cursor-pointer"
            >
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

      {isSelected && (
        <div className="modal fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg max-w-3xl w-full">
            <div className="flex justify-end">
              <button
                className="text-[#333] hover:text-red-500 mb-3 transition-all hover:rotate-90 duration-300 cursor-pointer"
                onClick={() => setIsSelected(null)}
              >
                <HiOutlineXMark className="w-6 h-6" />
              </button>
            </div>
            <img
              src={`images/${isSelected.Cover}`}
              alt="Selected Certificate"
              className="w-full max-h-[80vh] object-contain mb-4"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ThirdSection;
