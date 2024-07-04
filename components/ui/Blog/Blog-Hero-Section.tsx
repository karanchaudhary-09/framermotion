"use client";
import { CommonLetter } from "@/components/common/CommonLetter";
import cn from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa";
import { HiArrowLongDown } from "react-icons/hi2";

function BlogHeroSection() {
  const word = ["I", "am", "Software", "Developer"];

  return (
    <div className="w-full h-[80dvh] lg:h-screen relative  flex items-center justify-center bg-noise bg-no-repeat bg-center bg-cover bg-primaryShade px-[4vw]">
      <div className="w-full z-20 flex flex-col gap-28 lg:gap-20 xl:gap-32 2xl:gap-44   ">
        <div className="top-wrapper w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10 lg:gap-0">
          <h2 className="text-xl text-center lg:text-start sm:text-2xl  3xl:text-4xl font-semibold w-full lg:w-[40vw]  ">
            Hello, I’m{" "}
            <span className="mix-blend-screen text-indigo-500">
              Karan Chaudhary
            </span>
            .
          </h2>
        </div>

        <div className="middle-wrapper  w-full flex justify-center items-center  ">
          <div className="w-full relative bg-noise text-3xl mobile:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[90px] 3xl:text-[110px]  font-bold flex flex-wrap justify-center">
            {word?.map((item, index) => (
              <div
                key={index}
                className="flex relative uppercase bg-transparent  px-4 text-black mix-blend-screen  "
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="bottom-wrapper  lg:absolute left-0 bottom-20  w-full flex flex-col gap-10 lg:flex-row justify-between items-center px-[4vw] ">
          <div className="flex gap-3 justify-center items-center">
            <div className="w-12 bg-white  h-20 rounded-full group flex flex-col  justify-center items-center overflow-hidden cursor-pointer">
              <HiArrowLongDown className="text-4xl transition transform -translate-y-16 group-hover:translate-y-4 duration-700 " />
              <HiArrowLongDown className="text-4xl transition transform -translate-y-4 group-hover:translate-y-16 duration-700 " />
            </div>
            <p className="text-xl font-bold w-1/2">Scroll Down</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-0  w-full  h-[80vh] ">
        {/* <Image
          src="/images/profile.png"
          alt="hero image"
          width={300}
          height={300}
          className="w-full h-full absolute bottom-0 object-contain "
        /> */}
      </div>
    </div>
  );
}

export default BlogHeroSection;
