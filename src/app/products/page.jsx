"use client";

import { useState } from "react";
import Cards from "@/components/Products/cards";
import Categories from "@/components/Products/categories";
import React from "react";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    console.log("Selected category:", category);
    // Add logic to filter products based on the selected category
  };

  return (
    <div className="py-10 bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen flex flex-col justify-center">
      <h1 className="text-3xl sm:text-4xl font-serif font-bold text-center mb-5 text-gray-800">
        Explore Our Products
      </h1>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <Categories onCategorySelect={handleCategorySelect} />
        <Cards selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default Products;
