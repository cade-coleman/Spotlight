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
      <Header />
          <Nav />
      <div className=" bg-gray-300 w-full h-screen">
        <div className="flex flex-col items-center justify-center">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PostList posts={posts} title="" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
