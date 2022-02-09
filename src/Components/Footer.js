import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { SiTwitter } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <div className="mt-20 h-[80%] bg-amber-600 flex flex-col gap-8 items-center justify-center">
        <p className="text-black text-3xl font-Roboto font-extrabold mt-10">
          Let's Connect
        </p>
        <div className="flex gap-6 text-black text-4xl  ">
          <a
            href="https://www.linkedin.com/in/abhishek-dubey-787583222/"
            className="nounderline"
            target="_blank"
          >
            <BsLinkedin className="hover:text-white hover:text-5xl cursor-pointer" />
          </a>
          <a
            href="https://github.com/Maestgion"
            className="nounderline"
            target="_blank"
          >
            <BsGithub className="hover:text-white hover:text-5xl cursor-pointer" />
          </a>

          <a
            href="https://twitter.com/Abhishek14_10?t=j16EcVRHV-PGeBa1am1QPw&s=09"
            className="nounderline"
            target="_blank"
          >
            <SiTwitter className="hover:text-white hover:text-5xl cursor-pointer" />
          </a>
        </div>
        <div>
          <p className="text-black text-3xl font-Roboto font-extrabold text-center mb-8">
            Thank You For Visting!
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
