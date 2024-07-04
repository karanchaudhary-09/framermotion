"use client";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

function BurgerMenu({
  isActive,
  setIsActive,
  className,
}: {
  isActive: boolean;
  setIsActive: any;
  className?: string;
}) {
  const [mouseOn, setMouseOn] = useState(false);

  return (
    <>
      <div
        className={twMerge(
          " header-wrapper z-[1001] relative h-16 w-16 transistion border-2 cursor-pointer transform duration-500 ease-out rounded-full flex flex-col gap-2 justify-center items-center",
          mouseOn && !isActive && "bg-gray-800",
          mouseOn && isActive && "bg-white",
          !mouseOn && isActive && "bg-transparent",
          className
        )}
        onMouseEnter={() => {
          setMouseOn(true);
        }}
        onMouseLeave={() => {
          setMouseOn(false);
        }}
        onClick={(e) => {
          e.preventDefault();
          setIsActive(!isActive);
        }}
      >
        <div
          className={twMerge(
            " h-[2px]  w-[40%] transistion duration-300 ease-out ",
            isActive ? "absolute -rotate-[45deg] bg-black" : "bg-white",
            !mouseOn && !isActive && "bg-black",
            !mouseOn && isActive && "bg-white"
          )}
        ></div>
        <div
          className={twMerge(
            " h-[2px]  w-[40%] transistion duration-300 ease-out",
            isActive ? "absoulte rotate-45 bg-black" : "bg-white",
            !mouseOn && !isActive && "bg-black",
            !mouseOn && isActive && "bg-white"
          )}
        ></div>
      </div>
    </>
  );
}

export default BurgerMenu;
