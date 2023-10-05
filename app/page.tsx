import { PageScroll } from "@/components/PageScroll";
import { CircleAnimation } from "@/components/home/CircleAnimation";

export default function Home() {
  return (
    <section className="main-page-wrapper h-[150vh]  py-4 md:px-10">
      <PageScroll />
      <h1>Hellow from Home Page</h1>
      {/* <CircleAnimation /> */}
    </section>
  );
}
