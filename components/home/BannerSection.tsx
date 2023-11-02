"use client";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

export const BannerSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  return (
    <section className="w-full h-screen bg-black flex justify-center  items-center">
      <div
        ref={ref}
        className="w-full h-full bg-red-700 border-red border-dotted"
      >
        <h1 className="progress sticky top-10 left-10  ">Karan Chaudhary</h1>
      </div>
    </section>
  );
};
