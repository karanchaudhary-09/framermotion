import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiArrowRightUpFill } from "react-icons/ri";

export default function InsightCard() {
  return (
    <div className="insight-card-wrapper w-full md:w-[332px] lg:w-[370px] 2xl:[430px]   p-6 flex flex-col gap-8 bg-lightshade2 rounded-2xl group transition border-2 border-transparent hover:duration-1000 hover:ease-in-out hover:border-2 hover:border-primary">
      <div
        className={`image-container relative w-full h-[250px] rounded-lg overflow-hidden `}
      >
        <Image
          src="/deletable/blockchain.png"
          alt="insight-image"
          loading="lazy"
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
        {/* this button include animation */}
        <button className="right-arrow absolute bg-white p-[10px] w-11 h-11 rounded-lg right-3 top-3 transition group-hover:duration-1000 group-hover:ease-in-out  group-hover:-translate-x-1.5 group-hover:translate-y-1.5  ">
          <RiArrowRightUpFill className="text-primary" size={24} />
        </button>
      </div>
      <div className="insight-information-section flex flex-col gap-6">
        <div className="card-title flex flex-wrap gap-4">
          {["Web Design", "AI", "Blockchain"].map((item, index) => (
            <Link
              href="/"
              key={index}
              className="font-normal text-nowrap text-primaryViolet transition duration-500 ease-in-out  hover:duration-1000 hover:ease-in-out border-b border-transparent  hover:border-primaryViolet"
            >
              {item}
            </Link>
          ))}
        </div>
        <h4 className="font-normal flex justify-between pb-3 border-b-2 border-bordercolor leading-[24px]">
          <span className="text-primary text-nowrap">Design</span>
          <span className="text-mainblack text-nowrap">12 Aug 2024</span>
        </h4>
        <p className="font-normal   text-mainblack leading-[24px]">
          Product design field is emerging now days
        </p>
      </div>
    </div>
  );
}
