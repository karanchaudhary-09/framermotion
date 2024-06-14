import { HeroSection } from "@/components/ui/AboutUs/hero-section";
import { AuroraBackground } from "@/components/ui/herosection/aurora-background";
import { LandingHeaderSection } from "@/components/ui/herosection/landing-header-section";
import { HeroSection2 } from "@/components/ui/Home/heroSection";
import {
  ParallaxScrollDemo,
  ParallexScrollMultipleDemo,
} from "@/components/ui/Parallex/ParallaxScrollDemo";
import { StickyScrollRevealDemo } from "@/components/ui/stickyscroll/sticky-scroll";
import ZoomParallex from "@/components/ZoomParallex/ZoomParallex";

export default function Home() {
  return (
    <main className="">
      {/* <HeroSection /> */}
      <AuroraBackground>
        <LandingHeaderSection />
      </AuroraBackground>
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

      <div className="h-screen"></div>
      {/* <HeroSection2 /> */}
    </main>
  );
}
