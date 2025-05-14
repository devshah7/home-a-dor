import React from "react";

const Card = ({ Img, title, description, price }) => {
  return (
    <div className="border-[3px] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="p-3">{Img}</div>
      <div className="m-1 text-xl font-semibold text-gray-800">{title}</div>
      <div className="m-1 text-md font-light text-gray-600">{description}</div>
      <div className="m-2 text-2xl font-medium text-gray-900">{price}</div>
    </div>
  );
};

export default Card;
