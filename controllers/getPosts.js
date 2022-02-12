const { BlogPost } = require('../models');
const { User } = require('../models');
const { Category } = require('../models');

module.exports = async (req, res) => {
  try {  
    const posts = await BlogPost.findAll(
      { 
        include: [
          { model: User, as: 'user' }, 
          { model: Category, as: 'categories', through: { attributes: [] } },
        ],
      },
    );
  
    return res.status(200).json(posts);
 } catch (e) {
    console.log(e.message);
    res.status(401).json({ message: 'Algo deu errado' });
  }
};