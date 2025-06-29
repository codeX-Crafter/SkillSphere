import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-[#1D2E4F] text-white font-bold fixed w-full z-50">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          {/* Logo Section  */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="text-xl">SkillSphere</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-12">
            <li className="cursor-pointer hover:text-gray-300">Home</li>
            <li className="cursor-pointer hover:text-gray-300">About</li>
            <li className="cursor-pointer hover:text-gray-300">Contact</li>
            <li className="cursor-pointer hover:text-gray-300">FAQs</li>
          </ul>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(true)}>
              <Menu size={28} />
              {/* from lucide-react */}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Slide-In Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-themeColor text-white z-50 transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X size={28} />
          </button>
        </div>
        <ul className="flex flex-col gap-6 p-6 font-medium text-lg">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer">FAQs</li>
        </ul>
      </div>

      {/* Optional Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
