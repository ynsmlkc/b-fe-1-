import React, { useState } from "react";
import Image from "next/image";
import { IoFastFood } from "react-icons/io5";
import { RiMotorbikeFill } from "react-icons/ri";
import { BiCategory } from "react-icons/bi";
import { IoMdExit } from "react-icons/io";
import { FaRegWindowMaximize } from "react-icons/fa";
import Order from "@/components/account/Order";
import Product from "@/components/adminProfile/Product";
import Orders from "@/components/adminProfile/Orders";
import Categories from "@/components/account/Categories";
import Footer from "@/components/adminProfile/Footer";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import AddProduct from "@/components/adminProfile/addProduct";

const Profile = () => {
  const { push } = useRouter();
  const [tabs, setTabs] = useState(0);
  const [isAddProductModal, setIsAddProductModal] = useState(false);
  const closeAdminAccount = async () => {
    try {
      if (confirm("Are you sure you want to close your account?")) {
        const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/admin`);
        if (res.status === 200) {
          toast.success("Account closed successfully");
          push("/auth/admin");
        }
      } else {
        toast.error("Account not closed");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex px-10 min-h-[calc(100vh_-_433px)] ">
      <div className=" w-80 flex-shrink-0 ">
        <div className="relative flex flex-col items-center px-10 py-5 border border-b-0 ">
          <Image
            src="/images/admin.png"
            alt=""
            width={110}
            height={110}
            className="rounded-full"
          />
          <b className="text-xl mt-2 text-center ">Admin</b>
        </div>
        <ul>
          <li
            className="border border-b-0 w-full p-3 flex items-center gap-x-2 cursor-pointer hover:bg-primary hover:text-white transition-all "
            onClick={() => setTabs(0)}
          >
            <IoFastFood className="text-[17px] " />
            <button className="text-[17px] ">Products</button>
          </li>
          <li
            className="border border-b-0 w-full p-3 flex items-center gap-x-2 cursor-pointer hover:bg-primary hover:text-white transition-all "
            onClick={() => setTabs(1)}
          >
            <RiMotorbikeFill className="text-[17px] " />
            <button className="text-[17px] ">Orders</button>
          </li>
          <li
            className="border border-b-0 w-full p-3 flex items-center gap-x-2 cursor-pointer hover:bg-primary hover:text-white transition-all "
            onClick={() => setTabs(2)}
          >
            <BiCategory className="text-[17px] " />
            <button className="text-[17px] ">Categories</button>
          </li>
          <li
            className="border  w-full p-3 flex items-center gap-x-2 cursor-pointer hover:bg-primary hover:text-white transition-all "
            onClick={() => setTabs(3)}
          >
            <FaRegWindowMaximize className="text-[17px] " />
            <button className="text-[17px] ">Footer</button>
          </li>
          <li
            className="border  w-full p-3 flex items-center gap-x-2 cursor-pointer hover:bg-primary hover:text-white transition-all "
            onClick={closeAdminAccount}
          >
            <IoMdExit className="text-[17px] " />
            <button className="text-[17px] ">Exit</button>
          </li>
        </ul>
      </div>

      {tabs === 0 && <Product />}
      {tabs === 1 && <Orders />}
      {tabs === 2 && <Categories />}
      {tabs === 3 && <Footer />}
      {isAddProductModal && <AddProduct setIsAddProductModal={setIsAddProductModal} />}
      <button onClick={() => setIsAddProductModal(true)} className="bg-primary text-white w-10 h-10 rounded-full absolute bottom-5 right-5 flex items-center justify-center ">+</button>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const token = context.req.cookies.token;
  if (token !== process.env.ADMIN_TOKEN) {
    return {
      redirect: {
        destination: "/auth/admin",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};


export default Profile;
