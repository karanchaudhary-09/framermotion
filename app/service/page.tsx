import { ResuableHeaderSection } from "@/components/common/ResuableHeaderSection";
import React from "react";

export default function ServicePage() {
  return (
    <div className="service-page  flex flex-col justify-center items-center bg-noise bg-no-repeat bg-cover bg-primaryShade  overflow-hidden">
      <ResuableHeaderSection
        title="Service"
        description="We provide the best service to our customers."
      />
    </div>
  );
}
