import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [product, setProduct] = useState([]);
  const [isExpanded , setIsExpanded] = useState(false)
  const inputRef = useRef(null);



  // const handleSearchIconClick = () => {
  //   inputRef.current.focus();
  // };
  // since the api doesnt have a search query, ill filter throught the api product all at once

  //get data
  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        setProduct(res.data);
        console.log(("product loaded", res.data));
      })

      .catch((error) => console.error(error));
  }, []);

  // filter the product based on related input

  const handleSearch = () => {
    const filteredProducts = product.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResult(filteredProducts);
  };

  console.log(isExpanded)
  // on type product sugestion
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchQuery(inputValue);

    const filteredProducts = product.filter((product) =>
      product.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSearchResult(filteredProducts);
  };

   const w = 48
  return (
    <div className="flex  w-40">
      <div className= {`group w-${w}  h-8 flex cursor-pointer py-1 px-4  rounded bg-white justify-center items-center transition-all`}>
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder=""
          className=" outline-none border h-full  bg-transparent font-thin"
        />
        <Link  onClick={()=> {setIsExpanded(!isExpanded)
          console.log(isExpanded)
        }}>
          <FontAwesomeIcon icon={faSearch} className="" />
        </Link>
      </div>
{/* 
     {
      <div className=" w-full bg-white flex flex-col shadow-md border-2 mt-4 max-h max-h-48 overflow-scroll">
        
       {
          searchResult.length > 0 ?(
            searchResult.map((e)=>(
              <div>
              <h2>{e.title}</h2>
              <p>{e.desciption}</p>
            </div>
            ))
          ): (
            <p>Products not found</p>
          )
       }


        </div>
     } */}
      
     </div>
  )


}
export default Search;
