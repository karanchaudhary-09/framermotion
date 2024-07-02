import React from "react";

export const ResuableHeaderSection = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => {
  return (
    <div className="about-page h-[50vh] lg:h-[80vh] flex flex-col gap-16 items-center justify-center ">
      <h1 className="contact-title text-nowrap text-black font-bold text-4xl  md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-[120px]">
        {title}
      </h1>
      <p className="description text-base mobile:text-lg sm:text-2xl lg:text-4xl xl:text-5xl font-bold  w-[80vw]  text-center">
        {description}
      </p>
    </div>
  );
};
