import React from "react";
import {
  IoLogoGoogle,
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoGithub,
} from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <header className="flex justify-between items-center ">
        <h1 className="sora font-bold  text-4xl text-gray-900 hover:tracking-wide transition-all duration-300 select-none">
          J
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600 via-yellow-700">
            N
          </span>
          A<span className="">.</span>
        </h1>

        <nav className="flex space-x-3 text-2xl">
          <a
            href="#"
            className=" transition-transform hover:scale-110 duration-200"
          >
            <IoLogoGithub />
          </a>
          <a
            href="#"
            className="  transition-transform hover:scale-110 duration-200"
          >
            <IoLogoFacebook />
          </a>
          <a
            href="#"
            className="  transition-transform hover:scale-110 duration-200"
          >
            <IoLogoInstagram />
          </a>
          <a
            href="#"
            className="transition-transform  hover:scale-110 duration-200"
          >
            <IoLogoGoogle />
          </a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
