"use client";
import { navItems } from "@/utils/data";
import Link from "next/link";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Button from "../../Button";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo and Hamburger Icon on Small Screens */}
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu Icon */}
          <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <FiMenu className="text-2xl cursor-pointer text-primary_clr" />
          </div>

          {/* Logo */}
          <div className="text-2xl font-bold text-primary_clr">
            <h1>Style Mela</h1>
          </div>
        </div>
        <ul className="hidden lg:flex space-x-8">
          {navItems?.map((nav, index) => (
            <li key={index}>
              <Link
                href={nav.path}
                className={`transition-colors text-lg ${
                  pathname === nav.path
                    ? "text-primary_clr font-bold" 
                    : "text-secondary_clr"
                }`}
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4 text-xl">
          <div>
            <CiHeart />
          </div>
          <div>
            <CiSearch />
          </div>
          <div className="relative">
            <IoCartOutline className="cursor-pointer hover:scale-110 transition-transform" />
            <span className="absolute -top-2 -right-2 bg-primary_clr text-white text-xs font-bold rounded-full px-1">
              2
            </span>
          </div>

          {/* Login Button */}
          <Button name="Login" />
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
                  className={`transition-colors ${
                    pathname === nav.path
                      ? "text-primary_clr font-bold" 
                      : "text-secondary_clr hover:text-third_clr"
                  }`}
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
