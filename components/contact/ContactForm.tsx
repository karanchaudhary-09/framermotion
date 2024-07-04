"use client";
import cn from "@/utils/cn";
import React from "react";

export default function ContactForm() {
  const contactInfo = [
    {
      name: "Contact",
      value: "(123) 456-7890",
    },
    {
      name: "Email",
      value: "karandk536@gmail.com",
    },
    {
      name: "Address",
      value: "1234 Main St, New York, NY 10001",
    },
  ];

  return (
    <div className="contact-form-wrapper w-[80vw] flex flex-col justify-center items-center rounded-xl overflow-hidden ">
      <div className="w-full bg-white grid grid-cols-1 lg:grid-cols-3">
        {contactInfo.map((info, index) => (
          <div
            key={index}
            className={cn(
              "contact-info flex flex-col justify-center gap-2 items-center p-10 ",
              index + 1 !== contactInfo?.length &&
                "border-b-2 lg:border-r-2 border-primaryShade"
            )}
          >
            <h3 className="text-xl font-medium">{info.name}</h3>
            <p className="text-xl font-semibold text-center">{info.value}</p>
          </div>
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Form Submitted");
        }}
        className="contact-form w-full bg-black flex flex-col justify-center items-center gap-14  px-4 py-10 lg:p-14"
      >
        <h3 className="text-white text-base mobile:text-lg sm:text-2xl lg:text-4xl xl:text-5xl  text-center">
          By all means, send us an email and get in touch.
        </h3>
        <div className="w-full flex flex-col lg:flex-row gap-10 ">
          <input
            required
            placeholder="Name"
            type="text"
            className="w-full bg-primaryBlue text-white px-4 py-3 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryShade focus:ring-opacity-50 focus:bg-primaryShade focus:text-primaryBlue"
          />
          <input
            required
            placeholder="Email"
            type="email"
            className="w-full bg-primaryBlue text-white px-4 py-3 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryShade focus:ring-opacity-50 focus:bg-primaryShade focus:text-primaryBlue"
          />
        </div>
        <textarea
          required
          placeholder="Write your message here..."
          name="message"
          id="message"
          cols={30}
          rows={10}
          className="w-full bg-primaryBlue text-white px-4 py-3 text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryShade focus:ring-opacity-50 focus:bg-primaryShade focus:text-primaryBlue"
        ></textarea>
        <button
          type="submit"
          className=" w-full lg:w-[18vw] p-5 rounded-lg bg-primaryOrange text-white font-bold text-nowrap text-sm lg:text-xl shadow-lg shadow-slate-300 hover:shadow-none"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
