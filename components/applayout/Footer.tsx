import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const companylist = [
  {
    link: "/about",
    title: "About",
  },
  {
    link: "/about",
    title: "Insights",
  },
  {
    link: "/about",
    title: "Career",
  },
  {
    link: "/about",
    title: "Contact us",
  },
  {
    link: "/about",
    title: "Digital marketing",
  },
];
const servicelist = [
  {
    link: "/about",
    title: "Software development",
  },
  {
    link: "/about",
    title: "Website development",
  },
  {
    link: "/about",
    title: "Mobile app development",
  },
  {
    link: "/about",
    title: "UX/UI design",
  },
  {
    link: "/about",
    title: "AR/ VR",
  },
  {
    link: "/about",
    title: "Q/A testing ",
  },
  {
    link: "/about",
    title: "Digital marketing",
  },
  {
    link: "/about",
    title: "IT consultation",
  },
];

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 xl:px-[100px] 2xl:px-[150px]">
      <div className="footer-wrapper border-b-2 border-bordercolor gap-8 lg:gap-[140px] justify-between   flex flex-col lg:flex-row  py-20   ">
        <div className="company-details-section w-full flex flex-col lg:max-w-[300px]  gap-6 items-center lg:items-start">
          <Link href={"/"}>
            <Image src="/aitclogo.png" alt="logo" width={106} height={134} />
          </Link>{" "}
          <p className="text-mainblack font-medium text-center lg:text-start ">
            Hospitality is about creating exceptional guest experiences.
            Effective management ensures seamless operations.
          </p>
          <nav className="social-wrapper flex gap-4  items-center">
            <Link href={"/social"}>
              <Image
                src="/social/facebook.png"
                alt="logo"
                width={24}
                height={24}
              />
            </Link>
            <Link href={"/social"}>
              <Image
                src="/social/linkedin.png"
                alt="logo"
                width={24}
                height={24}
              />
            </Link>
            <Link href={"/social"}>
              <Image
                src="/social/instagram.png"
                alt="logo"
                width={24}
                height={24}
              />
            </Link>
          </nav>
        </div>
        <div className="grid  w-full  sm:grid-cols-3">
          <div className="company-list-section flex mt-8 sm:mt-0 flex-col text-center sm:text-start  gap-6 ">
            <p className=" font-black text-mainblack">Company</p>
            <nav className="flex flex-col gap-4">
              {companylist?.map((item, index) => (
                <Link
                  href={"/"}
                  className="text-mainblack font-medium"
                  key={index}
                >
                  {item?.title}
                </Link>
              ))}
            </nav>
          </div>
          <div className="company-list-section text-center sm:text-start mt-8 sm:mt-0 flex flex-col gap-6 ">
            <p className=" font-black text-mainblack">Our Services</p>
            <nav className="flex flex-col gap-4">
              {servicelist?.map((item, index) => (
                <Link
                  href={"/"}
                  className="text-mainblack font-medium"
                  key={index}
                >
                  {item?.title}
                </Link>
              ))}
            </nav>
          </div>
          <div className="contact-us-section text-center sm:text-start mt-8 sm:mt-0 flex flex-col gap-6">
            <p className="font-black text-mainblack">Contact us</p>
            <div className="flex flex-col gap-4">
              <Link href={"mailto:aitc@gmail"} className=" text-mainblack">
                aitc@gmail.com
              </Link>
              <div className="flex flex-col  gap-2">
                <p className="text-primary font-medium">Nepal</p>
                <p className="">04659693</p>
                <p className="">Radhe Radhe, Bhaktapur - Nepal,44800</p>
              </div>
              <div className="flex flex-col  gap-2">
                <p className="text-primary font-medium">USA</p>
                <p className="">04659693</p>
                <p className="">2201 Spinks Rd, Flower Mound,Texas, 75022</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center  justify-center  gap-10 flex flex-col sm:flex-row font-medium py-6">
        <Link href={"/"} className="text-primarytext text-nowrap">
          Terms & conditions
        </Link>
        <Link href={"/"} className="text-primarytext text-nowrap">
          Privacy policy
        </Link>
        <p className="text-primary">
          © Copyright{moment().format("YYYY")} : AITC INTERNATIONAL
        </p>
      </div>
    </footer>
  );
};

export default Footer;
