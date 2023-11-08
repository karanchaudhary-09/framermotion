"use client";
import Lottie from "react-lottie-player";
import AnimationJson from "./animation.json";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const data_animation = [
  {
    name: "React",
    jsonAnimation: AnimationJson,
    content:
      "this is the content about react this is the content about react this is the content about react ",
  },
  {
    name: "Angular",
    jsonAnimation: AnimationJson,
    content:
      "this is the content about react this is the content about react this is the content about react ",
  },
  {
    name: "Vue",
    jsonAnimation: AnimationJson,
    content:
      "this is the content about react this is the content about react this is the content about react ",
  },
  {
    name: "Angular",
    jsonAnimation: AnimationJson,
    content:
      "this is the content about react this is the content about react this is the content about react ",
  },
  {
    name: "Vue",
    jsonAnimation: AnimationJson,
    content:
      "this is the content about react this is the content about react this is the content about react ",
  },
];
export const Services = () => {
  const [play, setPlay] = useState(false);
  const [index, setIndex] = useState(0);

  const titleRef = useRef(null);
  const serviceRef = useRef(null);
  const serviceItemRefs = Array.from({ length: 5 }, () => useRef<any>(null));

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: serviceRef.current,
        start: "top 80%",
        end: () => "+=" + serviceRef.current.offsetHeight,
        scrub: 0.7,
      },
    });

    serviceItemRefs.forEach((ref, index) => {
      tl.fromTo(
        ref.current,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.1 * (index + 1), // Adjust delay dynamically based on index
        }
      );
    });

    const sl = gsap.timeline({
      scrollTrigger: {
        trigger: serviceRef.current,
        start: "top 70%",
        end: "top 40%",
        scrub: 0.7,
        markers: true,
      },
    });

    sl.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 150,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    );
  }, []);

  return (
    <section
      ref={serviceRef}
      className="w-full flex justify-evenly relative p-2 border"
    >
      <div className="relative ">
        <div className="sticky top-10">
          <h1 ref={titleRef} className="text-[100px]  opacity-0 capitalize">
            services
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-8 ">
        {data_animation.map((item, i) => (
          <div
            key={i}
            ref={serviceItemRefs[i]}
            onMouseEnter={() => {
              setIndex(i);
              setPlay(true);
            }}
            onMouseLeave={() => setPlay(false)}
            className={`border w-[600px] h-[500px]  duration-1000 cursor-pointer flex flex-col py-10 gap-10 items-center`}
          >
            <h1 className="text-3xl">{item?.name}</h1>
            <Lottie
              loop
              animationData={item?.jsonAnimation}
              play={index === i ? play : false}
              style={{ width: 150, height: 150 }}
            />
            <p className="px-10 text-sm">{item?.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
