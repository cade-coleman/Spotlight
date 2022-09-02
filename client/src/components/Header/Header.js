import React from "react";
import { FaSearch } from "react-icons/fa";


function Header() {
  return (
    <div>
      <header className="flex justify-between bg-blue-500">
        <div className="w-20 "><img src={require('./logo2.png')} alt='logo' />
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
