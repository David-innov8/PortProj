import React, { useEffect, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

const fetchdata = async () => {
  // axios.get("").then((res) => {
  //   console.log(res.data);
  //   return res.data;
  // });

    const response = await axios.get('https://api.escuelajs.co/api/v1/products')
    return response.data
        
};
function ApiTest() {
  const { isLoading, data } = useQuery("products", fetchdata);

  return (
    <section>
      <h1>Fake Shop API response:</h1>
      {isLoading ? (
        <ClipLoader />
      ) : (
        <div>
          {data.map((prdt) => (
            <li key={prdt.id}>
              <Link to={`/cart/${prdt.id}`}>
                {prdt.title}
                {prdt.price}
                {prdt.description}

                <img src={prdt.category.image} alt="" />
              </Link>
            </li>
          ))}
        </div>
      )}
    </section>
  );
}

export default ApiTest;
