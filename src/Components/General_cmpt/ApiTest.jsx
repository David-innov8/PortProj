import React, { useEffect, useState } from "react";
import axios from "axios";
import { ClipLoader } from "react-spinners";

function ApiTest() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products?offset=0&limit=100")
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
              {prdt.title}
              {prdt.price}
              {prdt.description}
              <img src={prdt.category.image} alt="" />
            </li>
          ))}
        </div>
      )}
    </section>
  );
}

export default ApiTest;
