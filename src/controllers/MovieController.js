const Movie = require('../models/movieSchema');

module.exports = {
  async store(req, res) {
    const { name, nota } = req.body;

    const movieExists = await Movie.exists({ name });

    if (movieExists) {
      console.log('Filme Existe');

      return res.json(movieExists);
    }

    const movie = await Movie.create({
      name,
      nota,
    });

    return res.json(movie);
  },

  async index(req, res) {
    const movies = await Movie.find({});

    return res.json(movies);
  },

  async delete(req, res) {
    const { name } = req.body;

    const movieDeleted = await Movie.deleteOne({ name });

    return res.json(movieDeleted);
  },
};
