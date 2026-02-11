import * as Yup from "yup";

export const passwordSchema = Yup.object({
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  newPassword: Yup.string()
    .required("New Password is required")
    .min(6, "New Password must be at least 6 characters"),
});
