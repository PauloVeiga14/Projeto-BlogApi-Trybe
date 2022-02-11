const getUsers = require('../controllers/getUsers');
const login = require('../controllers/login');
const { validateEmail, validatePassword } = require('./auth/validateLogin');
const { validateDisplayName,
  validateEmailForNewUser,
  validatePassForNewUser } = require('./auth/validateNewUser');
const createUser = require('../controllers/createUser');
const getUserById = require('../controllers/getUserById');

module.exports = {
  getUsers,
  login,
  validateEmail,
  validatePassword,
  validateDisplayName,
  validateEmailForNewUser,
  validatePassForNewUser,
  getUserById,
  createUser,
};