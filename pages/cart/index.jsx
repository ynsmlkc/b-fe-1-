import React from "react";
import Image from "next/image";
import Title from "../../components/ui/Title";
import { useSelector, useDispatch } from "react-redux";
import reset from "../../redux/cartSlice";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="min-h-[calc(100vh_-_433px)] ">
      <div className="flex justify-between items-center md:flex-row flex-col ">
        <div className="min-h-[calc(100vh_-_433px)] flex items-center mx-auto overflow-x-scroll ">
          <table className="w-full text-sm text-center text-gray-500 min-w-[1000px] ">
            <thead className="text-xs text-gray-400 uppercase bg-gray-700 ">
              <tr>
                <th scope="col" className="py-3 px-6 ">
                  Product
                </th>
                <th scope="col" className="py-3 px-6 ">
                  Extras
                </th>
                <th scope="col" className="py-3 px-6 ">
                  Price
                </th>
                <th scope="col" className="py-3 px-6 ">
                  Qantity
                </th>
              </tr>
            </thead>
            <tbody>
              {cart.products.map((product) => (
                <tr
                  className="bg-secondary border-gray-700 hover:bg-primary transition-all "
                  key={product.id}
                >
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-2 justify-center ">
                    <Image src="/images/f1.png" alt="" width={50} height={50} />
                    <span>{product.name} </span>
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white ">
                    {product.extraItems.map((item) => (
                      <span key={item.id}>{item.name} </span>
                    ))}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white ">
                    ${product.price}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white ">
                    {product.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-secondary min-h-[calc(100vh_-_433px)] flex flex-col justify-center text-white p-4 md:w-auto w-full ">
          <Title addClass="text-[40px] md:text-start text-center ">
            CART TOTAL
          </Title>
          <div className="flex flex-col my-3 md:text-start text-center ">
            <b>Subtotal: ${cart.total} </b>
            <b>Discount: $0.00</b>
            <b>Total: ${cart.total} </b>
          </div>
          <button className="btn-primary">CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
