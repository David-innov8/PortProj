import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch
} from "@fortawesome/free-solid-svg-icons";
function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [product, setProduct] = useState([]);

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

  // on type product sugestion
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setSearchQuery(inputValue);

    const filteredProducts = product.filter((product) =>
      product.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSearchResult(filteredProducts);
  };

  return (
    <div className="flex items-center border rounded p-2">
      <div className = "mr-2">
      <FontAwesomeIcon icon={faSearch} className="mr-5" />
    </div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="enter product name"
        className="focus:outline-none"
      />

      

      {searchResult.length > 0 ? (
        searchResult.map((e) => (
          <Link key={e.id} to={`/cart/${e.id}`}>
            <div>
              <h2>{e.title}</h2>
              <p>{e.desciption}</p>
            </div>
          </Link>
        ))
      ) : (
        <p>No Products found</p>
      )}
    </div>
  );
}

export default Search;
