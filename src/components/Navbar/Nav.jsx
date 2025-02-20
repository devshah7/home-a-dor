import navLinks from "@/constant/navLinks";
import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <div className="w-full transition-all duration-200 h-[12vh] z-[1000]">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Link href="./">
          <h1 className="text-xl md:text-2xl font-bold">HOME A D'OR</h1>
        </Link>

        {/* Navlinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => {
            return (
              <Link href={link.url} key={link.id}>
                <p className="nav__link">{link.label}</p>
              </Link>
            );
          })}
        </div>
        {/* Burger menu */}
        <div className="menu-button-container">
          <div className="menu-button" id="menu-toggle"></div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
