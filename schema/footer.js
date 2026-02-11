import * as Yup from "yup";

export const footerSchema = Yup.object({
  location: Yup.string().required(" Locationis required"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  phoneNumber: Yup.string()
    .required("Phone Number is required")
    .min(10, "Phone Number must be at least 10 characters"),
  description: Yup.string().required("Description is required"),
  day: Yup.string().required("Day is required"),
  time: Yup.string()
    .required("Time is required")
    .matches(
      /^([01]\d|2[0-3]):([0-5]\d)$/,
      "Time must be in HH:MM format (24-hour)"
    ),
});
