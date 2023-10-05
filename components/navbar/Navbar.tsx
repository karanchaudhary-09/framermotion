"use client";
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      <nav className="navbar-wrapper px-4 md:px-10  bg-slate-500 py-6 flex justify-between items-center">
        <div className="logo-wrapper ">
          <h1 className="text-2xl font-bold text-white">
            K<span className="text-purple-400">C</span>
          </h1>
        </div>
        <motion.div
          onClick={() => setIsActive(!isActive)}
          className="w-10 h-10 relative z-10 rounded-full bg-green-400 text-white flex justify-center items-center   text-xs cursor-pointer overflow-hidden"
        >
          <motion.div
            transition={{ duration: 0.5 }}
            className="bg-green-400 -z-10"
            animate={{
              position: "absolute",
              width: isActive ? "100%" : "0%",
              height: isActive ? "100%" : "0%",
              borderRadius: "50%",
              backgroundColor: isActive ? "red" : "green",
            }}
          ></motion.div>

          {isActive ? (
            <AiOutlineClose size={25} color={"white"} fontWeight={"bold"} />
          ) : (
            <HiOutlineMenuAlt4 size={25} />
          )}
        </motion.div>
      </nav>
    </>
  );
};
