const { AuthenticationError } = require("apollo-server-express");
const { User, UserPost } = require("../models");
const { signToken } = require("../utils/auth");





const resolvers = {
  Query: {
    // Query multiple users
    users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("posts")
        .populate("following");
    },
    // Query user
    user: async (parent, { username }, context) => {
      if (context.user) {
        const foundUser = await User.findOne({ username: username }).populate("posts");

        return foundUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    // Query posts
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return UserPost.find(params).sort({ createdAt: -1 });
    },
    // Query single post
    post: async (parent, { postId }) => {
      return UserPost.findOne({ _id: postId });
    },

    loggedIn: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('posts');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    //  Add a user Mutation
    addUser: async (parent, { username, firstName, lastName, email, password }) => {
      const user = await User.create({ username, firstName, lastName, email, password });
      const token = signToken(user);
      return { token, user };
    },

    // Login mutation, get asigned a token
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },

    // Add post Mutation
    addPost: async (parent, { postText }, context) => {
      if (context.user) {
        const Post = await UserPost.create({
          postText,
          postAuthor: context.user.username,
        });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { posts: Post._id } }
        );
        return Post;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // Add comment mutation
    addComment: async (parent, { postId, commentText }, context) => {
      if (context.user) {
        const updatedPost = await UserPost.findOneAndUpdate(
          { _id: postId },
          {
            $push: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          { new: true, runValidators: true }
        );
        return updatedPost;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // Remove post mutation
    removePost: async (parent, { postId }, context) => {
      if (context.user) {
        const Post = await UserPost.findOneAndDelete({ _id: postId });
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { posts: Post._id } }
        );
        return Post;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // remove comment mutation
    removeComment: async (parent, { postId, commentId }, context) => {
      if (context.user) {
        const updatedPost = await UserPost.findOneAndUpdate(
          { _id: postId },
          { $pull: { comments: { _id: commentId } } },
          { new: true }
        );
        return updatedPost;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    editUser: async (parent, {firstName, lastName, title, bio }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $set: {firstName, lastName, title, bio } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // Follower Mutation, follow another user
    followUser: async (parent, { username }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { following: username } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // unfollow a user
    unfollowUser: async (parent, { username }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { following: username } },
          { new: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    // Like post
    likePost: async (parent, { postId }, context) => {
      if (context.user) {
        const updatedPost = await UserPost.findOneAndUpdate(
          { _id: postId },
          { $addToSet: { likes: context.user._id} },
          { new: true }
        );
        return updatedPost;
      }
      throw new AuthenticationError("You need to be logged in!");
    }, 

    // remove like from post
    unlikePost: async (parent, { postId }, context) => {
      if (context.user) {
        const updatedPost = await UserPost.findOneAndUpdate(
          { _id: postId },
          { $pull: { likes: context.user._id } },
          { new: true }
        );
        return updatedPost;
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;


