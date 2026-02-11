import React from "react";
import Title from "../ui/Title";
import Image from "next/image";

const Product = () => {
  return (
    <div className="p-8  ">
      <div>
        <Title addClass="text-[40px] ">Products</Title>
      </div>
      <div className="mt-5  ">
        <div className="flex justify-between items-center md:flex-row flex-col  ">
          <div className="  mx-auto overflow-x-scroll ">
            <table className="w-full text-sm text-center text-gray-500 min-w-[1000px] ">
              <thead className="text-xs text-gray-400 uppercase bg-gray-700 ">
                <tr>
                  <th scope="col" className="py-3 px-6 ">
                    Image
                  </th>
                  <th scope="col" className="py-3 px-6 ">
                    ID
                  </th>
                  <th scope="col" className="py-3 px-6 ">
                    TITTLE
                  </th>
                  <th scope="col" className="py-3 px-6 ">
                    PRICE
                  </th>
                  <th scope="col" className="py-3 px-6 ">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-secondary border-gray-700 hover:bg-primary transition-all ">
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-2 justify-center ">
                    <Image
                      src="/images/f1.png"
                      alt=""
                      width={60}
                      height={60}
                      objectFit="contain"
                    />
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white ">
                    <span>639e22f2...</span>
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white ">
                    Good Pizza
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white ">
                    $18
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white ">
                    <button className="btn-primary !rounded-lg !bg-red-500">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
