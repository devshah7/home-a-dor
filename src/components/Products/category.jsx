import React from "react";

const Category = ({ element, isActive, onClick }) => {
  return (
    <div
      className={`px-3 sm:px-6 py-2 border-2 rounded-lg cursor-pointer text-xs sm:text-base ${
        isActive ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
      onClick={onClick}
    >
      {element}
    </div>
  );
};

export default Category;
