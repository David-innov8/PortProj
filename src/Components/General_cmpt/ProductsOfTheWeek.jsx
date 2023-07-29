import React from "react";

// import Card from './Card'
const List = [
  {
    id: 1,
    url: "https://i.postimg.cc/L59Dydwh/Product-Img1.png",
    name: "Pot",
    price: "233$",
  },
  {
    id: 2,
    url: "https://i.postimg.cc/50yyV4K0/Lamp.png ",
    name: "Lamp",
    price: "100$",
  },
  {
    id: 3,
    url: "https://i.postimg.cc/0NwMM2dB/Chair.png ",
    name: "Chaire",
    price: "400$",
  },
];

console.log(List[1].name);

const ProductsOfTheWeek = () => {
  return (
    <div className=" h-100v py-5 ">
      <div className="  pt-">
        <h1 className="text-center font-bold text-3xl">PRODUCT OF THE WEEK</h1>
        <p className="text-center py-8 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
          <br /> dolor odio odio malesuada at condimentum adipiscing iaculis{" "}
          <br /> semper.
        </p>
      </div>

      <div className=" grid grid-cols-3 px-28">
        {List.map((list) => (
          <div key={list.id} className=" w-80">
            <div className="relative h-80 w-92">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={list.url}
                alt={list.name}
                loading="lazy"
              />
            </div>

            <h1 className="text-center text-sm font-bold">{list.name}</h1>
            <p className="text-center text-xs">{list.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsOfTheWeek;
