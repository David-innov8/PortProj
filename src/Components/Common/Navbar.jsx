import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBagShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Search from "./Search";

function Ull(props) {
  return (
    <li className="mr-5 cursor-pointer">
      <p className=" relative group">
        <span className="text-base font-bold">
          <Link to={props.link}> {props.name}</Link>
        </span>
        <span className="absolute -bottom-1 left-1/2 w-0 h-72 bg-blue-400 group-hover:w-1/2 group-hover:transition-all"></span>
        <span className="absolute -bottom-1 right-1/2 w-0 h-72 bg-blue-400 group-hover:w-1/2 group-hover:transition-all"></span>
      </p>
    </li>
  );
}

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    setShowSearch(true);
  };

  const handleCloseClick = () => {
    setShowSearch(false);
  };

  return (
    <nav className="flex justify-between px-10 py-4 items-center mx-auto bg-transparent">
      <div className="flex items-center ">
        <div className="mr-20 cursor-pointer ">
          <h1 className="text-xl font-bold">
            <Link to="/"> souldemy </Link>
          </h1>
        </div>
        <ul className="flex">
          <Ull name="Shop" link="/shop" />
          <Ull name="About Us" />
          <Ull name="Blog" />
        </ul>
      </div>
      <div className="cursor-pointer flex items-center justify-between">
        {/* <Search /> */}
        <FontAwesomeIcon icon={faBagShopping} className="mr-5" />
        <FontAwesomeIcon icon={faBars} className="mr-5" />
      </div>
    </nav>
  );
}

export default Navbar;
