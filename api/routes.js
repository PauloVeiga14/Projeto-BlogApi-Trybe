const getUsers = require('../controllers/getUsers');
const login = require('../controllers/login');
const { validateEmail, validatePassword } = require('./auth/validateLogin');
const { validateDisplayName,
  validateEmailForNewUser,
  validatePassForNewUser } = require('./auth/validateNewUser');
const createUser = require('../controllers/createUser');
const getUserById = require('../controllers/getUserById');
const createCategory = require('../controllers/createCategory');
const getCategories = require('../controllers/getCategories');

module.exports = {
  getUsers,
  login,
  validateEmail,
  validatePassword,
  validateDisplayName,
  validateEmailForNewUser,
  validatePassForNewUser,
  createUser,
  getUserById,
  createCategory,
  getCategories,
};