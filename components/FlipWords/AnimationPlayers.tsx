"use client";

import { useEffect, useRef } from "react";
export const AnimationPlayer = () => {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div className=" h-full text-primaryBlue  ">
      <lottie-player
        ref={ref}
        autoplay
        loop
        mode="normal"
        src="/animation/bearHello.json"
        className="w-96 h-96  "
        // style={{ width: "300px", height: "300px" }}
      ></lottie-player>
    </div>
  );
};
