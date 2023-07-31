import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-deepBlue 2xl:px-40 xl:px-20 lg:px-14 md:px-10 px-5 py-20 text-white">
      <h1>Enter your email to stay in touch!</h1>
      {/* -------------------- MAIL INPUT & SUBMIT BUTTON -------------------- */}
      <div className="flex ">
        <form className="flex sm:flex-row flex-col  w-full" action={""}>
          <input
            type="email"
            className="block rounded-sm bg-gray-400/50 w-full  lg:w-72  border-b-2 border-indigo-500 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-indigo-500 px-3 h-12 my-5 mr-2 lg:mr-2"
          />
          <button
            type="submit"
            className="rounded-sm bg-gray-400/50 hover:bg-white  hover:text-deepBlue font-medium tracking-normal h-12 my-5 lg:w-40 md:w-40 sm:w-40"
          >
            SIGN UP
          </button>
        </form>
      </div>

      <div className="md:grid md:grid-cols-12 md:items-start items-center flex flex-col mt-10">
        {/* --------------- HELP --------------- */}
        <div className="col-span-3 text-center md:text-start mb-8 md:mb-0">
          <h1 className="text-sm font-bold tracking-widest">HELP</h1>
          <ul className="text-sm space-y-2 mt-5 font-normal">
            {helpLine.map((items, i) => (
              <li key={i}>{items}</li>
            ))}
          </ul>
        </div>

        {/* --------------- SHOP --------------- */}
        <div className="col-span-3 text-center md:text-start mb-8 md:mb-0">
          <h1 className="text-sm font-bold tracking-widest">SHOP</h1>
          <ul className="text-sm space-y-2 mt-5 font-normal">
            {shopList.map((items, i) => (
              <li key={i}>{items}</li>
            ))}
          </ul>
        </div>

        {/* --------------- Company --------------- */}
        <div className="col-span-3 text-center md:text-start mb-8 md:mb-0">
          <h1 className="text-sm font-bold tracking-widest">COMPANY</h1>
          <ul className="text-sm space-y-2 mt-5 font-normal">
            {companyList.map((items,i) => (
              <li key={i}>{items}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:grid md:grid-cols-12 md:items-start items-center flex flex-col md:mt-16">
        <div className="col-span-3 text-center md:text-start mb-8 md:mb-0 pr-2">
          <h1 className="text-sm font-bold tracking-widest">
            FOLLOW THE FLOCK
          </h1>

          <p className="my-3 text-sm ">
            Exclusive offers, a heads up on new things, and sightings of
            Allbirds in the wild. Oh, we have cute sheep, too. #weareallbirds
          </p>

          {/* --------------- SOCIAL-MEDIA ICON --------------- */}
          <div className="md:mt-1 ">
            <ul className="flex md:justify-start justify-center  space-x-2">
              {socialMediaList.map((items,i) => (
                <li key={i} className="bg-gray-200/5 hover:bg-gray-200/10 rounded-full p-2">
                  <Link target="_blank" href={items.url}>
                    {<items.icon />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* --------------- CENTER ICON --------------- */}
        <div className="col-span-3 text-center md:text-start mb-8   md:mb-0">
          <div className="flex items-center justify-center">
            <Image src="/images/foologo.png" width={100} height={100} alt="Crporation"/>
          </div>
        </div>

        {/* --------------- FLAG IMAGE --------------- */}
        <div className="col-span-6   text-center md:text-start mb-8 md:mb-0 ">
          <ul className="flex flex-wrap md:justify-start justify-center">
            {flagList.map((flag,i) => (
              <Link key={i} href={flag.link}>
                <li>
                  <Image
                    src={flag.img}
                    className=" h-10 w-20 pr-2 pb-2 "
                    width={100}
                    height={100}
                    alt="flag"
                  />
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center mt-2 md:mt-16 text-xs md:text-sm ">
        <p>
          © 2022 Allbirds, Inc. All Rights Reserved.{" "}
          <Link href={""}>
            <b className="underline font-normal">Privacy and Cookies</b>
          </Link>
          {" , "}
          <Link href={""}>
            <b className="underline font-normal">Cookies Settings</b>
          </Link>
          {" & "}
          <Link href={""}>
            <b className="underline font-normal">Accessibility</b>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
const flagList = [
  { link: "/", img: "/flag/1.png" },
  { link: "/", img: "/flag/2.png" },
  { link: "/", img: "/flag/3.png" },
  { link: "/", img: "/flag/4.png" },
  { link: "/", img: "/flag/5.png" },
  { link: "/", img: "/flag/6.png" },
  { link: "/", img: "/flag/7.png" },
  { link: "/", img: "/flag/8.png" },
  { link: "/", img: "/flag/9.png" },
];

const socialMediaList = [
  { icon: FaInstagram, url: "https://www.instagram.com/" },
  {
    icon: FaTwitter,
    url: "https://twitter.com/i/flow/login?redirect_after_login=%2Flogin",
  },
  { icon: FaFacebookF, url: "https://www.facebook.com/" },
  { icon: FaYoutube, url: "https://www.youtube.com/" },
];
const helpLine = [
  "+91 0000000000",
  "help@nwg.com",
  "Returns/Exchanges",
  "FAQ/Contact Us",
];
const shopList = [
  "Men's Apparel",
  "Men's Shoes",
  "Women's Apparel",
  "Women's Shoes",
  "Socks",
  "Gift Card",
  "Insoles",
];
const companyList = [
  "Our Materials",
  "Shoe Care",
  "Sustainability",
  "Investors",
  "Partnerships",
  "Bulk Orders",
  "Careere",
  "Indea Tansparency ACT",
];
