import React from "react";
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";
import Slider from "react-slick";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const Customers = () => {
  const NextBtn = ({ onClick }) => {
    return (
      <button onClick={onClick}>
        <IoIosArrowDroprightCircle className="text-primary absolute -bottom-12 left-1/2 w-12 h-12 " />
      </button>
    );
  };
  const PrevBtn = ({ onClick }) => {
    return (
      <button onClick={onClick}>
        <IoIosArrowDropleftCircle className="text-primary absolute -bottom-12 right-1/2 w-12 h-12 mr-4  " />
      </button>
    );
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoPlay: true,
    autoPlaySpeed: 3500,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto my-20 ">
      <Title addClass="text-[40px] text-center ">What Says Our Customers</Title>
      <div>
        <Slider {...settings}>
          <CustomerItem imgSrc="/images/client1.jpg" />
          <CustomerItem imgSrc="/images/client2.jpg" />
          <CustomerItem imgSrc="/images/client1.jpg" />
          <CustomerItem imgSrc="/images/client2.jpg" />
        </Slider>
      </div>
    </div>
  );
};

export default Customers;
