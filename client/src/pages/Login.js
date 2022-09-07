import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
// Route Imports
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
// Auth Import
import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: "",
      password: "",
    });
  };
  // I have no idea what this is doing

  /*IMPORT HOOKS */
  // import {useRef, useState, useEffect} from 'react';
  // const Login = () => {
  //   const userRef = useRef();
  //   const errRef = useRef();

  //   const [user, setUser] = useState('');
  //   const [pwd, setPwd] = useState('');
  //   const [errMsg, setErrMsg] = useState('');

  // useEffect(() =>{
  //   userRef.current.focus();
  // }, []);

  // useEffect(() =>{
  //   setErrMsg();
  // }, [user, pwd]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  // }
  return (
    <div className=" bg-[#10133F] w-full h-screen">
      {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
      {/*LOGO */}
      <div
        style={{ backgroundImage: `url(${Logo})` }}
        className="content-div flex justify-center items-center"
      ></div>

      {/*LOGIN BOX */}
      <div name="login box">
        {data ? (
          <p>
            Success! You may now head{" "}
            <Link to="/dashboard">back to the dashboard.</Link>
          </p>
        ) : (
          <form onSubmit={handleFormSubmit} className="flex flex-col px-12">
            <label htmlFor="usename" className="text-gray-300">
              Email:
            </label>
            <input
              className="rounded-md"
              placeholder="Email@Email.com"
              type="text"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              required
            />
            <label htmlFor="password" className="text-gray-300">
              Password:
            </label>
            <input
              className="rounded-md"
              placeholder="********"
              name="password"
              type="password"
              id="password"
              value={formState.password}
              onChange={handleChange}
              required
            />

            {/*LOGIN BUTTON */}
            <div className="flex flex-col m-5 justify-center">
              <button
                className="bg-green-500 rounded-md text-white hover:bg-green-700"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        )}
        {error && <div>Login failed</div>}
        {/*CREATE AN ACCOUNT BUTTON */}

        <div className="flex flex-col m-5 justify-center justify-items-center">
          <div>
            <p className="text-center text-white">Don't have an account?</p>
          </div>

          <div className="text-center ">
            <a
              href="http://localhost:3000/Signup"
              className="bg-green-500 rounded-md w-1/2 text-white hover:bg-green-700"
            >
              Create an Account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
