import React, { useRef } from "react";
import Title from "../ui/Title";
import useOutsideClick from "../../util/useOutsideClick";
import Image from "next/image";
import { GiCancel } from "react-icons/gi";

const AddProduct = ({ setIsAddProductModal }) => {
    const wrapperRef = useRef(null);
    useOutsideClick(wrapperRef, () => {
        setIsAddProductModal(false);
    });

    return (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 after:content-[''] after:w-screen after:h-screen after:bg-white after:opacity-60 after:absolute after:top-0 after:left-0 grid place-content-center ">
            <div className="w-full h-full grid place-content-center " ref={wrapperRef}>
                <div className="relative z-50 md:w-[600px] w-[370px] bg-white border-2 p-10 rounded-3xl ">
                    <Title addClass="text-[40px] text-center ">Add Product</Title>
                    <div className="flex flex-col gap-2 mt-5"><span className="font-semibold ">Choose an image</span><input type="file" /></div>
                    <div className="flex flex-col gap-2 mt-4"><span className="font-semibold ">Title</span><input type="text" className="border border-gray-300 rounded-md p-1" placeholder="Write a title" /></div>
                    <div className="flex flex-col gap-2 mt-4"><span className="font-semibold ">Description</span><input type="text" className="border border-gray-300 rounded-md p-1" placeholder="Write a description" /></div>
                    <div className="flex flex-col gap-2 mt-5"><span className="font-semibold ">Categories</span><select className="border border-gray-300 rounded-md p-1" placeholder="Write a category" >
                        <option value="">Pizza</option>
                        <option value="">Hamburger</option>
                        <option value="">Drink</option>
                        <option value="">Dessert</option>
                    </select></div>
                    <div className="flex flex-col gap-2 mt-4"><span className="font-semibold ">Price</span><div className="flex items-center gap-2"><input type="number" className="border-b-2 border-gray-300 rounded-md p-1" placeholder="small" /><input type="number" className="border-b-2 border-gray-300 rounded-md p-1" placeholder="medium" /><input type="number" className="border-b-2 border-gray-300 rounded-md p-1" placeholder="large" /></div></div>
                    <div className="flex flex-col gap-2 mt-4"><span className="font-semibold ">Extra</span><div className="flex items-center gap-2"><input type="text" className="border-b-2 border-gray-300 rounded-md p-1" placeholder="Extras" /><input type="number" className="border-b-2 border-gray-300 rounded-md p-1" placeholder="Price" /> <div className="flex justify-between mt-5"><button className="bg-primary text-white px-3 py-2 rounded-full">Add</button></div></div></div>
                    <div className="flex justify-end mt-5"><button className="btn-primary !bg-success ">Create</button></div>
                    <button>
                        <GiCancel
                            className="absolute top-7 right-6 text-2xl hover:text-primary cursor-pointer"
                            onClick={() => setIsAddProductModal(false)}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
