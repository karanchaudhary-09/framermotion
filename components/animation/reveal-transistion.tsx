"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import classNames from "classnames";

export const RevealTransition = ({
  children,
  className,
  delay = 0.5,
  duration = 0.3,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="relative">
      {/* Reveal component */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.3,
          delay: duration,
          ease: "easeIn",
        }}
        className={classNames("w-full")}
      >
        {children}
      </motion.div>
      {/* transistion component */}
      <motion.div
        ref={ref}
        initial={{ width: "100%", height: "100%", backgroundColor: "none" }}
        animate={isInView ? { width: "0%", backgroundColor: "#5046e6" } : {}}
        transition={{
          duration: duration,
          ease: "easeIn",
        }}
        className="absolute top-0 left-0 w-full h-full  "
      ></motion.div>
    </div>
  );
};
