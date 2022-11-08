const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

// userPost containts the models for all user interactions on posts, including comments, likes, and other potential features


const postSchema = new Schema({
  postText: {
    type: String,
    required: "You need to leave a post!",
    minlength: 1,
    maxlength: 140,
    trim: true,
  },
  postAuthor: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  comments: [
    {
      commentText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 140,
      },
      commentAuthor: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

// get total count of comments and replies on retrieval
postSchema.virtual("commentCount").get(function () {
  return this.comments.reduce(
    (total, comment) => total + comment.replies.length + 1,
    0
  );
});

const Post = model("UserPost", postSchema);

module.exports = Post;
