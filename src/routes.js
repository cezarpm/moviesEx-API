const express = require('express');
const movieController = require('../src/controllers/MovieController');

const routes = express.Router();

routes.post('/movies', movieController.store);
routes.get('/movies', movieController.index);
routes.delete('/movies', movieController.delete);


module.exports = routes;
