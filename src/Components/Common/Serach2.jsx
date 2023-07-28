import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Searchbar() {
  const [input, setinput] = useState("");

  //   const fetchData = (value) => {
  //     fetch("https://api.escuelajs.co/api/v1/products")
  //       .then((res) => {
  //         res.json();
  //       })
  //       .then((json) => {
  //         const result = json.filter((user) => {
  //           return (
  //             value &&
  //             user &&
  //             user.title &&
  //             user.title.toLowerCase().include(value)
  //           );
  //         });
  //         console.log(result);
  //       });
  //   };

  //   // const fetchData=(value)=>{

  //   // axios
  //   //   .get("https://api.escuelajs.co/api/v1/products")
  //   //   .then((res) => res.data)
  //   //   .then((data) => {
  //   //    const results = data.filter((prdt)=>{
  //   //     return prdt && prdt.title && prdt.title.toLowerCase().includes(value)
  //   //    })
  //   //    console.log(results)
  //   //   })

  //   //   .catch((error) => console.error(error));

  //   // }
  //   const handleChange = (v) => {
  //     setinput(v);
  //     fetchData(v);
  //   };

  return (
    <div className="bg-white w-full h-10 px-4 flex items-center">
      <FontAwesomeIcon icon={faSearch} className="mr-5" />
      <input
        value={input}
        onChange={(e) => setinput(e.target.value)}
        className="bg-transparent h-full text-xl w-full ml-1 focus:outline-none"
        placeholder="search..."
      />
    </div>
  );
}

function SearchResults() {
  return (
    <div className=" w-full bg-white flex flex-col shadow-md border-2 mt-4 max-h max-h-48 overflow-scroll">
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
      <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>
        <div>a</div>

          <div>a</div>
            <div>a</div>  <div>a</div>

              <div>a</div>
                <div>a</div>
                  <div>a</div>
                  <div>a</div>
                  <div>a</div>
                  <div>a</div>

                    <div>a</div>v
    </div>
  );
}

function Serach2() {
  return (
    <div className="bg-white h-100v w-full ">
      <div className="p-20 w-2/5 m-auto flex flex-col items-center min-w-0 ">
        <Searchbar />
        <SearchResults />
      </div>
    </div>
  );
}

export default Serach2;
