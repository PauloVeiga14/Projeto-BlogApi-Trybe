const validateTitle = async (req, res, next) => {
  const { title } = req.body;
  
    if (title === undefined) {
      return res.status(400).json({ message: '"title" is required' });
    }

  next();
};

const validateContent = async (req, res, next) => {
  const { content } = req.body;
  
    if (content === undefined) {
      return res.status(400).json({ message: '"content" is required' });
    }

  next();
};

const validateCategoryIds = async (req, res, next) => {
  const { categoryIds } = req.body;
  
    if (categoryIds === undefined) {
      return res.status(400).json({ message: '"categoryIds" is required' });
    }

  next();
};

module.exports = {
  validateTitle,
  validateContent,
  validateCategoryIds,
};