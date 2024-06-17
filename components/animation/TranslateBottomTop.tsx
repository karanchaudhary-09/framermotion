"use client";
import { useInView, motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function TranslateBottomTop({
  children,
  duration = 0.5,
  delay = 0.2,
}: {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, translateY: "100px" }}
      animate={isInView ? { opacity: 1, translateY: "0px" } : {}}
      transition={{ duration, ease: "easeInOut", delay }}
      className={`common-animation `}
    >
      {children}
    </motion.div>
  );
}

export function TranslateBottomTopScroll({
  children,
  duration = 0.5,
  delay = 0,
}: {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], ["-120px", "0px"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      ref={containerRef}
      style={{
        translateY: translateY,
        opacity: opacity,
      }}
      className={`common-animation `}
    >
      {children}
    </motion.div>
  );
}
