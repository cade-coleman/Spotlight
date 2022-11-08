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
 
  return (
    <div className=" bg-[#2A558C] w-full h-screen">
      {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
      {/*LOGO */}
      <div
        // style={{ backgroundImage: `url(${Logo})` }}
        className="content-div flex justify-center items-center"
      ></div>

      {/*LOGIN BOX */}
      <div name="login box">
        {data ? (
          <p className="text-white text-center ">
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
                className="bg-green-500 rounded-md w- text-white hover:bg-green-700"
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
            // Original was local host 3000
              href="http://localhost:3001/Signup"
              className="text-white"
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
