import React from "react";
import { useQuery } from "@apollo/client";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import AddPost from '../components/AddPost/index'


import { QUERY_POSTS } from "../utils/queries";


const AddNewPost = () => {
  

  return (
    <div>
      <Header />
      <div className=" bg-gray-300 w-full h-screen">
        <div className="flex flex-col items-center justify-center">
          
       </div>
      </div>
      <Nav />
    </div>
  );
};

export default AddNewPost;