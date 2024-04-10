"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export const StepperAnimation = () => {
  useGSAP(() => {
    gsap.from(".box", {
      y: 100,
      duration: 0.3,
      scale: 0.5,
      stagger: {
        each: 0.1,
        from: "center",
      },
      repeat: -1,
    });
    gsap.from(".box1", {
      y: 100,
      duration: 0.3,
      scale: 0.5,
      stagger: {
        each: 0.1,
        from: "center",
      },
      repeat: -1,
    });
    gsap.from(".box2", {
      y: -100,
      duration: 0.3,
      scale: 0.5,
      stagger: {
        each: 0.1,

        from: "center",
      },
      repeat: -1,
    });
  });
  return (
    <div className="w-full border-2 flex flex-col gap-4 justify-center items-center h-[80vh]">
      <div className="flex gap-4">
        {Array.from({ length: 15 }).map((_, index) => (
          <div key={index} className="box bg-blue-500 w-20 h-20"></div>
        ))}
      </div>
      <div className="flex gap-4">
        {Array.from({ length: 15 }).map((_, index) => (
          <div key={index} className="box1 bg-blue-500 w-20 h-20"></div>
        ))}
      </div>
      <div className="flex gap-4">
        {Array.from({ length: 15 }).map((_, index) => (
          <div key={index} className="box2 bg-blue-500 w-20 h-20"></div>
        ))}
      </div>{" "}
    </div>
  );
};
