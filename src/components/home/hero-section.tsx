"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      gsap.to(logoRef.current, { rotation: "+=360", duration: 3 });
    },
    { scope: containerRef }
  );

  return (
    <div className="hero-section">
      <div
        ref={containerRef}
        className="logo-wrapper flex justify-center items-center"
      >
        <Image
          ref={logoRef}
          className="logo"
          src="/vercel.svg"
          alt="Vercel Logo"
          width={72}
          height={16}
        />
      </div>
    </div>
  );
}
