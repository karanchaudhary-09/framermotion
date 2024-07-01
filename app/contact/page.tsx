import {
  InfiniteLoopingAnimation,
  InfiniteLoopingCardAnimation,
} from "@/components/animation/InfiniteLoopAnimtion";
import React from "react";

export default function SmoothScroll() {
  return (
    <div className="  text-4xl flex flex-col justify-center items-center text-white">
      <div className="about-page h-screen flex items-center justify-center  ">
        <h1 className="text-black font-bold text-9xl">Contact Us</h1>
      </div>

      <div className="w-full overflow-hidden bg-black">
        <InfiniteLoopingCardAnimation />
      </div>
      <div className="h-screen w-full "></div>
    </div>
  );
}
