"use client";
import cn from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa";
import { HiArrowLongDown } from "react-icons/hi2";

function BlogHeroSection() {
  const word = ["I", "am", "Software", "Developer"];

  return (
    <div className="w-full h-screen relative  flex items-center justify-center bg-noise bg-no-repeat bg-center bg-cover bg-primaryShade px-[4vw]">
      <div className="w-full z-20 flex flex-col gap-28 md:gap-20   ">
        <div className="top-wrapper w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-10 md:gap-0">
          <h2 className="text-xl text-center md:text-start sm:text-2xl  3xl:text-4xl font-semibold w-full md:w-[30vw] ">
            Hello, I’m Karan Chaudhary, Front-end Web Developer based in
            Kathmandu.
          </h2>

          <div className=" flex  gap-4">
            <div className="w-16 h-16   flex justify-center items-center border-2 rounded-full border-black">
              <FaPlay className="w-6 h-6" />
            </div>
            <p className="text-xl md:text-2xl font-semibold w-1/2">
              Work Process
            </p>
          </div>
        </div>

        <div className="middle-wrapper  w-full flex justify-center items-center  ">
          <div className="text-xl mobile:text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-[120px]  font-bold flex ">
            {word.map((item, index) => (
              <h1 key={index} className={cn("block uppercase pl-2 md:pl-6")}>
                {/* {item?.length > 1
            ? item
                ?.split("")
                ?.join(",")
                ?.map((letter: any, idx: number) => (
                  <span key={idx} className="block">
                    {letter}
                  </span>
                ))
            : (
                <span key={item} className="block">
                  {item}
                </span>
              ) + " "} */}
                {item}
              </h1>
            ))}
          </div>
        </div>

        <div className="bottom-wrapper  md:absolute left-0 bottom-20  w-full flex flex-col gap-10 md:flex-row justify-between items-center px-[4vw] ">
          <div className="flex gap-3 justify-center items-center">
            <div className="w-12 bg-white  h-20 rounded-full group flex flex-col  justify-center items-center overflow-hidden cursor-pointer">
              <HiArrowLongDown className="text-4xl transition transform -translate-y-16 group-hover:translate-y-4 duration-700 " />
              <HiArrowLongDown className="text-4xl transition transform -translate-y-4 group-hover:translate-y-16 duration-700 " />
            </div>
            <p className="text-xl font-bold w-1/2">Scroll Down</p>
          </div>
          <div className="text-xl font-bold w-full md:w-1/3 xl:w-1/4">
            <p>
              Feel Free to send me a message if you want to enhance your
              recruitment.
            </p>
            <div className="flex gap-2 items-center flex-wrap justify-start">
              {["Facebook", "Twitter", "Linkedin", "Github"].map(
                (item, index) => (
                  <Link
                    href={"#"}
                    key={index}
                    className="text-primaryBlue flex justify-center items-center gap-1 group hover:text-violet-400 transition-all duration-300 ease-linear hover:underline"
                  >
                    <div className="w-2 h-2 bg-black rounded-full  group-hover:bg-violet-400 transition-all duration-300 ease-linear"></div>
                    {item}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block absolute bottom-0  w-full  h-[80vh] ">
        <Image
          src="/images/profile.png"
          alt="hero image"
          width={300}
          height={300}
          className="w-full h-full absolute bottom-0 object-contain "
        />
      </div>
    </div>
  );
}

export default BlogHeroSection;
