import { RevealTransistion } from "@/components/animation/reveal-transistion";
import React from "react";

export default function HomeHeaderSection() {
  return (
    <div className="h-screen w-full flex justify-center items-center px-10">
      <RevealTransistion className="w-auto">
        <h1 className="text-black text-5xl font-bold py-4 border">
          Welcome to Reveal Transistion Page
        </h1>
      </RevealTransistion>
    </div>
  );
}
