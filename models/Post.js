const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
  title:  String,
  author: String,
  body: String,
  comments: [{
    body: String,
    date: Date
  }],
  date: {
    type: Date,
    default: Date.now
  },
  hidden: Boolean,
  meta: {
    vote: Number,
    favs: Number
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;