import React from "react";

function Button({ text }) {
  return (
    <div>
      <button className="rounded-[30px] border-none bg-themeColor text-white px-6 py-2 text-sm md:text-base font-semibold w-full md:w-auto">
        {text}
      </button>
    </div>
  );
}

export default Button;
