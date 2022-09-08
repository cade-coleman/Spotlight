import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
// Utils
import { ADD_COMMENT } from "../../utils/mutations";
import Auth from "../../utils/auth";

const AddComment = ({ postId }) => {
    const [commentText, setCommentText] = useState("");
    const [characterCount, setCharacterCount] = useState(0);
    const [addComment, { error }] = useMutation(ADD_COMMENT);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            await addComment({
                variables: { postId, commentText },
            });

            setCommentText("");
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "commentText" && value.length <= 140) {
            setCommentText(value);
            setCharacterCount(value.length);
        }
    }

    return (
        <div>
            {Auth.loggedIn() && (
                <div>
                    
                    <form className="flex-row justify-center justify-space-between-md align-stretch"
                        onSubmit={handleFormSubmit}
                    >
                        <textarea
                            placeholder="Leave a comment..."
                            name="commentText"
                            className="form-input w-full col-12 col-md-9 rounded-md"
                            value={commentText}
                            onChange={handleChange}
                        ></textarea>
                        <p className={`m-0 ${characterCount === 140 || error ? "text-error" : ""}`}>
                        Character Count: {characterCount}/140
                        {error && <span className="ml-2">Something went wrong...</span>}
                    </p>
                        <button className="bg-green-600 rounded-md w-24 text-white" type="submit">
                            Submit
                        </button>
                        <a href="/home" className="text-blue-600 rounded-md w-24 ml-1 font-bold" type="submit">
                            Go back
                        </a>
                    </form>
                </div>
            )}
            {!Auth.loggedIn() && (
                <p>
                    You need to be logged in to leave a comment. Please{" "}
                    <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
                </p>
            )}
        </div>
    );
};

export default AddComment;

