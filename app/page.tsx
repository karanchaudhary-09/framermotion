import { PageScroll } from "@/components/PageScroll";
import { BannerSection } from "@/components/home/BannerSection";
import CardScrollAnimation from "@/components/home/CardScrollAnimation";
import { CircleAnimation } from "@/components/home/CircleAnimation";
import HorizontalScroll from "@/components/home/HorizontalScroll";
import { MobileDesign } from "@/components/home/MobileDesign";
import Projects from "@/components/home/Projects";
import { VelocityAnimation } from "@/components/home/VelocityAnimation";

export default function Home() {
  return (
    <section className="main-page-wrapper  py-4 ">
      <PageScroll />
      <BannerSection />
      <h1>Hellow from Home Page</h1>
      <VelocityAnimation />
      {/* <HorizontalScroll /> */}
      <Projects />
      <CardScrollAnimation />
      <section className="h-[120vh]"></section>
    </section>
  );
}
