const Movie = require('../models/movieSchema');

module.exports = {
  async index(req, res) {
    const movies = await Movie.find({ watched: true }).sort({ rank: 1 });

    return res.json(movies);
  },
};
