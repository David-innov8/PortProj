import React, { useState, useEffect } from "react";
import Navbar from "../Common/Navbar";
import Img from "../Assets/Rectangle 20.svg";
import { Link, useParams, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import StarRatings from "react-star-ratings";
import RelatedPrdt from "./RelatedPrdt";
import { useQuery } from "react-query";
import { fetchProductById } from "../Auth/Api";

function Cart() {

  // for the counter and liked
  const [count, setCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const Decrease = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
      console.log(count);
    }
  };

  const Increase = () => {
    setCount(count + 1);
    console.log(count);
  };

  // Click event handler to toggle the heart's color
  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  // using params with react query

  const { id } = useParams();
  const { data, isLoading, isError } = useQuery(["products", id], () =>
    fetchProductById(id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching data</div>;
  }

  if (!data) {
    return <div>Product not Found</div>;
  }
  if (isLoading) {
    return <div>Loading..fgdggd.</div>;
  }

  
  return (
    <section className=" ">
      <Navbar />

      <div className=" px-9 flex-1 flex h-100v w-full text-[#978E8E]">
        <div className="left h-full flex w-1/2">
          <div className="w-1/3 h-full flex flex-col justify-between ">
            {data.images.map((e, index) => (
              <div className=" aspect-h-1">
                <img
                  key={index}
                  src={e}
                  alt=""
                  className="object-contain  w-full h-full"
                />
              </div>
            ))}
          </div>

          <div className=" ml-2">
            <img
              class="object-cover object-bottom object-right px-3 w-full h-full"
              src={data.category.image}
              alt=""
            />
          </div>
        </div>

        <div className="right w-1/2 px-2 ">
          <div className=" ">
            <h1 className="mb-4 text-3xl font-bold font-sans text-black">
              {data.title}
            </h1>
            <StarRatings
              rating={data.rating}
              starRatedColor="grey"
              starEmptyColor="grey"
              starDimension="20px"
              starSpacing="2px"
            />
            <div className="flex items-center my-4 text-black">
              <span className="line-through text-base  mr-3">
                {data.price + 100}$
              </span>
              <p className="text-lg font-bold">{data.price}</p>
            </div>

            <p className="w-96 text-lg font-normal ">{data.description}</p>

            <div className="btn flex my-6 w-96 justify-between">
              <div className=" ` border-black border w-40 h-14 flex px-2 justify-between items-center">
                <span className="cursor-pointer text-4xl" onClick={Decrease}>
                  {"<"}
                </span>
                {count}
                <span className="cursor-pointer text-4xl" onClick={Increase}>
                  {">"}
                </span>
              </div>

              <div className="atc bg-[#393939] w-40 h-14 flex justify-center items-center text-white">
                <button>Add To Cart</button>
              </div>
            </div>

            <div className="flex items-center">
              <FontAwesomeIcon
                onClick={handleClick}
                style={{ color: isLiked ? "red" : "gray", fontSize: "24px" }}
                icon={faHeart}
              />
              <span className=" ml-5 text-lg font-normal">Add to wishlist</span>
            </div>

            <p className="my-2">Sku: 02</p>
            <p>Category: {data.category.name}</p>
            <p className="my-2 ">tag: sofa clean</p>

            <nav className="w-full  flex px-7 justify-between text-xl text-black font-normal">
              <Link to="description">Description</Link>
              <Link to="additional">Additional Details</Link>
              <Link to="additional">Preview</Link>
            </nav>
            <Outlet />
          </div>
        </div>
      </div>

      {/* <RelatedPrdt /> */}
    </section>
  );
}

export default Cart;
