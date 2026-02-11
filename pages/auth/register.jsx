import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import React from "react";
import { useFormik } from "formik";
import { registerSchema } from "@/schema/register";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const onSubmit = async (values, actions) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/register`, values);
      if (response.status === 200) {
        toast.success("User registered successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    }
    actions.resetForm();
  };
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit,
    validationSchema: registerSchema,
  });

  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      value: formik.values.fullName,
      errors: formik.errors.fullName,
      touched: formik.touched.fullName,
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      value: formik.values.email,
      errors: formik.errors.email,
      touched: formik.touched.email,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      value: formik.values.password,
      errors: formik.errors.password,
      touched: formik.touched.password,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Your Password",
      value: formik.values.confirmPassword,
      errors: formik.errors.confirmPassword,
      touched: formik.touched.confirmPassword,
    },
  ];

  return (
    <div className="containe mx-auto">
      <div className="flex flex-col items-center my-20 md:w-1/3 w-1/2 mx-auto ">
        <Title addClass="text-[40px] mb-6 ">Register</Title>
        <form
          className="flex flex-col gap-y-4 w-full "
          onSubmit={formik.handleSubmit}
        >
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          ))}
          <button className="btn-primary mb-2" type="submit">Register</button>
          <Link href="/auth/login">
            <span className="text-[14px] underline cursor-pointer text-gray-600  ">
              Do you have a account?
            </span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
