"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ProjectCard } from "./ProjectCard";

const CardScrollAnimation = () => {
  const animationItemRefs = Array.from({ length: 5 }, () =>
    useRef<any[]>(null)
  );
  const animationItemRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: animationItemRef.current,
        start: "top 70%",
        end: "+=1000px",
        scrub: 2,
        markers: true,
      },
    });

    animationItemRefs.forEach((ref, index) => {
      tl.fromTo(
        ref.current,
        {
          opacity: 0,
          y: 150,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          position: "absolute",
          top: `${50 * (index + 1)}px `,
          delay: 0.5 * (index + 1), // Adjust delay dynamically based on index
        }
      );
    });
  }, []);

  return (
    <div
      className="fullscreen   flex w-full h-screen py-10 overflow-hidden "
      id="second"
      ref={animationItemRef}
    >
      <div className="container m-[0_auto] w-full h-full p-10 ">
        <div className="wrapp relative w-full h-full">
          {Array(5)
            .fill("_")
            .map((_, i) => (
              <div
                key={i}
                className="w-full lg:w-[30%] "
                ref={animationItemRefs[i]}
              >
                <ProjectCard />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CardScrollAnimation;
