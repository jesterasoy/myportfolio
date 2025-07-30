import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-[#F5F5F5] py-14 sora mt-10 shadow-inner ">
        <div className="px-6 md:px-10 max-w-screen-2xl mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[20rem]">
            <div>
              <h1 className="sora font-extrabold text-5xl md:text-6xl text-gray-900 select-none transition duration-300 hover:scale-105 inline-block">
                J
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700">
                  N
                </span>
                A<span className="text-yellow-600">.</span>
              </h1>
              <div>
                <p className="mt-4 tracking-wide text-lg md:text-xl text-gray-500">
                  Thank you for reaching this!
                </p>
                <span className="mt-2 text-xs">
                  Live, laugh, and have fun. Let’s connect!
                </span>
              </div>
              <p className="mt-4  text-lg md:text-md text-[#333333]">
                jesterasoy © 2025
              </p>
            </div>
            <div className="">
              <p className="text-gray-500 text-lg mb-3">Get In Touch</p>
              <div className="flex flex-col w-fit">
                <a
                  target="_blank"
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=asoy.jestern@gmail.com&su=Subject%20Here&body=Hello%20there!"
                  className="mt-3 text-sm tracking-wide hover:underline transition ease-in duration-300"
                >
                  Email
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/asoy-jester-nicholas-026a13318/"
                  className="mt-3 text-sm tracking-wide hover:underline transition ease-in duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
