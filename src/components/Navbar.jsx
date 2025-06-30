import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false); // controls rendering

  const openMenu = () => {
    setIsRendered(true);
    setTimeout(() => setIsOpen(true), 300); // allow time for transition to kick in
  };

  const closeMenu = () => {
    setIsOpen(false);
    setTimeout(() => setIsRendered(false), 300); // matches transition duration
  };

  return (
    <>
      <header className="bg-[#1D2E4F] text-white font-bold fixed w-full z-50">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-xl">SkillSphere</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-16">
            <Link to="/">
              <li className="cursor-pointer hover:text-gray-300">Home</li>
            </Link>
            <Link to="/About">
              <li className="cursor-pointer hover:text-gray-300">About</li>
            </Link>
            <HashLink smooth to="/#faq">
              <li className="cursor-pointer hover:text-gray-300">FAQs</li>
            </HashLink>
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={openMenu}>
              <Menu size={28} />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu & Backdrop */}
      {isRendered && (
        <>
          {/* Slide-in Menu */}
          <div
            className={`fixed top-0 right-0 h-full w-3/4 bg-themeColor text-white z-50 transition-transform duration-300 ease-in-out md:hidden ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end p-4">
              <button onClick={closeMenu}>
                <X size={28} />
              </button>
            </div>
            <ul className="flex flex-col gap-6 p-6 font-medium text-lg">
              <Link to="/">
                <li className="cursor-pointer" onClick={closeMenu}>
                  Home
                </li>
              </Link>
              <Link to="/About">
                <li className="cursor-pointer" onClick={closeMenu}>
                  About
                </li>
              </Link>
              <HashLink smooth to="/#faq">
                <li className="cursor-pointer" onClick={closeMenu}>
                  FAQs
                </li>
              </HashLink>
            </ul>
          </div>

          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeMenu}
          ></div>
        </>
      )}
    </>
  );
}
