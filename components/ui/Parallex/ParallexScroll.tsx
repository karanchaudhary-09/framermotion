"use client";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import cn from "@/utils/cn";
import { ImageCompnent } from "@/components/common/imageCompnent";

export const MobileScrollParalax = ({ className }: { className?: string }) => {
  const gridRef = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    target: gridRef, // remove this if your container is not fixed height
    offset: ["start end", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1.5], [0, -150]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateThird = useTransform(scrollYProgress, [0, 0.6], [0, -300]);
  const translateFourth = useTransform(scrollYProgress, [0, 1.5], [0, -180]);
  const translateFifth = useTransform(scrollYProgress, [0, 0.6], [0, -150]);

  return (
    <div
      className={cn(
        "h-screen flex justify-center items-start overflow-hidden  w-full relative ",
        className,
      )}
      ref={gridRef}
    >
      <div
        className="absolute  top-[30%]  flex flex-nowrap justify-center items-center gap-10  "
        ref={gridRef}
      >
        <motion.div
          style={{ y: translateFirst }} // Apply the translateY motion value here
        >
          <ImageCompnent />
        </motion.div>

        <motion.div
          style={{ y: translateSecond }} // Apply the translateY motion value here
        >
          <ImageCompnent />
        </motion.div>

        <motion.div
          style={{ y: translateThird }} // Apply the translateY motion value here
        >
          <ImageCompnent />
        </motion.div>

        <motion.div
          style={{ y: translateFourth }} // Apply the translateY motion value here
        >
          <ImageCompnent />
        </motion.div>

        <motion.div
          style={{ y: translateFifth }} // Apply the translateY motion value here
        >
          <ImageCompnent />
        </motion.div>
      </div>
    </div>
  );
};
