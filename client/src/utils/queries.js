import { gql } from "@apollo/client";

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            posts {
                _id
                postText
                postAuthor
                createdAt
                comments {
                    _id
                    commentText
                    commentAuthor
                    createdAt
                }
            }
        }
    }
`;

export const QUERY_POSTS = gql`
    query posts($username: String) {
        posts(username: $username) {
            _id
            postText
            postAuthor
            createdAt
            comments {
                _id
                commentText
                commentAuthor
                createdAt
            }
        }
    }
`;

export const QUERY_POST = gql`
    query post($id: ID!) {
        post(_id: $id) {
            _id
            postText
            postAuthor
            createdAt
            comments {
                _id
                commentText
                commentAuthor
                createdAt
            }
        }
    }
`;

export const QUERY_LOGGED_IN = gql`
    query loggedIn {
        loggedIn {
            _id
            username
            email
            posts {
                _id
                postText
                postAuthor
                createdAt
                comments {
                    _id
                    commentText
                    commentAuthor
                    createdAt
                }
            }
        }
    }
`;
