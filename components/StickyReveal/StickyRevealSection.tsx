"use client";
import cn from "@/utils/cn";
import { projects } from "@/utils/data/smoothDataCard";
import React from "react";
import { motion } from "framer-motion";

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
    <div className="sticky-reveal-container relative w-full bg-gray-300 flex  flex-col lg:flex-row  justify-between">
      <div className="hidden lg:block relative">
        <div className="sticky-header w-full lg:w-[30vw] lg:pb-[40vh] px-10 sticky top-10 lg:top-[15vh] flex flex-col gap-20 justify-center">
          <h1 className="text-5xl mt-[20vh]">Our services</h1>
          {activeIndex > 0 && (
            <h1 className="text-3xl">
              {projects[activeIndex - 1]?.title}
              {activeIndex}card
            </h1>
          )}
        </div>
      </div>

      <div className="w-full lg:w-[68vw] sticky-card-wrapper relative flex flex-col">
        {projects?.map((project, index) => (
          <motion.div
            key={index}
            className={cn(
              "sticky h-[50vh] lg:h-[80vh] w-full flex justify-center items-center rounded-2xl overflow-hidden p-10"
            )}
            style={{ top: `${(index + 1) * 3}vh`, scale: 0.8 }}
          >
            <div
              className="sticky-card w-full lg:w-[70vw] h-[50vh] p-10 flex flex-col gap-2 justify-center items-center overflow-hidden"
              style={{
                backgroundColor: project?.color,
              }}
            >
              <h1 className="text-3xl">Card {index + 1}</h1>
              <h2>{project?.title}</h2>
              <p>{project?.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
