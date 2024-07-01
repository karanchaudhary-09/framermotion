"use client";
import React, { useLayoutEffect } from "react";
import Lenis from "lenis";
import { BurgerHeader } from "../navbar/BurgerHeader";
import { StickyFooter } from "../Footer/StickyFooter";
import TopHeader from "../navbar/TopHeader";

export default function ScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useLayoutEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <div className="provider-container  ">
      <BurgerHeader />
      <div className="relative">
        <TopHeader />
      </div>
      {children}
      <StickyFooter />
    </div>
  );
}
