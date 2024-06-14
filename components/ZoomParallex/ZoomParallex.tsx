"use client";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export default function ZoomParallex() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const scale10 = useTransform(scrollYProgress, [0, 1], [1, 10]);

  const zoomParalaxData = [
    {
      srcUrl: "/zoomparallax/1.jpeg",
      scale: scale4,
    },
    {
      srcUrl: "/zoomparallax/2.jpeg",
      scale: scale5,
    },
    {
      srcUrl: "/zoomparallax/3.jpg",
      scale: scale6,
    },
    {
      srcUrl: "/zoomparallax/4.jpg",
      scale: scale7,
    },
    {
      srcUrl: "/zoomparallax/5.jpg",
      scale: scale8,
    },
    {
      srcUrl: "/zoomparallax/6.jpg",
      scale: scale9,
    },
    {
      srcUrl: "/zoomparallax/7.jpeg",
      scale: scale10,
    },
  ];

  return (
    <section ref={container} className="zoom-parallax h-[300vh]  relative ">
      <div className="stickey-container h-screen sticky top-0 overflow-hidden">
        {zoomParalaxData.map((data, index) => (
          <motion.div
            key={index}
            style={{ scale: data?.scale }}
            className="element-conatiner w-full h-full absolute top-0 flex justify-center items-center"
          >
            <div
              className={twMerge(
                "image-container w-[25vw] h-[25vh] relative ",
                index === 1 && " top-[-30vh] left-[5vw] w-[35vw] h-[30vh]",
                index === 2 && " top-[-10vh] left-[-21vw] w-[15vw] h-[46vh]",
                index === 3 && " top-[2vh] left-[29vw] w-[30vw] h-[25vh]",
                index === 4 && " top-[32vh] left-[-33vw] w-[25vw] h-[30vh]",
                index === 5 && " top-[30vh] left-[-2vw] w-[30vw] h-[25vh]",
                index === 6 && " top-[30vh] left-[31vw] w-[28vw] h-[20vh]",
              )}
            >
              <Image
                src={data?.srcUrl}
                fill
                placeholder="blur"
                blurDataURL={data?.srcUrl}
                className=" object-cover"
                alt="image"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
