import React from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LIKE_POST, UNLIKE_POST } from "../../utils/mutations";
import {
  MdOutlineThumbUpOffAlt,
  MdOutlineThumbDown,
  MdTextsms,
} from "react-icons/md";

const PostList = ({ posts, title, showTitle = true }) => {
  const [likePost] = useMutation(LIKE_POST);
  const [unlikePost] = useMutation(UNLIKE_POST);
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  const handleLikeClick = async (postId) => {
    try {
      await likePost({
        variables: { postId },
      });
    } catch (e) {
      console.error(e);
    }
  };

  const handleUnlikeClick = async (postId) => {
    try {
      await unlikePost({
        variables: { postId },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="w-full">
      {showTitle && <h3>{title}</h3>}
      {posts &&
        posts.map((post) => (
          <div key={post._id} className="card m-5 min-w-300 rounded-3xl bg-white">
            <h4 className="card-header m-2 border-slate border-b-2">
              <Link
                to={`/profile/${post.postAuthor}`}
                style={{ fontWeight: 700 }}
                className="text-light text-lg"
              >
                {post.postAuthor}
                <div className="text-sm">{post.createdAt}</div>
              </Link>
            </h4>

            <div className="card-body justify-around mb-5">
              <p className="m-5">{post.postText}</p>

              <div className="m-3 flex justify-around">

                <div className="flex">
                  <Link className="mt-1" to={`/post/${post._id}`}>
                    <MdTextsms /> 
                  </Link>
                    <p className="m-auto">{post.comments.length}</p>
                </div>

                <div className="flex">
                <button className="" onClick={() => handleLikeClick(post._id)}>
                  <MdOutlineThumbUpOffAlt />
                </button>
                  <p className="m-auto">{post.likes.length}</p> 
                </div>

                <div>
                <button
                  className="flex mt-1"
                  onClick={() => handleUnlikeClick(post._id)}
                >
                  <MdOutlineThumbDown />
                </button>
                </div>

              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;
