"use client";

import navLinks from "@/constant/navLinks";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "../../../public/images/homeador_logo.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="bg-white shadow-sm relative z-50 h-16 sm:h-20 md:h-24 flex items-center">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center h-full">
            {/* Logo */}
            <div className="flex items-center w-1/6">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Home A D'or Logo"
                  className="w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24"
                />
              </Link>
            </div>

            {/* Company Name and Subtitle */}
            <div className="text-center w-2/3">
              <Link href="/">
                <h1 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-serif font-extrabold text-gray-900">
                  HOME A D'OR
                </h1>
              </Link>
              <p className="hidden sm:block text-[10px] sm:text-xs md:text-base italic text-gray-600">
                where every piece of décor tells a story
              </p>
            </div>

            {/* Burger Menu Button */}
            <div className="flex justify-end w-1/6">
              <button
                className="p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-0"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                <motion.svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: isMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {isMenuOpen ? (
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  ) : (
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}
                </motion.svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white z-40 flex items-center justify-center"
          >
            <div className="space-y-4 text-center">
              {navLinks.map((link) => (
                <Link
                  href={link.url}
                  key={link.id}
                  className="block text-sm sm:text-base md:text-xl font-medium text-gray-700 hover:text-gray-900"
                  onClick={toggleMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
