import { HeroSection } from "@/components/ui/AboutUs/hero-section";
import { AuroraBackground } from "@/components/ui/herosection/aurora-background";
import { LandingHeaderSection } from "@/components/ui/herosection/landing-header-section";
import { HeroSection2 } from "@/components/ui/Home/heroSection";
import {
  ParallaxScrollDemo,
  ParallexScrollMultipleDemo,
} from "@/components/ui/Parallex/ParallaxScrollDemo";
import { StickyScrollRevealDemo } from "@/components/ui/stickyscroll/sticky-scroll";

export default function Home() {
  return (
    <main className="">
      {/* <HeroSection /> */}
      <AuroraBackground>
        <LandingHeaderSection />
      </AuroraBackground>
      <ParallexScrollMultipleDemo />
      <div className="w-full h-[1200px] bg-slate-500"></div>
      {/* <div
        className="-mt-[350px]  flex justify-center items-center  h-screen
      "
      >
        <ParallaxScrollDemo />
      </div> */}
      <StickyScrollRevealDemo />
      <div className="w-full h-screen bg-slate-500"></div>
      <div className="w-full h-screen bg-slate-500"></div>
      <div className="w-full h-screen bg-slate-500"></div>
      {/* <HeroSection2 /> */}
    </main>
  );
}
