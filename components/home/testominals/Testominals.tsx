"use client";
import Image from "next/image";
import React from "react";
import { RiStarSFill } from "react-icons/ri";
export const Testominals = () => {
  return (
    <section className="flex w-full  justify-center ">
      <div className="testominals-wrapper w-full md:w-[70%] flex flex-col gap-10 md:gap-4 md:flex-row p-12 justify-between  border-2 border-black rounded-3xl">
        <div className="testominals-image-wrapper relative w-full md:w-[35%]  flex justify-center items-center">
          <div className="relative  w-[250px] h-[250px] bg-blue-500 rounded-full ">
            <Image
              src={"/images.jpg"}
              width={180}
              height={500}
              alt="testominals"
              className="absolute h-[280px] z-10 rounded-full bottom-0 left-[50%] translate-x-[-50%]"
            />
          </div>
          <div className="w-[40px] h-[300px] absolute top-0 left-[28%] bg-orange-500 rounded-full"></div>{" "}
          <div className="w-[40px] h-[70px] absolute top-0 left-[18%] bg-orange-500 rounded-full"></div>
        </div>

        <div className="testominals-content-wrapper flex flex-col justify-center w-full  md:w-[60%]">
          <h1 className="testominals-content-quote text-[100px] leading-3">
            {'"'}
          </h1>
          <div className="testominals-content flex flex-col gap-2">
            <div className="testominals-content-title flex justify-between  items-center ">
              <h1>
                Kate Rogers - <span>Graphics designers</span>
              </h1>
              <div className="stars-wapper flex gap-1">
                {Array(5)
                  .fill("_")
                  .map((_, index) => (
                    <RiStarSFill key={index} style={{ color: "orange" }} />
                  ))}
              </div>
            </div>
            <h1 className="testominals-content-title text-[42px] uppercase">
              Amazing Customer Service
            </h1>
            <p className="testominals-content-text text-[20px] ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium omnis, error aliquid alias eius ab facilis deserunt
              aliquam quis quos exercitationem, fugit facere incidunt voluptate
              et officia mollitia veritatis autem.
            </p>
          </div>
          <h1 className="testominals-content-quote text-[100px] ">{'"'}</h1>
        </div>
      </div>
    </section>
  );
};
