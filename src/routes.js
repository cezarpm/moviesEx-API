const express = require('express');
const movieController = require('../src/controllers/MovieController');
const WatchedmovieController = require('../src/controllers/WatchedMoviesController');
const NoWatchedmovieController = require('../src/controllers/NoWatchedMoviesController');

const routes = express.Router();

routes.post('/movies', movieController.store);
routes.get('/movies', movieController.index);
routes.delete('/movies', movieController.delete);
routes.put('/movies', movieController.update);

routes.get('/movies/notwatched', NoWatchedmovieController.index);
routes.get('/movies/watched', WatchedmovieController.index);

module.exports = routes;
