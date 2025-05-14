import React from "react";
import vase1 from "./../../../public/images/vase/vase1.jpeg";
import vase2 from "./../../../public/images/vase/vase2.jpeg";
import vase3 from "./../../../public/images/vase/vase3.jpeg";
import vase4 from "./../../../public/images/vase/vase4.jpeg";
import vase5 from "./../../../public/images/vase/vase5.jpeg";
import vase6 from "./../../../public/images/vase/vase6.jpeg";
import vase7 from "./../../../public/images/vase/vase7.jpeg";
import vase8 from "./../../../public/images/vase/vase8.jpeg";
import mirror1 from "./../../../public/images/vase/vase9.jpeg";
import mirror2 from "./../../../public/images/vase/vase10.jpeg";
import mirror3 from "./../../../public/images/vase/vase11.jpeg";
import mirror4 from "./../../../public/images/vase/vase12.jpeg";
import decor1 from "./../../../public/images/vase/vase13.jpeg";
import decor2 from "./../../../public/images/vase/vase14.jpeg";
import candle1 from "./../../../public/images/vase/vase15.jpeg";
import candle2 from "./../../../public/images/vase/vase16.jpeg";
import Card from "./card";
import Image from "next/image";

const Cards = ({ selectedCategory }) => {
  const products = [
    {
      Img: vase1,
      title: "Elegant Vase",
      description: "A timeless piece for your living room.",
      price: "$120",
      category: "Vases",
    },
    {
      Img: vase2,
      title: "Modern Vase",
      description: "Perfect for contemporary spaces.",
      price: "$150",
      category: "Vases",
    },
    {
      Img: vase3,
      title: "Classic Vase",
      description: "Adds a touch of tradition.",
      price: "$100",
      category: "Vases",
    },
    {
      Img: vase4,
      title: "Artistic Vase",
      description: "A unique design for art lovers.",
      price: "$200",
      category: "Vases",
    },
    {
      Img: vase5,
      title: "Rustic Vase",
      description: "Ideal for farmhouse decor.",
      price: "$130",
      category: "Vases",
    },
    {
      Img: vase6,
      title: "Minimalist Vase",
      description: "Sleek and simple design.",
      price: "$110",
      category: "Vases",
    },
    {
      Img: vase7,
      title: "Floral Vase",
      description: "Perfect for fresh flowers.",
      price: "$140",
      category: "Vases",
    },
    {
      Img: vase8,
      title: "Luxury Vase",
      description: "Adds elegance to any room.",
      price: "$250",
      category: "Vases",
    },
    {
      Img: mirror1,
      title: "Round Mirror",
      description: "A stylish addition to your wall.",
      price: "$300",
      category: "Mirrors",
    },
    {
      Img: mirror2,
      title: "Vintage Mirror",
      description: "Brings a classic touch.",
      price: "$350",
      category: "Mirrors",
    },
    {
      Img: mirror3,
      title: "Framed Mirror",
      description: "Elegant and functional.",
      price: "$400",
      category: "Mirrors",
    },
    {
      Img: mirror4,
      title: "Decorative Mirror",
      description: "Enhances your room's aesthetics.",
      price: "$450",
      category: "Mirrors",
    },
    {
      Img: decor1,
      title: "Metal Wall Art",
      description: "A bold statement piece.",
      price: "$500",
      category: "Metal Decors",
    },
    {
      Img: decor2,
      title: "Abstract Sculpture",
      description: "Perfect for modern interiors.",
      price: "$600",
      category: "Metal Decors",
    },
    {
      Img: candle1,
      title: "Scented Candle",
      description: "Creates a relaxing ambiance.",
      price: "$50",
      category: "Candles",
    },
    {
      Img: candle2,
      title: "Decorative Candle",
      description: "Adds charm to your decor.",
      price: "$60",
      category: "Candles",
    },
  ];

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="mx-20 my-10 text-center grid grid-cols-4 gap-10">
      {filteredProducts.map((product, index) => (
        <Card
          key={index}
          Img={
            <Image placeholder="blur" src={product.Img} alt={product.title} />
          }
          title={product.title}
          description={product.description}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Cards;
