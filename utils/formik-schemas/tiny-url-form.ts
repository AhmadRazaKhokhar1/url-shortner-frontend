import * as Yup from "yup";

export const tinyUrlSchema = Yup.object({
  originalUrl: Yup.string()
    .url("Please enter a valid URL")
    .required("URL is required"),
});
