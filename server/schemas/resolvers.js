const { AuthenticationError } = require('apollo-server-express');
const { User, UserPost } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        users: async () => {
            return User.find()
                .populate('posts')
        },
        user: async (parent, { username }) => {
            return User.findOne({ username }).populate('posts');
        },
        posts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return UserPost.find(params).sort({ createdAt: -1 });
        },
        post: async (parent, { _id }) => {
            return UserPost.findOne({ _id });
        },
        signedIn: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('posts')
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
        },
        addPost: async (parent, { postText }, context) => {
            if (context.user) {
                const Post = await UserPost.create({
                    postText,
                    postAuthor: context.user.username
                });
                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $push: { posts: Post._id } }
                );
                return Post;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        addComment: async (parent, { postId, commentText }, context) => {
            if (context.user) {
                const updatedPost = await UserPost.findOneAndUpdate(
                    { _id: postId },
                    { $push: { comments: { commentText, commentAuthor: context.user.username } } },
                    { new: true, runValidators: true }
                );
                return updatedPost;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },
};


module.exports = resolvers;