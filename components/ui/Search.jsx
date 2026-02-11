import React from "react";
import Title from "./Title";
import OutsideClickHandler from "react-outside-click-handler";
import Image from "next/image";
import { GiCancel } from "react-icons/gi";

const Search = ({ setIsSearchModal }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 after:content-[''] after:w-screen after:h-screen after:bg-white after:opacity-60 after:absolute after:top-0 after:left-0 grid place-content-center ">
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="w-full h-full grid place-content-center ">
          <div className="relative z-50 md:w-[600px] w-[370px] bg-white border-2 p-10 rounded-3xl ">
            <Title addClass="text-[40px] text-center ">Search</Title>
            <input
              type="text"
              placeholder="Search..."
              className="border w-full mt-10"
            />
            <div>
              <ul className="mt-10">
                <li className="flex items-center justify-between p-1 hover:bg-primary transition-all ">
                  <div className="realtive flex">
                    <Image src="/images/f1.png" alt="" width={48} height={48} />
                  </div>
                  <span className="font-bold ">Good Pizza</span>
                  <span className="font-bold">10$</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="">
                <li className="flex items-center justify-between p-1 hover:bg-primary transition-all ">
                  <div className="realtive flex">
                    <Image src="/images/f1.png" alt="" width={48} height={48} />
                  </div>
                  <span className="font-bold ">Good Pizza</span>
                  <span className="font-bold">10$</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="">
                <li className="flex items-center justify-between p-1 hover:bg-primary transition-all ">
                  <div className="realtive flex">
                    <Image src="/images/f1.png" alt="" width={48} height={48} />
                  </div>
                  <span className="font-bold ">Good Pizza</span>
                  <span className="font-bold">10$</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="">
                <li className="flex items-center justify-between p-1 hover:bg-primary transition-all ">
                  <div className="realtive flex">
                    <Image src="/images/f1.png" alt="" width={48} height={48} />
                  </div>
                  <span className="font-bold ">Good Pizza</span>
                  <span className="font-bold">10$</span>
                </li>
              </ul>
            </div>
            <button>
              <GiCancel
                className="absolute top-7 right-6 text-2xl hover:text-primary cursor-pointer"
                onClick={() => setIsSearchModal(false)}
              />
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
