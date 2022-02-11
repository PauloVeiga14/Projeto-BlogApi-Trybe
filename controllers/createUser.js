const { User } = require('../models');

module.exports = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const user = await User.findOne({ where: { email } });

  if (user.email === email) {
    return res.status(409).json({ message: 'User already registered' });
  }

  const newUser = await User.create({ displayName, email, password, image });

  return res.status(200).json(newUser);
  } catch (e) {
    console.log(e.message);
    res.status(401).json({ message: 'Algo deu errado' });
  }
};