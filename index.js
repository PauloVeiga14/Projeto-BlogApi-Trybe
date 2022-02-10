const express = require('express');
const routes = require('./api/routes');

const app = express();

app.listen(3000, () => console.log('ouvindo porta 3000!'));

const apiRoutes = express.Router();

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

apiRoutes.get('/teste', routes.getPosts);
