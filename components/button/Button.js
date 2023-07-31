import React from "react";

const Button = ({ name, onClick }) => {
  return (
    <div>
      <button
        type="submit"
        className="bg-white text-[#212A2F] w-48 py-3 mx-3 hover:bg-[#212A2F] hover:text-white rounded-sm"
        onClick={onClick}
      >
        <span className="font-bold ">{name}</span>
      </button>
    </div>
  );
};

export default Button;
