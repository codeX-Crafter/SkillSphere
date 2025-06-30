import React from "react";

import HeadSub from "../components/HeadSub";

function DomainTop({ domain, description, png }) {
  return (
    <div className="w-full bg-lblue pt-16 md:pt-1 pb-1 px-4 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-1">
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <HeadSub headSp1={domain} subSp1={description} />
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 max-w-sm">
          <img src={png} alt={domain} className="w-full object-contain" />
        </div>
      </div>
    </div>
  );
}

export default DomainTop;
