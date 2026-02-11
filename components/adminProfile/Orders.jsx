import React from "react";
import Title from "../ui/Title";

const Order = () => {
  return (
    <div className="p-8  ">
      <div>
        <Title addClass="text-[40px] ">Orders</Title>
      </div>
      <div className="mt-5  ">
        <div className="flex justify-between items-center md:flex-row flex-col  ">
          <div className="  mx-auto overflow-x-scroll ">
            <table className="w-full text-sm text-center text-gray-500 min-w-[1000px] ">
              <thead className="text-xs text-gray-400 uppercase bg-gray-700 ">
                <tr>
                  <th scope="col" className="py-3 px-6 ">
                    ID
                  </th>
                  <th scope="col" className="py-3 px-6 ">
                    CUSTOMER
                  </th>
                  <th scope="col" className="py-3 px-6 ">
                    TOTAL
                  </th>
                  <th scope="col" className="py-3 px-6 ">
                    PAYMENT
                  </th>
                  <th scope="col" className="py-3 px-6 ">
                    STATUS
                  </th>
                  <th scope="col" className="py-3 px-6 ">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-secondary border-gray-700 hover:bg-primary transition-all ">
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-2 justify-center ">
                    <span>63107...</span>
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white ">
                    <span>Yunus Malkoç</span>
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white ">
                    $18
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white ">
                    Cash
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white ">
                    Delivered
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white ">
                    <button className="btn-primary !rounded-lg !bg-green-500 ">
                      Next Stage{" "}
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

export default Order;
