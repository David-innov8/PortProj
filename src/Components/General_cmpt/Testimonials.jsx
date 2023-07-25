import React from "react";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Testimonials() {
  const sliderRef = useRef(null);
  // const prevArrowRef = useRef(null);
  // const nextArrowRef = useRef(null);
  const CustomPrevArrow = (props) => (
    <button {...props} className="slick-arrow custom-prev-arrow">
      {""}
    </button>
  );

  const CustomNextArrow = (props) => (
    <button {...props} className="slick-arrow custom-next-arrow">
      {""}
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const List = [
    {
      id: 1,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vitae congue id ipsum sed neque et dui accumsan. Nibh semper magna facilisi ridiculus luctus amet. Aliquam ",
      name: "haervy ",
      role: "Desdfgdfgdfger",
    },
    {
      id: 2,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vitae congue id ipsum sed neque et dui accumsan. Nibh semper magna facilisi ridiculus luctus amet. Aliquam ",
      name: "David ",
      role: "Ddfgdfgdfger",
    },
    {
      id: 3,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vitae congue id ipsum sed neque et dui accumsan. Nibh semper magna facilisi ridiculus luctus amet. Aliquam ",
      name: "Soroush norozy ",
      role: "dfgdgner",
    },
    {
      id: 4,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vitae congue id ipsum sed neque et dui accumsan. Nibh semper magna facilisi ridiculus luctus amet. Aliquam ",
      name: "guild ",
      role: "dfgdfgner",
    },
    {
      id: 5,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus vitae congue id ipsum sed neque et dui accumsan. Nibh semper magna facilisi ridiculus luctus amet. Aliquam ",
      name: "guild ",
      role: "dfgdfgner",
    },
  ];

  const previousSlide = () => {
    sliderRef.current.slickPrev();
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div className="h-80 flex px-20 py-40 bg-[#EFEFEF]  justify-between items-center w-full  mx-auto">
      <button onClick={previousSlide} className="mr-2  text-black p-2 text-5xl">
        {"<"}
      </button>
      <Slider {...settings} ref={sliderRef} className=" w-96">
        {List.map((items) => (
          <div
            key={items.id}
            className=" h-64 p-4 flex items-center justify-center "
          >
            <p className="text-xl font-bold text-center">{items.review}</p>
            <div className="mt-5">
              <p className="text-lg text-center pb-3">{items.name} </p>
              <p className="text-base text-center ">{items.role}</p>
            </div>
          </div>
        ))}
      </Slider>
      <button onClick={nextSlide} className=" text-5xl text-black p-2">
        {">"}
      </button>
    </div>
  );
}

export default Testimonials;
