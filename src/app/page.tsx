import HeroSection from "@/components/home/hero-section";
import { StepperAnimation } from "@/components/home/stepper-animation";
import { TitleAnimation } from "@/components/home/title-section";

export default function Home() {
  return (
    <div className="flex py-10 justify-center items-center flex-col gap-4  overflow-y-auto">
      <TitleAnimation />
      <HeroSection />
      <StepperAnimation />
    </div>
  );
}
