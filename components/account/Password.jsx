import React from "react";
import Title from "../ui/Title";
import Input from "../form/Input";
import { useFormik } from "formik";
import { passwordSchema } from "@/schema/password";
import axios from "axios";

const Password = ({ user }) => {
  const onSubmit = async (values, actions) => {
    try {
      const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/users/${user._id}`, values);
    } catch (error) {
      console.log(error);
    }
    actions.resetForm();
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      password: "",
      newPassword: "",
    },
    onSubmit,
    validationSchema: passwordSchema,
  });

  const inputs = [
    {
      id: 1,
      name: "password",
      type: "password",
      placeholder: "Passwrod Again",
      value: formik.values.password,
      errors: formik.errors.password,
      touched: formik.touched.password,
    },
    {
      id: 2,
      name: "newPassword",
      type: "password",
      placeholder: "New Password Again",
      value: formik.values.newPassword,
      errors: formik.errors.newPassword,
      touched: formik.touched.newPassword,
    },
  ];
  return (
    <div className="p-8 flex-1 ">
      <div>
        <Title addClass="text-[40px] ">Password</Title>
      </div>
      <form className="m-4" onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          {inputs.map((input) => (
            <Input
              key={input.id}
              {...input}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          ))}

          <div className="col-span-2">
            <button type="submit" className="btn-primary">
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Password;
