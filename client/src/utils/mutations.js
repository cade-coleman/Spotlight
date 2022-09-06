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
  mutation addComment($postId: ID!, $commentText: String!) {
    addComment(postId: $postId, commentText: $commentText) {
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

export const REMOVE_POST = gql`
  mutation removePost($postId: ID!) {
    removePost(postId: $postId) {
      _id
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment($postId: ID!, $commentId: ID!) {
    removeComment(postId: $postId, commentId: $commentId) {
      _id
      comments {
        _id
      }
    }
  }
`;

export const EDIT_USER = gql`
  mutation editUser($username: String, $firstName: String, $lastName: String, $title: String, $bio: String) {
    editUser(username: $username, firstName: $firstName, lastName: $lastName, title: $title, bio: $bio) {
      _id
      username
      firstName
      lastName
      title
      bio
    }
  }
`;

export const FOLLOW_USER = gql`
  mutation followUser($userId: ID!) {
    followUser(userId: $userId) {
      _id
      username
      following {
        _id
        username
      }
    }
  }
`;

export const UNFOLLOW_USER = gql`
  mutation unfollowUser($userId: ID!) {
    unfollowUser(userId: $userId) {
      _id
      username
      following {
        _id
        username
      }
    }
  }
`;

export const LIKE_POST = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      _id
      likes {
        _id
        username
      }
    }
  }
`;

export const UNLIKE_POST = gql`
  mutation unlikePost($postId: ID!) {
    unlikePost(postId: $postId) {
      _id
      likes {
        _id
        username
      }
    }
  }
`;



