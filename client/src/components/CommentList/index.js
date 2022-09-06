import React from "react";

const CommentList = ({ comments }) => {
    if (!comments.length) {
        return <h3>No Comments Yet</h3>;
    }

    return (
        <div>
            <h4 className="p-5 display-inline-block" style={{ borderBottom: "1px dotted black" }}>
                Comments
            </h4>
            <div className="flex-row">
                {comments &&
                    comments.map((comment) => (
                        <div key={comment._id} className="card mb-3">
                            <h4 className="card-header">
                                <span style={{ fontWeight: 700 }} className="text-light">
                                    {comment.commentAuthor} <br/>
                                    commented on {comment.createdAt}
                                </span>
                            </h4>
                            <div className="card-body">
                                <p>{comment.commentText}</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    ); 
};


export default CommentList;