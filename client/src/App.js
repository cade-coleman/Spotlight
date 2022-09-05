import React from "react";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import EditProfile from "./pages/EditProfile";
import Signup from "./pages/Signup";
import Notifications from "./pages/Notifications";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <div className="container"></div>
        <Routes>
            <Route path="/account" element={<Account />} />
            <Route path="/editProfile" element={<EditProfile/>} />
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
