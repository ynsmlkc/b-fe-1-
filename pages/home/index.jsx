import Carousel from "../../components/ui/Carousel";
import Campaigns from "../../components/ui/Campaigns";
import MenuWrapper from "../../components/product/MenuWrapper";
import About from "../../components/ui/About2";
import Reservation from "../../components/Reservation";
import Customers from "../../components/customers/Customers";
import React from "react";

const Home = ({ categories }) => {
  return (
    <React.Fragment>
      <Carousel />
      <Campaigns />
      <MenuWrapper categories={categories} />
      <About />
      <Reservation />
      <Customers />
    </React.Fragment>
  );
};

export default Home;
