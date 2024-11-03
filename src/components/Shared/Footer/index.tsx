import { navItems } from "@/utils/data";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer bg-primary_clr pt-20">
      <div className="container">
        <div className="text-center text-white">
          <h1 className="text-5xl">Style Mela</h1>
          <div className="text-base my-8">
            <p>(319) 555-0115</p>
            <p className="my-2">info@beauty.com</p>
            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
          </div>
          <h1 className="text-5xl mb-6">We Are Looking <br /> Forward To Your Visit!</h1>
          <hr className="max-w-[450px] mx-auto" />

          <ul className="flex gap-8 my-8 justify-center mx-auto">
            {navItems?.map((nav, index) => (
              <li key={index}>
                <Link
                  href={nav.path}
                  className="text-white text-base"
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="pb-10 flex justify-between text-white text-base">
          <h1 className="">© {new Date().getFullYear()}  Style Mela All Rights are reserved️ </h1>
          <div className="flex gap-2">
          <Link href="https://www.facebook.com/stylemela.bd"><FaFacebookF/></Link>
          <Link href=""><FaInstagram /></Link>
          <Link href=""><FaTiktok /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
