import { ProjectHeroSection } from "@/components/FlipWords/ProjectHeroSection";
import StickyRevealSection from "@/components/StickyReveal/StickyRevealSection";
import React from "react";

export default function ProjectPage() {
  return (
    <div className="  flex flex-col justify-center items-center  bg-primaryShade bg-noise bg-no-repeat bg-cover text-white ">
      <div className="w-full overflow-hidden">
        <ProjectHeroSection />
      </div>
      <div className="h-screen bg-white w-full text-black"></div>
      <StickyRevealSection />
    </div>
  );
}
