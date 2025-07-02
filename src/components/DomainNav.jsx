import React from "react";

function DomainNav({ navItems }) {
  return (
    // Navigation bar with horizontal scrolling
    <nav className="bg-white z-50 border-b overflow-x-auto whitespace-nowrap py-3 px-4 sm:px-8 font-rubik scrollbar-hide">
      <ul className="flex justify-start sm:justify-center items-center gap-4 sm:gap-6 text-sm sm:text-base max-w-full scroll-smooth snap-x">
        {navItems.map((item, index) => (
          <li key={index} className="snap-start">
            <a
              href={`#${item.id}`}
              className="block text-black hover:text-white hover:bg-themeColor px-4 py-2 rounded-md transition-colors duration-100"
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
