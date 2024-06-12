import React from "react";

export const ResuableTitle = ({
  primaryText,
  secondaryText,
  description,
  className,
  align,
  reverse,
}: {
  primaryText?: string;
  secondaryText?: string;
  description?: string;
  className?: string;
  align?: string;
  reverse?: boolean;
}) => {
  return (
    <>
      <h2
        className={` ${reverse ? "text-primaryOrange" : "text-primaryBlue"} text-[64px]  ${align && ``}`}
      >
        <span>{primaryText}</span>
        <span
          className={`${reverse ? "text-primaryBlue" : "text-primaryOrange"} `}
        >
          {secondaryText}
        </span>
      </h2>
      <p className={`text-gray8 text-[${align}]`}>{description}</p>
    </>
  );
};
