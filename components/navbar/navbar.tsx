"use client";
import cn from "@/utils/cn";
import { navData } from "@/utils/data/navData";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import SideNavbar from "./sidebar-nav";

export default function TopHeader() {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState<boolean>(true);
  const [isActive, setIsActive] = useState<boolean>(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.25) {
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
          " page-header fixed top-0 z-[999]  flex  w-full items-center justify-between bg-white px-[4vw]  py-3 text-black  shadow-2xl lg:py-6"
        )}
      >
        <Link href={"/"} className="logo text-primaryBlue font-bold">
          karan.
        </Link>
        <nav className="nav-header hidden items-center justify-start gap-5 lg:flex ">
          {navData?.map((item, index) => (
            <Link
              href={item?.url}
              key={index}
              className="rounded-md  px-2 py-1 transition-all duration-300 ease-linear hover:underline"
            >
              {item?.name}
            </Link>
          ))}
        </nav>
        <div
          className={cn(
            " burger-wrapper transistion relative z-[1001] flex h-14 w-14 transform cursor-pointer flex-col items-center justify-center gap-2 rounded-full  duration-500 ease-out lg:hidden "
          )}
          onClick={(e) => {
            e.preventDefault();
            setIsActive(!isActive);
          }}
        >
          <div
            className={cn(
              " transistion h-[2px] w-[60%] duration-300 ease-out",
              isActive ? "absolute -rotate-[45deg] bg-white  " : "bg-black"
            )}
          ></div>
          <div
            className={cn(
              " transistion  h-[2px] w-[60%]  duration-300 ease-out",
              isActive ? "absolute rotate-[45deg] bg-white  " : "bg-black"
            )}
          ></div>
        </div>
      </motion.header>
      <SideNavbar isActive={isActive} setIsActive={setIsActive} />
    </AnimatePresence>
  );
}
