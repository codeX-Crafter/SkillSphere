import React from "react";
import { CalendarDays } from "lucide-react";

export default function SocietyCard({
  imageSrc,
  societyName,
  status,
  statusColor,
}) {
  return (
    <div className="w-[85vw] max-w-xs rounded-2xl bg-lblue p-6 shadow-md flex flex-col items-center space-y-3 text-center">
      <img
        src={imageSrc}
        alt={societyName}
        className="w-28 h-28 object-cover rounded-full shadow-sm"
      />
      <h2 className="text-xl font-bold text-gray-800">{societyName}</h2>
      <div className="flex items-center gap-2 text-sm text-themeColor font-medium">
        <span className={`w-3 h-3 ${statusColor} rounded-full animate-pulse`} />
        {status}
      </div>
      <div className="w-full flex flex-col gap-3 pt-2">
        <button className="bg-themeColor hover:bg-blue-800 text-white rounded-xl py-2 font-semibold transition">
          Know More
        </button>
        <button className="bg-white hover:bg-blue-50 text-themeColor border border-themeColor rounded-xl py-2 font-semibold transition">
          Enroll Now
        </button>
      </div>
    </div>
  );
}
