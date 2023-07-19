import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBagShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  return (
    <nav className="flex justify-between px-10 py-4">
      <div className="flex ">
        <div className="mr-20 ">
          <h1>souldemy</h1>
        </div>
        <ul className="flex">
          <li className="mr-5 hover:">Shop</li>
          <li className="mr-5">About us</li>
          <li className="mr-5">Blog</li>
        </ul>
      </div>
      <div>
        <FontAwesomeIcon icon={faSearch} className="mr-5" />
        <FontAwesomeIcon icon={faBagShopping} className="mr-5" />
        <FontAwesomeIcon icon={faBars} className="mr-5" />
      </div>
    </nav>
  );
}

export default Navbar;
