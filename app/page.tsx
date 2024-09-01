import OrganicAnimation from "@/components/animation/organic-animation";
import SmoothScrollCardSection from "@/components/smoothScrollCardSection/SmoothScrollCardSection";
import HomeHeaderSection from "@/components/ui/Home/home-header-section";

import { ParallexScrollMultipleDemo } from "@/components/ui/Parallex/ParallaxScrollDemo";
import ZoomParallex from "@/components/ZoomParallex/ZoomParallex";

export default function Home() {
  return (
    <main className=" ">
      <HomeHeaderSection />
      {/* <AuroraBackground>
        <LandingHeaderSection />
      </AuroraBackground> */}
      <ParallexScrollMultipleDemo />
      {/* <div
        className="-mt-[350px]  flex justify-center items-center  h-screen
      "
      >
        <ParallaxScrollDemo />
      </div> */}
      {/* <StickyScrollRevealDemo /> */}
      <div className="mt-10"></div>
      <ZoomParallex />

      <div className="mt-40"></div>
      <SmoothScrollCardSection />
      <div className="h-screen"></div>
      <OrganicAnimation />
      {/* <HeroSection2 /> */}
    </main>
  );
}
