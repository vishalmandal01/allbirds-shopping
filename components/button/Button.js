import React from "react";

const Button = ({ name, onClick }) => {
  return (
    <div>
      <button
        type="submit"
        className={`transition duration-300 bg-white text-[#212A2F] sm:w-52 sw:py-[14px] py-[10px] w-36 mx-3 hover:bg-[#212A2F] hover:text-white rounded-sm `}
        onClick={()=>onClick}
        
      >
        <span className={`font-bold text-xs sm:text-sm `}>{name}</span>
      </button>
    </div>
  );
};

export default Button;
