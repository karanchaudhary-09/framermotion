// "use client";
// import React, { useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// export const HorizontalScroll = () => {

//   useEffect(() => {
//     const horizontalSections = gsap.utils.toArray(".horizontal");

//     horizontalSections.forEach(function (sec:any) {
//       const thisPinWrap = sec.querySelector(".pin-wrap");
//       const thisAnimWrap = thisPinWrap.querySelector(".animation-wrap");

//       const getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth);

//       gsap.fromTo(
//         thisAnimWrap,
//         {
//           x: () =>
//             thisAnimWrap.classList.contains("to-right") ? 0 : getToValue(),
//         },
//         {
//           x: () =>
//             thisAnimWrap.classList.contains("to-right") ? getToValue() : 0,
//           ease: "none",
//           scrollTrigger: {
//             trigger: sec,
//             start: "top top",
//             end: () => `+=${thisAnimWrap.scrollWidth - window.innerWidth}`,
//             pin: thisPinWrap,
//             invalidateOnRefresh: true,
//             scrub: true,
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <>
//       <section className="blank relative w-full bg-slate-300">
//         <h1 className=" text-3xl pt-10 px-10">
//           Scroll Trigger Bi-Directional Fake Horizontal Scroll
//         </h1>
//         <p className="px-10 py-12">......</p>
//       </section>

//       <section className="horizontal relative ">
//         <div className="pin-wrap">
//           <div className="animation-wrap to-right flex gap-12 overflow-x-scroll sticky top-0">
//             {Array(10)
//               ?.fill("")
//               .map((_, i) => (
//                 <div
//                   className="item min-w-[520px] px-[50px] py-[20px] border-r border-red-400"
//                   key={i}
//                 >
//                   <h1 className="text-5xl text-gray-400">{i + 1}</h1>
//                   Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//                   Necessitatibus, temporibus esse magni illum eos natus ipsum
//                   minus? Quis excepturi voluptates atque dolorum minus eligendi!
//                   Omnis minima magni recusandae ex dignissimos.
//                 </div>
//               ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const panelsData = [
  {
    id: 1,
    color: "gray",
    title: "Panel 1",
    description:
      "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Including versions of Lorem Ipsum.",
  },
  {
    id: 2,
    color: "#abd1e0",
    title: "Panel 2",
    description:
      "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Including versions of Lorem Ipsum.",
  },
  {
    id: 3,
    color: "#dce0ab",
    title: "Panel 3",
    description:
      "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Including versions of Lorem Ipsum.",
  },
  {
    id: 4,
    color: "#a88e8c",
    title: "Panel 4",
    description:
      "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Including versions of Lorem Ipsum.",
  },
  {
    id: 5,
    color: "#d1abcc",
    title: "Panel 5",
    description:
      "   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Including versions of Lorem Ipsum.",
  },
];

const HorizontalScroll = () => {
  const panelsRef = useRef([]);

  useEffect(() => {
    const panels = panelsRef.current;

    console.log(100 * (panels.length - 1));
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: "#panels",
        pin: true,
        start: "top top",
        scrub: 1,
        // markers: true,
        snap: {
          snapTo: 1 / (panels.length - 1),
          // duration: 1, // Duration of the snap effect
        },
        end: () => `+=${window.innerWidth - panels[0].offsetWidth}`,
        onToggle: (self) => {
          if (self.isActive) {
            const currentIndex = Math.round(
              self.progress * (panels.length - 1)
            );
            gsap.to(window, {
              scrollTo: panelsRef.current[currentIndex],
              duration: 1, // Duration of the scroll animation to the panel
            });
          }
        },
      },
    });
  }, []);

  // useEffect(() => {
  //   const panels = panelsRef.current;
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: panels,
  //       start: "top top",
  //       scrub: 1,
  //       snap: {
  //         snapTo: 1 / (panels.length - 1),
  //         inertia: false,
  //         duration: { min: 0.1, max: 0.1 },
  //       },
  //       end: () => `+=${panels[0].offsetWidth - window.innerWidth}`,
  //     },
  //   });

  //   gsap.to(panels, {
  //     xPercent: -100 * (panels.length - 1),
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: "#panels",
  //       pin: true,
  //       start: "top top",
  //       scrub: 1,
  //       snap: {
  //         snapTo: 1 / (panels.length - 1),
  //         inertia: false,
  //         duration: { min: 0.1, max: 0.1 },
  //       },
  //       end: () => `+=${panels[0].offsetWidth - window.innerWidth}`,
  //     },
  //   });

  //   return () => {
  //     tl.kill();
  //   };
  // }, []);

  return (
    <section id="panels" className="overflow-x-hidden">
      <div
        id="panels-container"
        style={{ width: `${panelsData.length * 100}%` }}
        className="h-screen flex flex-nowrap bg-gray-300"
      >
        {panelsData.map((panel, index) => (
          <div
            key={panel.id}
            ref={(el) => (panelsRef.current[index] = el)}
            style={{ background: panel.color, width: "100vw" }}
            className="panel w-full h-full flex justify-center items-center text-left border-r border-red-500"
          >
            <div className="row">
              <div className="col-6">
                <img src="your-image-source" alt="Panel" />
              </div>
              <div className="col-6 d-flex flex-column">
                <h2>{panel.title}</h2>
                <p className="step-description">{panel.description}</p>
                <div className="panels-navigation absolute bottom-3 right-3">
                  <div className="nav-panel flex gap-4">
                    {panel.id > 1 && (
                      <div
                        onClick={() =>
                          gsap.to(window, {
                            scrollTo: panelsRef.current[panel.id - 2],
                          })
                        }
                        className="anchor cursor-pointer border p-4"
                      >
                        Prev
                      </div>
                    )}
                    {panel.id < panelsData.length && (
                      <div
                        onClick={() =>
                          gsap.to(window, {
                            scrollTo: panelsRef.current[panel.id],
                          })
                        }
                        className="anchor cursor-pointer border p-4"
                      >
                        Next
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HorizontalScroll;
