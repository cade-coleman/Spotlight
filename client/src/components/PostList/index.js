import React from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { LIKE_POST } from "../../utils/mutations";

const PostList = ({
    posts,
    title,
    showTitle = true,
}) => {
    if (!posts.length) {
        return <h3>No Posts Yet</h3>;
    }

    const [likePost] = useMutation(LIKE_POST);

    return (
        <div>
            {showTitle && <h3>{title}</h3>}
            {posts &&
                posts.map((post) => (
                    <div key={post._id} className="card m-5 bg-white">
                        <h4 className="card-header m-2 border-slate border-b-2">
                            <Link
                                to={`/profile/${post.postAuthor}`}
                                style={{ fontWeight: 700 }}
                                className="text-light text-lg"
                            >
                            {post.postAuthor} 
                            <div className="text-sm">
                            {post.createdAt}
                            </div>
                            </Link>
                        </h4>
    
                        <div className="card-body mb-5">
                            <Link to={`/post/${post._id}`}>
                                <p className="m-5">{post.postText}</p>
                            </Link>
                            <p className="m-3 ">
                                    Comments: {post.comments.length}
                                    <button>Likes: {post.likes.length}</button>
                            </p>
                            <button>Likes: {post.likes.length}</button>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default PostList;
