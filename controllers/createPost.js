const { BlogPost } = require('../models');
const { Category } = require('../models');

module.exports = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;

    const arrayOfCategories = await Category.findAll();

    const findCategories = categoryIds.find((category, index) => 
      category === arrayOfCategories[index].dataValues.id);

    if (findCategories === undefined) {
      return res.status(400).json({ message: '"categoryIds" not found' });
    }

    const id = 1;

    const newPost = await BlogPost.create({ title, content, userId: id });

    return res.status(201).json({ id: newPost.id, title, content, userId: id });
  } catch (e) {
    console.log(e.message);
    res.status(401).json({ message: 'Algo deu errado' });
  }
};