"use client";
import { projects } from "@/utils/data/smoothDataCard";
import React, { act } from "react";

export default function StickyRevealSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const index = Math.floor(scroll / window.innerHeight);
      console.log("index", index);
      setActiveIndex(index);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky-reveal-container   relative  w-full  flex justify-between ">
      <div className="relative  ">
        <div className="sticky-header w-[30vw]  pb-[60vh] px-10 sticky top-[25vh] flex flex-col gap-20 justify-center  overflow-hidden">
          <h1 className="text-5xl mt-[20vh]">Our services</h1>

          {activeIndex > 0 && (
            <h1 className="text-3xl">
              {projects[activeIndex - 1]?.title}
              {activeIndex}card
            </h1>
          )}
        </div>
      </div>

      <div className="w-[68vw]  sticky-card-wrapper relative flex flex-col ">
        {projects?.map((project, index) => (
          <div
            key={index}
            className="sticky top-0 h-screen w-full flex justify-center items-center rounded-2xl overflow-hidden p-10"
          >
            <div
              className="sticky-card w-[70vw] h-[50vh]  p-10 flex flex-col gap-2 justify-center items-center overflow-hidden"
              style={{ backgroundColor: project?.color }}
            >
              <h1 className="text-3xl">Card {index + 1}</h1>
              <h2>{project?.title}</h2>
              <p>{project?.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
