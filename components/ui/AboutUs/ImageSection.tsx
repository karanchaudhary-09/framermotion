import Image from "next/image";
import React from "react";

export const ImageSection = () => {
  return (
    <div className="image-container relative z-[10]">
      <Image
        src="/home/verticalMobile.png"
        className="min-h-80 max-h-[454px]  min-w-[160px] max-w-[223px] object-contain "
        height="450"
        width="225"
        alt="horizontal"
      />
      <Image
        src="/home/horizontalMobile.png"
        className="absolute bottom-0 z-[-1] right-0 min-w-80 max-w-[402px] max-h-[203px] min-h-[160px] object-contain "
        width="402"
        height="203"
        alt="vertical"
      />
    </div>
  );
};
