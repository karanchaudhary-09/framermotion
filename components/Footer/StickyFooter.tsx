import React from "react";
import FooterContent from "./FooterContent";
import TranslateBottomTop, {
  TranslateBottomTopScroll,
} from "../animation/TranslateBottomTop";
import { InfiniteLoopingAnimation } from "../animation/InfiniteLoopAnimtion";

export const StickyFooter = () => {
  return (
    <>
      <div className="bg-black w-full overflow-hidden">
        <TranslateBottomTop>
          <div className="w-full overflow-hidden bg-slate-500">
            <InfiniteLoopingAnimation />
          </div>
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
