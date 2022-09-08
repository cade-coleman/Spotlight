import React , {useState} from "react";
import Nav from "../components/Nav/Nav";
import LDmode from "../components/LDmode/LDmode";
import { Link, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import PostList from "../components/PostList";
import { QUERY_USER, QUERY_LOGGED_IN,} from "../utils/queries";
import Auth from "../utils/auth";

const Account = () => {
    const { username: userParam } = useParams();
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_LOGGED_IN, {
        variables: { username: userParam },
    });
    const user = data?.user || data?.loggedIn || {};

    // gets the user's posts
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Navigate to="/account"/>
    }

    if (loading) {
        return <div>Loading...</div>;
    }



    if (!user?.username) {
        return (
            <h4>
                You need to be logged in to see this. Use the navigation links above to sign up or log in!
            </h4>
        );
    }
  return (
    
    <div name="backgorund" className="bg-[#EAEBE6] w-full">
      {/* Dark/Light Mode Btn and Edit Profile Link */}
      <div name="top section" className="">
        <div className=" flex justify-between items-center bg-[#35BDF2] text-white ">
          <LDmode />
          <Link className="pr-2 text-bo" to="/account/editProfile">Edit Profile</Link>
        </div>
      </div>
      {/* Profile Pic */}
      <div name="profileCover" className="h-[320px] relative">
        <img
          className="w-[295px] h-[300px] rounded-[50px] object-cover absolute m-auto pt-0 left-0 right-0 top-0 bottom-0"
          src={require("../assets/usericon.png")}
          alt="cover"
        />
      </div>

      <div name="bioDescription" className=" ">
        <div className=" bg-[#DDDED9] border-solid border-transparent rounded-md w-98 ml-16 mr-14">
          <h1 className="text-3xl text-center">{user.username}</h1>
          <p className="text-center">
            {user.firstName} {user.lastName}
          </p>
        </div>

        <div className="bg-[#DDDED9] border-solid border-transparent rounded-md w-98 h-28 ml-16 mr-14 mt-4">
          <h2 className="text-lg flex justify-between ml-1">
            About 
          </h2>
          <form className="">
            {/* ADD TERNARY STATEMENT */}
            <p className="rounded-md w-4/5 bg-white h-18 h-16 ml-3 color-black">
              {user.bio}
            </p>
          </form>
        </div>

        <div>
          <div className=" bg-[#DDDED9] border-solid border-transparent rounded-md w-98 h-28 ml-16 mr-14 mt-4">
            <h2 className="text-lg">Title</h2>
            <p className="rounded-md w-4/5 bg-white h-18 h-16 ml-3 color-black">
              {user.title}
            </p>
          </div>
        </div>

        <div
          name="contact"
          className="bg-[#DDDED9] border-solid border-transparent rounded-md w-98 h-28 ml-16 mr-14 mt-4"
        >
          <div>
            <h2 className="ml-1 text-lg">Contact Me</h2>
            <form className="">
            {/* ADD TERNARY STATEMENT */}
            <p className="rounded-md w-4/5 bg-white h-18 h-16 ml-3 color-black">
              {user.email}
            </p>
          </form>
          </div>
        </div>

        <div className=" bg-[#35BDF2] mt-24">
          <a
            href="localhost:3000/Login"
            className="flex justify-end pr-2 text-white"
          >
            Log Out
          </a>
        </div>
        <div className="bg-gray-300 fixed bottom-0 min-w-full">
          <Nav />
        </div>
      </div>

      
    </div>

    
  );
};

export default Account;
