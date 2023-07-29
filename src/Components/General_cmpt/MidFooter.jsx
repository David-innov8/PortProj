import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

const MidFooter = () => {
  const List = [
    {
      img: faClock,
      title: "Shop online",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio",
    },
    {
      img: faShoppingBag,
      title: "Free shipping",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio",
    },
    {
      img: faWallet,
      title: "Return policy",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio",
    },
    {
      img: faDollarSign,
      title: "PAYMENT",
      p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat dolor odio odio",
    },
  ];

  return (
    <div className="h-30v  grid grid-cols-4 mx-auto gap-10 place-items-center px-20 ">
      {List.map((item) => (
        <div key={item.p} className="">
          <div className="flex items-center mb-3 ">
            <FontAwesomeIcon icon={item.img} className="h-7  " />
            <h1 className="pl-5 text-2xl font-bold">{item.title}</h1>
          </div>

          <p className="text-base">{item.p}</p>
        </div>
      ))}
    </div>
  );
};

export default MidFooter;
