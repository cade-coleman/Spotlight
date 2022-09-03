import React from "react";
import { FaSearch } from "react-icons/fa";
import './style.css';

function Header() {
  return (
    <div className=" bgBlue">
      <header className="flex justify-between bgBlue">
        <div className="w-20"><img className="logoSize" src={require('./logo2.png')} alt='logo' />
        </div>
        <div className="flex">
          <div className="self-center">
            <FaSearch />
          </div>
          <input
            id="searchBox"
            className="w-20 h-10 m-5 bg-transparent text-white"
            placeholder="Search"
          ></input>
        </div>
      </header>
    </div>
  );
}

export default Header;
