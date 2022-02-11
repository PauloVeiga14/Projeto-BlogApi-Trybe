const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./api/routes');

const validateJWT = require('./api/auth/validateJWT');

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.get('/user', validateJWT, routes.getUsers);
app.get('/user/:id', validateJWT, routes.getUserById);
app.post('/user',
  routes.validateDisplayName, 
  routes.validateEmailForNewUser, 
  routes.validatePassForNewUser, 
  routes.createUser);
app.post('/login',
  routes.validateEmail, 
  routes.validatePassword, 
  routes.login);
app.post('/categories', validateJWT, routes.createCategory);
app.get('/categories', validateJWT, routes.getCategories);
