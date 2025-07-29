import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
const ToTheTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  let scrollTimeout;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        setIsVisible(false);
      }, 1500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="fixed bottom-10 right-10 z-50">
        <button
          className={`text-center w-fit mx-auto cursor-pointer bg-white p-3 rounded-full shadow-lg ring-1 ring-gray-200 hover:ring-gray-400 transition-all duration-300 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-5 pointer-events-none"
          }`}
          onClick={handleScrollToTop}
        >
          <FaArrowUp className="text-[1rem] text-gray-800" />
        </button>
      </div>
    </>
  );
};

export default ToTheTop;
