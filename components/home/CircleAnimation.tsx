"use client";
import React from "react";
import { motion } from "framer-motion";

export const CircleAnimation = () => {
  return (
    <motion.div className="w-20 h-20 border rounded-full relative">
      <h1 className="absolute top-0 left-0 transform rotate-45">Portfolio</h1>
      <h1>*</h1>
      <h1>Portfolio</h1>
    </motion.div>
  );
};
