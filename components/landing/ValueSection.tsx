import { valuesdata } from "@/utils/deleteable/homedatas";
import React from "react";
import ValueCard from "./ValueCard";

const ValueSection = () => {
  return (
    <section className="value-section flex px-6 sm:px-16 flex-col gap-14 text-mainblack py-[100px] bg-lightshade2">
      <h2 className="font-black text-2xl md:text-[40px] lg:text-[48px] text-center ">
        Our key value proposition
      </h2>
      <div className="flex gap-10 px-0 sm:px-12 lg:px-0 flex-wrap justify-center items-center ">
        {valuesdata?.map((item) => (
          <ValueCard key={item?.title} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ValueSection;
