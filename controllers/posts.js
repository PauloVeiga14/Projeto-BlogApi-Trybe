const { BlogPosts } = require('../models');

module.exports = async (_req, res) => {
  const posts = await BlogPosts.findAll();
  res.status(200).json(posts);
};