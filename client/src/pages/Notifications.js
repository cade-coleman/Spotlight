import React from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";

const Notifications = () => {
  return (
    <div>
      <div className="w-full h-screen">
        <div name="login box"></div>
        <div className="bg-gray-300 fixed bottom-0 min-w-full">
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
