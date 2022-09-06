import React from "react";
import { Link } from "react-router-dom";

const PostList = ({
    posts,
    title,
    showTitle = true,
}) => {
    if (!posts.length) {
        return <h3>No Posts Yet</h3>;
    }

    return (
        <div>
            {showTitle && <h3>{title}</h3>}
            {posts &&
                posts.map((post) => (
                    <div key={post._id} className="card mb-3">
                        <h4 className="card-header">
                            <Link
                                to={`/profile/${post.postAuthor}`}
                                style={{ fontWeight: 700 }}
                                className="text-light"
                            >
                            {post.postAuthor} <br/>
                            posted on {post.createdAt}
                            </Link>
                        </h4>
                        <div className="card-body">
                            <Link to={`/posts/${post._id}`}>
                                <p>{post.postText}</p>
                                <p className="mb-0">
                                    Reactions: {post.reactionCount} || Click to{" "}
                                    {post.reactionCount ? "see" : "start"} the
                                    
                                </p>
                            </Link>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default PostList;
