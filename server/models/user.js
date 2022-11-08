const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");


// Our user model contains the login and signup features that are going to be used on the first page


const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: false,
    trim: true,
  },
  lastName: {
    type: String,
    required: false,
    trim: true,
  },
  title: {
    type: String,
    required: false,
    trim: true,
  },
  bio: {
    type: String,
    required: false,
    trim: true,
    minlength: 1,
    maxlength: 280,
  },
  contact: {
    type: String,
    required: false,
    trim: true,
    minlength: 1,
    maxlength: 140,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "UserPost",
    },
  ],
  following: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
