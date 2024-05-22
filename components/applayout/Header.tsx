import Link from "next/link";
import React from "react";
import { MdEmail, MdLocalPhone } from "react-icons/md";

const Header = () => {
  return (
    <div className="top-header-section px-6 md:px-16 xl:px-[100px] 2xl:px-[150px] py-4 flex flex-col border-y border-bordercolor sm:flex-row gap-4  justify-between">
      <div className="flex justify-between gap-4">
        <div className="flex text-primary justify-between gap-2 items-center ">
          <MdEmail size={24} />
          <Link
            href={"mailto:aitc@gmail"}
            className="underline underline-offset-4 text-primarytext"
          >
            aitc@gmail.com
          </Link>
        </div>
        <div className="flex justify-between text-primary gap-2 items-center ">
          <MdLocalPhone size={24} />
          <Link
            href={"mailto:aitc@gmail"}
            className="underline text-primarytext underline-offset-4 "
          >
            04659693
          </Link>
        </div>
      </div>
      <Link href={"/contact"} className="text-primary font-medium ">
        Book a free consultation !!!
      </Link>
    </div>
  );
};

export default Header;
