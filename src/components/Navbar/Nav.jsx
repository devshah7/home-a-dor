"use client";

import navLinks from "@/constant/navLinks";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="bg-white shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link href="./">
              <h1 className="text-2xl font-serif font-bold text-gray-900">
                HOME A D'OR
              </h1>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden sm:flex space-x-8">
              {navLinks.map((link) => {
                return (
                  <Link
                    href={link.url}
                    key={link.id}
                    className="text-gray-700 hover:text-gray-900"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Burger Menu Button */}
            <button
              className="sm:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="sm:hidden absolute top-16 inset-x-0 bg-white shadow-lg border-t border-gray-100"
            >
              <div className="px-4 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => {
                  return (
                    <Link
                      href={link.url}
                      key={link.id}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      onClick={toggleMenu}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Nav;
