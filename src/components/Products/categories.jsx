import React from "react";
import Category from "./category";
import prodCat from "@/constant/prodCat";
import Image from "next/image";
// import vase1 from "../../public/images/vase/vase1.jpeg"

const Categories = () => {
  return (
    <div className="mt-5 mb-5">
      {/* Categories */}
      <div className="flex flex-wrap gap-4 justify-evenly">
        {prodCat.map((cat, id) => {
          return <Category key={id} element={cat} />;
        })}
      </div>
    </div>
  );
};

export default Categories;
