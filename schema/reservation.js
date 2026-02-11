import React from "react";
import * as Yup from "yup";

export const reservationSchema = Yup.object({
  fullName: Yup.string()
    .required("Full Name is required")
    .min(3, "Full Name must be at least 3 characters"),
  phoneNumber: Yup.string()
    .required("Phone Number is required")
    .min(10, "Phone Number must be at least 10 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  persons: Yup.number()
    .required("Number of persons is required")
    .min(1, "At least one person is required"),
  date: Yup.date().required("Date is required"),
});
