import React from "react";
import Navbar from "../Common/Navbar";
import BckImg from "../Assets/home.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Button from "../Common/Button";

function Home() {
  return (
    <div
      className=" h-100v bg-cover bg-center opacity-75 mb-5"
      style={{ backgroundImage: `url(${BckImg})` }}
    >
      <Navbar />

      <div className="pt-20 flex justify-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center text-4xl font-bold text-white ">
            All for your home{" "}
            <FontAwesomeIcon
              className="animate-pulse h-5"
              fontSize="20px"
              icon={faHome}
            />
          </h1>
          <p className="p-5 text-center font-normal text-base text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Consequat dolor odio odio malesuada at condimentum <br />
            adipiscing iaculis semper.
          </p>

          <Button />
        </div>
      </div>
    </div>
  );
}

export default Home;
