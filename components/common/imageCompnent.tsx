import Image from "next/image";
import React from "react";

export const ImageCompnent = () => {
  return (
    <Image
      src="/mobile/Silver.png"
      alt="logo"
      width={270}
      height={520}
      priority={true}
      className=" min-w-[270px] min-h-[520px]"
    />
  );
};
