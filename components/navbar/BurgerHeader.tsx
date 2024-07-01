"use client";
import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import NavHeader from "./NavHeader";

export const BurgerHeader = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="block lg:hidden">
      <BurgerMenu isActive={isActive} setIsActive={setIsActive} />
      <NavHeader isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};
