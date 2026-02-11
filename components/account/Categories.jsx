import React from "react";
import Title from "../ui/Title";
import Input from "../form/Input";
import { useState, useEffect } from "react";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCategories();
  }, []);

  const addCategory = async () => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/categories`, { title: inputText });
      setCategories([...categories, res.data]);
      setInputText("");
    } catch (error) {
      console.log(error);
    }
  }

  const deleteCategory = async (id) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`);
      setCategories(categories.filter((category) => category._id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="lg:p-8 flex-1 lg:mt-0 mt-5  ">
      <Title addClass="text-[40px] ">Category</Title>
      <div className="mt-5  ">
        <div className="flex gap-5 flex-1 items-center">
          <Input
            placeholder="Add a new Category..."
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          />

          <button
            className="btn-primary"
            onClick={addCategory}
          >
            Add
          </button>
        </div>
      </div>
      <div className="mt-10 max-h-[250px] overflow-auto">
        {categories.map((category) => (
          <div className="flex justify-between mt-4 " key={category._id}>
            <b className="tezt-xl">{category.title}</b>
            <button
              className="btn-primary !bg-red-600 "
              onClick={() => deleteCategory(category._id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
