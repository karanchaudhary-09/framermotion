import Image from "next/image";
import React from "react";

interface IValueCardProps {
  // data: {
  image: string;
  title: string;
  description: string;
  // };
}

const ValueCard = (data: IValueCardProps) => {
  return (
    <div className="value-card lg:w-[370px] sm:h-[424px] p-4 rounded-2xl text-center text-mainblack bg-white  ">
      <div className="flex  flex-col gap-6">
        <div className="h-[192px] flex items-center justify-center">
          <div className="h-[119px] w-full  relative  ">
            <Image src={data?.image} objectFit="contain" fill alt="logo" />
          </div>
        </div>
        <h4 className="text-lg font-black ">{data?.title}</h4>
        <p className="font-medium ">{data?.description}</p>
      </div>
    </div>
  );
};

export default ValueCard;
