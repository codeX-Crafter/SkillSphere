import React from "react";

function Button({ text, className }) {
  return (
    <div>
      <button
        className={`rounded-[30px] border-none bg-themeColor text-white py-2 text-sm md:text-base font-semibold w-full md:w-auto ${className}`}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
