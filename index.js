const express = require('express');
const routes = require('./api/routes');

const validateJWT = require('./api/auth/validateJWT');

const app = express();

app.listen(3000, () => console.log('ouvindo porta 3000!'));

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.get('/user', validateJWT, routes.getUsers);
