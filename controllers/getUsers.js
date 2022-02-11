const { User } = require('../models');

module.exports = async (_req, res) => {
  try {
    const users = await User.findAll({ attributes: { exclude: 'password' } });

    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};