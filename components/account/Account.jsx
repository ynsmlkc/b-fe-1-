import React from "react";
import Title from "../ui/Title";
import Input from "../form/Input";
import { useFormik } from "formik";
import { profileSchema } from "@/schema/profile";
import axios from "axios";

const Account = ({ user }) => {
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
      fullName: user?.fullName,
      email: user?.email,
      phoneNumber: user?.phoneNumber,
      address: user?.address,
      job: user?.job,
      bio: user?.bio,
    },
    onSubmit,
    validationSchema: profileSchema,
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
      placeholder: "Your Email Address",
      value: formik.values.email,
      errors: formik.errors.email,
      touched: formik.touched.email,
    },
    {
      id: 3,
      name: "phoneNumber",
      type: "nummber",
      placeholder: "Your Phone Number",
      value: formik.values.phoneNumber,
      errors: formik.errors.phoneNumber,
      touched: formik.touched.phoneNumber,
    },
    {
      id: 4,
      name: "address",
      type: "text",
      placeholder: "Your Address",
      value: formik.values.address,
      errors: formik.errors.address,
      touched: formik.touched.address,
    },
    {
      id: 5,
      name: "job",
      type: "text",
      placeholder: "Your Job",
      value: formik.values.job,
      errors: formik.errors.job,
      touched: formik.touched.job,
    },
    {
      id: 6,
      name: "bio",
      type: "text",
      placeholder: "Your Bio",
      value: formik.values.bio,
      errors: formik.errors.bio,
      touched: formik.touched.bio,
    },
  ];
  return (
    <div className="p-8 flex-1 " onSubmit={formik.handleSubmit}>
      <div>
        <Title addClass="text-[40px] ">Account Settings</Title>
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

export default Account;
