"use client";
import React from "react";
import { motion } from "framer-motion";

function PageTransistion({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <motion.div
        className="slide-in fixed top-0 left-0 w-full h-screen bg-black transform origin-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
      <motion.div
        className="slide-out fixed top-0 left-0 w-full h-screen bg-black transform origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      ></motion.div>
    </>
  );
}

export default PageTransistion;
