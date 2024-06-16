"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { twMerge } from "tailwind-merge";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Card({
  title,
  description,
  src,
  link,
  color,
  i,
  progress,
  targetScale,
  range,
}: {
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  i: number;
  progress: any;
  targetScale: number;
  range: number[];
}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const cardScale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className={twMerge(
        "card-container h-screen flex justify-center items-center sticky top-0"
      )}
    >
      <motion.div
        style={{
          scale: cardScale,
          backgroundColor: color,
          top: `calc(-10% + ${i * 25}px)`,
        }}
        className="relative -mt-10 w-[80vw] h-[500px] rounded-3xl flex flex-col gap-4 justify-center items-center shadow-2xl"
      >
        <h1 className="text-center text-3xl font-bold font-mono">{title}</h1>
        <div className="flex justify-between px-10 gap-10 ">
          <div className="content-description w-[50%] flex flex-col gap-2 justify-center items-start">
            <p>{description}</p>
            <Link href={link} className="text-left  ">
              Read more...{" "}
            </Link>
          </div>
          <div className="w-[50%] h-[350px] image-container overflow-hidden rounded-3xl">
            <motion.div
              style={{ scale: imageScale }}
              className="inner w-full h-full "
            >
              <Image
                src={`/images/${src}`}
                alt={title}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
