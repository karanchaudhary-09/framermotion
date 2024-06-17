import {
  InfiniteLoopingAnimation,
  InfiniteLoopingCardAnimation,
} from "@/components/animation/InfiniteLoopAnimtion";
import React from "react";

export default function SmoothScroll() {
  return (
    <div className=" bg-black text-4xl flex flex-col justify-center items-center text-white">
      <div className="h-screen w-full"></div>
      <div className="w-full overflow-hidden ">
        <InfiniteLoopingCardAnimation />
      </div>
      <div className="h-screen w-full"></div>
    </div>
  );
}
