import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signInUserWithEmailAndPassword } from "../../../../services/SignUp.service";
const validationSchema = Yup.object({
  email: Yup.string().email("invalid email").required("email is required"),
  password: Yup.string().required("password is required"),
});

function SignInForms() {
  const navigate = useNavigate();
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          try {
            await signInUserWithEmailAndPassword(values.email, values.password);
            console.log("Successfully signed In!", values);
            navigate("/explore");
          } catch (error) {
            console.error("Sign In failed:", error.message);
          }
        }}
      >
        {({ handleSubmit }) => (
          <div class="m-auto full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-center mt-10 text-lg sm:text-xl md:text-2xl font-bold">
              <h2>Sign In</h2>
            </div>
            <div class="flex justify-center rounded-lg shadow-md mt-10  p-5">
              <Form onSubmit={handleSubmit}>
                <div class="mb-4">
                  <label htmlFor="email">Email:</label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-black text-sm mt-1"
                  />
                </div>
                <div class="mb-4">
                  <label htmlFor="password">Password:</label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-black text-sm mt-1"
                  />
                </div>
                <div class="flex mt-3 justify-center bg-red-700 hover:bg-red-500 rounded-2xl sm:rounded-lg md:rounded-xl">
                  <button type="submit">Submit</button>
                </div>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default SignInForms;
