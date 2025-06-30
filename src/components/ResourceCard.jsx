import React from "react";
import Button from "./button";
function ResourceCard(props) {
  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-black">{props.title}</h3>
      <p className="text-gray-600 text-sm mt-1">{props.desc}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {props.tags.map(function (tag, i) {
          return (
            <span
              key={i}
              className="bg-lblue text-themeColor px-3 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          );
        })}
      </div>
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 bg-themeColor text-white py-2 px-3 rounded-lg text-sm text-center"
      >
        Visit Resource
      </a>
    </div>
  );
}

export default ResourceCard;
