import React from "react";
import FooterContent from "./FooterContent";
import TranslateBottomTop from "../animation/TranslateBottomTop";

export const StickyFooter = () => {
  return (
    <>
      <div className="bg-black w-full overflow-hidden">
        <TranslateBottomTop>
          <h1 className="text-9xl text-nowrap text-white ">
            Infinite Scroll Infinite Scroll Infinite Scroll
          </h1>
        </TranslateBottomTop>
      </div>

      <div
        className="sticky-footer h-[70vh]  relative "
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      >
        <div className="footer-container relative h-[calc(100vh+70vh)] -top-[100vh]">
          <div className="footer-content sticky top-[calc(100vh-70vh)] w-full h-[70vh] bg-gray-900 ">
            <FooterContent />
          </div>
        </div>
      </div>
    </>
  );
};
