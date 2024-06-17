"use client";

import React from "react";
import { InfiniteMovingText } from "../ui/infinite-moving-card/InfiniteMovingCard";

export function InfiniteLoopingAnimation() {
  return (
    <div className="moving-image-wrapper hidden flex-col justify-between gap-10 overflow-hidden opacity-70  md:flex ">
      <InfiniteMovingText
        direction="left"
        speed="normal"
        text="Karan Chaudhary"
      />
    </div>
  );
}
