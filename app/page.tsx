import { ImageSection } from "@/components/Imagesection/image-section";
import { AuroraBackground } from "@/components/ui/herosection/aurora-background";
import { LandingHeaderSection } from "@/components/ui/herosection/landing-header-section";
import {
  ParallaxScrollDemo,
  ParallexScrollMultipleDemo,
} from "@/components/ui/Parallex/ParallaxScrollDemo";

export default function Home() {
  return (
    <main className="">
      <AuroraBackground>
        <LandingHeaderSection />
      </AuroraBackground>
      <ParallexScrollMultipleDemo />
      <div className="w-full h-[1200px] bg-slate-500"></div>
      <div
        className="-mt-[350px] flex justify-center items-center  h-screen
      "
      >
        <ParallaxScrollDemo />
      </div>
      <div className="w-full h-screen bg-slate-500"></div>
    </main>
  );
}
