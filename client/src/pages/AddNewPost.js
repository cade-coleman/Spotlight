import React from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import AddPost from '../components/AddPost/index'



const AddNewPost = () => {
  

  return (
    <div>
      <Header />
      <div className=" bg-gray-300 w-full h-screen">
        <div className="flex flex-col items-center justify-center">
          <AddPost />
       </div>
      </div>
      <Nav />
    </div>
  );
};

export default AddNewPost;