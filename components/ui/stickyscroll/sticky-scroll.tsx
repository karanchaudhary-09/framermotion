"use client";
import React from "react";
import Image from "next/image";
import { content } from "@/utils/data/contnet";
import { StickyScroll } from "./sticky-scroll-reveal";

export function StickyScrollRevealDemo() {
  return <StickyScroll content={content} />;
}
