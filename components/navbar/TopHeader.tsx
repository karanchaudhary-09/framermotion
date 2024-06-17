"use client";
import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import NavHeader from "./NavHeader";

export const TopHeader = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <BurgerMenu isActive={isActive} setIsActive={setIsActive} />
      <NavHeader isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};
