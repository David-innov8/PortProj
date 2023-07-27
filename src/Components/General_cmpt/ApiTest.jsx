import React, { useEffect, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
function ApiTest() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);



  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products?offset=0&limit=10")
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
        console.log(("product loaded", res.data));
      })

      .catch((error) => console.error(error));
  }, []);

  return (
    <section>
      <h1>Fake Shop API response:</h1>
      {loading ? (
        <ClipLoader />
      ) : (
        <div>
          {product.map((prdt) => (
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
