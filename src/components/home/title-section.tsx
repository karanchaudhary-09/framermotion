"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const TitleAnimation = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  useGSAP(
    () => {
      gsap.from(titleRef.current, {
        duration: 1,
        x: -100,
        opacity: 0,
        ease: "power2.inOut",
      });
    },
    { scope: titleRef }
  );

  return (
    <div>
      <div
        ref={titleRef}
        className="flex text-nowrap font-bold text-xl items-center gap-2"
      >
        <h1 className=" ">
          <span>G</span>
          <span>S</span>
          <span>A</span>
          <span>P</span>{" "}
        </h1>
        <h1 className="title-animation">Animation Learning</h1>
      </div>
    </div>
  );
};
