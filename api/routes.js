const getUsers = require('../controllers/getUsers');
const login = require('../controllers/login');
const { validateEmail, validatePassword } = require('./auth/validateLogin');

module.exports = {
  getUsers,
  login,
  validateEmail,
  validatePassword,
};