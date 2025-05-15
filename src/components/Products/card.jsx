import React from "react";

const Card = ({ Img, title, description, price }) => {
  return (
    <div className="border-[2px] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mx-auto max-w-[45%] sm:max-w-[30%] md:max-w-[22%] lg:max-w-[22%] flex flex-col">
      <div className="p-2">{Img}</div>
      <div className="m-1 text-base sm:text-lg font-semibold text-gray-800">
        {title}
      </div>
      <div className="m-1 text-sm sm:text-base font-light text-gray-600">
        {description}
      </div>
      <div className="m-2 text-lg sm:text-xl font-medium text-gray-900">
        {price}
      </div>
    </div>
  );
};

export default Card;
