import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="grid grid-cols-4 bg-[#2B2B2B] text-white">
      <div className="  mx-auto">
        <h1>Soudemy</h1>
        <h3>About us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vitae
          congue id ipsum sed neque et dui accumsan. Nibh semper magna facilisi
          ridiculus luctus amet. Aliquam{" "}
        </p>
      </div>
      <div className="m-auto">
        <h1>Useful</h1>
        <p>Download product</p>
        <p>Download product</p>
        <p>Download product</p>
        <p>Download product</p>
        <p>Download product</p>
        <p>Download product</p>
      </div>
      <div className=" m-auto ">
        <p>
          <Link>Socials</Link>
        </p>
        <p>instagram</p>
        <p>facebook</p>
        <p>Twitter</p>
        <p>printeress</p>
        <p>youtube</p>
      </div>

      <div className=" m-auto">
        <h2>Call center</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vitae{" "}
        </p>
        <p>davidowolabi899@gmail.com</p>
        <p>+23407067871512</p>
      </div>
    </footer>
  );
}

export default Footer;
