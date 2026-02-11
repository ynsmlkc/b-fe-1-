import React, { use } from "react";
import Title from "./ui/Title";
import Input from "./form/Input";
import { ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { reservationSchema } from "../schema/reservation";

const Reservation = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      persons: "",
      date: "",
      errors: "",
    },
    onSubmit,
    validationSchema: reservationSchema,
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
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Number",
      value: formik.values.phoneNumber,
      errors: formik.errors.phoneNumber,
      touched: formik.touched.phoneNumber,
    },
    {
      id: 3,
      name: "email",
      type: "text",
      placeholder: "Your Email Address",
      value: formik.values.email,
      errors: formik.errors.email,
      touched: formik.touched.email,
    },
    {
      id: 4,
      name: "persons",
      type: "number",
      placeholder: "How many Persons",
      value: formik.values.persons,
      errors: formik.errors.persons,
      touched: formik.touched.persons,
    },
    {
      id: 5,
      name: "date",
      type: "datetime-local",
      placeholder: "",
      value: formik.values.date,
      errors: formik.errors.date,
      touched: formik.touched.date,
    },
  ];

  return (
    <div className="container mx-auto py- 12 ">
      <Title addClass="text-[40px] mt-8 ">Book A Table</Title>
      <div className="flex justify-between flex-wrap-reverse gap-10 mt-4 ">
        <form className="lg:flex-1 w-full " onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-y-3">
            {inputs.map((input) => (
              <Input
                key={input.id}
                {...input}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            ))}
          </div>
          <button className="btn-primary mt-4 " type="submit">
            BOOK NOW{" "}
          </button>
        </form>
        <div className="lg:flex-1 w-full ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6021.988649128677!2d28.879184676528574!3d41.003497419718414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb3fc1b4628f%3A0x112917282ff5e6ca!2zQmFow6dlbGlldmxlciwgU2FrbMSxdmFkaSBLb25ha2xhcsSxIMSww6dpIFlvbHUgMTFDLCAzNDE4MCBCYWjDp2VsaWV2bGVyL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1751973345824!5m2!1str!2str"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
