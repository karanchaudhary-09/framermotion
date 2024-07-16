import { RevealTransition } from "@/components/animation/reveal-transistion";
import React from "react";

export default function HomeHeaderSection() {
  return (
    <div className="h-screen w-full flex justify-center items-center px-10">
      <RevealTransition className="w-auto">
        <h1 className="text-black text-5xl font-bold py-4 ">
          Welcome to Reveal Transistion Page
        </h1>
      </RevealTransition>
    </div>
  );
}
