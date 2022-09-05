import React from "react";
import { FaSearch } from "react-icons/fa";


function Nav() {
  return (
    <div>
      <header className="flex justify-between bg-blue-500">

    {/* Austins code will replace this input */}
          <input
            id="searchBox"
            className="w-20 h-10 m-5 bg-transparent text-white"
            placeholder="Search"
          ></input>
      </header>
    </div>
  );
}

export default Nav;