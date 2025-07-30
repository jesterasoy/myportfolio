import React from "react";
import {
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoGithub,
} from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="p-10 max-w-screen-2xl mx-auto">
        <header className="flex justify-between items-center ">
          <Link to="/">
            <h1 className="sora font-bold text-2xl  md:text-4xl text-gray-900 hover:tracking-wide transition-all duration-300 select-none">
              J
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600 via-yellow-700">
                N
              </span>
              A<span className="text-yellow-600">.</span>
            </h1>
          </Link>

          <nav className="flex space-x-3 text-xl md:text-2xl">
            <a
              href="https://github.com/jesterasoy"
              target="_blank"
              className=" transition-transform hover:scale-110 duration-200"
            >
              <IoLogoGithub />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/jester.aspy"
              className="  transition-transform hover:scale-110 duration-200"
            >
              <IoLogoFacebook />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/colelxx/"
              className="  transition-transform hover:scale-110 duration-200"
            >
              <IoLogoInstagram />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/asoy-jester-nicholas-026a13318/"
              className="transition-transform  hover:scale-110 duration-200"
            >
              <IoLogoLinkedin />
            </a>
            <a
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=asoy.jestern@gmail.com&su=Subject%20Here&body=Hello%20there!"
              className="transition-transform  hover:scale-110 duration-200"
            >
              <SiMinutemailer />
            </a>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Navbar;
