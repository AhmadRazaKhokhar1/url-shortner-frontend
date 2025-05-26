"use client";

// Hooks
import { useAuth } from "@/lib/providers/auth.provider";

// Formik & Schema
import { loginFormSchema } from "@/utils/formik-schemas/login-form";
import { Form, Formik } from "formik";

// Components
import { CustomPaddedView, SubHeading } from "../../useable-components";
import CustomButton from "../../useable-components/custom-button";


export default function LoginMain() {
  // Initial Values
  const initialValues = {
    name: "",
    email: "",
  };
  // Hooks
  const { handleLogin } = useAuth();

  // Handlers
  const handleLoginLocal = async (email: string, name: string) => {
    await handleLogin(email, name);
  };
  return (
    <CustomPaddedView>
      <Formik
        initialValues={initialValues}
        validationSchema={loginFormSchema}
        onSubmit={(values) => handleLoginLocal(values.email, values.name)}
      >
        {({ setFieldValue, errors, values }) => {
          return (
            <Form className="max-w-lg mx-auto space-y-8 rounded-xl border border-gray-300 shadow-lg p-6 my-auto">
              <SubHeading title="Enter Details" />
              <input
                type="text"
                value={values.name}
                name="name"
                onChange={(e) => setFieldValue("name", e.target.value)}
                placeholder="Enter your Name"
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-gray/20 rounded-2xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ border: errors.name ? "2px solid red" : "" }}
              />
              {errors.name && (
                <span className="text-red-500 font-normal text-sm">
                  {errors.name}
                </span>
              )}
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={(e) => setFieldValue("email", e.target.value)}
                placeholder="Enter your email"
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-gray/20 rounded-2xl text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ border: errors.email ? "2px solid red" : "" }}
              />
              {errors.email && (
                <span className="text-red-500 font-normal text-sm">
                  {errors.email}
                </span>
              )}
              <CustomButton
                title="Sign In"
                type="submit"
                style={{width:"100%"}}
              />
            </Form>
          );
        }}
      </Formik>
    </CustomPaddedView>
  );
}
