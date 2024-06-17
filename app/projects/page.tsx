import { InfiniteLoopingAnimation } from "@/components/animation/InfiniteLoopAnimtion";
import StickyRevealSection from "@/components/StickyReveal/StickyRevealSection";
import React from "react";

export default function ProjectPage() {
  return (
    <div className=" bg-black text-4xl flex flex-col justify-center items-center text-white">
      <div className="h-screen w-full"></div>
      <StickyRevealSection />
    </div>
  );
}
