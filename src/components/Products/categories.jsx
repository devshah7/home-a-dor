"use client";

import React, { useState } from "react";
import Category from "./category";
import prodCat from "@/constant/prodCat";

const Categories = ({ onCategorySelect }) => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onCategorySelect(category);
  };

  return (
    <div className="mt-2 mb-2">
      <div className="flex flex-wrap gap-2 sm:gap-4 justify-evenly sm:justify-center">
        {prodCat.map((cat, id) => (
          <Category
            key={id}
            element={cat}
            isActive={activeCategory === cat}
            onClick={() => handleCategoryClick(cat)}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
