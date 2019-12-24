const Movie = require('../models/movieSchema');

module.exports = {
  async index(req, res) {
    const movies = await Movie.find({ watched: false }).sort({ rank: 1 });

    return res.json(movies);
  },
};
