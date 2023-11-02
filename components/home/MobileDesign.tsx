import Image from "next/image";
import React from "react";

export const MobileDesign = () => {
  return (
    // <section className="bg-gray-500 h-screen flex justify-center items-center">
      <div className="relative min-w-[420px] w-[420px] min-h-[800px] h-[800px] border ">
        <Image src="/phone.png" fill alt="design" />
        <iframe src="http://localhost:3000/" className="z-10 absolute w-full h-full " />
      </div>
    // {/* </section> */}
  );
};
