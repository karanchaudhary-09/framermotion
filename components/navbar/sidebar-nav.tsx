/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useLayoutEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import cn from "@/utils/cn";
import { navData } from "@/utils/data/navData";

function SideNavbar({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const controls = useAnimation();
  const linkControlsArray = navData?.map(() => useAnimation());
  //   update the code
  useLayoutEffect(() => {
    if (isActive) {
      // Save the current scroll position
      setScrollPosition(window.scrollY);
      // Disable scroll and hide scrollbar
      document.body.style.cssText = `
        overflow: hidden;
        position: fixed;
        top: -${window.scrollY}px;
        width: 100%;
      `;

      controls.start({
        width: "100%",
        transition: { duration: 0.7, ease: [0.5, 0, 0.1, 1] },
      });
      linkControlsArray.forEach((controls, index) => {
        controls.start({
          opacity: 1,
          x: 0,
          transition: {
            delay: 0.05 * (index + 1),
            duration: 0.5,
            ease: [0.5, 0, 0.1, 1],
          },
        });
      });
    } else {
      // Restore scroll and show scrollbar
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, scrollPosition);

      controls.start({
        width: "0%",
        transition: { delay: 0.2, duration: 0.7, ease: [0.5, 0, 0.1, 1] },
      });
      linkControlsArray.forEach((controls, index) => {
        controls.start({
          opacity: 0,
          x: 300,
          transition: {
            delay: 0.05 * (index + 1),
            duration: 0.5,
            ease: [0.5, 0, 0.1, 1],
          },
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  return (
    <>
      <motion.div
        className="navbar-wrapper fixed right-0 top-0 z-[1000] h-[100dvh] w-0   bg-gray-800  text-white"
        animate={controls}
      >
        <div
          className={cn(
            " burger-wrapper transistion relative z-[1001] flex h-14 w-14 translate-x-4 translate-y-4 transform cursor-pointer flex-col items-center justify-center gap-2 rounded-full duration-500 ease-out "
          )}
          onClick={(e) => {
            e.preventDefault();
            setIsActive(!isActive);
          }}
        >
          <div
            className={cn(
              " transistion h-[2px] w-[60%] duration-300 ease-out",
              isActive ? "absolute -rotate-[45deg] bg-white  " : ""
            )}
          ></div>
          <div
            className={cn(
              " transistion  h-[2px] w-[60%]  duration-300 ease-out",
              isActive ? "absolute rotate-[45deg] bg-white" : ""
            )}
          ></div>
        </div>
        <nav className="nav-wrapper flex h-screen items-center justify-center  ">
          <div className="flex flex-col gap-6">
            {navData?.map((item, index) => (
              <motion.div
                key={index}
                className="link-wrapper translate-x-[300px] transform opacity-0 duration-75 ease-linear"
                animate={linkControlsArray[index]}
              >
                <Link
                  href={item?.url}
                  onClick={() => setIsActive(false)}
                  className="text-5xl font-bold text-white transition-all duration-300 ease-linear hover:text-gray-500 hover:underline 2xl:text-6xl"
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

export default SideNavbar;
