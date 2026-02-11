import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import React from "react";
import { useFormik } from "formik";
import { adminSchema } from "@/schema/admin";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
const Admin = () => {
  const { push } = useRouter();
  const onSubmit = async (values, actions) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin`, values);
      if (response.status === 200) {
        console.log(response.data);
        actions.resetForm();
        toast.success("Login successful");
        push("/auth/admin/profile");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit,
    validationSchema: adminSchema,
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Your Username",
      value: formik.values.username,
      errors: formik.errors.username,
      touched: formik.touched.username,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      value: formik.values.password,
      errors: formik.errors.password,
      touched: formik.touched.password,
    },
  ];

  return (
    <div className="containe mx-auto py-4  ">
      <div className="flex flex-col items-center my-20 md:w-1/3 w-1/2 mx-auto ">
        <Title addClass="text-[40px] mb-6 ">Admin Login</Title>
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
          <button className="btn-primary mb-2 " type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const token = context.req.cookies.token;
  if (token === process.env.ADMIN_TOKEN) {
    return {
      redirect: {
        destination: "/auth/admin/profile",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default Admin;
