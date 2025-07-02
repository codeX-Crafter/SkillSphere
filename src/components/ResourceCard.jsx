import React from "react";
import Button from "./Button";
function ResourceCard({ title, desc, tags, link }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-black">{title}</h3>
      <p className="text-gray-600 text-sm mt-1">{desc}</p>
      {/* // Container for the tags */}
      <div className="flex flex-wrap gap-2 mt-3">
        {/* Loop through each tag in the 'tags' array */}
        {tags.map((tag, index) => (
          // Each tag is rendered inside a <span> element
          <span
            key={index} // Unique key to keep track of elements
            className="bg-lblue text-themeColor px-3 py-1 rounded-full text-xs font-rubik"
          >
            {tag} {/* Show the actual tag text */}
          </span>
        ))}
      </div>
      {/* Button to visit the resource */}
      <a
        href={link}
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
