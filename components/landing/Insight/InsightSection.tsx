import React from "react";
import InsightCard from "./InsightCard";
import ReusableButton from "@/components/common/ReusableButton";
import ResuableHeader from "@/components/common/ResuableHeader";

export default function InsightSection() {
  return (
    <section className="insight-section py-16 px-6 sm:px-10  sm:py-[100px] md:py-[67px] lg:py-[100px] lg:px-[100px] 2xl:px-[197px] flex flex-col gap-[52px] justify-center items-center  ">
      <ResuableHeader
        title="Unlock our insights and dicoveries"
        description=" Discover our ethos, achievements, and commitment to excellence. Explore
            our prestigious client base and remarkable success rate, and learn how
            we can take your business to new heights."
      />

      {/* <div className="insight-card-section w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-subgrid gap-6  "> */}
      <div className="insight-card-section w-full flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6  ">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <InsightCard key={index} />
          ))}
      </div>

      <ReusableButton
        type="button"
        text="Read more insights"
        className="insight-button  "
      />
    </section>
  );
}
