import ReusableButton from "@/components/common/ReusableButton";
import React from "react";

export default function CompanyStatistics() {
  const numbercontent = [
    {
      number: 99,
      letter: "%",
      content: "Customer satisfaction",
    },
    {
      number: 20,
      letter: "M",
      content: "Total members",
    },
    {
      number: 89,
      letter: "+",
      content: "Project completed",
    },
    {
      number: 540,
      letter: "K+",
      content: "Hours of work",
    },
  ];
  return (
    <section className="statistics-section w-full h-auto py-16 px-6 sm:px-10  sm:py-[100px] md:py-[67px] lg:py-[100px] lg:px-[100px] 2xl:px-[197px] flex justify-center items-center bg-no-repeat bg-primaryViolet  bg-[length:100%] md:!bg-[length:397px]  xl:!bg-[length:530px]  bg-[url('/svg/mobileStatistics.svg')] md:bg-[url('/svg/statistics.svg')]  bg-right-top">
      <div className="statistics-container flex flex-col xl:flex-row  gap-16 ">
        {/* left wrapper */}
        <div className="statistics-left-wrapper xl:max-w-[456px] left-wrapper flex flex-col px-6 md:px-16 lg:px-0 gap-10 lg:gap-[52px] justify-center xl:items-start items-center ">
          <h3 className="text-white font-extrabold text-[32px] lg:text-5xl leading-[40.32px] lg:leading-[60.32px] tracking-[2%] text-center xl:text-left ">
            Company Statistics & Insights
          </h3>
          <p className="text-white text-center text-lg xl:text-left ">
            Discover our ethos, achievements, and commitment to excellence.
            Explore our prestigious client base and remarkable success rate, and
            learn how we can take your business to new heights.
          </p>
          <ReusableButton text="Learn more" type="button" />
        </div>

        {/* right wrapper */}
        <div className="number-wrapper flex flex-col md:flex-row justify-center items-center pb-[2px] lg:pt-0 lg:pb-0 lg:py-16 gap-10  ">
          {numbercontent?.map((content, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center "
            >
              <h3 className="number-shadow font-bold text-[64px] py-1 lg:text-[70px] xl:text-[100px] 2xl:text-9xl leading-[62px] tracking-[2%] text-center bg-gradient-to-b from-[#4F3B8F]  to-[#3D2D72] inline-block bg-clip-text text-transparent">
                {content?.number}
              </h3>
              <div className="number-title -mt-6 2xl:-mt-10 flex flex-col  gap-6 justify-center items-center">
                <h3 className="font-extrabold leading-[50.4px] tracking-[2%] text-center text-white text-[40px] lg:text-[44px] xl:text-[48px]  2xl:text-[64px]">
                  {content?.number + content?.letter}
                </h3>
                <p className="statistics-title text-primary text-lg text-nowrap px-1">
                  {" "}
                  {content?.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
