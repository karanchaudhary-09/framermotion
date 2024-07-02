"use client";
import React, { useLayoutEffect } from "react";
import Lenis from "lenis";
import { BurgerHeader } from "../navbar/BurgerHeader";
import { StickyFooter } from "../Footer/StickyFooter";
import TopHeader from "../navbar/TopHeader";
import { AnimatePresence } from "framer-motion";

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
    <AnimatePresence mode="wait">
      <div className="provider-container  ">
        <BurgerHeader />
        <div className="relative hidden lg:block">
          <TopHeader />
        </div>
        {children}
        <StickyFooter />
      </div>
    </AnimatePresence>
  );
}
