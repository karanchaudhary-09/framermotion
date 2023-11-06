"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const InfiniteLoop = () => {
  const overflowRef = useRef(null);

  useEffect(() => {
    var colors = ["#f38630", "#6fb936", "#ccc", "#6fb936"];

    // Initially colorize each box and position in a row
    gsap.set(".box", {
      backgroundColor: (i) => colors[i % colors.length],
      x: (i) => i * 50,
    });

    gsap.to(".box", {
      duration: 5,
      ease: "none",
      x: "+=500", // Move each box 500px to the right
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % 500), // Force x value to be between 0 and 500 using modulus
      },
      repeat: -1,
    });

    // Toggle overflow
    const applyOverflow = () => {
      if (overflowRef.current.checked) {
        gsap.set(".wrapper", { overflow: "visible" });
      } else {
        gsap.set(".wrapper", { overflow: "hidden" });
      }
    };

    // Check if the ref is not null before attaching the event listener
    if (overflowRef.current) {
      overflowRef.current.addEventListener("change", applyOverflow);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      // Check if the ref is not null before removing the event listener
      if (overflowRef.current) {
        overflowRef.current.removeEventListener("change", applyOverflow);
      }
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div
      ref={overflowRef}
      className={`wrapper w-450 h-50 relative mx-auto bg-gray-300 overflow-hidden`}
    >
      <div className="boxes relative left-[-50px]">
        {Array.from({ length: 10 }, (_, index) => (
          <div
            key={index}
            className="box w-50 h-50 absolute bg-red-500 text-white text-2xl flex items-center justify-center"
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};
