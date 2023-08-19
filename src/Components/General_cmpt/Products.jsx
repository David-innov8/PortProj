import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, selectData } from "../../Redux/Reducers/fetchSlice";
import { ClipLoader } from "react-spinners";

import { Link, useNavigate, useLocation } from "react-router-dom";
import rangeSlider from "range-slider-input";
import 'range-slider-input/dist/style.css';
import PriceSlider from "./PriceSlider";
function Products() {
  const history = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const data = useSelector(selectData);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [priceRange, setPriceRange] = useState([0, 15000]);

  console.log(location);
  const totalength = data.length;
  const pageSize = 12;
  const Pages = Math.floor(totalength / pageSize);

  const goToPrev = () => {
    const prevPage = Math.max(currentPage - 1, 1);
    setCurrentPage(prevPage);
  };

  const goToNext = () => {
    const nextPage = Math.min(currentPage + 1, Pages);
    setCurrentPage(nextPage);
  };
  const start = pageSize * (currentPage - 1);
  const end = pageSize * currentPage;
  const PScreen = data.slice(start, end);
  const canGoPrev = currentPage === 1;
  const canGoNext = currentPage === Pages;

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  

  const p = PScreen.map((prdt) => (
    <>
      {data.loading ? (
        <ClipLoader />
      ) : (
        <div className=" w-[250px]  rounded">
          <div key={prdt.id} className=" px-4 text-center ">
            <Link to={`/cart/${prdt.id}`}>
              <img
                className="h-[226px] object-cover "
                src={prdt.category.image}
                alt=""
              />
              <p className=" font-bold text-base  mt-1 p-[10px] leading-[1] py-auto flex items-center justify-center w-full whitespace-normal ">
                {" "}
                {prdt.title}
              </p>
              <p className=" font-normal text-base p-[5px] flex justify-center items-center">
                {" "}
                $ {prdt.price}
              </p>
            </Link>
          </div>
        </div>
      )}
    </>
  ));

  return (
    <div>
      <div className="flex justify-between py-3">
        <p className="">
          Showing {currentPage} of {Pages}
        </p>
       

        <div className="pr-10">
      
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="">Sort by</option>
            <option value="price">Price</option>
            <option value="category">Type</option>
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Order</option>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-y-2">{p}</div>
      <button
        className=" bg-green-400 p-2 text-4xl"
        disabled={canGoPrev}
        onClick={goToPrev}
      >
        {"<"}
      </button>
      <button
        className=" bg-green-400 p-2 text-4xl"
        disabled={canGoNext}
        onClick={goToNext}
      >
        {">"}
      </button>
    </div>
  );
}

export default Products;
