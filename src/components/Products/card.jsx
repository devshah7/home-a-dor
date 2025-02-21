import React from "react";

const Card = ({ Img }) => {
  return (
    <div className="border-[3px]">
      <div className="p-3">{Img}</div>
      <div className="m-1 text-xl font-normal" >Vase</div>
      <div className="m-1 text-md font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </div>
      <div className="m-2 text-2xl font-medium">$1500</div>
    </div>
  );
};

export default Card;
