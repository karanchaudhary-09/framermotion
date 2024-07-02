"use client";
import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import NavHeader from "./NavHeader";
import Link from "next/link";

export const BurgerHeader = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="block lg:hidden relative">
      <Link
        href={"/"}
        className="logo font-bold z-[99] text-2xl fixed top-5 left-5 text-primaryBlue"
      >
        Karan.
      </Link>
      <BurgerMenu isActive={isActive} setIsActive={setIsActive} />
      <NavHeader isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};
