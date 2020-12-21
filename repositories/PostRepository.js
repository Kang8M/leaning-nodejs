const Post = require('../models/Post');

class PostRepository {

  constructor(model) {
    this.model = model;
  }

  create(title, author, body, hidden) {
    const post = new this.model({
      title: title,
      author: author,
      body: body,
      hidden: hidden
    });
    
    return post.save();
  }

  findAll() {
    return this.model.find();
  }

  findOne(id) {
    return this.model.findById(id);
  }

  updateById(id, title, author, body, hidden) {
    const query = { _id: id };
    const setData = {
      title: title,
      author: author,
      body: body,
      hidden: hidden
    }
    return this.model.findOneAndUpdate(query, { $set: setData });
  }

  deleteById(id) {
    const query = { _id: id };
    return this.model.findOneAndDelete(query);
  }
}

module.exports = new PostRepository(Post);