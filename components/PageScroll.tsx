"use client";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

export const PageScroll = () => {
  const [deg, setDeg] = useState(0);
  const [num, setNum] = useState(0);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("page scroll", latest);
    setNum(latest);
    if (latest > num) {
      setDeg(num + 45);
    } else {
      setDeg(num - 45);
    }
  });
  return (
    <motion.div
      className="sticky top-[100px] w-20 h-20 bg-black"
      animate={{ rotate: deg }}
    >
      <Link href="/" className="w-full h-full"></Link>
    </motion.div>
  );
};
