import React from "react";
import Title from "../ui/Title";
import Input from "../form/Input";
import { useFormik } from "formik";
import { footerSchema } from "@/schema/footer";
import { FaInstagram } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Footer = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      location: "",
      email: "",
      phoneNumber: "",
      description: "",
      day: "",
      time: "",
    },
    onSubmit,
    validationSchema: footerSchema,
  });

  const inputs = [
    {
      id: 1,
      name: "location",
      type: "text",
      placeholder: "Your Location",
      value: formik.values.location,
      errors: formik.errors.location,
      touched: formik.touched.location,
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
      type: "number",
      placeholder: "Your Phone Number",
      value: formik.values.phoneNumber,
      errors: formik.errors.phoneNumber,
      touched: formik.touched.phoneNumber,
    },
    {
      id: 4,
      name: "description",
      type: "text",
      placeholder: "Your Description",
      value: formik.values.description,
      errors: formik.errors.description,
      touched: formik.touched.description,
    },
    {
      id: 5,
      name: "day",
      type: "text",
      placeholder: "Write a Day",
      value: formik.values.day,
      errors: formik.errors.day,
      touched: formik.touched.day,
    },
    {
      id: 6,
      name: "time",
      type: "time",
      placeholder: "Write a Time",
      value: formik.values.time,
      errors: formik.errors.time,
      touched: formik.touched.time,
    },
  ];
  return (
    <div className="p-8 flex-1 ">
      <div>
        <Title addClass="text-[40px] ">Footer Settings</Title>
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

export default Footer;
