import MenuWrapper from "../components/product/MenuWrapper";
import React from "react";
import axios from "axios";

const Menu = ({ categories }) => {
  return (
    <div className="pt-10">
      <MenuWrapper categories={categories} />
    </div>
  );
};

export default Menu;

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  return {
    props: {
      categories: res.data ? res.data : [],
    },
  };
};
