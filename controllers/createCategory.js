const { Category } = require('../models');

module.exports = async (req, res) => {
  try {
    const { name } = req.body;

    if (name === undefined) {
      return res.status(400).json({ message: '"name" is required' }); 
    }

    const newCategory = await Category.create({ name });
  
    res.status(201).json(newCategory);
  } catch (e) {
    console.log(e.message);
    res.status(401).json({ message: 'Algo deu errado' });
  }
};