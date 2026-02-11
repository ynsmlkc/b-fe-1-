import React from "react";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

const MenuItem = () => {
  return (
    <div className="bg-secondary rounded-3xl ">
      <div className="bg-[#f1f2f3] w-full h-[210px] grid place-content-center rounded-bl-[30px] rounded-tl-2xl rounded-tr-2xl ">
        <Link href="/product">
          <div className="relative w-36  h-36 ">
            <Image
              src="/images/f1.png"
              alt=""
              layout="fill"
              className="hover:scale-110 transition-all"
              priority
            />
          </div>
        </Link>
      </div>
      <div className="text-white p-6 ">
        <h4 className=" text-xl font-semibold ">Delicous Pizza</h4>
        <span className="text-base mt-4 ">
          Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
          magnam voluptatem repellendus sed eaque
        </span>
        <div className="flex justify-between items-center mt-4">
          <div>$20</div>
          <div className="bg-[#ffbe33] w-10 h-10 rounded-full grid place-content-center ">
            <FaShoppingCart className="w-[18px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
