import { ResuableHeaderSection } from "@/components/common/ResuableHeaderSection";
import ContactForm from "@/components/contact/ContactForm";
import React from "react";

export default function ContactPage() {
  return (
    <div className="contact-page flex flex-col justify-center items-center bg-noise bg-no-repeat bg-cover bg-primaryShade ">
      <ResuableHeaderSection
        title="Contact Us"
        description=" Do you have a question, an idea, or a project you need help with?
        Contact us!"
      />
      <ContactForm />
      <div className="h-40"></div>
      {/* <div className="w-full overflow-hidden bg-black">
        <InfiniteLoopingCardAnimation />
      </div> */}{" "}
    </div>
  );
}
