import * as Yup from "yup";

export const loginFormSchema = Yup.object().shape({
  name: Yup.string().required("Name is a required field").min(3, "Minimum 3 characters are required"),
  email: Yup.string().email("Please enter a valid email").required("Email is a required field"),
});
