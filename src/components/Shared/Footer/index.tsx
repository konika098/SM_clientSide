import { navItems } from "@/utils/data";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div>
          <h1>Style Mela</h1>
          <p>(319) 555-0115</p>
          <p>info@beauty.com</p>
          <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
          <h1>We Are Looking Forward To Your Visit!</h1>
          <hr />

          <ul className="flex space-x-8">
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
        <div>
            <h1>©2023 Beauty All Rights are reserved️ </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
