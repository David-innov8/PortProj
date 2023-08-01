import React, { useEffect, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";

function ApiTest() {

  const { isLoading, data } = useQuery('products');

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
