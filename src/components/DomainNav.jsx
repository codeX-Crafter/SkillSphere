import React from "react";

function DomainNav(props) {
  function formatId(text) {
    return text.toLowerCase().replace(/\s+/g, "-");
  }

  return (
    <nav className="bg-white  z-50 border-b  overflow-x-auto whitespace-nowrap py-3 px-4 sm:px-8 font-rubik">
      <ul className="flex justify-center items-center gap-4 sm:gap-6 text-sm sm:text-base">
        {props.navItems.map(function (item, index) {
          return (
            <li key={index}>
              <a
                href={"#" + formatId(item)}
                className="text-black hover:text-white hover:bg-themeColor p-3 rounded-md transition-colors duration-100"
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default DomainNav;
