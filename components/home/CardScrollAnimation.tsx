"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ProjectCard } from "./ProjectCard";

const CardScrollAnimation = () => {
  const animationItemRefs = Array.from({ length: 10 }, () =>
    useRef<any[]>(null)
  );
  const animationItemRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: animationItemRef.current,
        start: "top 70%",
        end: "+=700px",
        scrub: 2,
        markers: true,
      },
    });

    animationItemRefs.forEach((ref, index) => {
      tl.fromTo(
        ref.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          position: "absolute",
          border: "1px solid red",
          top: `${30 * (index + 1)}px `,
          delay: 0.5 * (index + 1), // Adjust delay dynamically based on index
        }
      );
    });
  }, []);

  return (
    <div
      className="fullscreen   flex w-full h-[70vh] py-10 overflow-hidden "
      id="second"
      ref={animationItemRef}
    >
      <div className="container m-[0_auto] w-full h-full p-10 ">
        <div className="wrapp relative w-full h-full">
          {Array(8)
            .fill("_")
            .map((_, i) => (
              <div
                key={i}
                className="w-[300px] h-[200px] absolute bottom-0  border-red-400 shadow-2xl p-5 bg-white animation-item ease duration-700"
                ref={animationItemRefs[i]}
              >
                Button
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CardScrollAnimation;
