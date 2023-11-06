import { PageScroll } from "@/components/PageScroll";
import { BannerSection } from "@/components/home/BannerSection";
import CardScrollAnimation from "@/components/home/CardScrollAnimation";
import { CircleAnimation } from "@/components/home/CircleAnimation";
import HorizontalScroll from "@/components/home/HorizontalScroll";
import { InfiniteLoop } from "@/components/home/InfiniteLoop";
import { MobileDesign } from "@/components/home/MobileDesign";
import Projects from "@/components/home/Projects";
import { VelocityAnimation } from "@/components/home/VelocityAnimation";
import { Testominals } from "@/components/home/testominals/Testominals";

export default function Home() {
  return (
    <section className="main-page-wrapper  py-4 ">
      <PageScroll />
      {/* <BannerSection /> */}
      <div className="h-[50vh]">
        {" "}
        <h1>Hellow from Home Page</h1>
      </div>
      {/* <VelocityAnimation /> */}
      {/* <HorizontalScroll /> */}
      <Projects />
      <InfiniteLoop />
      {/* <Testominals /> */}
      
      <section className="h-[20vh]"></section>
    </section>
  );
}
