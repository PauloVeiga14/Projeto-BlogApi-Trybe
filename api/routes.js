const getUsers = require('../controllers/getUsers');
const login = require('../controllers/login');
const { validateEmail, validatePassword } = require('./auth/validateLogin');
const createUser = require('../controllers/createUser');

module.exports = {
  getUsers,
  login,
  validateEmail,
  validatePassword,
  createUser,
};