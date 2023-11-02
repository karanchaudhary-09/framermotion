import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop
        pagination={{
          clickable: true,
          el: '.project-swiper-pagination',
        }}
        autoplay={{ delay: 3 }}
        modules={[Pagination]}
        className="project-swiper-container "
      >
        {Array(5)
          .fill("_")
          .map((_, i) => (
            <SwiperSlide key={i} className="project-swiper-slide">
              <div className=" relative w-full h-[90%] object-cover rounded-[20px_0px_20px_0px] overflow-hidden cursor-grab">
                <Image src="/images.jpg" fill alt="design" />
              </div>
            </SwiperSlide>
          ))}
        {/* pagination */}
        <div className="project-swiper-pagination  absolute bottom-1 right-1"></div>
      </Swiper>
    </>
  );
}
