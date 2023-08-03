import React from "react";

const BorderButton = ({ name, onClick, className }) => {
  return (
    <>
      <button
        type="submit"
        // sm:w-52
        className={` hover:text-[#212A2F]  sw:py-[14px] py-[10px]  px-3 hover:bg-transparent bg-[#212A2F] text-white border-2 border-[#212A2F] transition duration-200 rounded-sm ${className}`}
        onClick={() => onClick}
      >
        <span className={`font-bold text-xs sm:text-[16px] tracking-[0.8px]  `}>{name}</span>
      </button>
    </>
  );
};

export default BorderButton;
