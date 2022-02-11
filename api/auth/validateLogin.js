const { User } = require('../../models/User');

const validateEmail = async (req, res, next) => {
  const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'email is required' });
    }
    if (email.length === 0) {
      return res.status(400).json({ message: 'email is not allowed to be empty' });
    }
      
  next();
};

const validatePassword = async (req, res, next) => {
  const { password } = req.body;

    if (!password) {
      return res.status(400).json({ message: 'password is required' });
    }
    if (password.length === 0) {
      return res.status(400).json({ message: 'password is not allowed to be empty' });
    }
      
  next();
};

const validateUser = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });
  
  if (!user || user.password !== password) {
  return res.status(400).json({ message: 'invalid fields' });
  }

  next();
};

module.exports = {
  validateEmail,
  validatePassword,
  validateUser,
};