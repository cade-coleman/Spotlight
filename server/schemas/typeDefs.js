const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        firstName: String
        lastName: String
        title: String
        bio: String
        email: String
        password: String
        posts: [Post]!
        following: [User]!
    }

    type Post {
        _id: ID
        postText: String
        postAuthor: String
        createdAt: String
        comments: [Comment]!
        likes: [User]!
    }

    type Comment {
        _id: ID
        commentText: String
        commentAuthor: String
        createdAt: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user(username: String!): User
        posts(username: String): [Post]
        post(postId: ID!): Post
        loggedIn: User
    }

    type Mutation {
        addUser(username: String!, firstName: String! , lastName: String! , email: String!, password: String!): Auth
        editUser(username: String, firstName: String , lastName: String , title: String, bio: String): User
        login(email: String!, password: String!): Auth
        addPost(postText: String!): Post
        addComment(postId: ID!, commentText: String!): Post
        removePost(postId: ID!): Post
        removeComment(postId: ID!, commentId: ID!): Post
        followUser(userId: ID!): User
        unfollowUser(userId: ID!): User
        likePost(postId: ID!): Post
        unlikePost(postId: ID!): Post
    }
`;

module.exports = typeDefs;
