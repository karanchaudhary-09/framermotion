"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

export const InfiniteLoop = () => {
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
    const overflow = document.querySelector("#overflow");
    overflow.addEventListener("change", applyOverflow);

    function applyOverflow() {
      if (overflow.checked) {
        gsap.set(".wrapper", { overflow: "visible" });
      } else {
        gsap.set(".wrapper", { overflow: "hidden" });
      }
    }

    // Clean up the event listener when the component unmounts
    return () => {
      overflow.removeEventListener("change", applyOverflow);
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div
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
