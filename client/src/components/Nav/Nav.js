import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import "./style.css";

function Nav() {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  
  const [isActive5, setIsActive5] = useState(false);

  const handleClick1 = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
    
    setIsActive5(false);
  };
  const handleClick2 = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive2(true);
    setIsActive1(false);
    setIsActive3(false);
    
    setIsActive5(false);
  };
  const handleClick3 = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive3(true);
    setIsActive1(false);
    setIsActive2(false);
    
    setIsActive5(false);
  };
  const handleClick4 = (event) => {
    // 👇️ toggle isActive state on click
   
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive5(false);
  };
  const handleClick5 = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive5(true);
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
    
  };

  return (
    <div className="bg-[#F2F2F2] border-solid border-2">
      <menu className="menu flex h-20 justify-around">
        <Link
          to="/home"
          onClick={handleClick1}
          className={
            isActive1 ? "homeButtonActive navButton" : "homeButton navButton"
          }
        ></Link>

        <Link
          to="/notifications"
          onClick={handleClick2}
          className={isActive2 ? "newNotActive navButton" : "newNot navButton"}
        ></Link>

        <Link
          to="/addPost"
          onClick={handleClick3}
          className={
            isActive3 ? "newPostActive navButton" : "newPost navButton"
          }
        ></Link>

        

        <Link
          to="/account"
          onClick={handleClick5}
          className={
            isActive5 ? "profInfoActive navButton" : "profInfo navButton"
          }
        ></Link>

        <div className="menu__border"></div>
      </menu>
    </div>
  );
}

export default Nav;
