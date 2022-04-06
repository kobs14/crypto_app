import React, { useState, useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { clearMessage } from "../services/slices/message";

const PasswordRecov = (props) => {
  const [loading, setLoading] = useState(false);

  const [submited, setSubmited] = useState(false);

  const { message } = useSelector((state) => state.message);

  const navigateTo = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: "",
    email: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required!"),
    email: Yup.string().required("This field is required!"),
  });

  const handlPasswordEmail = () => setSubmited(true);

  const handleCreateNewAccount = () => navigateTo('/signup');

  const handleSignIn = () => navigateTo('/login')

  return (
    <div className="container mx-auto px-4 h-full">
        {submited?
             <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-4/12 px-4">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                        <div className="rounded-t mb-0 px-6 py-6">
                            <div className="text-center mb-3">
                                <h6 className="text-gray-600 text-sm font-bold">
                                  Please Check your  email and follow the link you've recived
                                </h6>
                            </div>
                             <hr className="mt-6 border-b-1 border-gray-400" />
                        </div>
                    </div>
                    <div className="flex flex-wrap mt-6">
                        <div className="w-1/2 text-left">
                          <a
                              href="#pablo"
                              onClick={handleSignIn}
                               className="text-gray-300"
                              >
                              <small>Sign in</small>
                          </a>
                        </div>
                        <div className="w-1/2 text-right">
                          <a
                              href="#pablo"
                              onClick={handleCreateNewAccount}
                               className="text-gray-300"
                              >
                              <small>Create new account</small>
                          </a>
                        </div>
                    </div>
                </div>
            </div> :
        
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-gray-750 text-sm font-bold">
                        Forgote your password?
                      </h6>
                    </div>
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-gray-500 text-center mb-3 font-bold">
                      <small>Please fill your details and click Submit to proceed the process</small>
                    </div>
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={handlPasswordEmail}
                    >
                    <Form>
                    <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-email"
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
                          htmlFor="grid-email"
                        >
                          email
                        </label>
                        <Field 
                          name="email" 
                          type="email" 
                          className="form-control border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          style={{ transition: "all .15s ease" }} 
                          />
                          <ErrorMessage
                            name="email"
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
                          disabled={loading}
                        >
                          {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                          )}
                          <span>Submit</span>
                        </button>
                      </div>
                    </Form>
                 </Formik>
                  </div>
                  {message && (
                      <div className="form-group">
                        <div className="alert alert-danger text-center mb-3 font-bold text-gray-700" role="alert">
                          {message}
                        </div>
                      </div>
                  )}          
                </div>
                <div className="flex flex-wrap mt-6">
                  <div className="w-1/2 text-left">
                    <a
                      href="#pablo"
                      onClick={handleCreateNewAccount}
                      className="text-gray-300"
                    >
                      <small>Create new account</small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
        }
    </div>
  );
};

export default PasswordRecov;
