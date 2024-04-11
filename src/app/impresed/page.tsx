"use client";
import React, { useRef } from "react";
import "@lottiefiles/lottie-player";

export default function Impressed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const noButtonRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (!noButtonRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const buttonRect = noButtonRef.current.getBoundingClientRect();

    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;

    const x = (e.clientX - buttonRect.left + buttonRect.width) * Math.random();
    const y = e.clientY - buttonRect.top + buttonRect.height * Math.random();

    noButtonRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col justify-center items-center border-2 border-black w-screen h-screen"
    >
      <div className=" ">
        <lottie-player
          id="firstLottie"
          autoplay
          loop
          mode="normal"
          src="https://assets4.lottiefiles.com/packages/lf20_gb5bmwlm.json"
          style={{ width: "300px", height: "300px" }}
        ></lottie-player>
      </div>
      <div className="flex gap-8">
        <button className="px-6 py-2 border-2 border-purple-600 rounded-lg cursor-pointer text-purple-900 font-bold">
          Yes
        </button>
        <div ref={noButtonRef} onMouseEnter={handleMouseEnter} className="p-4">
          <button className="px-6 py-2 border-2 border-red-600 rounded-lg cursor-pointer text-red-600 font-bold">
            No
          </button>
        </div>
      </div>
    </div>
  );
}
