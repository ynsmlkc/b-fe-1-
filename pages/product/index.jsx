import React from "react";
import Image from "next/image";
import Title from "../../components/ui/Title";
import { useState } from "react";
import { addProduct } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const itemsExtra = [
  {
    id: 1,
    name: "Ketçap",
    price: 1,
  },
  {
    id: 2,
    name: "Mayonez",
    price: 1,
  },
  {
    id: 3,
    name: "Acı sos",
    price: 2,
  },
];

const foodItems = [
  {
    id: 1,
    name: "Pizza 1",
    price: 11,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    extraOptions: [{ id: 1, name: "Ketçap", price: 1 }],
  },
];

const Index = () => {
  const [prices, setPrices] = useState([10, 20, 30]);
  const [price, setPrice] = useState(prices[0]);
  const [size, setSize] = useState(0);
  const [extraItems, setExtraItems] = useState(itemsExtra);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log(cart);

  const handleSize = (sizeIndex) => {
    const diffrence = prices[sizeIndex] - prices[size];
    setSize(sizeIndex);
    changePrice(diffrence);
  };

  const handleChange = (e, item) => {
    const checked = e.target.checked;
    if (checked) {
      changePrice(item.price);
    } else {
      changePrice(-item.price);
    }
  };

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleClick = () => {
    dispatch(addProduct({ ...foodItems[0], price, extraItems, quantity: 1 }));
  };

  return (
    <div className="flex items-center md:h-screen gap-5 py-20 flex-wrap ">
      <div className="relative md:flex-1 md:w-[80%] md:h-[80%] w-36 h-36 mx-auto ">
        <Image src="/images/f1.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div className="md:flex-1 md:text-start text-center">
        <Title addClass="text-6xl ">Good Pizza</Title>
        <span className="text-primary text-2xl font-bold underline my-4 inline-block ">
          ${price}
        </span>
        <p className="text-sm my-4 md:pr-24 ">
          Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit,
          magnam voluptatem repellendus sed eaque
        </p>
        <div>
          <h4 className="text-xl font-bold">Choose the size</h4>
          <div className="flex items-center gap-x-20 md:justify-start justify-center   ">
            <div
              className="relative w-8 h-8 cursor-pointer"
              onClick={() => handleSize(0)}
            >
              <Image
                src="/images/size.png"
                alt=""
                layout="fill"
                objectFit="contain"
              />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px]">
                Small
              </span>
            </div>
            <div
              className="relative w-12 h-12 cursor-pointer"
              onClick={() => handleSize(1)}
            >
              <Image
                src="/images/size.png"
                alt=""
                layout="fill"
                objectFit="contain"
              />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] ">
                Medium
              </span>
            </div>
            <div
              className="relative w-16 h-16 cursor-pointer"
              onClick={() => handleSize(2)}
            >
              <Image
                src="/images/size.png"
                alt=""
                layout="fill"
                objectFit="contain"
              />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] ">
                Large
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4 md:justify-start justify-center ">
          <div className="text-xl font-semibold">
            Choose Additional ingredients
          </div>
          <div className="flex items-center gap-x-5 mt-3 md:justify-start justify-center ">
            {extraItems.map((item, index) => (
              <label className="flex items-center gap-x-1 " key={index}>
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-primary "
                  onChange={(e) => handleChange(e, item)}
                />
                <span className="text-sm font-semibold">{item.name} </span>
              </label>
            ))}
          </div>
        </div>
        <button className="btn-primary mt-8" onClick={handleClick}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Index;
