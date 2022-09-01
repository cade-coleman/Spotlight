import React from "react";
import { FaSearch } from "react-icons/fa";


function Header() {
  return (
    <div>
      <header className="flex justify-between bg-zinc-200">
        <div className="w-20 "><img src={require('./sl.jpeg')} />
        </div>
        <div className="flex">
          <div className="self-center">
            <FaSearch />
          </div>
          <input
            id="searchBox"
            className="w-20 h-10 m-5 bg-transparent"
            placeholder="Search"
          ></input>
        </div>
      </header>
    </div>
  );
}

export default Header;
