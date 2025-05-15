import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      {/* Footer */}

      <footer className="bg-gray-900 text-white py-12">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-serif font-bold mb-4">HOME A D'OR</h3>
              <p className="text-gray-400">Where creativity meets elegance</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="text-gray-400 hover:text-white"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <Link href="mailto:dhirjain19@gmail.com" target="_blank"><p className="text-gray-400">Email: dhirjain19@gmail.com</p></Link> 
              <Link href="https://www.instagram.com/home_a_dor/" target="_blank"><p className="text-gray-400">Instagram: @home_a_dor</p></Link> 
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
