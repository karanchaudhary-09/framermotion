"use client";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import cn from "@/utils/cn";

export const ParallaxMultipleImageScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    target: gridRef, // remove this if your container is not fixed height
    offset: ["start end", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateFourth = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(2, third);
  const secondPart = images.slice(0, third);
  const thirdPart = images.slice(0, 1 * third);
  const fourthPart = images.slice(2 * third);

  return (
    <div
      className={cn(
        "h-[200vh] items-start overflow-y-hidden w-full relative ",
        className
      )}
      ref={gridRef}
    >
      <div
        className="w-full h-[150vh] absolute top-10 flex justify-center items-center flex-nowrap gap-6 overflow-hidden  "
        ref={gridRef}
      >
        <div className="flex flex-col gap-2">
          {firstPart?.map((image, index: number) => (
            <motion.div
              key={"grid-1" + index}
              style={{ y: translateFirst }} // Apply the translateY motion value here
            >
              <Image
                src={image}
                className="min-h-80 min-w-[280px] object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {secondPart?.map((image, index: number) => (
            <motion.div
              key={"grid-2" + index}
              style={{ y: translateSecond }} // Apply the translateY motion value here
            >
              <Image
                src={image}
                className="min-h-80 min-w-[280px] object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {thirdPart?.map((image, index: number) => (
            <motion.div
              key={"grid-3" + index}
              style={{ y: translateThird }} // Apply the translateY motion value here
            >
              <Image
                src={image}
                className="min-h-80 min-w-[280px] object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {fourthPart?.map((image, index: number) => (
            <motion.div
              key={"grid-3" + index}
              style={{ y: translateFourth }} // Apply the translateY motion value here
            >
              <Image
                src={image}
                className="min-h-80 min-w-[280px] object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
