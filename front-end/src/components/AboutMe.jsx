import { React, useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
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

  return (
    <>
      <div className="poppins-thin flex justify-start items-center gap-4 -mt-5 2xl:mt-10">
        <button
          className="get p-4 tracking-wide font-semibold rounded-full cursor-pointer"
          onClick={toggleBar}
        >
          <span> Get to Know Me</span>
        </button>

        <button className="bg p-4 tracking-wide font-semibold rounded-full cursor-pointer">
          <span>Resume</span>
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[500px] 2xl:w-[600px] bg-gradient-to-br from-white via-[#F5F5F5] to-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 scrollbar-on-hover ${
          isSideToggleOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 poppins-thin">
          <div className="flex justify-between mb-7 sora items-center border-b-1 border-black ">
            <h2 className="text-2xl font-bold mb-4  tracking-wide ">
              About Me
            </h2>
            <button
              className="mb-4 text-[#333333] cursor-pointer font-bold px-2 py-2 bg-[#F5F5F5] rounded-full hover:scale-110 transition ease-in duration-300"
              onClick={toggleBar}
            >
              <HiOutlineXMark />
            </button>
          </div>
          <div className="mb-8 flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <img
              src="images/myFirstPic.jpg"
              alt="Jester Nicholas C. Asoy"
              className="rounded-full h-[130px] w-[130px] object-cover shadow-lg"
            />
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-bold text-gray-900">
                Jester Nicholas C. Asoy
              </h3>
              <div className="flex items-start justify-center sm:justify-start gap-1 ">
                <p className="text-sm text-gray-600 mt-1 mb-2">
                  Front-End Web Developer •
                </p>
                <p className="text-sm text-gray-600 mt-1 mb-2"> Commission </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <span className="bg-white text-xs  px-2 py-2 shadow rounded-full text-gray-500  w-fit">
                  📍Malabon City, Philippines
                </span>
                <span className="bg-white text-xs  px-2 py-2 shadow rounded-full text-gray-500  w-fit">
                  📩 asoy.jestern@gmail.com
                </span>
                <span className="bg-white text-xs  px-2 py-2 shadow rounded-full text-gray-500  w-fit">
                  📞+63 991 - 1363 - 076
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[#FFF] p-4 rounded-lg shadow-md mb-5 ">
            <p className="text-md text-gray-700 w-full montserrat">
              I'm a Bachelor of science in Information Technology graduate and
              passionate about crafting engaging, responsive user interfaces
              using ReactJS, Tailwind CSS, HTML/CSS, and PHP. Dedicated to
              continuous learning and clean, maintainable code.
            </p>
          </div>
          <div className="sora text-center mt-10">
            <h1 className="uppercase text-xl font-bold mb-5">
              Development Skills
            </h1>

            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              slidesPerView={4}
              autoplay={{ delay: 1000 }}
              loop={true}
            >
              {techStack.map((tech) => (
                <>
                  <div key={tech.id} className="swiper-slide ">
                    <SwiperSlide className="flex flex-col items-center ">
                      <div className="group">
                        <div className="bg-white p-4 rounded-lg border-1 border-[#F5F5F5] transform transition duration-300 hover:shadow-lg group-hover:scale-110 z-10">
                          <img
                            src={tech.image}
                            alt={tech.name}
                            className="w-16 h-16 mx-auto mb-2 object-cover"
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </>
              ))}
            </Swiper>
          </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
          temporibus sequi ut, cum assumenda doloribus ipsum quisquam
          repudiandae error modi asperiores eum soluta delectus suscipit
          distinctio eveniet nobis fuga molestiae!learning Lorem ipsum, dolor
          sit amet consectetur adipisicing elit. Vitae, ducimus eligendi
          perspiciatis molestias debitis soluta nesciunt ullam veniam modi,
          libero fugiat sit ipsam ex, architecto hic esse iure natus velit?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id sit,
          omnis blanditiis sapiente qui dolor repellendus dolore optio impedit
          deleniti pariatur similique, ex officia, a culpa. Similique soluta
          nisi quae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Similique minus reiciendis aut nihil iste explicabo repellat
          accusantium, dolorum voluptas corporis ducimus nam optio dolorem odit
          amet placeat sint quos. Fuga! Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Facilis consequuntur exercitationem, voluptatum
          impedit eos, sit tempore, nobis nostrum quisquam voluptates suscipit!
          Possimus earum eaque obcaecati facere! Eveniet dicta eius labore.
        </div>
      </div>
    </>
  );
};

export default AboutMe;
