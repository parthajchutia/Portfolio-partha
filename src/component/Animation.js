import React from "react";
import profile from "../assets/Designer.png";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
function Animate() {
  return (
    <div className="h-screen bg-grey-500 ">
      <div className="bg-grey-500  max:w-[2000px] h-[auto] sm:h-screen md:h-[screen]  flex flex-col-reverse sm:flex-row justify-center align-center">
        <div className="bg-grey-500 flex-col sm:pl-16 my-auto mx-auto">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold text-white">
            Hi I am Partha jyoti ......{" "}
          </p>
          <h1 className="md:text-7xl text-purple sm:text-6l text-3xl font-bold md:py-6">
            <TypeAnimation
              sequence={[
                "Frontend Dev",
                1000,
                "web designer",
                1500,
                "consultant",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <div flex justify-center items-center>
            <p className="md:text-5xl sm:text-4xl text-lg font-bold text-gray-300">
              with a 2+ year learning experience
            </p>
          </div>
          <div className="text-5xl flex justify-start gap-16 my-7 text-purple">
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillInstagram />
          </div>
          <div class="relative inline-flex group my-3">
            <div class="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#5994c1] via-[#db01bb] to-[#c21616] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <a
              href="/"
              title="Download CV"
              role="button"
              class="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white hover:bg-primary-color-hover transition-all duration-200 bg-primary-color font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-grey-500"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="my-auto pb-[28px] mx-auto">
          <img
            class="w-[240px] sm:w-[300px] mx-auto h-auto rounded-full"
            src={profile}
            alt="profil"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Animate;
