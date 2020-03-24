const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
  return response.json({
      message: 'Hello World!'
  });
});

routes.post('/users', (request, response) => {
  const body = request.body;

  console.log(body);
  
  return response.json({
      message: 'Semana OminiStack 11.0!',
      aluno: 'Márcio Dias'
  });
});

module.exports = routes;