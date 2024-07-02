import React from "react";
import { FlipWords } from "./FlipWords";
import { AnimationPlayer } from "./AnimationPlayers";

export function ProjectHeroSection() {
  const words = [
    "Innovative",
    "Excellence",
    "Creative",
    "Modern",
    "Responsive",
  ];

  return (
    <div className=" h-[90dvh] xl:h-screen flex flex-col lg:flex-row justify-center items-center ">
      <div className="w-full  lg:w-[60vw] text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold flex justify-center items-center flex-col  text-gray-400 ">
        <h1 className="text-center">Scroll To View </h1>
        <FlipWords words={words} />
        <h1 className="text-center">Projects.</h1>
      </div>
      <div className="w-full relative lg:w-[30vw] h-[50vh] ">
        <div className="absolute hidden lg:block left-[50%] w-1/2 rounded-full lg:h-[40dvh] xl:h-[50dvh] bg-gradient-to-bl from-indigo-200  "></div>
        <AnimationPlayer />
      </div>
    </div>
  );
}
