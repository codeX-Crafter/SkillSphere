import React from "react";

export default function DomainCard({ bgClass, domainName }) {
  return (
    <div
      className={`w-[225px] h-[238px] rounded-[25px] flex items-end cursor-pointer ${bgClass}`}
    >
      <p className="text-white font-rubik p-5 text-lg font-bold">
        {domainName}
      </p>
    </div>
  );
}
