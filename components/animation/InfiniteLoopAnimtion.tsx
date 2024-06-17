"use client";

import React from "react";
import {
  InfiniteMovingCard,
  InfiniteMovingText,
} from "../ui/infinite-moving-card/InfiniteMovingCard";

export function InfiniteLoopingAnimation() {
  return (
    <div className="moving-image-wrapper hidden flex-col justify-between gap-10 overflow-hidden opacity-70  md:flex ">
      <InfiniteMovingText
        direction="left"
        speed="fast"
        text="Karan Chaudhary"
      />
    </div>
  );
}

export function InfiniteLoopingCardAnimation() {
  return (
    <div className="moving-image-wrapper bg-green-200 text-black hidden flex-col justify-between gap-10 overflow-hidden opacity-70  md:flex ">
      <InfiniteMovingCard direction="left" speed="fast" text="Card Animation" />
      <InfiniteMovingCard
        direction="right"
        speed="fast"
        text="Card Animation"
      />
    </div>
  );
}
