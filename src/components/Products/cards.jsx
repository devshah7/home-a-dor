import React from "react";
import vase1 from "./../../../public/images/vase/vase1.jpeg";
import vase2 from "./../../../public/images/vase/vase2.jpeg";
import vase3 from "./../../../public/images/vase/vase3.jpeg";
import vase4 from "./../../../public/images/vase/vase4.jpeg";
import Card from "./card";
import Image from "next/image";

const Cards = () => {
  return (
    <div className="mx-20 my-10 text-center grid grid-cols-4 gap-10">
      <Card Img={<Image placeholder="blur" src={vase1} alt="Vase" />} />
      <Card Img={<Image placeholder="blur" src={vase2} alt="Vase" />} />
      <Card Img={<Image placeholder="blur" src={vase3} alt="Vase" />} />
      <Card Img={<Image placeholder="blur" src={vase4} alt="Vase" />} />
    </div>
  );
};

export default Cards;
