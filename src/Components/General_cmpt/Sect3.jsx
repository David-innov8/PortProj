import React from "react";
import Bck1 from "../Assets/Rectangle-8.png";
import Bck2 from "../Assets/Rectangle-10.png";
// import Bck3 from '../Assets/Vector.png'

// import Elipse from '../Assets/Elipse.jpg'
// import Button from './Button'

const Sect3 = () => {
  return (
    <div className="h-screen py-7">
      <div
        className="  h-1/3 bg-cover bg-center  flex justify-end items-center pr-8 "
        style={{ backgroundImage: `url(${Bck1})` }}
      >
        <div className=" w-60 py-2">
          <p className="text-xs text-center text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            dolor odio odio malesuada at condimentum adipiscing iaculis semper.
          </p>

          <div className="flex justify-center py-2">
            <div className="flex justify-center w-28 border ">
              <button className="text-white text-xs hover:bg-gray-200 w-full hover:text-black hover:opacity-60 py-2">
                {" "}
                View more {" >"}{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="  h-2/3 bg-cover bg-center  "
        style={{ backgroundImage: `url(${Bck2})` }}
      ></div>
    </div>
  );
};

export default Sect3;
