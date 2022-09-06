import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import CommentList from "../components/CommentList";
import AddComment from "../components/AddComment";

import { QUERY_POST } from "../utils/queries";

const SinglePost = () => {
    const { postId } = useParams();

    const { loading, data } = useQuery(QUERY_POST, {
        variables: { postId: postId },
    });
    
    const post = data?.post || {};
    
    if (loading) {
        return <div>Loading...</div>;
    }
    
    return (
        <div>
        <div className="card mb-3">
            <p className="card-header">
            <span style={{ fontWeight: 700 }} className="text-light">
                {post.postAuthor}
            </span>{" "}
            posted on {post.createdAt}
            </p>
            <div className="card-body">
            <p>{post.postText}</p>
            </div>
        </div>
    
        <CommentList comments={post.comments} />
    
        <AddComment postId={post._id} />
        </div>
    );
};

export default SinglePost;