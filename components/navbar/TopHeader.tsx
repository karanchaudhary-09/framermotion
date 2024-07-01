"use client";
import cn from "@/utils/cn";
import { navData } from "@/utils/data/navData";
import classNames from "classnames";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";

export default function TopHeader() {
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
      <motion.header
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
        className={cn(
          " w-full fixed top-0 z-[999] page-header  lg:flex justify-between items-center bg-white shadow-2xl text-black  py-6 px-[4vw]",
          classNames
        )}
      >
        <Link href={"/"} className="logo font-bold text-primaryBlue">
          Karan
        </Link>
        <nav className="nav-header flex gap-5 justify-start items-center ">
          {navData?.map((item, index) => (
            <Link
              href={item?.url}
              key={index}
              className="border hover:text-primaryBlue hover:border-primaryBlue border-transparent transition-all duration-300 ease-linear px-2 py-1 rounded-md"
            >
              {item?.name}
            </Link>
          ))}
        </nav>
      </motion.header>
    </AnimatePresence>
  );
}
