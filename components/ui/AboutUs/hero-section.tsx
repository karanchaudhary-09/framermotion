import React from "react";
import { CommonAnimation } from "./resuable-animtaion";
import { ResuableTitle } from "./resuable-title";
import { ImageSection } from "./ImageSection";

export const HeroSection = () => {
  return (
    <div className="home-hero-section h-[932px] w-full border flex flex-col justify-center items-center bg-gradient-to-r from-white to-[#EAEFFF]  ">
      <div className="banner-title-wrapper w-[50vw] flex justify-center items-center flex-col gap-4">
        <CommonAnimation>
          <div className="flex flex-col gap-4 items-center justify-center">
            <h2
              className={` text-primaryOrange text-[64px] leading-[68px] text-center`}
            >
              <span>Manage your Residential Community</span>
              <span className={` text-primaryBlue text-[64px]  `}>
                {" "}
                Easilym and Efficiently
              </span>
            </h2>

            <p className={`text-gray8 text-center leading-[20px]`}>
              Improve the security standards of your gated community with our
              technologically advanced and in-house engineered security and
              community management tool. We offer numerous innovative features
              that are sure to simplify your everyday chores.
            </p>
          </div>
        </CommonAnimation>
        <div className="flex gap-4 justify-center items-center">
          <CommonAnimation>
            <button className="bg-primaryOrange text-white px-4 py-2 rounded-md">
              Get Started
            </button>
          </CommonAnimation>

          <CommonAnimation>
            <button className="bg-primaryBlue text-white px-4 py-2 rounded-md">
              Learn More
            </button>
          </CommonAnimation>
        </div>
      </div>

      <CommonAnimation>
        <ImageSection />
      </CommonAnimation>
    </div>
  );
};
