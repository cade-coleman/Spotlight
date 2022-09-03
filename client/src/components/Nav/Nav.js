import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import "./style.css";

function Nav() {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);

  const handleClick1 = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(false);
  };
  const handleClick2 = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive2(true);
    setIsActive1(false);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(false);
  };
  const handleClick3 = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive3(true);
    setIsActive1(false);
    setIsActive2(false);
    setIsActive4(false);
    setIsActive5(false);
  };
  const handleClick4 = (event) => {
    // 👇️ toggle isActive state on click
    setIsActive4(true);
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
    setIsActive4(false);
  };

  return (
    <div className="bg-grey">
      <menu className="menu flex h-20 justify-around">
        <button
          onClick={handleClick1}
          className={
            isActive1 ? "homeButtonActive navButton" : "homeButton navButton"
          }
        ></button>

        <button
          onClick={handleClick2}
          className={isActive2 ? "newNotActive navButton" : "newNot navButton"}
        ></button>

        <button
          onClick={handleClick3}
          className={
            isActive3 ? "newPostActive navButton" : "newPost navButton"
          }
        ></button>

        <button
          onClick={handleClick4}
          className={isActive4 ? "dmActive navButton" : "dm navButton"}
        ></button>

        <button
          onClick={handleClick5}
          className={
            isActive5 ? "profInfoActive navButton" : "profInfo navButton"
          }
        ></button>

        <div className="menu__border"></div>
      </menu>
    </div>
  );
}

export default Nav;
