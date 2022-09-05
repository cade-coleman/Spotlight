import React from "react";
import Logo from "../assets/logo.png";

/*IMPORT HOOKS */
import { useRef, useState, useEffect } from "react";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg();
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className=" bg-[#10133F] w-full h-screen">
      <p
        ref={errRef}
        className={errMsg ? "errmsg" : "offscreen"}
        aria-live="assertive"
      >
        {errMsg}
      </p>

      {/*LOGO */}
      <div
        style={{ backgroundImage: `url(${Logo})` }}
        className="content-div flex justify-center items-center"
      ></div>

      {/*LOGIN BOX */}
      <div name="login box">
        <form onSubmit={handleSubmit} className="flex flex-col px-12">
          <label htmlFor="usename" className="text-gray-300">
            Username:
          </label>
          <input
            className="rounded-md"
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
          <label htmlFor="password" className="text-gray-300">
            Password:
          </label>
          <input
            className="rounded-md"
            type="password"
            id="password"
            ref={userRef}
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
        </form>

        {/*LOGIN BUTTON */}
        <div className="flex flex-col justify-center py-4 px-40">
          <a
            href="http://localhost:3000/Home"
            className="bg-green-500 rounded-md text-white  hover:bg-green-700 text-center"
          >
            Log In
          </a>
        </div>

        <div className="flex flex-col justify-center py-4 px-40 text-white">
          <p>Don't have an account?</p>
        </div>

        {/*CREATE AN ACCOUNT BUTTON */}
        <div className="flex flex-col justify-center items-center py-4 px-40">
          <a
            href="http://localhost:3000/Signup"
            className="bg-green-500 rounded-md text-white hover:bg-green-700"
          >
            Create an Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
