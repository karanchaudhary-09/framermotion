"use client";
import React, { useEffect } from "react";
import Lenis from "lenis";
import { TopHeader } from "../navbar/TopHeader";
import { twMerge } from "tailwind-merge";

export default function ScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <div className="provider-container ">
      <TopHeader />

      {children}
    </div>
  );
}
