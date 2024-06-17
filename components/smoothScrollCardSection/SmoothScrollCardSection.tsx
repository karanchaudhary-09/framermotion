"use client";
import { projects } from "@/utils/data/smoothDataCard";
import React, { useRef } from "react";
import Card from "./Card";
import { motion, useScroll } from "framer-motion";

export default function SmoothScrollCardSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className="smoothScrollCardSection py-10  mt-[50vh] ">
      {projects?.map((project, index) => {
        const targetScale = 1 - (projects.length - index) * 0.05;
        return (
          <Card
            key={index}
            i={index}
            {...project}
            range={[index * 0.25, 1]}
            progress={scrollYProgress}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}
