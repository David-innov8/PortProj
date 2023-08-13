import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, selectData } from "../../Redux/Reducers/fetchSlice";
import { ClipLoader } from "react-spinners";

import { Link } from "react-router-dom";


function Products() {
  const dispatch = useDispatch();
  const data = useSelector(selectData);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const p = data.map((prdt) => (
    <section>
      <h1>Fake Shop API response:</h1>
      {data.loading ? (
        <ClipLoader />
      ) : (
        <div>
           <li key={prdt.id}>
      <Link to={`/cart/${prdt.id}`}>
        {prdt.title}
        {prdt.price}
        {prdt.description}

        <img src={prdt.category.image} alt="" />
      </Link>
    </li>
        </div>
      )}
    </section>
  ))

  console.log(data)
  return (
    <div>
      <h1>dsjhfs</h1>
      {p}
    </div>
  );
}

export default Products;
