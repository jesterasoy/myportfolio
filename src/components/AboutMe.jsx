import { React, useState, useEffect } from "react";
//ICONS
import { HiOutlineXMark } from "react-icons/hi2";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
//PACKAGES
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const AboutMe = () => {
  // State to manage the toggle for the side bar
  const [isSideToggleOpen, setSideToggleOpen] = useState(false);

  const toggleBar = () => {
    setSideToggleOpen(!isSideToggleOpen);
  };
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (tech) => {
    setSelectedImage(tech);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  const [nextImage, setNextImage] = useState(null);
  const [prevImage, setPrevImage] = useState(null);

  const handleNext = () => {
    const currentIndex = techEvent.findIndex(
      (img) => img.id === selectedImage.id
    );
    const nextIndex = (currentIndex + 1) % techEvent.length;
    setNextImage(techEvent[nextIndex]);
    setSelectedImage(techEvent[nextIndex]);
  };
  const handlePrev = () => {
    const currentIndex = techEvent.findIndex(
      (img) => img.id === selectedImage.id
    );
    const prevIndex = (currentIndex - 1 + techEvent.length) % techEvent.length;
    setPrevImage(techEvent[prevIndex]);
    setSelectedImage(techEvent[prevIndex]);
  };

  //Technology stack for the Swiper component
  const techStack = [
    {
      id: 1,
      name: "JavaScript",
      image: "images/JS.png",
    },
    {
      id: 2,
      name: "ReactJS",
      image: "images/react.png",
    },
    {
      id: 3,
      name: "Tailwind CSS",
      image: "images/tailwind.png",
    },
    {
      id: 4,
      name: "HTML",
      image: "images/html.png",
    },
    {
      id: 5,
      name: "CSS",
      image: "images/css.png",
    },
    {
      id: 6,
      name: "PHP",
      image: "images/php.png",
    },
    {
      id: 7,
      name: "Git",
      image: "images/git.png",
    },
  ];

  const techEvent = [
    {
      id: 1,
      img: "images/techEvents/pic1.jpg",
    },
    {
      id: 2,
      img: "images/techEvents/pic2.jpg",
    },
    { id: 3, img: "images/techEvents/pic3.jpg" },
    {
      id: 4,
      img: "images/techEvents/pic4.jpg",
    },
    {
      id: 5,
      img: "images/techEvents/pic5.jpg",
    },
  ];

  return (
    <>
      <div className="sora flex flex-wrap  md:justify-start items-center gap-4 mt-6 sm:mt-8 md:mt-10 lg:-mt-4 xl:-mt-6 2xl:mt-10">
        <button
          className="get px-4 py-2 text-sm sm:text-base tracking-wide font-semibold rounded-full cursor-pointer sm:px-6 sm:py-3 lg:px-8 lg:py-4"
          onClick={toggleBar}
        >
          <span>Get to Know Me</span>
        </button>

        <button className="bg px-4 py-2 text-sm sm:text-base tracking-wide font-semibold rounded-full cursor-pointer sm:px-6 sm:py-3 lg:px-8 lg:py-4">
          <span>Resume</span>
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[600px] 2xl:w-[800px] bg-gradient-to-br from-white via-[#f9f9f9] to-[#ffffff] shadow-xl border-l border-gray-200 transform transition-transform duration-300 ease-in-out z-50 overflow-y-auto scrollbar-on-hover ${
          isSideToggleOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 poppins-thin">
          {/* Header */}
          <div className="flex justify-between mb-6 items-center border-b border-gray-300 pb-4">
            <h2 className="text-2xl font-bold tracking-wide">About Me</h2>
            <button
              className="text-[#333] hover:text-red-500 transition-all hover:rotate-90 duration-300"
              onClick={toggleBar}
            >
              <HiOutlineXMark className="w-6 h-6" />
            </button>
          </div>

          {/* Profile Info */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
            <img
              src="images/myFirstPic.jpg"
              alt="Jester Nicholas C. Asoy"
              className="rounded-full h-[150px] w-[150px] object-cover shadow-md border border-gray-200"
            />
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-gray-900">
                Jester Nicholas C. Asoy
              </h3>
              <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-1 mb-3 text-sm text-gray-600">
                <span>Front-End Web Developer</span>•<span>Commission</span>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 text-xs text-gray-600">
                <span className="bg-white px-3 py-2 rounded-full shadow-sm border border-gray-100 w-fit h-fit">
                  📍 Malabon City, Philippines
                </span>
                <span className="bg-white px-3 py-2 rounded-full shadow-sm border border-gray-100 w-fit h-fit">
                  📩 asoy.jestern@gmail.com
                </span>
                <span className="bg-white px-3 py-2 rounded-full shadow-sm border border-gray-100 w-fit h-fit">
                  📞 +63 991-1363-076
                </span>
              </div>
            </div>
          </div>

          {/* About Paragraph */}
          <div className="bg-white p-5 rounded-xl shadow mb-6 border border-gray-100">
            <p className="text-[15px] text-gray-700 leading-relaxed font-montserrat">
              Hi! I'm Jester Nicholas C. Asoy, a BSIT graduate who’s always been
              into technology. Ever since I was young, I enjoyed playing
              computer games, exploring how gadgets worked, and pretending I was
              fixing the internet by restarting the router when my family asked
              why the internet was so slow. That curiosity turned into passion
              as I grew up and started diving into the world of web development.
              <br />
              <br />
              I began by learning the basics of HTML, CSS, and JavaScript the
              usual trio. Then I got into PHP and styled my projects using
              Bootstrap, which made everything look decent without the stress of
              writing custom CSS from scratch. Eventually, I explored ReactJS
              and Tailwind CSS. At first, they looked scary, but now I enjoy
              using them to build clean and responsive websites.
              <br />
              <br />
              Today, I love creating web interfaces that are both functional and
              user-friendly. I'm always up for learning something new, fixing
              bugs that appear out of nowhere, and building projects that
              challenge me to grow. And yes, I'm still trying to convince my
              family that "front-end developer" isn't just a fancy term for
              someone who uses Facebook all day.
            </p>
          </div>

          {/* Dev Skills Section */}
          <div className="font-sora text-center mt-10">
            <h1 className="uppercase text-2xl font-bold mb-5">
              Development Skills
            </h1>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={2}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1280: { slidesPerView: 4 },
              }}
              autoplay={{ delay: 1500 }}
              loop={true}
            >
              {techStack.map((tech) => (
                <SwiperSlide
                  key={tech.id}
                  className="flex flex-col items-center"
                >
                  <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-110 border border-gray-100">
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-14 h-14 object-contain mx-auto"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Life in Tech Section */}
          <div className="font-sora mt-10">
            <h1 className="uppercase text-2xl font-bold mb-5 text-center">
              My Life in Tech...
            </h1>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              autoplay={{ delay: 1500 }}
              loop={true}
            >
              {techEvent.map((tech) => (
                <SwiperSlide
                  key={tech.id}
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => openModal(tech)}
                >
                  <div className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300">
                    <img
                      src={tech.img}
                      className="w-full h-24 lg:h-36 object-cover"
                      alt="Tech event"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 backdrop-blur-sm  z-60 flex items-center justify-center min-h-screen">
          <div>
            <div className="bg-white rounded-xl max-w-lg w-full p-4 shadow-lg relative ">
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-[#333333] px-1 py-1 text-sm bg-[#F5F5F5] rounded-full hover:text-red-500 transition-all hover:rotate-90 duration-300 cursor-pointer"
              >
                <HiOutlineXMark className="w-6 h-6" />
              </button>
              <img
                src={selectedImage.img}
                alt="Expanded"
                className="w-full h-[auto] lg:h-[300px] 2xl:h-auto rounded-lg mb-4"
              />
              <h2 className="text-xl font-bold mb-2">
                {selectedImage.title || "Tech Event"}
              </h2>
              <p className="text-gray-600 text-sm">
                {selectedImage.description || "No description available."}
              </p>
            </div>
            <div className="flex justify-between mt-4 p-4">
              <button
                className="bg-[#F5F5F5] text-[#333333] px-3 py-2 rounded-full shadow-sm hover:bg-gray-200 transition-all cursor-pointer"
                onClick={handlePrev}
              >
                <FaChevronLeft />
              </button>

              <button
                className="bg-[#F5F5F5] text-[#333333] px-3 py-2 rounded-full shadow-sm hover:bg-gray-200 transition-all cursor-pointer"
                onClick={handleNext}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutMe;
