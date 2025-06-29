import React from "react";

function Features({ image, bgColor, head, subHead }) {
  return (
    <div className="w-[280px] sm:w-[300px] flex items-center gap-3 rounded-lg bg-[hsl(220,100%,94%)] p-2">
      {/* Icon Circle */}
      <div
        className={`w-[38px] h-[38px] rounded-full flex justify-center items-center ${bgColor}`}
      >
        <img src={image} alt={head} className="w-[25px] h-[25px]" />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-[1px]">
        <h4 className="text-[15px] font-semibold text-lg text-black">{head}</h4>
        <p className="text-[12px] font-rubik">{subHead}</p>
      </div>
    </div>
  );
}

export default Features;
