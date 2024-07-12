"use client";
import React, { useLayoutEffect } from "react";
import Lenis from "lenis";
import { StickyFooter } from "../Footer/StickyFooter";
import { AnimatePresence } from "framer-motion";
import TopHeader from "../navbar/navbar";

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
      <div className="provider-container ">
        <TopHeader />
        {children}
        <StickyFooter />
      </div>
    </AnimatePresence>
  );
}
