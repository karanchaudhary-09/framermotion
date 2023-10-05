"use client";
import React, { useEffect, useState } from "react";
import { OpeningAnimation } from "./home/OpeningAnimation";
import { Navbar } from "./navbar/Navbar";

function Provider({ children }: { children: React.ReactNode }) {
  const [isSection1Loaded, setIsSection1Loaded] = useState<boolean>(true);

  useEffect(() => {
    // Simulate loading of section1
    setTimeout(() => {
      setIsSection1Loaded(true);
    }, 3500); // Adjust the time to match your actual loading time
    // You can replace the setTimeout above with your actual loading logic.
  }, []);

  return (
    <>
      {isSection1Loaded ? (
        <>
          <Navbar />
          {children}
        </>
      ) : (
        <OpeningAnimation />
      )}
    </>
  );
}

export default Provider;
