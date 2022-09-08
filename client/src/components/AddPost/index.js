import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_POST } from "../../utils/mutations";
import { QUERY_POSTS, QUERY_LOGGED_IN } from "../../utils/queries";

import Auth from "../../utils/auth";

const AddPost = () => {
    const [postText, setPostText] = useState('');

    const [characterCount, setCharacterCount] = useState(0);

    const [addPost, { error }] = useMutation(ADD_POST, {
        update(cache, { data: { addPost } }) {
            try {
                const { posts } = cache.readQuery({ query: QUERY_POSTS });
                cache.writeQuery({
                    query: QUERY_POSTS,
                    data: { posts: [addPost, ...posts] },
                });
            } catch (e) {
                console.error(e);
            }
            const { loggedIn } = cache.readQuery({ query: QUERY_LOGGED_IN });
            cache.writeQuery({
                query: QUERY_LOGGED_IN,
                data: { loggedIn: { ...loggedIn, posts: [...loggedIn.posts, addPost] } },
            });
        },
    });

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await addPost({
                variables: {
                    postText,
                    postAuthor: Auth.getProfile().data.username,
                },
            });
            setPostText("");
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === "postText" && value.length <= 140) {
            setPostText(value);
            setCharacterCount(value.length);
        }
    };

    return (
        <div>
            {Auth.loggedIn() ? (
                <>
                    <p className="font-bold">Make a post</p>
                    <form
                        className="flex-row justify-center justify-space-between-md align-stretch"
                        onSubmit={handleFormSubmit}
                    >
                        <div className="col-12 col-md-9">
                            <textarea 
                                name="postText"
                                placeholder="Here's a new post..."
                                value={postText}
                                className="form-input w-[290px] h-[200px] rounded-md"
                                style={{ lineHeight: "1.5", resize: "vertical" }}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                    <p className="-mt-7" >
                        Character Count: {characterCount}/140
                    </p>

                        <div className="col-12 col-md-3">
                            <button className=" bg-blue-700 rounded-md w-2/5 h-[40px] hover:bg-blue-500 text-white "type="submit">
                                Submit
                            </button>
                        </div>
                        {error && (
                            <div>{error.message}</div>
                        )}
                    </form>
                </>
            ) : (
                <p>
                    You need to be logged in to share your thoughts. Please{" "}
                    <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
                </p>
            )}
        </div>
    );
};

export default AddPost;
