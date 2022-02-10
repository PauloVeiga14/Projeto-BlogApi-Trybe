const { BlogPost } = require('../models');

module.exports = async (_req, res) => {
  const posts = await BlogPost.findAll();
  res.status(200).json(posts);
};