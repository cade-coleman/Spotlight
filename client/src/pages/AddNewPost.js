import React from "react";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import AddPost from '../components/AddPost/index'



const AddNewPost = () => {
  

  return (
    <div>
      <div className="w-full h-screen">
      <Header />
        <div className="h-2/3 flex flex-col items-center justify-center">
          <AddPost />
       </div>
       <div className="bg-gray-300 fixed bottom-0 min-w-full">
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default AddNewPost;