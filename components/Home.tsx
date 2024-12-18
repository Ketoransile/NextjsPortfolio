"use client";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";
import TypeWriterHome from "./TypeWriterHome";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Home = () => {
  return (
    <div className="flex justify-between p-40 pt-24 items-center">
      <div className=" justify-center">
        <TypeWriterHome />
        <h1 className="text-xl text-slate-300 ">Find Me on</h1>
        <ul className="flex gap-4 pt-4">
          <li>
            <FaLinkedin className="text-primary text-3xl" />
          </li>
          <li>
            <FaTwitter className="text-primary text-3xl" />
          </li>
          <li>
            <GrInstagram className="text-primary text-3xl" />
          </li>
          <li>
            <FaTelegram className="text-primary text-3xl" />
          </li>
        </ul>
      </div>
      <div className="">
        <Image src="/abdisa1.svg" alt="my-image" width={500} height={500} />
      </div>
    </div>
  );
};

export default Home;
