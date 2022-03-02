import React, { useState } from 'react';

import githubSvg from "../../images/github.png";
import googlePng from "../../images/google.png";



const LoginForm = () => {
  // const [credentials, setCredentials] = useState({ username: '', password: '' });
  // const [errors, setErrors] = useState({});

  // const handleLoginForm = (evt) => {
  //   evt.preventDefault();

  //   setErrors(errors => ({ ...validateCredentials(credentials) }));
  // };

  // const validateCredentials = (credentials) => {
  //   let errors = {};

  //   if (credentials.username === '') {
  //     errors = Object.assign(errors, {
  //       username: 'This field is required',
  //     });
  //   }

  //   if (credentials.password === '') {
  //     errors = Object.assign(errors, {
  //       password: 'This field is required',
  //     });
  //   }

  //   return errors;
  // }

  // const handleInputChange = (evt) => {
  //   evt.persist()
  //   setCredentials(credentials => ({ ...credentials, [evt.target.name]: evt.target.value }));
  // }

  return (
  //   <form className="flex flex-wrap w-full" onSubmit={handleLoginForm.bind(this)}>
  //     <section className="pl-6 pr-3 w-1/2">
  //       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
  //         Email
  //     </label>
  //       <input
  //         id="username"
  //         className={'border mb-2 py-2 px-3 rounded text-gray-700 w-full focus:bg-primary ' + (errors.hasOwnProperty('username') ? "border-red-500" : '')}
  //         name="username"
  //         type="text"
  //         placeholder="e.g. some.example"
  //         value={credentials.username}
  //         onChange={handleInputChange.bind(this)}
  //       />
  //       {errors.hasOwnProperty('username') &&
  //         <p class="text-red-500 text-xs italic">{errors.username}</p>
  //       }
  //     </section>
  //     <section className="pl-3 pr-6 w-1/2">
  //       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
  //         Password
  //     </label>
  //       <input
  //         id="password"
  //         className={'border mb-2 py-2 px-3 rounded text-gray-700 w-full focus:bg-primary ' + (errors.hasOwnProperty('password') ? "border-red-500" : '')}
  //         name="password"
  //         type="password"
  //         placeholder="* * * * * * * *"
  //         value={credentials.password}
  //         onChange={handleInputChange.bind(this)}
  //       />
  //       {errors.hasOwnProperty('username') &&
  //         <p class="text-red-500 text-xs italic">{errors.username}</p>
  //       }
  //     </section>
  //     <section className="flex justify-end px-6 mt-3 w-full">
  //       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:border-none">
  //         Sign in
  //     </button>
  //     </section>
  //   </form>
  
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-gray-600 text-sm font-bold">
                        Sign in with
                      </h6>
                    </div>
                    <div className="btn-wrapper text-center">
                      <button
                        className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
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
                        className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs"
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
                      <small>Or sign in with credentials</small>
                    </div>
                    <form>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
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
                        <input
                          type="password"
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Password"
                          style={{ transition: "all .15s ease" }}
                        />
                      </div>
                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="customCheckLogin"
                            type="checkbox"
                            className="form-checkbox border-0 rounded text-gray-800 ml-1 w-5 h-5"
                            style={{ transition: "all .15s ease" }}
                          />
                          <span className="ml-2 text-sm font-semibold text-gray-700">
                            Remember me
                          </span>
                        </label>
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          type="button"
                          style={{ transition: "all .15s ease" }}
                        >
                          Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="flex flex-wrap mt-6">
                  <div className="w-1/2">
                    <a
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      className="text-gray-300"
                    >
                      <small>Forgot password?</small>
                    </a>
                  </div>
                  <div className="w-1/2 text-right">
                    <a
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      className="text-gray-300"
                    >
                      <small>Create new account</small>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
  
}

export default LoginForm;