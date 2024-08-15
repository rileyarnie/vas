import React from "react";

const Button: React.FC<{ text: string }> = ({ text }) => {
  return (
    <button className=" bg-gradient-to-r from-black to-[#FF0000] px-4 py-1 rounded-full outline-white outline outline-1 text-xs text-red-400 ">
      {text}
    </button>
  );
};

export default Button;
