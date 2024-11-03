"use client";
import { navItems } from "@/utils/data";
import Link from "next/link";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Button from "../../Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo and Hamburger Icon on Small Screens */}
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu Icon */}
          <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <FiMenu className="text-2xl cursor-pointer text-green-800" />
          </div>

          {/* Logo */}
          <div className="text-2xl font-bold text-green-800">
            <h1>BEAUTY</h1>
          </div>
        </div>

        {/* Full Navigation Links on Large Screens */}
        <ul className="hidden lg:flex space-x-8">
          {navItems?.map((nav, index) => (
            <li key={index}>
              <Link
                href={nav.path}
                className="text-black hover:text-gray-600 transition-colors"
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Cart Icon, Login Button, and Icons Section */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon with Badge */}
          <div>
            <CiHeart />
          </div>
          <div>
            <CiSearch />
          </div>
          <div className="relative">
            <IoCartOutline className="text-xl cursor-pointer hover:scale-110 transition-transform" />
            <span className="absolute -top-2 -right-2 bg-green-800 text-white text-xs font-bold rounded-full px-1">
              2
            </span>
          </div>

          {/* Login Button */}
         <Button name={'Login'}/>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#F5F8F5]">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navItems?.map((nav, index) => (
              <li key={index}>
                <Link
                  href={nav.path}
                  className="text-black hover:text-gray-600 transition-colors"
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
