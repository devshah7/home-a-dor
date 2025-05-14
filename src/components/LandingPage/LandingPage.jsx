"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const LandingPage = () => {
  const products = [
    {
      title: "Vases",
      image: "https://placehold.co/400x300/e2e8f0/1e293b?text=Elegant+Vases",
      description: "Discover our collection of artisanal vases",
    },
    {
      title: "Mirrors",
      image: "https://placehold.co/400x300/e2e8f0/1e293b?text=Stylish+Mirrors",
      description: "Reflect your style with our curated mirrors",
    },
    {
      title: "Metal Decors",
      image: "https://placehold.co/400x300/e2e8f0/1e293b?text=Metal+Decors",
      description: "Add sophistication with metal accents",
    },
    {
      title: "Candles",
      image: "https://placehold.co/400x300/e2e8f0/1e293b?text=Luxury+Candles",
      description: "Set the mood with our premium candles",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://placehold.co/1920x600/e2e8f0/1e293b?text=Luxury+Home+Decor')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
            <div className="text-white">
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                Where Every Piece Tells a Story
              </h2>
              <p className="text-xl md:text-2xl max-w-2xl">
                Transform your space with our curated collection of timeless
                décor
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-gray-900 text-center mb-12">
            Our Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
