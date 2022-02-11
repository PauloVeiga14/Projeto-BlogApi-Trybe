require('dotenv').config();
const jwt = require('jsonwebtoken');
// const Joi = require('joi');
const { User } = require('../models');

const secret = process.env.JWT_SECRET;

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const jwtConfig = {
      expiresIn: '7d',
      algorithm: 'HS256',
    };

    const token = jwt.sign({ data: user }, secret, jwtConfig);

    res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Erro interno', error: err.message });
  }
};