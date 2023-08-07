import React from "react";
import BorderButton from "../button/BorderButton";
import Link from "next/link";

const BottomJoingCard = () => {
  return (
    <div className="flex justify-center mt-24 bg-[#F8F7F5]">
      <div className="m-3 lg:w-[760px] w-[70%] text-center my-10">
        <h2 className="lg:text-[32px] text-[25px] font-bold mb-10">
          Want First Dibs?
        </h2>
        <p className="text-[16px] font-normal line-clamp-3">
          Join our email list and be the first to know about new limited edition
          products, material innovations, and lots of other fun updates.
        </p>
    
        {/* -------------------- MAIL INPUT & SUBMIT BUTTON -------------------- */}
    
          <form className="flex sm:flex-row flex-col justify-center w-full mb-2  mt-10" action={""}>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="placeholder-gray-300 placeholder:font-bold block rounded-sm bg-white w-full lg:ml-10   border-b-2 border-indigo-500 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-indigo-500 px-3 h-12 my-1 mr-2 lg:mr-2"
            />
            <BorderButton name="SIGN UP" className="h-12 my-1 lg:w-40 md:w-40 sm:w-40"/>
            {/* <button
              type="submit"
              className="rounded-sm bg-gray-400/50 hover:bg-white mr-10 hover:text-deepBlue font-medium tracking-normal h-12 my-1 lg:w-40 md:w-40 sm:w-40"
            >
              SIGN UP
            </button> */}
          </form>
          <span className="text-[13px]">Note: You can opt-out at any time. See our <Link href={"/"} className="underline font-bold">Privacy Policy</Link > and <Link href={"/"} className="underline font-bold">Terms.</Link></span>
        </div>
 
    </div>
  );
};

export default BottomJoingCard;
