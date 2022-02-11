const { Category } = require('../models');

module.exports = async (_req, res) => {
  try {
    const categories = await Category.findAll();

    return res.status(200).json(categories);
  } catch (e) {
    console.log(e.message);
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};