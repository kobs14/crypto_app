import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import githubSvg from "../../images/github.png";
import googlePng from "../../images/google.png";


import { register } from "../services/slices/auth";
import { clearMessage } from "../services/slices/message";
import { Link } from "react-router-dom";

const Register = () => {
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .test(
        "len",
        "The username must be between 3 and 20 characters.",
        (val) =>
          val &&
          val.toString().length >= 3 &&
          val.toString().length <= 20
      )
      .required("This field is required!"),
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
    password: Yup.string()
      .test(
        "len",
        "The password must be between 6 and 40 characters.",
        (val) =>
          val &&
          val.toString().length >= 6 &&
          val.toString().length <= 40
      )
      .required("This field is required!"),
  });

  const handleRegister = (formValue) => {
    const { username, email, password } = formValue;

    setSuccessful(false);

    dispatch(register({ username, email, password }))
      .unwrap()
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

  return (
      <div className="container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-4/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-gray-600 text-sm font-bold">
                  Sign up with
                </h6>
              </div>
              <div className="btn-wrapper text-center">
                <button
                  className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center  text-xs"
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                  <img
                    alt="..."
                    className="w-5 mr-1"
                    src={githubSvg}
                  />
                  Github
                </button>
                <button
                  className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center text-xs"
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                  <img
                    alt="..."
                    className="w-5 mr-1"
                    src={googlePng}
                  />
                  Google
                </button>
              </div>
              <hr className="mt-6 border-b-1 border-gray-400" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="text-gray-500 text-center mb-3 font-bold">
                <small>Or sign up with credentials</small>
              </div>
              <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleRegister}
                >
               <Form>
               <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    User Name
                  </label>
                  <Field 
                    name="username"
                    type="text" 
                    className="form-control border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    style={{ transition: "all .15s ease" }}
                     />
                      <ErrorMessage
                        name="username"
                        component="div"
                        className="alert alert-danger text-red-500 text-xs italic"
                      />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email
                  </label>
                 <Field 
                    name="email" 
                    type="email" 
                    className="form-control border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" />
                      <ErrorMessage
                          name="email"
                          component="div"
                          className="alert alert-danger text-red-500 text-xs italic"
                          style={{ transition: "all .15s ease" }}
                        />
                </div>

                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Password
                  </label>
                   <Field 
                    name="password" 
                    type="password" 
                    className="form-control border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full" 
                    style={{ transition: "all .15s ease" }}/>
                      <ErrorMessage
                          name="password"
                          component="div"
                          className="alert alert-danger text-red-500 text-xs italic"
                        />
                </div>
                <div className="text-center mt-6">
                  <button
                    className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                    type="submit"
                    name="submit"
                    style={{ transition: "all .15s ease" }}
                  >
                    Sign Up
                  </button>
                </div>
               </Form>
             </Formik>
            </div>
            {message && (
              <div className="form-group">
                <div
                  className={successful ? "alert alert-success text-center mb-3 font-bold text-gray-700" : "alert alert-danger text-center mb-3 font-bold text-red-500"}
                  role="alert"
                >
                  {message}
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-wrap mt-6">
                  <div className="w-full text-center">
                    <p className="text-gray-300">
                      <small>Already have an account?
                        <Link to={'/login'}>Log in!</Link>
                      </small>
                    </p>
                  </div>
                </div>
        </div>
      </div>
      </div>
  );
};

export default Register;
