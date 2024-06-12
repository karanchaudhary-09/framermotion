import React from "react";
import { ResuableTitle } from "../AboutUs/resuable-title";
import { CommonAnimation } from "../AboutUs/resuable-animtaion";

export const HeroSection2 = () => {
  return (
    <div className="h-[932px] w-full flex justify-center items-center">
      <CommonAnimation>
        <div className="w-[50vw]">
          <ResuableTitle
            primaryText="Revolutionizing Living"
            secondaryText="with Modern Technology"
            description="Improve the security standards of your gated community with our technologically advanced and in-house engineered security and community management tool. We offer numerous innovative features that are sure to simplify your everyday chores."
            align="left"
            reverse={true}
          />
        </div>
      </CommonAnimation>
    </div>
  );
};
