import React, { useState } from "react";
import Navbar from "../Common/Navbar";
import Img from "../Assets/Rectangle 20.svg";
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

        <div className="right">
          <h1>Sofa code 123</h1>
          <p>Rating</p>
          <p>
            <span>200$</span> 100$
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim et
            volutpat lobortis enim donec adipiscing nibh. Consectetur in ac
            elementum aliquam imperdiet tellus.
          </p>

          <div className="btn flex  w-96 justify-between">
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
          <p>Category: sofa</p>
          <p>tag: sofa clean</p>
        </div>
      </div>
    </section>
  );
}

export default Cart;
