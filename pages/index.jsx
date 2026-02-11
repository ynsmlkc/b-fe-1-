import Header from "../components/layout/Header";
import Home from "./home";
import Input from "../components/form/Input";
import Footer from "../components/layout/Footer";
import { getSession } from "next-auth/react";
import axios from "axios";

export default function Index({ categories }) {
  return (
    <div>
      <Home categories={categories} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
  return {
    props: {
      categories: res.data ? res.data : [],
    },
  };
};
