import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdMenu, MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="px-6 md:px-16 xl:px-[100px] 2xl:px-[150px] py-4 flex text-mainblack items-center border justify-between">
      <Link href={"/"}>
        {" "}
        <Image src={"/aitclogo.png"} alt="logo" width={48} height={68} />
      </Link>{" "}
      <div className="lg:hidden">
        <MdMenu size={32} />
      </div>
      <nav className=" gap-16 text-lg hidden lg:flex items-center">
        <Link href={"/"}>About</Link>
        <Link href={"/"} className="flex items-center gap-2">
          Services <MdOutlineKeyboardArrowDown size={16} />
        </Link>
        <Link href={"/"}>Our work</Link>
        <Link href={"/"}>Career</Link>
        <Link href={"/"}>Insights</Link>
        <button className="bg-primary text-white px-4 py-2 rounded">
          <Link href={"/"}>Contact us</Link>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
