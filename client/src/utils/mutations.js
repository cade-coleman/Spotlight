import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $firstName: String!, $lastName: String!) {
    addUser(username: $username, firstName: $firstName, lastName: $lastName, email: $email, password: $password ) {
      user {
        username
        email
        firstName
        lastName
        password
      }
    }
  }
`;

export const ADD_POST = gql`
    mutation addPost($postText: String!) {
        addPost(postText: $postText) {
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

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $PostId, commentText: $commentText) {
      _id
      postText
      postAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
