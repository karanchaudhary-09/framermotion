import { AnimationPlayer } from "@/components/FlipWords/AnimationPlayers";
import { ProjectHeroSection } from "@/components/FlipWords/ProjectHeroSection";
import React from "react";

export default function ProjectPage() {
  return (
    <div className=" text-4xl flex flex-col justify-center items-center overflow-hidden bg-black text-white">
      <ProjectHeroSection />
      <div className="h-screen bg-white w-full text-black">

      </div>
      {/* <StickyRevealSection /> */}
    </div>
  );
}
