"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const LoadingAnimation = () => {
  const loadingAnimation = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(loadingAnimation.current, {
        delay: 2,
        duration: 1,
        y: -1000,
        ease: "power2.inOut",
      });
    },
    { scope: loadingAnimation }
  );

  return (
    <div
      ref={loadingAnimation}
      className="loading-animation fixed  bg-black w-full h-[100dvh] scrollbe  "
    >
      <div className="loading-page h-screen text-white flex justify-center items-center">
        <h1>Welcome to Loading Page</h1>
      </div>
    </div>
  );
};
