import React, { useState, useEffect } from "react";
import Navbar from "../Common/Navbar";
import Img from "../Assets/Rectangle 20.svg";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import axios from "axios";
function Cart() {
  const [count, setCount] = useState(0);

  const Decrease = () => {
    setCount(count - 1);
    console.log(count);
  };

  const Increase = () => {
    setCount(count + 1);
    console.log(count);
  };

  const { id } = useParams();

  const [pdrt, setPrdt] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((res) => {
        setPrdt(res.data);
        setLoading(false);
        console.log("product loaded", res.data);
      })

      .catch((err) => {
        console.error(`error petching products`, err);
        setLoading(false);
      });
  }, [id]);

  // .then((res) => {
  //   setProduct(res.data);
  //   setLoading(false);
  //   console.log(("product loaded", res.data));
  // })
  if (loading) {
    return <div>Loading...</div>;
  }

  // if (!pdrt) {
  //   return <div>Does not exist</div>;
  // }
  return (
    <section className="  h-80h">
      <Navbar />

      <div className=" px-9 flex-1 flex h-80v w-full ">
        <div className="left h-full flex w-1/2">
          <div className="w-1/3  grid  grid-rows-4 gap-y-4">
            <div className="aspect-w-1 aspect-h-1">
              <img src={Img} alt="" className="object-contain  w-full h-full" />
            </div>

            <div className="aspect-w-1 aspect-h-1">
              <img src={Img} alt="" className="object-contain  w-full h-full" />
            </div>

            <div className="aspect-w-1 aspect-h-1">
              <img src={Img} alt="" className="object-contain w-full h-full" />
            </div>

            <div className="aspect-w-1 aspect-h-1">
              <img src={Img} alt="" className="object-contain  w-full h-full" />
            </div>
          </div>

          <div className=" ">
            <img
              class="object-cover object-bottom object-right px-3 w-full h-full"
              src={Img}
              alt=""
            />
          </div>
        </div>

        <div className="right w-1/2 bg-orange-500 ">
          <div className="bg-green-300 ">
            <h1 className="mb-1">{pdrt.title}</h1>
            <StarRatings
              rating={pdrt.rating}
              starRatedColor="grey"
              starEmptyColor="grey"
              starDimension="20px"
              starSpacing="2px"
            />
            <div className="flex items-center my-1">
              <span className="line-through text-base  mr-3">
                {pdrt.price + 100}$
              </span>
              <p className="text-lg font-bold">{pdrt.price}</p>
            </div>

            <p className="w-96 ">{pdrt.description}</p>

            <div className="btn flex my-1 w-96 justify-between">
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

            <div className="flex ">
              <p className="mr-8">h</p> <p>Add To wishlsi</p>
            </div>

            <p>Sku: 02</p>
            <p>Category: {pdrt.category.name}</p>
            <p>tag: sofa clean</p>

            {/* <nav>
                <Link to="../description">Description</Link>
                <Link to="../additional">Additional Details</Link>

          </nav> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
