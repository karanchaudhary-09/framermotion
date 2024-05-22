import React from "react";

interface ReusableHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export default function ResuableHeader({
  title,
  description,
  className,
}: ReusableHeaderProps) {
  return (
    <div
      className={`common-header w-full  flex flex-col gap-8 justify-center items-center ${className}`}
    >
      <h3 className="text-[32px] leading-[40.32px] font-[900] text-center text-mainblack">
        {title}
      </h3>
      <p className="px-0 lg:px-[57px] xl:px-[137px] 2xl:px-[194px] leading-[24px] text-center font-medium text-primarytext ">
        {description}
      </p>
    </div>
  );
}
