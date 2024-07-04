"use client";
import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import NavHeader from "./NavHeader";
import Link from "next/link";
import {
  useMotionValueEvent,
  useScroll,
  motion,
  AnimatePresence,
} from "framer-motion";
import classNames from "classnames";

export const BurgerHeader = () => {
  const [isActive, setIsActive] = useState(false);
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={classNames(
          " lg:hidden w-full fixed top-0 z-[999] page-header flex  justify-between px-4 sm:px-8 items-center bg-white shadow-2xl text-black ",
          classNames
        )}
      >
        <Link
          href={"/"}
          className="logo font-bold z-[99] text-xl  text-primaryBlue"
        >
          Karan.
        </Link>
        <BurgerMenu isActive={isActive} setIsActive={setIsActive} />
      </motion.div>
      <NavHeader isActive={isActive} setIsActive={setIsActive} />
    </AnimatePresence>
  );
};
