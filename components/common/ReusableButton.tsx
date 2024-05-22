"use client";
import React from "react";

interface ReusableButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  func?: () => void;
  text: string;
}

export default function ReusableButton({
  className,
  func,
  text,
  ...others
}: ReusableButtonProps) {
  return (
    <>
      <button
        {...others}
        className={`common-button bg-primary text-lg text-white  text-center px-4 py-3 rounded-[10px] ${className}`}
        onClick={() => func}
      >
        {text}
      </button>
    </>
  );
}
