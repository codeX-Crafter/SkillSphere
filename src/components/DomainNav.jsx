import React from "react";

function DomainNav({ navItems }) {
  function formatId(text) {
    return text.toLowerCase().replace(/\s+/g, "-");
  }

  return (
    <nav className="bg-white z-50 border-b overflow-x-auto whitespace-nowrap py-3 px-4 sm:px-8 font-rubik">
      <ul className="flex justify-center items-center gap-4 sm:gap-6 text-sm sm:text-base">
        {navItems.map((item, index) => (
          <li key={index}>
            <a
              href={`#${item.id}`} // Directly using the given id
              className="text-black hover:text-white hover:bg-themeColor p-3 rounded-md transition-colors duration-100"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DomainNav;
