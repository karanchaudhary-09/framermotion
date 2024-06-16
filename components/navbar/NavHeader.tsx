/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useLayoutEffect, useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { navData } from "@/utils/data/navData";
import Link from "next/link";

function NavHeader({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: any;
}) {
  const navRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const linkControlsArray = navData.map(() => useAnimation());

  useLayoutEffect(() => {
    if (isActive) {
      controls.start({
        width: "100%",
        transition: { duration: 1, ease: [0.5, 0, 0.2, 1] },
      });
      linkControlsArray.forEach((controls, index) => {
        controls.start({
          opacity: 1,
          x: 0,
          transition: {
            delay: 0.05 * (index + 1),
            duration: 0.5,
            ease: [0.5, 0, 0.2, 1],
          },
        });
      });
    } else {
      controls.start({
        width: "0%",
        transition: { delay: 0.2, duration: 1, ease: [0.5, 0, 0.2, 1] },
      });
      linkControlsArray.forEach((controls, index) => {
        controls.start({
          opacity: 0,
          x: 300,
          transition: {
            delay: 0.05 * (index + 1),
            duration: 0.5,
            ease: [0.5, 0, 0.2, 1],
          },
        });
      });
    }
  }, [isActive]);

  return (
    <>
      <motion.div
        ref={navRef}
        className="navbar-wrapper z-[999] bg-gray-800 fixed top-0  w-full h-[100dvh] right-0  text-white overflow-hidden"
        animate={controls}
      >
        <nav className="nav-wrapper flex justify-center items-center h-screen overflow-hidden">
          <div className="flex flex-col gap-6">
            {navData?.map((item, index) => (
              <motion.div
                key={index}
                className="link-wrapper opacity-0 transform translate-x-[300px] ease-linear duration-75"
                animate={linkControlsArray[index]}
              >
                <Link
                  href={item?.url}
                  onClick={() => setIsActive(false)}
                  className="text-5xl 2xl:text-6xl font-bold text-white hover:text-gray-500 hover:underline transition-all duration-300 ease-linear"
                >
                  {item?.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </nav>
      </motion.div>
    </>
  );
}

export default NavHeader;
