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
    <div className="h-screen flex flex-col lg:flex-row justify-center items-center ">
      <div className="w-full  lg:w-[60vw] text-4xl xl:text-8xl font-bold flex justify-center flex-col   text-gray-400 ">
        <h1 className=" ">Scroll To View Projects</h1>
        <FlipWords words={words} />
      </div>
      <div className="w-full lg:w-[30vw] h-[50vh]">
        <AnimationPlayer />
      </div>
    </div>
  );
}
