"use client";
import React, { use, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Providers({ children }: { children: React.ReactNode }) {
  const loadingAnimation = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(loadingAnimation.current, {
        delay: 2,
        duration: 1,
        y: -1000,
        ease: "power2.inOut",
      });
      gsap.to(pageRef.current, {
        delay: 2.8,
        display: "block",
      });
    },
    { scope: loadingAnimation }
  );

  return (
    <div className="page-wrapper ">
      <div
        ref={loadingAnimation}
        className="loading-animation fixed  bg-black w-full h-[100dvh] scrollbe  "
      >
        <div className="loading-page h-screen text-white flex justify-center items-center">
          <h1>Welcome to Loading Page</h1>
        </div>
      </div>
      <div ref={pageRef} className="hidden">
        {children}
      </div>
    </div>
  );
}
