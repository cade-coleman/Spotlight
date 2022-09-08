import React from "react";
import { FaSearch } from "react-icons/fa";
import "./style.css";

function Header() {
  return (
    <div className=" ">
      <header className="flex justify-between bg-[#335AA6]">
        <div className="w-20 ">
          <img src={require("./logo2.png")} alt="logo" />
        </div>
        <div className="flex flex-row  text-white">
          <div className="self-center mb-4">
            <FaSearch />
          </div>

          <div className="w-30 h-10 m-5">
            <input
              className=" border-solid border-transparent rounded-md text-black pr-5 py-2"
              type="text"
              class="input"
              placeholder="Search.."
            ></input>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
