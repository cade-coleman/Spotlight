import React from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";

const Notifications = () => {
  return (
    <div>
      <div className="w-full h-screen bg-gray-200">
        <div name="login box">
          <Header/>
        </div>
        <div name="notification section">
          <div className="text-lg ml-2 font-bold">
            <h1>Notifications</h1>

            <div className="bg-white h-[600px] w-full rounded-md">
              <p className="ml-auto">New</p>

            </div>
          </div>
        </div>
        <div className="bg-gray-300 fixed bottom-0 min-w-full">
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
