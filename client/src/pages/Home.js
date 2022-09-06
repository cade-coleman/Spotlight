import React from "react";
import { useQuery } from "@apollo/client";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import PostList from "../components/PostList";

import { QUERY_POSTS } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTS);
  const posts = data?.posts || [];

  return (
    <div>
      <div className=" w-full h-screen">
        <div className="fixed w-full">
          <Header />
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="flex flex-col items-center justify-center">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList posts={posts} title="" />
          )}
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="bg-gray-300 fixed bottom-0 min-w-full">
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default Home;
