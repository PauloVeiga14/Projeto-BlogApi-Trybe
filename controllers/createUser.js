require('dotenv').config();
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.JWT_SECRET;

module.exports = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const user = await User.findOne({ where: { email } });

    if (user !== null) {
      return res.status(409).json({ message: 'User already registered' });
    }

  const newUser = await User.create({ displayName, email, password, image });
  
  const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
  };

  const token = jwt.sign({ data: newUser }, secret, jwtConfig);

  res.status(201).json({ token });
  } catch (e) {
    console.log(e.message);
    res.status(401).json({ message: 'Algo deu errado' });
  }
};