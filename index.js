const express = require('express');
const routes = require('./api/routes');
const { validateEmail, validatePassword, validateUser } = require('./api/auth/validateLogin');

const validateJWT = require('./api/auth/validateJWT');

const app = express();

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.get('/user', validateJWT, routes.getUsers);
app.post('/login', validateEmail, validatePassword, validateUser, routes.login);
